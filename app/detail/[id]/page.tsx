
import data from "@/app/data/products.json"
import { notFound } from "next/navigation";
import ProductType from "@/app/components/productType";
import ImageShowcase from "./_components/imageShowcase";
import QuotaList from "./_components/quotaList";
import Price from "./_components/price";
import DurationList from "./_components/durationList";


export const instant = false;

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params

  const product = data.find((item) => String(item.id) === id);

  if(!product) notFound();

  return (
    <main className="flex flex-col h-dvh">

      <ImageShowcase images={product.images} name={product.name} />

      <div className="relative bg-white text-black w-full rounded-t-[30px] flex-1 p-5 z-5 -mt-10 space-y-5">
        <div className="flex items-center justify-between mt-5">
          <div>
            <h1 className="text-lg font-bold">{product.name}</h1>
            <p className="text-md text-main-dark/50">Region {product.region}</p>
          </div>
          <Price />
        </div>
        <ProductType productType={product.product_type} />

        <div className="w-full border-main-dark border rounded-md bg-main-dark/10 py-3 px-5">
          <h3 className="font-bold text-xl">Cakupan Negara</h3>
          <p className="text-lg text-main-dark/70">{product.region}</p>
        </div>

        <h3 className="text-lg font-bold">Ukuran Data.</h3>

        <QuotaList quotas={product.available_pick} />

        <h3 className="text-lg font-bold">Pilih Jumlah Hari.</h3>

        <DurationList durations={product.available_duration} />

        <h3 className="text-lg font-bold">Deskripsi.</h3>

        <ul className="list-disc ml-5">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta tempore culpa rem. Tempore possimus explicabo minus veritatis esse harum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, corrupti?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias similique incidunt a eveniet quisquam fugiat!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil qui ab, dolor, delectus optio provident tempore numquam reiciendis inventore impedit dolore?</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea nobis delectus.</li>
        </ul>

        <button className="button-style py-3 w-full">Beli Sekarang</button>
      </div>
    </main>
  )
}
