import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './component/customer/customer.component';
import { ListarCustomerComponent } from './component/customer/listar-customer/listar-customer.component';
import { CreaeditaCustomerComponent } from './component/customer/creaedita-customer/creaedita-customer.component';
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
import { CarpenterComponent } from './component/carpenter/carpenter.component';
import { ListarCarpenterComponent } from './component/carpenter/listar-carpenter/listar-carpenter.component';
import { CreaeditaCarpenterComponent } from './component/carpenter/creaedita-carpenter/creaedita-carpenter.component';
import { PaymenttypeComponent } from './component/paymenttype/paymenttype.component';
import { ListarPaymenttypeComponent } from './component/paymenttype/listar-paymenttype/listar-paymenttype.component';
import { CreaeditaPaymenttypeComponent } from './component/paymenttype/creaedita-paymenttype/creaedita-paymenttype.component';
import { FurnituretypeComponent } from './component/furnituretype/furnituretype.component';
import { ListarFurnituretypeComponent } from './component/furnituretype/listar-furnituretype/listar-furnituretype.component';
import { CreaeditaFurnituretypeComponent } from './component/furnituretype/creaedita-furnituretype/creaedita-furnituretype.component';
import { WoodTypeComponent } from './component/wood-type/wood-type.component';
import { ListarWoodTypeComponent } from './component/wood-type/listar-wood-type/listar-wood-type.component';
import { CreaeditaWoodTypeComponent } from './component/wood-type/creaedita-wood-type/creaedita-wood-type.component';
import { HomeComponent } from './component/home/home.component';
import { MatSelectModule } from '@angular/material/select';
import { OrderComponent } from './component/order/order.component';
import { OrderListarComponent } from './component/order/order-listar/order-listar.component';
import { OrderCreaeditaComponent } from './component/order/order-creaedita/order-creaedita.component';
import { FurnituredesignComponent } from './component/furnituredesign/furnituredesign.component';
import { ListarFurnituredesignComponent } from './component/furnituredesign/listar-furnituredesign/listar-furnituredesign.component';
import { CreaeditaFurnituredesignComponent } from './component/furnituredesign/creaedita-furnituredesign/creaedita-furnituredesign.component';
import { FurnitureComponent } from './component/furniture/furniture.component';
import { ListarFurnitureComponent } from './component/furniture/listar-furniture/listar-furniture.component';
import { CreaeditaFurnitureComponent } from './component/furniture/creaedita-furniture/creaedita-furniture.component';

@NgModule({
  declarations: [
    AppComponent,
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
    CreaeditaFurnitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HttpClientModule,
    BrowserAnimationsModule,
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





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
