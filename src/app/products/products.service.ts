import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  PRODUCTS = [
    new Product(1, 'Acer Aspire 5 Slim Laptop',
      '15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, 4GB DDR4, 128GB SSD', 364),
    new Product(2, 'Dell New XPS 13 9300',
      '13.4-inch FHD Touchscreen Laptop, Intel Core i7 10th Gen, 16GB RAM, 512GB SSD', 1500),
    new Product(3, 'HP Pavilion x360 14 Convertible 2-in-1 Laptop',
      '14” Full HD Touchscreen Display, Intel Core i5, 8 GB DDR4 RAM, 512 GB SSD', 797),
    new Product(4, 'Latest Gen 8 Lenovo ThinkPad X1 Carbon',
      '14” FHD Ultrabook with 10th Gen Intel i7 up to 4.90 GHz, 1 TB PCIe SSD, 16GB RAM', 1500)
  ];

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.PRODUCTS);
  }
}
