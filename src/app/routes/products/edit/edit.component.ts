import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ProductStatus } from 'src/app/services/dto/product';
import { GlobalToastService } from 'src/app/services/global-toast.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
    productForm = new FormGroup({
        id: new FormControl(0),
        name: new FormControl('', Validators.required),
        status: new FormControl<ProductStatus>(ProductStatus.OK),
    });

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private globalToastService: GlobalToastService,
        private router: Router
    ) {}

    async ngOnInit() {
        const result = await this.apiService.getProductById(
            this.route.snapshot.params['id']
        );

        if (result.ok) {
            this.productForm.patchValue({
                id: result.unwrap().id,
                name: result.unwrap().name,
                status: result.unwrap().status,
            });
        }
    }

    async edit() {
        if (this.productForm.valid) {
            const result = await this.apiService.updateProductById({
                id: this.productForm.value.id!,
                name: this.productForm.value.name!,
                status: this.productForm.value.status!
                    ? ProductStatus.DEFECTIVE
                    : ProductStatus.OK,
            });

            if (result.ok) {
                this.globalToastService.show({
                    header: 'Producto editado',
                    body: 'Producto editado correctamente.',
                });

                this.router.navigate(['/products/list']);
            } else {
                this.globalToastService.show({
                    header: 'Error',
                    body: 'Hubo un error al editar el producto.',
                });
            }
        }
    }
}
