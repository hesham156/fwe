import React, { useContext } from "react";
import Select from "../Select";
import Search from "./Search";
import { productsContext } from "../../context/datacontext";
const Header = () => {
  const { allPosts, alltype } = useContext(productsContext);

  let url = alltype.map((url) => {
    return "/" + url.name;
  });
  let value = alltype.map((url) => {
    return <img src={url.img} alt={url.name} />;
  });
  return (
    <div className="header w-100 center flex-direction-column">
      <div className="container center w-100 h-100">
        <div className="center h-100 overflow-hidden justify-content-start overflow-auto">
          <ul className="center">
            <Select
              urllist={url}
              active="head-card-active"
              liclass="head-card center"
              livalue={value}
              aClass="aclass"
              title={alltype.map((url) => {
                return <p> {url.name}</p>;
              })}
            />
          </ul>
        </div>
      </div>
      <Search plaseholde="Find your friend" data={allPosts} />
    </div>
  );
};

export default Header;
