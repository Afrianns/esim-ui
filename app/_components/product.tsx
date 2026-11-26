"use client"

import { ESIMProductType } from "@/app/types/productType";
import data from "@/app/data/products.json"

import Card from "@/app/_components/card";
import Search from "@/app/_components/search";
import { Suspense, useMemo, useState } from "react";
import Filter from "./filter";
import { useSearchParams } from "next/navigation";


export default function Product() {
  const searchParams = useSearchParams();

  const [search, setSearch] = useState<string>("");

  const currentRegion = searchParams.get('region');
  const currentProductType = searchParams.get('type');

  const filteredResult = useMemo(() => {
    const q = search.trim().toLowerCase();

    return data.filter((item) => {
        if(currentRegion && currentRegion != "all") item.region.toLowerCase() === currentRegion.toLowerCase()
        return item
      }
    ).filter((item) => {
        if(currentProductType && currentProductType != "all") item.product_type.toLowerCase() === currentProductType.toLowerCase()
        return item
      }
      
    ).filter((item) => {
        if(!q) return item

        return [item.name, item.product_type, item.region].some((field) =>
          field?.toLowerCase().includes(q)
      )}
    );
  }, [data, search, currentRegion, currentProductType]);

  return (
    <>
      <div className="container-style">
        <section className="flex items-center gap-x-2 hover:bg-main-dark/20 rounded-md w-fit px-2 my-5 cursor-pointer">
          <h3 className="font-bold">Travel eSIM</h3>
        </section>
      </div>
      <section className="flex flex-col h-dvh">
        <div>
          <Search setSearch={setSearch} />
          <Suspense fallback={<div>Loading filters...</div>}>
            <Filter />
          </Suspense>
        </div>

        <div className="wrapper-card-style py-6 mt-5">
          <div className="container-style">
            {filteredResult.length >= 1 ? 
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <>
                      {filteredResult.map((product) => (
                        <Card key={product.id} product={product as ESIMProductType} />
                      ))}
                    </>
                </div>
              : 
                <EmptyListing />
              }
          </div>
        </div>
      </section>
    </>
  )
}


const EmptyListing = () => {
  return (
    <div className="text-center my-5 w-full h-full">
      <h3 className="text-center font-medium text-main-dark/50">There is no eSIM available.</h3>
    </div>
  )
}