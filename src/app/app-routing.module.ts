import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaeditaCustomerComponent } from './component/customer/creaedita-customer/creaedita-customer.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CarpenterComponent } from './component/carpenter/carpenter.component';
import { CreaeditaCarpenterComponent } from './component/carpenter/creaedita-carpenter/creaedita-carpenter.component';
import { PaymenttypeComponent } from './component/paymenttype/paymenttype.component';
import { CreaeditaPaymenttypeComponent } from './component/paymenttype/creaedita-paymenttype/creaedita-paymenttype.component';
import { WoodTypeComponent } from './component/wood-type/wood-type.component';
import { CreaeditaWoodTypeComponent } from './component/wood-type/creaedita-wood-type/creaedita-wood-type.component';
import { FurnituretypeComponent } from './component/furnituretype/furnituretype.component';
import { CreaeditaFurnituretypeComponent } from './component/furnituretype/creaedita-furnituretype/creaedita-furnituretype.component';
import { HomeComponent } from './component/home/home.component';
import { OrderComponent } from './component/order/order.component';
import { OrderCreaeditaComponent } from './component/order/order-creaedita/order-creaedita.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent, children: [
      { path: 'nuevo', component: CreaeditaCustomerComponent },
      { path: 'ediciones/:id', component: CreaeditaCustomerComponent },
    ]
  },

  {
    path: 'carpenters',
    component: CarpenterComponent, children: [
      { path: 'nuevo', component: CreaeditaCarpenterComponent },
      { path: 'ediciones/:id', component: CreaeditaCarpenterComponent },
    ]
  },

  {
    path: 'payments',
    component: PaymenttypeComponent, children: [
      { path: 'nuevo', component: CreaeditaPaymenttypeComponent },
      { path: 'ediciones/:id', component: CreaeditaPaymenttypeComponent },
    ]
  },

  {
    path: 'woodtypes',
    component: WoodTypeComponent, children:[
      { path: 'nuevo', component: CreaeditaWoodTypeComponent },
      { path: 'ediciones/:id', component: CreaeditaWoodTypeComponent },
    ]
  },

  {
    path: 'furnitures',
    component: FurnituretypeComponent, children:[
      { path: 'nuevo', component: CreaeditaFurnituretypeComponent },
      { path: 'ediciones/:id', component: CreaeditaFurnituretypeComponent },
    ]
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'orders',
    component: OrderComponent, children:[
      { path: 'nuevo', component: OrderCreaeditaComponent },
    ]
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
