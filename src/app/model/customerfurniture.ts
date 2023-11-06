import { Customer } from "./customer"
import { Furniture } from "./furniture"

export class CustomerFurniture {
    idcustomerfurniture: number = 0
    furniture: Furniture = new Furniture()
    customer: Customer = new Customer()
    qualification: number = 0
    comment: string = ""
}