import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Carpenter } from 'src/app/model/carpenter';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureDesign } from 'src/app/model/furnituredesign';
import { CarpenterService } from 'src/app/service/carpenter.service';
import { FurnitureService } from 'src/app/service/furniture.service';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';

@Component({
  selector: 'app-creaedita-furniture',
  templateUrl: './creaedita-furniture.component.html',
  styleUrls: ['./creaedita-furniture.component.css']
})
export class CreaeditaFurnitureComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  furniture: Furniture = new Furniture();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaCarpintero: Carpenter [] = []
  listaDisenos: FurnitureDesign [] = []

  constructor(
    private cS: FurnitureService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,

    private cpt:CarpenterService,
    private Ds:FurnituredesignService,


    ) {}




  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    });
    this.form = this.formBuilder.group({
      furnitureId: [''],
      carpenter: ['', Validators.required],
      furnitureDesign: ['', Validators.required],
      priceFurniture: ['', Validators.required],
      manufacturingDate: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.cpt.list().subscribe(data => {
      this.listaCarpintero = data
    })
    this.Ds.list().subscribe(data => {
      this.listaDisenos = data
    })

    }


    aceptar() {
      if (this.form.valid) {
        this.furniture.furnitureId =this.form.value.furnitureId;
          this.furniture.carpenter.idUser =this.form.value.carpenter;
          this.furniture.furnitureDesign.furnitureDesignId =this.form.value.furnitureDesign;
          this.furniture.priceFurniture =this.form.value.priceFurniture;
          this.furniture.manufacturingDate =this.form.value.manufacturingDate;
          this.furniture.description =this.form.value.description;
        this.cS.insert(this.furniture).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data);
          })
        })
        this.router.navigate(['muebles'])
      } else {
        this.mensaje = "Ingrese todos los campos!!!"
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
