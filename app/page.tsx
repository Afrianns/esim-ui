import { Suspense } from "react";
import Product from "./_components/product";

export default function Home() {

  return (
    <div className="text-white font-sans">
      <Suspense fallback={<div>Loading filters...</div>}>
        <Product />
      </Suspense>
    </div>
  );
}
