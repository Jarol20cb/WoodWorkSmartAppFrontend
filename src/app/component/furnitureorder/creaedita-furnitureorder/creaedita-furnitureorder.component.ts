import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Furniture } from 'src/app/model/furniture';
import { FurnitureOrder } from 'src/app/model/furnitureorder';
import { Order } from 'src/app/model/order';
import { CustomerfurnitureService } from 'src/app/service/customerfurniture.service';
import { FurnitureService } from 'src/app/service/furniture.service';
import { FurnitureorderService } from 'src/app/service/furnitureorder.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-creaedita-furnitureorder',
  templateUrl: './creaedita-furnitureorder.component.html',
  styleUrls: ['./creaedita-furnitureorder.component.css']
})
export class CreaeditaFurnitureorderComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  furnitureorder: FurnitureOrder = new FurnitureOrder();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  listaMuebles: Furniture[] = []
  listaOrden: Order[] = []

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
    private cfS: FurnitureorderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,

    private fS: FurnitureService,
    private cuS: OrderService,
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });
    this.form = this.formBuilder.group({
      idfornitureorder: [''],
      furniture: ['', Validators.required],
      order: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    this.fS.list().subscribe(data => {
      this.listaMuebles = data
    });
    this.cuS.list().subscribe(data => {
      this.listaOrden = data
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.furnitureorder.idfornitureorder = this.form.value.idfornitureorder;
      this.furnitureorder.furniture.furnitureId = this.form.value.furniture;
      this.furnitureorder.order.orderId = this.form.value.order;
      this.furnitureorder.quantity = this.form.value.quantity;
      this.cfS.insert(this.furnitureorder).subscribe(data => {
        this.cfS.list().subscribe(data => {
          this.cfS.setList(data);
        })
      })
      this.router.navigate(['furnitureorders'])
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
