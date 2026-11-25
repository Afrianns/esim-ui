type region = "Amerika" | "Oseania" | "Eropa" | "Afrika"
type product_type = "instant" | "topupable"

export interface ProductType {
    "id": number,
    "name": string,
    "price": number,
    "quota": string,
    "region": region,
    "product_type": product_type,
    "images": string[]
}