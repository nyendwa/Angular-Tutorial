import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private productService: ProductsService) { }
  products: Product[] = [];
  
  ngOnInit() {
    this.productService.getProducts('http://localhost:3000/clothes', { page: 0, perPage: 5 }).subscribe((products: Products) => {
      //click cntrl+left click hover on products to see items we have been rendering so far
      //console.log(products.items);
      //to access products from this 'products: Product[] = [];' use "this" key word
      this.products = products.items;
   }) 
  }
}
