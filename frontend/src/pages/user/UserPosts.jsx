import { faMars, faPlus, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import Search from "../../component/Header/Search";
import { Button, Input } from "../../component/Elements";
import { productsContext } from "../../context/datacontext";
import axios from "axios";

import Option from "../../component/Option";
import Uploading from "../../component/Uploading";
import { toast } from "react-toastify";
import PostsCard from "./PostsCard";

const UserPosts = () => {
  const {
    userPosts,
    getuserposts,
    allPosts,
    getAllPosts,
    getAllTypes,
    alltype,
  } = useContext(productsContext);
  const [show, setshow] = useState(false);
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [sex, setSex] = useState("Male");
  const [age, setAge] = useState();
  const [des, setDes] = useState();
  const [img, setimg] = useState();
  const [Type, setType] = useState("Cats");

  let types = alltype.map((type) => {
    return type.name;
  });
  let imgs = alltype.map((type) => {
    return type.img;
  });
  let icons = [
    <FontAwesomeIcon icon={faMars} />,
    <FontAwesomeIcon icon={faVenus} />,
  ];

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getuserposts(user?.id);
    getAllTypes();
  }, []);
  let myImg = [];
  // img?.split(",").filter((i) => {
  //   return i !== "undefined";
  // });
  const post = () => {
    let id = allPosts[allPosts.length - 1]?.id + 1;
    setData("k");
    console.log(img);
    if (name && Type && sex && img && age && price && des) {
      axios.put(
        "https://fwev1-7c005-default-rtdb.firebaseio.com/data/" + id + ".json",
        {
          id: id,
          loves: [],
          addToCard: [],
          type: Type,
          price: price,
          userid: user.id,
          name: name,
          sex: sex,
          age: age,
          des: des,
          img: img,
          imgs: myImg,
        }
      );
      setType("");
      setPrice("");
      setName("");
      toast.success("post success");
      show ? setshow(false) : setshow(true);
    } else {
      toast.error("please enter all data");
    }
  };
  return (
    <div className="w-100 center flex-direction-column">
      <div className="addAdds center w-100 flex-direction-column">
        <Button
          value={<FontAwesomeIcon icon={faPlus} />}
          action={() => {
            show ? setshow(false) : setshow(true);
          }}
          clas="primary"
        />

        {show ? (
          <div className="form-add center w-100 flex-direction-column flex-wrap">
            <Option options={types} imgs={imgs} setvalue={setType} />
            <Option
              options={["Male", "Female"]}
              icons={icons}
              setvalue={setSex}
            />
            <Input
              type="file"
              onChange={(e) => {
                setimg(e.target.files[0]);
                myImg.push(img);
                console.log(myImg);
              }}
            />

            <Uploading
              types={["text", "number", "number", "text"]}
              placeholders={["name", "age", "price", "description"]}
              setvalue={[setName, setAge, setPrice, setDes]}
              btnvalue="Add"
              action={() => {
                post();
              }}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <Search plaseholde="search" data={userPosts} />
      <div className="userAdds center w-100 flex-direction-column">
        {userPosts.map((post) => {
          return (
            <PostsCard
              post={post}
              key={post.id}
              rem={() => {
                setData();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserPosts;
