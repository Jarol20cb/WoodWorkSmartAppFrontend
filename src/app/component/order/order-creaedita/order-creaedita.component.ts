import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { PaymentType } from 'src/app/model/payment';
import { CustomerService } from 'src/app/service/customer.service';
import { OrderService } from 'src/app/service/order.service';
import { PaymenttypeService } from 'src/app/service/paymenttype.service';

@Component({
  selector: 'app-order-creaedita',
  templateUrl: './order-creaedita.component.html',
  styleUrls: ['./order-creaedita.component.css']
})
export class OrderCreaeditaComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  order: Order = new Order();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(-1, 'days').toDate();
  listaClientes: Customer[] = []
  listaPagos: PaymentType[] = []

  constructor(
    private cS: OrderService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,

    private ctmr:CustomerService,
    private Pm:PaymenttypeService,


    ) {}




  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
    });
    this.form = this.formBuilder.group({
      orderId: [''],
      totalPrice: ['', Validators.required],
      payment: ['', Validators.required],
      totalQuantity: ['', Validators.required],
      orderDate: ['', Validators.required],
      customer: ['', Validators.required],
    });

    this.ctmr.list().subscribe(data => {
      this.listaClientes = data
    })
    this.Pm.list().subscribe(data => {
      this.listaPagos = data
    })

    }


    aceptar() {
      if (this.form.valid) {
        this.order.orderId =this.form.value.orderId;
          this.order.totalPrice =this.form.value.totalPrice;
          this.order.payment.idPayment =this.form.value.payment;
          this.order.totalQuantity =this.form.value.totalQuantity;
          this.order.orderDate =this.form.value.orderDate;
          this.order.customer.idUser =this.form.value.customer;
          if(this.edicion){
            this.cS.update(this.order).subscribe(()=>{
            this.cS.list().subscribe(data=>{
            this.cS.setList(data);
            })
            })
            }
            else{
        this.cS.insert(this.order).subscribe(data => {
          this.cS.list().subscribe(data => {
            this.cS.setList(data);
          })
        })
      }
        this.router.navigate(['components/orders'])
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

    init() {
      if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
      this.form = new FormGroup({
        orderId: new FormControl(data.orderId),
        totalPrice: new FormControl(data.totalPrice),
        payment: new FormControl(data.payment.idPayment),
        totalQuantity: new FormControl(data.totalQuantity),
        orderDate: new FormControl(data.orderDate),
        customer: new FormControl(data.customer.idUser),
      });
      });
      }
      }

}
