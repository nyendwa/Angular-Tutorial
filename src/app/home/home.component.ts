import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule,PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productService: ProductsService) { }
  products: Product[] = [];

  totalRecords: number = 0;
  rows: number = 5;

  onProductOutput(product:Product) {
    console.log(product,'Output')
  }
  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
}

  fetchProducts(page: number, perPage: number) {
    this.productService.getProducts('http://localhost:3000/clothes', { page, perPage }).subscribe({
      next: (data: Products) => {
        this.products = data.items;
        this.totalRecords = data.total;
      },
      error: (error) => {
        console.log(error);
      }
      
    });
  }

  editProduct(product: Product, id: number) {
    //In case of error check this line    
    //this.productService.editProduct('http://localhost:3000/clothes/${id}'
    this.productService.editProduct(`http://localhost:3000/clothes/${id}`, product).subscribe({
      
      next: (data) => {
        console.log(data);
      },

      error: (error) => {
        console.log(error);
      }
    });
  }

 deleteProduct(product: Product, id:number) {
   this.productService.deleteProduct(`http://localhost:3000/clothes/${id}`).subscribe({
     next: (data) => {
       console.log(data);
     },

     error: (error) => {
       console.log(error);
     }
   });
   
  
  } 
  
  addProduct(product: Product) {
    console.log(product, 'add');
}
  
  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }



} 



















