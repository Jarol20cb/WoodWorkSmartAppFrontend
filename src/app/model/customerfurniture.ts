import { Customer } from "./customer"
import { Furniture } from "./furniture"

export class CustomerFurniture {
    idcustomerfurniture: number = 0
    furniture: Furniture = new Furniture()
    customer: Customer = new Customer()
    qualification: string = ""
    comment: string = ""
}
