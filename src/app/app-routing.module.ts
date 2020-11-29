import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UIRouter, UIRouterModule } from '@uirouter/angular';
import { StickyStatesPlugin } from "@uirouter/sticky-states";



const routes = [
  {
    name: 'home',
    url: '/home',
    views: {
      home: { component: HomeComponent }
    }
  },
  {
    name: 'products',
    sticky: true,
    views: {
      products: { component: ProductsComponent }
    }
  },
];

@NgModule({
  imports: [UIRouterModule.forRoot({ states: routes, useHash: true })],
  exports: [UIRouterModule]
})
export class AppRoutingModule {
  constructor(uiRouter: UIRouter) {
    uiRouter.plugin(StickyStatesPlugin);
  }
}
