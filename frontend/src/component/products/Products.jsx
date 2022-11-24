import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Spiner from "../Spiner";
const ProductsCard = lazy(() => import("./ProductsCard"));
const Products = () => {
  return (
    <div className="products container center flex-wrap">
      <Suspense fallback={<Spiner />}>
        <Routes>
          <Route path="/:type" element={<ProductsCard all={true} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Products;
