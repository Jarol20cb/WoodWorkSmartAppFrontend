import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-creadita',
  templateUrl: './order-creadita.component.html',
  styleUrls: ['./order-creadita.component.css']
})
export class OrderCreaditaComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  order: Order = new Order();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(-1, 'days').toDate();

  constructor(
    private cS: OrderService,
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
        orderId: [''],
        totalPrice: ['', Validators.required],
        payment: ['', Validators.required],
        totalQuantity: ['', Validators.required],
        orderDate: ['', Validators.required],
        customer: ['', Validators.required],
      });
      }

      aceptar() {
        if (this.form.valid) {
          this.order.orderId =this.form.value.orderId;
          this.order.totalPrice =this.form.value.totalPrice;
          this.order.payment =this.form.value.payment;
          this.order.totalQuantity =this.form.value.totalQuantity;
          this.order.orderDate =this.form.value.orderDate;
          this.order.customer =this.form.value.customer;
          
    
          if(this.edicion){
          this.cS.update(this.order).subscribe(()=>{
          this.cS.list().subscribe(data=>{
          this.cS.setList(data);
          })
          })
          }else{
          this.cS.insert(this.order).subscribe((data) => {
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
        orderId: new FormControl(data.orderId),
        totalPrice: new FormControl(data.totalPrice),
        payment: new FormControl(data.payment),
        totalQuantity: new FormControl(data.totalQuantity),
        orderDate: new FormControl(data.orderDate),
        customer: new FormControl(data.customer),
      });
      });
      }
      }

}
