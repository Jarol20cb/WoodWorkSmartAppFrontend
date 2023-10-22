import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-creaedita-customer',
  templateUrl: './creaedita-customer.component.html',
  styleUrls: ['./creaedita-customer.component.css']
})
export class CreaeditaCustomerComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  customer: Customer = new Customer()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate()
  constructor(private cS: CustomerService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userFirstName: ['', Validators.required],
      userLastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required],
      number: ['', Validators.required],
      shippingAddress: ['', Validators.required]
    })
  }

  registrar() {
    if (this.form.valid) {
      this.customer.userFirstName = this.form.value.userFirstName;
      this.customer.userLastName = this.form.value.userLastName;
      this.customer.birthdate = this.form.value.birthdate;
      this.customer.address = this.form.value.address;
      this.customer.dni = this.form.value.dni;
      this.customer.email = this.form.value.email;
      this.customer.number = this.form.value.number;
      this.customer.shippingAddress = this.form.value.shippingAddress;

      this.cS.insert(this.customer).subscribe(data => {
        this.cS.list().subscribe(data => {
          this.cS.setList(data);
        })
      })

      this.router.navigate(['customers'])
    } else {
      this.mensaje = "Revise los campos!!!"
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
}
