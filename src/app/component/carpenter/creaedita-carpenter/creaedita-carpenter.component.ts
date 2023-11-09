import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Carpenter } from 'src/app/model/carpenter';
import { CarpenterService } from 'src/app/service/carpenter.service';

@Component({
  selector: 'app-creaedita-carpenter',
  templateUrl: './creaedita-carpenter.component.html',
  styleUrls: ['./creaedita-carpenter.component.css']
})
export class CreaeditaCarpenterComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  carpenter: Carpenter = new Carpenter();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;


  constructor(
  private cS: CarpenterService,
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
    dni: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^.+@gmail\.com$/)]],
    number: ['', Validators.required],
    ruc: ['', Validators.required]
  });
  }
  aceptar() {
  if (this.form.valid) {
    this.carpenter.idUser =this.form.value.idUser;

    this.carpenter.userFirstName = this.form.value.userFirstName;
      this.carpenter.userLastName = this.form.value.userLastName;
      this.carpenter.birthdate = this.form.value.birthdate;
      this.carpenter.address = this.form.value.address;
      this.carpenter.dni = this.form.value.dni;
      this.carpenter.email = this.form.value.email;
      this.carpenter.number = this.form.value.number;
      this.carpenter.ruc = this.form.value.ruc;

  if(this.edicion){
  this.cS.update(this.carpenter).subscribe(()=>{
  this.cS.list().subscribe(data=>{
  this.cS.setList(data);
  })
  })
  }else{
  this.cS.insert(this.carpenter).subscribe((data) => {
  this.cS.list().subscribe((data) => {
  this.cS.setList(data);
  });
  });
  }
  this.router.navigate(['components/carpenters']);
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
  ruc: new FormControl(data.ruc),

  });
  });
  }
  }
}
