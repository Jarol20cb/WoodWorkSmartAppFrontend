import { Customer } from "./customer"

export class Order{
    orderId: number=0
    totalPrice: number=0
    payment: number=0
    totalQuantity: number=0
    orderDate: Date=new Date(Date.now())
    customer: Customer=new Customer()
}