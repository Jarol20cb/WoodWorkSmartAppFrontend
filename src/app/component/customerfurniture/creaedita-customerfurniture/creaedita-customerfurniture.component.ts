import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
<<<<<<< HEAD
export class CreaeditaCustomerfurnitureComponent implements OnInit{
=======
<<<<<<< HEAD
export class CreaeditaCustomerfurnitureComponent implements OnInit {
=======
export class CreaeditaCustomerfurnitureComponent implements OnInit{
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
  form: FormGroup = new FormGroup({});
  customerfurniture: CustomerFurniture = new CustomerFurniture();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaMuebles: Furniture[] = []
  listaClientes: Customer[] = []

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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

<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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
      this.cfS.insert(this.customerfurniture).subscribe(data => {
        this.cfS.list().subscribe(data => {
          this.cfS.setList(data);
        })
      })
<<<<<<< HEAD
      this.router.navigate(['components/customerfurnitures'])
=======
<<<<<<< HEAD
      this.router.navigate(['customerfurnitures'])
=======
      this.router.navigate(['components/customerfurnitures'])
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
  getBase64Image(base64: string): string {
    if (base64) {
      return 'data:image/jpeg;base64,' + base64;
    }
    return '';
  }


<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
}
