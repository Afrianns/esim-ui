import data from "@/app/data/products.json"

export const singelProduct = (id: string) => data.find((item) => String(item.id) === id)