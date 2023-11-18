import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { FurnitureDesign } from 'src/app/model/furnituredesign';
import { FurnitureType } from 'src/app/model/furnituretype';
import { WoodType } from 'src/app/model/wood_Type';
import { CustomerService } from 'src/app/service/customer.service';
import { FurnituredesignService } from 'src/app/service/furnituredesign.service';
import { FurnituretypeService } from 'src/app/service/furnituretype.service';
import { WoodTypeService } from 'src/app/service/wood-type.service';

@Component({
  selector: 'app-creaedita-furnituredesign',
  templateUrl: './creaedita-furnituredesign.component.html',
  styleUrls: ['./creaedita-furnituredesign.component.css']
})
export class CreaeditaFurnituredesignComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  furnituredesign: FurnitureDesign = new FurnitureDesign();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaWood: WoodType[] = []
  listaCustomer: Customer[] = []
  listaFurniture: FurnitureType[] = []


  constructor(
  private cS: FurnituredesignService,
  private router: Router,
  private formBuilder: FormBuilder,
  private route:ActivatedRoute,
  private ctmr: CustomerService,
  private wt: WoodTypeService,
  private ft: FurnituretypeService
  ) {}

  ngOnInit(): void {
  this.route.params.subscribe((data: Params) => {
  this.id = data['id'];
  this.edicion = data['id'] != null;
  this.init();
  });
  this.form = this.formBuilder.group({
    furnitureDesignId: [''],
    customer: ['', Validators.required],
    woodtype: ['', Validators.required],
    furnituretype: ['', Validators.required],
    color: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    width: ['', [Validators.required, Validators.min(1)]],
    height: ['', [Validators.required, Validators.min(1)]],
    depth: ['', [Validators.required, Validators.min(1)]],
    estimate: ['', [Validators.required, Validators.min(1)]],
  });
  this.ctmr.list().subscribe(data => {
    this.listaCustomer = data
  })
  this.ft.list().subscribe(data => {
    this.listaFurniture = data
  })
  this.wt.list().subscribe(data => {
    this.listaWood = data
  })

  }
  aceptar() {
    if (this.form.valid) {
      this.furnituredesign.furnitureDesignId =this.form.value.furnitureDesignId;
        this.furnituredesign.customer.idUser =this.form.value.customer;
        this.furnituredesign.woodtype.idWoodType =this.form.value.woodtype;
        this.furnituredesign.furnituretype.idFurnitureType =this.form.value.furnituretype;
        this.furnituredesign.color =this.form.value.color;
        this.furnituredesign.width =this.form.value.width;
        this.furnituredesign.height =this.form.value.height;
        this.furnituredesign.depth =this.form.value.depth;
        this.furnituredesign.estimate =this.form.value.estimate;
        if(this.edicion){
          this.cS.update(this.furnituredesign).subscribe(()=>{
          this.cS.list().subscribe(data=>{
          this.cS.setList(data);
          })
          })
          }
          else{
            this.cS.insert(this.furnituredesign).subscribe(data => {
              this.cS.list().subscribe(data => {
                this.cS.setList(data);
              })
            })
          }
      this.router.navigate(['components/furnituredesigns'])
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


  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }
  init() {
    if (this.edicion) {
    this.cS.listId(this.id).subscribe((data) => {
    this.form = new FormGroup({
      furnitureDesignId: new FormControl(data.furnitureDesignId),
      customer: new FormControl(data.customer.idUser),
      woodtype: new FormControl(data.woodtype.idWoodType),
      furnituretype: new FormControl(data.furnituretype.idFurnitureType),
      color: new FormControl(data.color),
      width: new FormControl(data.width),
      height: new FormControl(data.height),
      depth: new FormControl(data.depth),
      estimate: new FormControl(data.estimate),
    });
    });
    }
    }

}
