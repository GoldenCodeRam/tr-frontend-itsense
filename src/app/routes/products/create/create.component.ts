import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { GlobalToastService } from 'src/app/services/global-toast.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
    productForm = new FormGroup({
        name: new FormControl('', Validators.required),
    });

    constructor(
        private apiService: ApiService,
        private globalToastService: GlobalToastService,
        private router: Router
    ) {}

    public async create() {
        if (this.productForm.valid) {
            const result = await this.apiService.createProduct({
                name: this.productForm.value.name!,
            });

            if (result.ok) {
                this.globalToastService.show({
                    header: 'Producto creado',
                    body: 'Producto creado correctamente.',
                });

                this.router.navigate(['/products/list']);
            } else {
                this.globalToastService.show({
                    header: 'Error',
                    body: 'Hubo un error al crear el producto.',
                });
            }
        }
    }
}
