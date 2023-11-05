import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FurnitureDesign } from './../../../model/furnituredesign';
import { FurnitureDesignService } from 'src/app/service/furnituredesign.service';

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


  constructor(
  private cS: FurnitureDesignService,
  private router: Router,
  private formBuilder: FormBuilder,
  private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
  this.route.params.subscribe((data: Params) => {
  this.id = data['id'];
  this.edicion = data['id'] != null;
  //this.init();
  });
  this.form = this.formBuilder.group({
    idFurnitureType: [''],
    customerName: ['', Validators.required],
    woodTypeName: ['', Validators.required],
    furnitureTypeName: ['', Validators.required],
    furnitureDesignName: ['', Validators.required],
    furnitureDesignColor: ['', Validators.required],
    furnitureDesignWidth: ['', Validators.required],
    furnitureDesignHeight : ['', Validators.required],
    furnitureDesignDepth: ['', Validators.required],
    furnitureDesignEstimate : ['', Validators.required],
  });
  }
  aceptar() {
    if (this.form.valid) {
      this.furnituredesign.idFurnitureDesign =this.form.value.idFurnitureType;
      this.furnituredesign.customerName =this.form.value.furnitureDesignName;
      this.furnituredesign.furnitureTypeName = this.form.value.furnitureTypeName;
      this.furnituredesign.woodTypeName = this.form.value.woodTypeName;
      this.furnituredesign.furnitureDesignColor = this.form.value.furnitureDesignColor;
      this.furnituredesign.furnitureDesignWidth =this.form.value.furnitureDesignWidth;
      this.furnituredesign.furnitureDesignHeight = this.form.value.furnitureDesignHeight;
      this.furnituredesign.furnitureDesignDepth = this.form.value.furnitureDesignDepth;
      this.furnituredesign.furnitureDesignEstimate = this.form.value.furnitureDesignEstimate;

      if(this.edicion){
      this.cS.update(this.furnituredesign).subscribe(()=>{
      this.cS.list().subscribe(data=>{
      this.cS.setList(data);
      })
      })
      }else{
      this.cS.insert(this.furnituredesign).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
      }
      this.router.navigate(['furnituredesign']);
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
    idFurnitureDesign: new FormControl(data.idFurnitureDesign),
    customerName: new FormControl(data.customerName),
    woodTypeName: new FormControl(data.woodTypeName),
    furnitureTypeName: new FormControl(data.furnitureTypeName),
    furnitureDesignColor: new FormControl(data.furnitureDesignColor),
    furnitureDesignWidth: new FormControl(data.furnitureDesignWidth),
    furnitureDesignHeight: new FormControl(data.furnitureDesignHeight),
    furnitureDesignDepth: new FormControl(data.furnitureDesignDepth),
    furnitureDesignEstimate: new FormControl(data.furnitureDesignEstimate)

  });
  });
  }
  }

}
