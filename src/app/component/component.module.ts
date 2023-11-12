import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ MatNativeDateModule } from '@angular/material/core'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import{MatIconModule} from '@angular/material/icon'
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';

import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { CustomerComponent } from './customer/customer.component';
import { ListarCustomerComponent } from './customer/listar-customer/listar-customer.component';
import { CreaeditaCustomerComponent } from './customer/creaedita-customer/creaedita-customer.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { ListarCarpenterComponent } from './carpenter/listar-carpenter/listar-carpenter.component';
import { CreaeditaCarpenterComponent } from './carpenter/creaedita-carpenter/creaedita-carpenter.component';
import { PaymenttypeComponent } from './paymenttype/paymenttype.component';
import { CreaeditaPaymenttypeComponent } from './paymenttype/creaedita-paymenttype/creaedita-paymenttype.component';
import { ListarPaymenttypeComponent } from './paymenttype/listar-paymenttype/listar-paymenttype.component';
import { ListarFurnituretypeComponent } from './furnituretype/listar-furnituretype/listar-furnituretype.component';
import { FurnituretypeComponent } from './furnituretype/furnituretype.component';
import { CreaeditaFurnituretypeComponent } from './furnituretype/creaedita-furnituretype/creaedita-furnituretype.component';
import { WoodTypeComponent } from './wood-type/wood-type.component';
import { ListarWoodTypeComponent } from './wood-type/listar-wood-type/listar-wood-type.component';
import { CreaeditaWoodTypeComponent } from './wood-type/creaedita-wood-type/creaedita-wood-type.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderListarComponent } from './order/order-listar/order-listar.component';
import { OrderCreaeditaComponent } from './order/order-creaedita/order-creaedita.component';
import { FurnituredesignComponent } from './furnituredesign/furnituredesign.component';
import { ListarFurnituredesignComponent } from './furnituredesign/listar-furnituredesign/listar-furnituredesign.component';
import { CreaeditaFurnituredesignComponent } from './furnituredesign/creaedita-furnituredesign/creaedita-furnituredesign.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ListarFurnitureComponent } from './furniture/listar-furniture/listar-furniture.component';
import { CreaeditaFurnitureComponent } from './furniture/creaedita-furniture/creaedita-furniture.component';
import { CustomerfurnitureComponent } from './customerfurniture/customerfurniture.component';
import { CreaeditaCustomerfurnitureComponent } from './customerfurniture/creaedita-customerfurniture/creaedita-customerfurniture.component';
import { ListarCustomerfurnitureComponent } from './customerfurniture/listar-customerfurniture/listar-customerfurniture.component';
import { FurnitureorderComponent } from './furnitureorder/furnitureorder.component';
import { ListarFurnitureorderComponent } from './furnitureorder/listar-furnitureorder/listar-furnitureorder.component';
import { CreaeditaFurnitureorderComponent } from './furnitureorder/creaedita-furnitureorder/creaedita-furnitureorder.component';
import { ConfirmDialogComponent } from './dialogo/confirm-dialog-component/confirm-dialog-component.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './component-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { CerrarSesionComponent } from './dialogo/cerrar-sesion/cerrar-sesion.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { DialogComponent } from './dialogo/dialog/dialog.component';
import { CalificacionesComponent } from './vista/calificaciones/calificaciones.component';
import { UserCredentialsComponent } from './vista/user-credentials/user-credentials.component';
import { ClienteComponent } from './vista/usuarios/cliente/cliente.component';
import { CarpinterosComponent } from './vista/usuarios/carpinteros/carpinteros.component';
import { MaderasComponent } from './vista/maderas/maderas.component';







@NgModule({
  declarations: [
    CustomerComponent,
    ListarCustomerComponent,
    CreaeditaCustomerComponent,
    CarpenterComponent,
    ListarCarpenterComponent,
    CreaeditaCarpenterComponent,
    PaymenttypeComponent,
    ListarPaymenttypeComponent,
    CreaeditaPaymenttypeComponent,
    FurnituretypeComponent,
    ListarFurnituretypeComponent,
    CreaeditaFurnituretypeComponent,
    WoodTypeComponent,
    ListarWoodTypeComponent,
    CreaeditaWoodTypeComponent,
    HomeComponent,
    OrderComponent,
    OrderListarComponent,
    OrderCreaeditaComponent,
    FurnituredesignComponent,
    ListarFurnituredesignComponent,
    CreaeditaFurnituredesignComponent,
    FurnitureComponent,
    ListarFurnitureComponent,
    CreaeditaFurnitureComponent,
    CustomerfurnitureComponent,
    CreaeditaCustomerfurnitureComponent,
    ListarCustomerfurnitureComponent,
    FurnitureorderComponent,
    ListarFurnitureorderComponent,
    CreaeditaFurnitureorderComponent,
    ConfirmDialogComponent,
    LoginComponent,
    RegistroComponent,
    CerrarSesionComponent,
    DialogComponent,
    CalificacionesComponent,
    UserCredentialsComponent,
    ClienteComponent,
    CarpinterosComponent,
    MaderasComponent,



  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,

    HttpClientModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,

  ],
})
export class ComponentModule { }
