import { Suspense } from "react";
import Product from "./_components/product";

export default function Home() {

  return (
    <div className="text-white font-sans">
      <Suspense fallback={<Laoading />}>
        <Product />
      </Suspense>
    </div>
  );
}

const Laoading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-center font-bold">Loading Data...</h1>
    </div>
  )
}