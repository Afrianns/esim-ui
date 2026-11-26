"use client"

import { useState } from "react";
import FilterMenu from "./filterMenu";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Filter() {

  const regions = ["Amerika", "Oseania", "Eropa", "Afrika", "Asia"]

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const [selectedRegion, setSelectedRegion] = useState<string>(searchParams.get('region') || "all")
  const [selectedProductType, setSelectedProductType] = useState<string>(searchParams.get('type') || "all")


  const [filterState, setFilterState] = useState<Record<string, boolean>>({
      "region": false,
      "product-type": false
  });


  const toggleFilter = (id: string) => {
    setFilterState(prev  => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const isStateTrue = Object.values(filterState).some(Boolean);

  const closeFilterMenu = () => setFilterState(prev => Object.fromEntries(Object.keys(prev).map((key) => [key, false])) as typeof prev)


  const showPickedRegion = (type: string) => setSelectedRegion(type)
  
  const pickedProductType = (type: string) => setSelectedProductType(type)

  const updateFilterProductType = () => {
    
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', selectedProductType);

    router.replace(`${pathname}?${params.toString()}`);
  }
  
  const updateFilterRegion = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('region', selectedRegion);

    router.replace(`${pathname}?${params.toString()}`);
  }

  const resetRegion = () => setSelectedRegion("all")

  const resetProductType = () => setSelectedProductType("all")

  return (
    <>
      <FilterMenu toggleFilter={toggleFilter} />
      <div className="space-y-3">
        <div className={`transition-all duration-200 h-full fixed top-0 left-0 right-0 bottom-0 bg-main-dark/30 z-10 ${isStateTrue ? "block" : "hidden"}`} onClick={closeFilterMenu}></div>

        <div className={`transition-all duration-200 w-full bg-white fixed z-11 left-0 right-0 bottom-0 rounded-t-4xl text-black space-y-8 ${isStateTrue && filterState["product-type"] ? "h-100 py-6 px-5" : "-h-100 p-0"} ${isStateTrue && filterState["region"] ? "h-140 py-6 px-5" : "h-0 p-0"}`}>

            {filterState["region"] && 
              <section className="container-style horizontal-filled-layout-style space-y-10">
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-bold text-2xl">Pilih Region</h3>
                  <button className="reset-button-style" onClick={() => resetRegion()}>Reset</button>
                </div>
                
                <ul className="flex flex-col space-y-8 font-medium text-lg">
                  <li>
                    <label className="radio-list-style" htmlFor="radio-0">
                      Semua Region
                      <input type="radio" value="all" id="radio-0" onChange={e => showPickedRegion(e.target.value)} checked={selectedRegion == "all"} name="region" className="w-6 h-6 accent-main" /> 
                    </label>
                  </li>
                  {regions.map((region, idx) => {
                    return (
                      <li key={region}>
                        <label className="radio-list-style" htmlFor={`radio-${idx+1}`}>
                          {region} 
                          <input type="radio" value={region} id={`radio-${idx+1}`} onChange={e => showPickedRegion(e.target.value)} checked={selectedRegion == region} name="region" className="w-6 h-6 accent-main" />
                        </label>  
                      </li>
                    )
                  })}
                </ul>
                <button className="py-3 w-full button-style" onClick={updateFilterRegion}>Terapkan</button>
              </section>
            }
            {filterState["product-type"] && 
              <section className="container-style horizontal-filled-layout-style">
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-bold text-2xl">Pilih Jenis Produk</h3>
                  <button className="reset-button-style" onClick={() => resetProductType()}>Reset</button>
                </div>
                
                <ul className="flex flex-col space-y-10 font-medium text-lg">
                  <li>
                    <label className="radio-list-style" htmlFor="radio-1">
                      Semua Jenis Produk 
                      <input type="radio" value="all" name="product-type" id="radio-1" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "all"} className="w-6 h-6 accent-main" /> 
                    </label>
                  </li>
                  <li>
                    <label className="radio-list-style" htmlFor="radio-2">
                      Instant 
                      <input type="radio" value="instant" name="product-type" id="radio-2" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "instant"} className="w-6 h-6 accent-main" />
                    </label>
                  </li>
                  <li>
                    <label className="radio-list-style" htmlFor="radio-3">
                      Topupable 
                      <input type="radio" value="topupable" name="product-type" id="radio-3" onChange={e => pickedProductType(e.target.value)} checked={selectedProductType == "topupable"} className="w-6 h-6 accent-main" />
                    </label>
                  </li>
                </ul>
                <button className="py-3 w-full button-style" onClick={updateFilterProductType}>Terapkan</button>
              </section>
            }
        </div>
      </div>
    </>
  )
}
