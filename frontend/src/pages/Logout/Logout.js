import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const nave = useNavigate();
  useEffect(() => {
    localStorage.clear();
    nave("/login", { replace: true });
  }, []);

  return <div>Logout</div>;
};

export default Logout;
