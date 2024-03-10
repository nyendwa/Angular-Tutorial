import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        context?: HttpContext;
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
        transferCache?: {
            includeHeaders?: string[];
        } | boolean;
}
export interface Products{
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;

    /*id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
    category: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;*/
        
}
export interface Product{
    price: string;
    name: string;
    image: string;
    rating: number;

}
export interface PaginationParams{
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>
    page: number;
    perPage: number;
    }