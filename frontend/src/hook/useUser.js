import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../context/datacontext";

const useUser = (id) => {
  // const [userBy, setUser] = useState();
  const { getUserById, user } = useContext(productsContext);

  useEffect(() => {
    getUserById(id);
  }, [id]);
  return user;
};

export default useUser;
