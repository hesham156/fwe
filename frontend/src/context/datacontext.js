import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import "../asset/img/cat1.png";
import "../asset/img/dog1.png";
import "../asset/img/egile1.png";
import "../asset/img/pigeon1.png";
import "../asset/img/rabbit1.png";
import "../asset/img/snake.png";

export const productsContext = createContext();
const TheApi = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUserByid] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [alltype, setAlltypes] = useState([]);
  const [post, setpost] = useState([]);
  const getAllPosts = async () => {
    await axios
      .get(`https://fwev1-7c005-default-rtdb.firebaseio.com/data.json`)
      .then((res) => {
        setAllPosts(res.data);
      });
    console.log("g");
  };
  const getUsers = async () => {
    await axios
      .get("https://fwev1-7c005-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        setUsers(response.data);
      });
    console.log("g");
  };
  const getAllTypes = async () => {
    await axios
      .get(`https://fwev1-7c005-default-rtdb.firebaseio.com/type.json`)
      .then((res) => {
        setAlltypes(res.data);
      });
    console.log("g");
  };
  useEffect(() => {
    getAllPosts();
    getUsers();
    getAllTypes();
  }, []);
  const getAllProducts = (type) => {
    setAllProducts(
      allPosts.filter((d) => {
        return d?.type === type;
      })
    );
  };
  const getPostById = (postid) => {
    setpost(
      allPosts.filter((p) => {
        return p.id === postid;
      })
    );
  };

  const getUserById = (id) => {
    setUserByid(
      users?.filter((us) => {
        return us?.id === id;
      })
    );
  };
  const setUser = (name, email, pass, id) => {
    axios
      .post("https://fwev1-7c005-default-rtdb.firebaseio.com/users.json", {
        id: id,
        name: name,
        email: email,
        password: pass,
        phone: "0478790880",
        city: "tanta",
        loves: [],
        card: [],
      })
      .then((response) => {
        console.log(response);
      });
  };
  const getuserposts = (userid) => {
    setUserPosts(
      allPosts?.filter((post) => {
        return post?.userid === userid;
      })
    );
  };

  const updateUser = (userid, data) => {
    axios.patch(`http://localhost:3001/users/${userid}`, data).then((res) => {
      console.log(res);
    });
  };
  return (
    <productsContext.Provider
      value={{
        allProducts: allProducts,
        getAllProducts: getAllProducts,
        getUsers: getUsers,
        setUser: setUser,
        users: users,
        user: user,
        getUserById: getUserById,
        getuserposts: getuserposts,
        userPosts: userPosts,
        getAllPosts: getAllPosts,
        allPosts: allPosts,
        getAllTypes: getAllTypes,
        alltype: alltype,
        updateUser: updateUser,
        getPostById: getPostById,
        post: post,
      }}
    >
      {props.children}
    </productsContext.Provider>
  );
};
export default TheApi;
