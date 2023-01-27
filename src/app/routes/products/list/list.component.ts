import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { ProductDto } from 'src/app/services/dto/product';
import { GlobalToastService } from 'src/app/services/global-toast.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
    public products: ProductDto[] = [];

    constructor(
        private apiService: ApiService,
        private globalToastService: GlobalToastService,
        private modalService: NgbModal
    ) {}

    async ngOnInit() {
        await this.load();
    }

    public remove(content: any, productDto: ProductDto) {
        this.modalService.open(content).result.then(
            async (_) => {
                const result = await this.apiService.removeProductById(
                    productDto.id
                );

                if (result.ok) {
                    this.globalToastService.show({
                        header: 'Producto eliminado',
                        body: 'Producto eliminado correctamente.',
                    });

                    this.load();
                } else {
                    this.globalToastService.show({
                        header: 'Error',
                        body: 'Hubo un error al eliminar el producto.',
                    });
                }
            },
            // Dismiss, as we don't want to do anything with this.
            (_) => {}
        );
    }

    private async load() {
        const result = await this.apiService.getAllProducts();

        if (result.ok) {
            this.products = result.unwrap();
        }
    }
}
