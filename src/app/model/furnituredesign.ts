import { FurnitureType } from "./furnituretype";
import { WoodType } from "./wood_Type";

export interface FurnitureDesign extends WoodType, FurnitureType{
    idFurnitureDesign: number;
    furnitureDesignName: string;
    furnitureDesignColor: string;
    furnitureDesignWidth: number;
    furnitureDesignHeight: number;
    furnitureDesignDepth: number;
    furnitureDesignEstimate: number;
  }