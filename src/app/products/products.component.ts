import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  query: string;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
