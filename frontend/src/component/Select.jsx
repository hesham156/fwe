import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Select = ({
  livalue,
  active,
  urllist,
  id,
  liclass,
  media,
  aClass,
  title,
}) => {
  const [show, setshow] = useState(window.location.pathname);

  useEffect(() => {
    setshow(window.location.pathname);
  }, [setshow, window.location.pathname]);
  return (
    <>
      {urllist?.map((url) => {
        return (
          <li key={urllist.indexOf(url)} className={liclass}>
            <Link
              to={url}
              id={id}
              className={(show === url ? active : "") + " " + aClass}
              onClick={(e) => {
                setshow(url);
              }}
            >
              {id === "user" ? (
                <>
                  <span className="media">{media[urllist.indexOf(url)]}</span>

                  <span className="side">{livalue[urllist.indexOf(url)]}</span>
                </>
              ) : (
                <>
                  {livalue[urllist.indexOf(url)]}
                  {title ? title[urllist.indexOf(url)] : ""}
                </>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Select;
