import {
  faHeart,
  faShoppingCart,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "../../component/Elements";
import axios from "axios";

const PostsCard = ({ post, disabled }) => {
  const [delet, setDelet] = useState(false);
  const dlete = (postid) => {
    axios.delete(`http://localhost:3001/data/${postid}`).then((res) => {
      console.log(res);
    });
    // rem(postid);
  };
  return (
    <div className="card w-100 center">
      <div className="card-start center">
        <img
          width="100%"
          alt="img"
          src={
            typeof post?.img === "string"
              ? "http://localhost:3000/" + post?.img
              : post?.img[0]
          }
        />
      </div>
      <div className="card-middle ">
        <h2>{post?.name}</h2>
        <div className="center w-100 justify-content-start">
          <p>
            {post.loves?.length}
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </p>
          <p>
            {post.addToCard}
            <span>
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
          </p>
        </div>
      </div>
      <div>
        {disabled ? (
          ""
        ) : (
          <div className="card-end center">
            <Button
              value={<FontAwesomeIcon icon={faTrash} />}
              action={() => {
                setDelet(true);
              }}
              clas="error"
            />
          </div>
        )}
      </div>
      {delet ? (
        <div className="deletmsg center flex-direction-column">
          <div className="w-100 h-50 center">
            <p>You Will Delet {post.name}!!</p>
          </div>
          <div className="w-100 h-50 center">
            <Button
              clas="error"
              action={() => {
                dlete(post.id);
                setDelet(false);
              }}
              value={<FontAwesomeIcon icon={faTrash} />}
            />
            <Button
              clas="primary"
              action={() => {
                setDelet(false);
              }}
              value="Cancel"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostsCard;
