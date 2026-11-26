import { notFound } from "next/navigation";
import ProductTag from "@/app/components/productTag";
import ImageShowcase from "./_components/imageShowcase";
import QuotaList from "./_components/quotaList";
import Price from "./_components/price";
import DurationList from "./_components/durationList";
import { singelProduct } from "@/app/lib/getSingleProduct";
import NextStepButton from "./_components/nextStepButton";

export const instant = false;

export default async function Detail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params

  const product = singelProduct(id)

  if(!product) notFound()

  return (
    <main className="flex flex-col h-dvh">

      <ImageShowcase images={product.images} name={product.name} />

      <div className="relative wrapper-card-style py-5 z-5 -mt-10">
        <div className="container-style horizontal-filled-layout-style">
          <div className="space-y-8 my-5">
            <div className="flex items-center justify-between mt-5">
              <div>
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="text-md text-main-dark/50">Region {product.region}</p>
              </div>
              <Price />
            </div>
            <ProductTag productTag={product.product_type} />

            <div className="w-full border-main-dark border rounded-md bg-main-dark/10 py-3 px-5">
              <h3 className="font-bold text-xl">Cakupan Negara</h3>
              <p className="text-lg text-main-dark/70">{product.region}</p>
            </div>
            
            
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Ukuran Data.</h3>
              <QuotaList quotas={product.available_pick} />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Pilih Jumlah Hari.</h3>
              <DurationList durations={product.available_duration} />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Deskripsi.</h3>

              <p>{product.description}</p>
            </div>
          </div>
          <NextStepButton />
        </div>
      </div>
    </main>
  )
}