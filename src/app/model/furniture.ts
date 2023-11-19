import { Carpenter } from "./carpenter"
import { FurnitureDesign } from "./furnituredesign"

export class Furniture{
  furnitureId: number = 0
  carpenter: Carpenter = new Carpenter()
  furnitureDesign: FurnitureDesign = new FurnitureDesign()
  priceFurniture: number=0
  manufacturingDate: Date = new Date(Date.now())
  description: string = ""


}
