import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { WoodType } from 'src/app/model/wood_Type';
import { WoodTypeService } from 'src/app/service/wood-type.service';

@Component({
  selector: 'app-creaedita-wood-type',
  templateUrl: './creaedita-wood-type.component.html',
  styleUrls: ['./creaedita-wood-type.component.css']
})
export class CreaeditaWoodTypeComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  woodtype: WoodType = new WoodType();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;


  constructor(
  private cS: WoodTypeService,
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
    idWoodType: [''],
    woodTypeName: ['', Validators.required],
    woodTypeImage: ['', Validators.required],
  });
  }
  aceptar() {
  if (this.form.valid) {
    this.woodtype.idWoodType =this.form.value.idWoodType;

    this.woodtype.woodTypeName = this.form.value.woodTypeName;
      this.woodtype.woodTypeImage = this.form.value.woodTypeImage;

  if(this.edicion){
  this.cS.update(this.woodtype).subscribe(()=>{
  this.cS.list().subscribe(data=>{
  this.cS.setList(data);
  })
  })
  }else{
  this.cS.insert(this.woodtype).subscribe((data) => {
  this.cS.list().subscribe((data) => {
  this.cS.setList(data);
  });
  });
  }
  this.router.navigate(['woodtypes']);
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
    idWoodType: new FormControl(data.idWoodType),
    woodTypeName: new FormControl(data.woodTypeName),
    woodTypeImage: new FormControl(data.woodTypeImage),

  });
  });
  }
  }

}
