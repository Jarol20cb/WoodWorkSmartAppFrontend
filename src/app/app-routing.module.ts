import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './component/customer/customer.component';
import { CreaeditaCustomerComponent } from './component/customer/creaedita-customer/creaedita-customer.component';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent, children: [
      {
        path: 'nuevo',
        component: CreaeditaCustomerComponent
      }
    ]
  },

  {
    path: 'nav',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
