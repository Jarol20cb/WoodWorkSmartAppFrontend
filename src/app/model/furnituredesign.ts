import { FurnitureType } from "./furnituretype";
import { WoodType } from "./wood_Type";
import { Customer } from "./customer";

export class FurnitureDesign{
    idFurnitureDesign: number=0
    customerName: Customer = new Customer()
    woodTypeName: WoodType = new WoodType()
    furnitureTypeName: FurnitureType=new FurnitureType()
    furnitureDesignColor: string=""
    furnitureDesignWidth: number=0
    furnitureDesignHeight: number=0
    furnitureDesignDepth: number=0
    furnitureDesignEstimate: number=0
  }
