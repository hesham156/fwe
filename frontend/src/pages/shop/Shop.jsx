import axios from "axios";
import React, { useEffect, useState } from "react";
import useUser from "../../hook/useUser";

const Shop = () => {
  const [posts, setPosts] = useState();
  const [id, setId] = useState();
  const user = useUser(JSON.parse(localStorage.getItem("user"))?.email);
  let po = [];
  useEffect(() => {
    user
      ? user[0]?.card?.map((id) => {
          axios.get("http://localhost:3001/data/" + id).then((res) => {
            setPosts(po);
            po.push(res.data);
            setId(id);
          });
        })
      : console.log("js");
  }, [user, id]);
  console.log(posts);
  return <div>Shop</div>;
};

export default Shop;
