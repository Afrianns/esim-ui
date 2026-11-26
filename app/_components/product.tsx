"use client"

import { ESIMProductType } from "@/app/types/product";
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
        if(currentRegion && currentRegion != "all") {
          return item.region.toLowerCase() === currentRegion.toLowerCase()
        }
        return item
      }
    ).filter((item) => {
        if(currentProductType) {
          return item.product_type.toLowerCase() === currentProductType.toLowerCase()
        }
        return item
      }
      
    ).filter((item) => {
        if(!q) return item

        return [item.name, item.product_type, item.region].some((field) =>
          field?.toLowerCase().includes(q)
      )}
    );
  }, [data, search, currentRegion]);



  return (
    <>
      <section className="flex items-center gap-x-2 hover:bg-main-dark/20 rounded-md w-fit py-8 px-5 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 6l-6 6l6 6" />
        </svg>
        <h3>Travel eSIM</h3>
      </section>
      <section className="flex flex-col h-dvh">
        <div>
          <Search setSearch={setSearch} />
          <Suspense fallback={<div>Loading filters...</div>}>
            <Filter />
          </Suspense>
        </div>

        <div className="bg-white text-black w-full rounded-t-[30px] p-5 flex-1 mt-5">
            {filteredResult.length >= 1 ? 
                <div className="grid grid-cols-2 gap-5">
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