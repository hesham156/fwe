import React, { useContext, useEffect, useState } from "react";
import {
  faDollarSign,
  faHeart,
  faMars,
  faShareNodes,
  faShoppingCart,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productsContext } from "../context/datacontext";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
const Card = ({ postD }) => {
  const nave = useNavigate();
  const { type } = useParams();
  // Details State
  const [det, setdet] = useState(false);
  // Get User From Localstorage
  const localUser = JSON.parse(localStorage.getItem("user"));
  // import Data from Context
  const { updateUser, updatePosts, getUserById, user } =
    useContext(productsContext);
  const goToLog = () => {
    nave("/login", { replace: true });
  };
  const { name, sex, img, id, des, addToCard, loves, price } = postD;
  const [love, setLove] = useState(false);
  // add love
  let arrOfLoves = loves;
  let arrOfUserLoves = user[0]?.loves;
  const addLove = () => {
    if (
      arrOfLoves.filter((userId) => {
        return userId === user[0]?.id;
      }).length === 0 &&
      user[0] &&
      arrOfUserLoves.filter((postId) => {
        return postId === id;
      }).length === 0
    ) {
      setLove(true);
      arrOfLoves.push(user[0]?.id);
      arrOfUserLoves.push(id);
    } else {
      setLove(false);

      arrOfLoves = arrOfLoves?.filter((loveId) => {
        return loveId !== user[0].id;
      });
      arrOfUserLoves = arrOfUserLoves?.filter((userId) => {
        return userId !== id;
      });
    }
    updatePosts(id, { loves: arrOfLoves });
    updateUser(user[0]?.id, { loves: arrOfUserLoves });
  };
  // For Show Details
  const showDetials = () => {
    det ? setdet(false) : setdet(true);
  };
  let idL = arrOfUserLoves?.filter((postId) => {
    return postId === id;
  }).length;
  useEffect(() => {
    getUserById(localUser?.id);
  }, [type, love]);
  return (
    <>
      <div className="pro-card position-relative center flex-direction-column">
        <div
          className="pro-image w-100 center"
          onClick={() => {
            showDetials();
          }}
        >
          <img width="100%" src={img} alt="" />
        </div>
        <div className="pro-detils w-100 center">
          <button
            className={(idL === 1 ? "love" : "") + " lov-btn"}
            onClick={() => {
              localUser ? addLove() : goToLog();
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <div className="w-50 text-center">
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
          <div className="w-50 text-center">
            <FontAwesomeIcon icon={sex === "male" ? faMars : faVenus} />
          </div>
        </div>
      </div>

      <div className={(det ? "det-active" : " ") + " details"}>
        <div className="container h-100 position-relative center">
          <div className="center flex-direction-column position-absolute det-card w-50">
            <div className="center det-card-top w-100">
              <img width="100%" src={img} alt={name} />
            </div>
            <button
              onClick={() => {
                localUser ? addLove() : goToLog();
              }}
              className={(idL === 1 ? "love" : "") + " lov-btn"}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              onClick={() => {
                localUser ? addLove() : goToLog();
              }}
              className={"share-btn lov-btn"}
            >
              <FontAwesomeIcon icon={faShareNodes} />
            </button>
            <div className="center det-card-bottom w-100">
              <div className="center select-img">
                <img width="80%" src={img} alt={name} />
              </div>
              <div className="center select-img">
                <img width="80%" src={img} alt={name} />
              </div>
            </div>
          </div>
          <div className="center justify-content-start align-items-start det-data right-0 h-100 position-absolute w-50 flex-direction-column">
            <div className="center flex-direction-column det-data-top">
              <div className="center align-items-start flex-direction-column">
                <h3>{name}</h3>
                <p>{des}</p>

                <p>
                  {price} <FontAwesomeIcon icon={faDollarSign} />
                </p>
                <div className="center">
                  <p>
                    {loves?.length} <FontAwesomeIcon icon={faHeart} />
                  </p>
                  <p>
                    {addToCard?.length}{" "}
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <Button className="my" size="large" variant="contained">
                Make Friend
              </Button>
            </div>
          </div>
          <button
            className="closeButton"
            onClick={() => {
              showDetials();
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
