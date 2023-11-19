import { Customer } from "./customer"
import { PaymentType } from "./payment"

export class Order{
    orderId: number=0
    totalPrice: number=0
    payment: PaymentType=new PaymentType()
    totalQuantity: number=0
    orderDate: Date=new Date(Date.now())
    customer: Customer=new Customer()
}
