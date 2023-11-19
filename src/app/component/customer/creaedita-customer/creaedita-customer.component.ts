import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-creaedita-customer',
  templateUrl: './creaedita-customer.component.html',
  styleUrls: ['./creaedita-customer.component.css']
})
export class CreaeditaCustomerComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  customer: Customer = new Customer();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;


  constructor(
  private cS: CustomerService,
  private router: Router,
  private formBuilder: FormBuilder,
  private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.route.params.subscribe((data: Params) => {
  this.id = data['id'];
  this.edicion = data['id'] != null;
  this.init();
  });
  this.form = this.formBuilder.group({
    idUser: [''],
    userFirstName: ['', Validators.required],
    userLastName: ['', Validators.required],
    birthdate: ['', Validators.required],
    address: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.pattern(/^.+@gmail\.com$/)]],
    number: ['', Validators.required],
    shippingAddress: ['', Validators.required]
  });
  }
  aceptar() {
  if (this.form.valid) {
    this.customer.idUser =this.form.value.idUser;

    this.customer.userFirstName = this.form.value.userFirstName;
      this.customer.userLastName = this.form.value.userLastName;
      this.customer.birthdate = this.form.value.birthdate;
      this.customer.address = this.form.value.address;
      this.customer.dni = this.form.value.dni;
      this.customer.email = this.form.value.email;
      this.customer.number = this.form.value.number;
      this.customer.shippingAddress = this.form.value.shippingAddress;

  if(this.edicion){
  this.cS.update(this.customer).subscribe(()=>{
  this.cS.list().subscribe(data=>{
  this.cS.setList(data);
  })
  })
  }else{
  this.cS.insert(this.customer).subscribe((data) => {
  this.cS.list().subscribe((data) => {
  this.cS.setList(data);
  });
  });
  }
  this.router.navigate(['components/customers']);
  } else {
  this.mensaje = 'Revise los campos!!!';
  }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
  const control = this.form.get(nombreCampo);
  if (!control) {
  throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
  }
  return control;
  }


  init() {
  if (this.edicion) {
  this.cS.listId(this.id).subscribe((data) => {
  this.form = new FormGroup({
  idUser: new FormControl(data.idUser),
  userFirstName: new FormControl(data.userFirstName),
  userLastName: new FormControl(data.userLastName),
  birthdate: new FormControl(data.birthdate),
  address: new FormControl(data.address),
  dni: new FormControl(data.dni),
  email: new FormControl(data.email),
  number: new FormControl(data.number),
  shippingAddress: new FormControl(data.shippingAddress),

  });
  });
  }
  }
}
