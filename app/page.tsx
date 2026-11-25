import Image from "next/image";
import Header from "./components/header";
import Card from "./components/card";

import data from "@/app/data/products.json"
import { ProductType } from "./types/product";

export default function Home() {

  const products = data as ProductType[];

  return (
    <div className="h-full text-white font-sans">
      <Header />
      <main className="grid grid-cols-2 gap-5 absolute bottom-0 bg-white text-black w-full h-fit top-60 rounded-t-[30px] p-5">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}
