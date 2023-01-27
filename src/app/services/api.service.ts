import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Err, Ok, Result } from 'ts-results';

import { CreateProductDto, UpdateProductDto } from './dto/product';

const API_URL = 'http://localhost:5095/api';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private httpClient: HttpClient) {}

    public createProduct(productDto: CreateProductDto) {
        return this.observableToResult(
            this.httpClient.post(`${API_URL}/products`, productDto)
        );
    }

    public getAllProducts() {
        return this.observableToResult(
            this.httpClient.get(`${API_URL}/products`)
        );
    }

    public getProductById(id: number) {
        return this.observableToResult(
            this.httpClient.get(`${API_URL}/products/${id}`)
        );
    }

    public updateProductById(productDto: UpdateProductDto) {
        return this.observableToResult(
            this.httpClient.patch(
                `${API_URL}/products/${productDto.id}`,
                productDto
            )
        );
    }

    public removeProductById(id: number) {
        return this.observableToResult(
            this.httpClient.delete(`${API_URL}/products/${id}`)
        );
    }

    private async observableToResult<T>(
        observable: Observable<T>
    ): Promise<Result<any, Error>> {
        try {
            const result = await lastValueFrom(observable);
            return Ok(result);
        } catch (error: any) {
            return Err(error);
        }
    }
}
