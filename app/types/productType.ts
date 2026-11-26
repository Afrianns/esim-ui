type Region = "Amerika" | "Oseania" | "Eropa" | "Afrika" | "Asia"
type ProductType = "instant" | "topupable"

export type VariantType = { price: number, quota: number }

export type DurationType = { duration: number, price_add: number }

export interface ESIMProductType {
    "id": number,
    "name": string,
    "available_pick": VariantType[]
    "available_duration": DurationType[]
    "region": Region,
    "product_type": ProductType,
    "images": string[],
    "description": string
}

export interface ProductGalleryProps {
  images: string[];
  name: string;
}