import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FurnitureType } from 'src/app/model/furnituretype';
import { FurnituretypeService } from 'src/app/service/furnituretype.service';

@Component({
  selector: 'app-creaedita-furnituretype',
  templateUrl: './creaedita-furnituretype.component.html',
  styleUrls: ['./creaedita-furnituretype.component.css']
})
<<<<<<< HEAD
export class CreaeditaFurnituretypeComponent implements OnInit{

=======
export class CreaeditaFurnituretypeComponent implements OnInit {
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  form: FormGroup = new FormGroup({});
  furnituretype: FurnitureType = new FurnitureType();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
<<<<<<< HEAD


  constructor(
  private cS: FurnituretypeService,
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
    idFurnitureType: [''],
    furnitureTypeName: ['', Validators.required],
    furnitureTypeImage: [null]
  });
  }
  aceptar() {
    if (this.form.valid) {
      this.furnituretype.idFurnitureType =this.form.value.idFurnitureType;
      this.furnituretype.furnitureTypeName = this.form.value.furnitureTypeName;
      this.furnituretype.furnitureTypeImage = this.form.value.furnitureTypeImage;

      if(this.edicion){
      this.cS.update(this.furnituretype).subscribe(()=>{
      this.cS.list().subscribe(data=>{
      this.cS.setList(data);
      })
      })
      }else{
      this.cS.insert(this.furnituretype).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
      }
      this.router.navigate(['furnitures']);
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
    idFurnitureType: new FormControl(data.idFurnitureType),
    furnitureTypeName: new FormControl(data.furnitureTypeName),
    furnitureTypeImage: new FormControl(data.furnitureTypeImage),
  });
  });
  }
  }

=======
  imageFile: File | null = null;

  constructor(
    private cS: FurnituretypeService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      idFurnitureType: [''],
      furnitureTypeName: ['', Validators.required],
      furnitureTypeImage: [null]
    });
  }

  aceptar() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('furnitureTypeName', this.form.value.furnitureTypeName);
      if (this.imageFile) {
        formData.append('furnitureTypeImage', this.imageFile);
      }

      if (this.edicion) {
        formData.append('idFurnitureType', this.form.value.idFurnitureType);
        this.cS.update(this.form.value.idFurnitureType, formData).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(formData).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['components/furnitures']);
    } else {
      this.mensaje = 'Revise los campos!!!';
    }
  }


/*
  aceptar() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('furnitureTypeName', this.form.value.furnitureTypeName);
      if (this.imageFile) {
        formData.append('furnitureTypeImage', this.imageFile);
      }
      this.furnituretype.idFurnitureType = this.form.value.idFurnitureType;
      this.furnituretype.furnitureTypeName = this.form.value.furnitureTypeName;


      this.cS.insert(this.furnituretype).subscribe(data => {
        this.cS.list().subscribe(data => {
          this.cS.setList(data);
        })
      })
      this.router.navigate(['components/furnitures'])
    } else {
      this.mensaje = "Ingrese todos los campos!!!"
    }
  }

  */

 handleImageInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;
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
          idFurnitureType: new FormControl(data.idFurnitureType),
          furnitureTypeName: new FormControl(data.furnitureTypeName),
          furnitureTypeImage: new FormControl(data.furnitureTypeImage)
        });
      });
    }
  }
>>>>>>> 451f5da (Se añadio la vista para furniture order)
}
