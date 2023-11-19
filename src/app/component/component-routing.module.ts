import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CreaeditaCustomerComponent } from './customer/creaedita-customer/creaedita-customer.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { CreaeditaCarpenterComponent } from './carpenter/creaedita-carpenter/creaedita-carpenter.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';
import { CreaeditaPaymenttypeComponent } from './paymenttype/creaedita-paymenttype/creaedita-paymenttype.component';
import { WoodTypeComponent } from './wood-type/wood-type.component';
import { CreaeditaWoodTypeComponent } from './wood-type/creaedita-wood-type/creaedita-wood-type.component';
import { FurnituretypeComponent } from './furnituretype/furnituretype.component';
import { CreaeditaFurnituretypeComponent } from './furnituretype/creaedita-furnituretype/creaedita-furnituretype.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderCreaeditaComponent } from './order/order-creaedita/order-creaedita.component';
import { FurnituredesignComponent } from './furnituredesign/furnituredesign.component';
import { CreaeditaFurnituredesignComponent } from './furnituredesign/creaedita-furnituredesign/creaedita-furnituredesign.component';
import { CreaeditaFurnitureComponent } from './furniture/creaedita-furniture/creaedita-furniture.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { CustomerfurnitureComponent } from './customerfurniture/customerfurniture.component';
import { CreaeditaCustomerfurnitureComponent } from './customerfurniture/creaedita-customerfurniture/creaedita-customerfurniture.component';
import { FurnitureorderComponent } from './furnitureorder/furnitureorder.component';
import { CreaeditaFurnitureorderComponent } from './furnitureorder/creaedita-furnitureorder/creaedita-furnitureorder.component';
import { CalificacionesComponent } from './vista/calificaciones/calificaciones.component';
import { UserCredentialsComponent } from './vista/user-credentials/user-credentials.component';
import { ClienteComponent } from './vista/usuarios/cliente/cliente.component';
import { CarpinterosComponent } from './vista/usuarios/carpinteros/carpinteros.component';
import { MaderasComponent } from './vista/maderas/maderas.component';
import { MueblesorderComponent } from './vista/mueblesorder/mueblesorder.component';
<<<<<<< HEAD
import { CantmaderaComponent } from './vista/cantmadera/cantmadera.component';
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

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

  {
    path: 'furnitureorders',
    component: FurnitureorderComponent, children: [
      { path: 'nuevo', component:CreaeditaFurnitureorderComponent},
    ]
  },

  {
    path: 'calificaciones',
    component: CalificacionesComponent
  },
  {
    path: 'credentials',
    component: UserCredentialsComponent
  },
  {
    path: 'clientes',
    component: ClienteComponent
  },
  {
    path: 'carpinteros',
    component: CarpinterosComponent
  },
  {
    path: 'maderas',
    component: MaderasComponent
  },
  {
    path: 'ordenmuebles',
    component: MueblesorderComponent
<<<<<<< HEAD
  },
  {
    path: 'cantmadera',
    component: CantmaderaComponent,
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
