import { formatMoney } from "@/app/lib/formatMoney";
import { ESIMProductType } from "@/app/types/product";


import Image from "next/image";
import ProductType from "../components/productType";

export default function Card({product}: {product: ESIMProductType}) {
    return (
        <main key={product.id} className="flex flex-col h-110 p-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-xl border border-gray-300 bg-white">
            <div className="h-100 relative rounded-lg overflow-hidden">
                <Image fill src={product.images[0]} alt={product.name} className="absolute" />
                <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-md py-1 px-5 rounded-full text-xs font-light">Region {product.region}</span>
            </div>
            <div className="h-full space-y-5 p-2 mt-3 flex flex-col justify-between">
                <ProductType productType={product.product_type} />

                <h2 className="text-lg font-bold">{product.name}</h2>

                <div>
                    <span className="text-xs opacity-80">Start from</span>
                    <p className="text-md font-bold text-main">{formatMoney(product.available_pick[0].price)}</p>
                </div>
                <a href={`detail/${product.id}`} className="button-style py-1 text-center">Beli</a>
            </div>

        </main>
    )
}