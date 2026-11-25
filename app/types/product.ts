type Region = "Amerika" | "Oseania" | "Eropa" | "Afrika" | "Asia"
type ProductType = "instant" | "topupable"

export interface ESIMProductType {
    "id": number,
    "name": string,
    "price": number,
    "quota": string,
    "region": Region,
    "product_type": ProductType,
    "images": string[]
}