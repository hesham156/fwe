import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense, useState } from "react";
import { lazy } from "react";
import Spiner from "../Spiner";
const PostsCard = lazy(() => import("../../pages/user/PostsCard"));
const Search = ({ plaseholde, data }) => {
  const [search, setSearch] = useState();

  return (
    <>
      <div className="search center ">
        <div className="h-100 center search-input">
          <input
            type="text"
            placeholder={plaseholde}
            onChange={(e) => {
              if (e.target.value) {
                setSearch(
                  data.filter((post) => {
                    return post.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  })
                );
              } else {
                setSearch("");
              }
            }}
          />
        </div>
        <div className="h-100 center search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <h2>{plaseholde}</h2>
      </div>
      <div className="search-return">
        {search
          ? search.map((post) => {
              return (
                <Suspense key={search.indexOf(post)} fallback={<Spiner />}>
                  <PostsCard post={post} disabled={true} />
                </Suspense>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default Search;
