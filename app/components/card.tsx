import { formatMoney } from "@/app/lib/formatMoney";
import { ESIMProductType } from "@/app/types/product";
import Image from "next/image";

export default function Card({product}: {product: ESIMProductType}) {
    return (
        <main key={product.id} className="flex flex-col h-110 p-2 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all rounded-xl border border-gray-300 bg-white">
            <div className="h-100 relative rounded-lg overflow-hidden">
                <Image fill src={product.images[0]} alt={product.name} className="absolute" />
                <span className="absolute top-2 right-2 bg-white/80 backdrop-blur-md py-1 px-5 rounded-full text-xs font-light">Region {product.region}</span>
            </div>
            <div className="h-full space-y-5 p-2 mt-3 flex flex-col justify-between">
                <div className="flex items-center gap-x-1.5 bg-main-light/20 w-fit px-4 rounded-xl text-main text-sm">
                    {product.product_type == "instant" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14L14 3v7h6L10 21v-7z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                            <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5m-4-1h.01M19 22v-6m3 3l-3-3l-3 3M6 12h.01" />
                            <circle cx="12" cy="12" r="2" />
                        </g>
                        </svg>
                    }
                    <p>{product.product_type}</p>
                </div>

                <h2 className="text-lg font-bold">{product.name}</h2>

                <p className="text-md font-bold text-main">{formatMoney(product.price)}</p>
                <button className="button-style py-1 px-5">Beli</button>
            </div>

        </main>
    )
}