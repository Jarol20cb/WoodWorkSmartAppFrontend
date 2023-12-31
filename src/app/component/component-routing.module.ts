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
import { OrdenesComponent } from './vista/ordenes/ordenes.component';
import { MueblesComponent } from './vista/muebles/muebles.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte02CarmenComponent } from './reportes/reporte02-carmen/reporte02-carmen.component';
import { Reporte03MilagrosComponent } from './reportes/reporte03-milagros/reporte03-milagros.component';
import { Reporte04EstacioComponent } from './reportes/reporte04-estacio/reporte04-estacio.component';
import { Reporte05MauricioComponent } from './reportes/reporte05-mauricio/reporte05-mauricio.component';
import { Reporte06PercyComponent } from './reportes/reporte06-percy/reporte06-percy.component';

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
    path: 'furnituretype',
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
      { path: 'ediciones/:id', component: OrderCreaeditaComponent },
    ]
  },

  {
    path: 'furnituredesigns',
    component: FurnituredesignComponent, children: [
      { path: 'nuevo', component: CreaeditaFurnituredesignComponent },
      { path: 'ediciones/:id', component: CreaeditaFurnituredesignComponent },
    ]
  },

  {
    path: 'furnitures',
    component: FurnitureComponent, children: [
      { path: 'nuevo', component: CreaeditaFurnitureComponent },
      { path: 'ediciones/:id', component: CreaeditaFurnitureComponent },
    ]
  },

  {
    path: 'customerfurnitures',
    component: CustomerfurnitureComponent, children: [
      { path: 'nuevo', component:CreaeditaCustomerfurnitureComponent},
      { path: 'ediciones/:id', component:CreaeditaCustomerfurnitureComponent},
    ]
  },

  {
    path: 'furnitureorders',
    component: FurnitureorderComponent, children: [
      { path: 'nuevo', component:CreaeditaFurnitureorderComponent},
      { path: 'ediciones/:id', component:CreaeditaFurnitureorderComponent},
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
    path: 'mueblesorder',
    component: MueblesorderComponent
  },

  {
    path: 'ordenes',
    component: OrdenesComponent
  },

  {
    path: 'muebles',
    component: MueblesComponent
  },
  {
    path: 'reporte1',
    component: Reporte1Component
  },
  {
    path: 'reporte2carmen',
    component: Reporte02CarmenComponent
  },

  {
    path: 'reporte3milagros',
    component: Reporte03MilagrosComponent
  },

  {
    path: 'reporte4Estacio',
    component: Reporte04EstacioComponent
  },
  {
    path: 'reporte5Mauricio',
    component: Reporte05MauricioComponent
  },
  {
    path: 'reporte6Percy',
    component: Reporte06PercyComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
