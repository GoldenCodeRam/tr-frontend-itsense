export enum ProductStatus {
    OK = 0,
    DEFECTIVE = 1,
}

export type CreateProductDto = {
    name: String;
};

export type UpdateProductDto = {
    id: number;
    name: String;
    status: ProductStatus;
};

// This is because at the moment, the update DTO and the base product DTO are
// the same.
export type ProductDto = UpdateProductDto;
