import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerFurniture } from 'src/app/model/customerfurniture';
import { Furniture } from 'src/app/model/furniture';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
import { FurnitureService } from 'src/app/service/furniture.service';

@Component({
  selector: 'app-creaedita-customerfurniture',
  templateUrl: './creaedita-customerfurniture.component.html',
  styleUrls: ['./creaedita-customerfurniture.component.css']
})
export class CreaeditaCustomerfurnitureComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  customerfurniture: CustomerFurniture = new CustomerFurniture();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaMuebles: Furniture[] = []
  listaClientes: Customer[] = []

  calificacion: { value: string; viewValue: string }[] = [
    { value: '⭐⭐⭐⭐⭐', viewValue: '⭐⭐⭐⭐⭐' },
    { value: '⭐⭐⭐⭐', viewValue: '⭐⭐⭐⭐' },
    { value: '⭐⭐⭐', viewValue: '⭐⭐⭐' },
    { value: '⭐⭐', viewValue: '⭐⭐' },
    { value: '⭐', viewValue: '⭐' },

  ];

  emogis(calificacion: string): string {
    switch (calificacion) {
      case '⭐⭐⭐⭐⭐':
        return '⭐⭐⭐⭐⭐';
      case '⭐⭐⭐⭐':
        return '⭐⭐⭐⭐';
      case '⭐⭐⭐':
        return '⭐⭐⭐';
      case '⭐⭐':
        return '⭐⭐';
      case '⭐':
        return '⭐';
      default:
        return '';
    }
  }

  constructor(
    private cfS: CustomerfurnitureService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private fS: FurnitureService,
    private cuS: CustomerService,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idcustomerfurniture: [''],
      furniture: ['', Validators.required],
      customer: ['', Validators.required],
      qualification: ['', Validators.required],
      comment: ['', Validators.required],
    });

    this.fS.list().subscribe(data => {
      this.listaMuebles = data
    });
    this.cuS.list().subscribe(data => {
      this.listaClientes = data
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.customerfurniture.idcustomerfurniture = this.form.value.idcustomerfurniture;
      this.customerfurniture.furniture.furnitureId = this.form.value.furniture;
      this.customerfurniture.customer.idUser = this.form.value.customer;
      this.customerfurniture.qualification = this.form.value.qualification;
      this.customerfurniture.comment = this.form.value.comment;
      if(this.edicion){
        this.cfS.update(this.customerfurniture).subscribe(()=>{
        this.cfS.list().subscribe(data=>{
        this.cfS.setList(data);
        })
        })
        }
        else{
          this.cfS.insert(this.customerfurniture).subscribe(data => {
            this.cfS.list().subscribe(data => {
              this.cfS.setList(data);
            })
          })
        }

      this.router.navigate(['components/customerfurnitures'])
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
    this.cfS.listId(this.id).subscribe((data) => {
    this.form = new FormGroup({
      idcustomerfurniture: new FormControl(data.idcustomerfurniture),
      furniture: new FormControl(data.furniture.furnitureId),
      customer: new FormControl(data.customer.idUser),
      qualification: new FormControl(data.qualification),
      comment: new FormControl(data.comment),

    });
    });
  }
  }

}
