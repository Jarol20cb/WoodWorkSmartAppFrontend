import { FurnitureType } from "./furnituretype";
import { WoodType } from "./wood_Type";
import { Customer } from "./customer";

export class FurnitureDesign{
    furnitureDesignId: number=0
    customer: Customer = new Customer()
    woodtype: WoodType = new WoodType()
    furnituretype: FurnitureType = new FurnitureType()
    color: string=""
    width: number=0
    height: number=0
    depth: number=0
    estimate: number=0
  }
