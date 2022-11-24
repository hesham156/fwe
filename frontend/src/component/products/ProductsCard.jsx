import React, { Suspense, useContext, useEffect } from "react";
import { lazy } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../context/datacontext";
import Spiner from "../Spiner";
const Card = lazy(() => import("../Card"));
const ProductsCard = () => {
  let { type } = useParams();

  const { allProducts, getAllProducts } = useContext(productsContext);

  useEffect(() => {
    getAllProducts(type ? type : "Cats");
  }, [type]);

  return (
    <>
      {allProducts.map((post) => {
        return (
          <Suspense key={allProducts.indexOf(post)} fallback={<Spiner />}>
            <Card postD={post} />
          </Suspense>
        );
      })}
    </>
  );
};

export default ProductsCard;
