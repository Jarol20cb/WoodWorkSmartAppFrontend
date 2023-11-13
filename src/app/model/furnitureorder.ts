import { Furniture } from "./furniture";
import { Order } from "./order";

export class FurnitureOrder {
  idfornitureorder: number = 0;
  furniture: Furniture = new Furniture();
  order: Order = new Order();
  quantity: string = "";
}
