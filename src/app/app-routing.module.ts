<<<<<<< HEAD
=======
<<<<<<< HEAD
import { CreaeditaCustomerfurnitureComponent } from './component/customerfurniture/creaedita-customerfurniture/creaedita-customerfurniture.component';
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
import { FurnituredesignComponent } from './component/furnituredesign/furnituredesign.component';
import { CreaeditaFurnituredesignComponent } from './component/furnituredesign/creaedita-furnituredesign/creaedita-furnituredesign.component';
import { FurnitureComponent } from './component/furniture/furniture.component';
import { CreaeditaFurnitureComponent } from './component/furniture/creaedita-furniture/creaedita-furniture.component';
import { CustomerfurnitureComponent } from './component/customerfurniture/customerfurniture.component';

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

  {
    path: 'furnituredesigns',
    component: FurnituredesignComponent, children: [
      { path: 'nuevo', component: CreaeditaFurnituredesignComponent },
    ]
  },

  {
    path: 'muebles',
    component: FurnitureComponent, children: [
      { path: 'nuevo', component: CreaeditaFurnitureComponent },
    ]
  },

  {
    path: 'customerfurnitures',
    component: CustomerfurnitureComponent, children: [
      { path: 'nuevo', component:CreaeditaCustomerfurnitureComponent},
    ]
  },





];
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'components',
    loadChildren: () => import('./component/component.module').then((m) => m.ComponentModule),
  },];
<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
