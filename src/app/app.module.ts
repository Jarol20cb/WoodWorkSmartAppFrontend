import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import { CarpenterComponent } from './component/carpenter/carpenter.component';

import { MatTableModule } from '@angular/material/table'
import { ListarCustomerComponent } from './component/customer/listar-customer/listar-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreaeditaCustomerComponent } from './component/customer/creaedita-customer/creaedita-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ListarCustomerComponent,
    CarpenterComponent,
    NavbarComponent,
    CreaeditaCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatPaginatorModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
