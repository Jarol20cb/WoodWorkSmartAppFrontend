import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { PaymentType } from 'src/app/model/payment';
import { PaymenttypeService } from 'src/app/service/paymenttype.service';

@Component({
  selector: 'app-creaedita-paymenttype',
  templateUrl: './creaedita-paymenttype.component.html',
  styleUrls: ['./creaedita-paymenttype.component.css']
})
export class CreaeditaPaymenttypeComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  paymenttype: PaymentType = new PaymentType();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;


  constructor(
  private cS: PaymenttypeService,
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
    idPayment: [''],
    namePaymentType: ['', Validators.required]
  });
  }
  aceptar() {
  if (this.form.valid) {
    this.paymenttype.idPayment =this.form.value.idPayment;
    this.paymenttype.namePaymentType = this.form.value.namePaymentType;

  if(this.edicion){
  this.cS.update(this.paymenttype).subscribe(()=>{
  this.cS.list().subscribe(data=>{
  this.cS.setList(data);
  })
  })
  }else{
  this.cS.insert(this.paymenttype).subscribe((data) => {
  this.cS.list().subscribe((data) => {
  this.cS.setList(data);
  });
  });
  }
  this.router.navigate(['components/payments']);
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
    idPayment: new FormControl(data.idPayment),
    NamePaymentType: new FormControl(data.namePaymentType),
  });
  });
  }
  }

}
