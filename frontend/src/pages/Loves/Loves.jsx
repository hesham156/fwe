import React, { Suspense, useContext, useEffect, useState } from "react";
import Spiner from "../../component/Spiner";
import { lazy } from "react";
import { productsContext } from "../../context/datacontext";
const Card = lazy(() => import("../../component/Card"));
const Loves = () => {
  // const user = useUser(JSON.parse(localStorage.getItem("user"))?.id);
  const { allPosts, getUserById, user } = useContext(productsContext);

  const [loves, setLoves] = useState(user[0]?.loves);

  useEffect(() => {
    getUserById(JSON.parse(localStorage.getItem("user"))?.id);

    setLoves(user[0]?.loves);
  }, []);

  const UPost = loves?.map((id) => {
    return allPosts?.filter((post) => {
      return post?.id === id;
    });
  });
  return (
    <div className="center flex-wrap">
      {UPost?.map((post) => {
        return (
          <Suspense key={UPost?.indexOf(post)} fallback={<Spiner />}>
            <Card postD={post[0]} />
          </Suspense>
        );
      })}
    </div>
  );
};

export default Loves;
