import {
  faAddressCard,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Select from "../../component/Select";
import Spiner from "../../component/Spiner";
const NotFound = lazy(() => import("../NotFound"));
const Setting = lazy(() => import("./Setting"));
const UserInfo = lazy(() => import("./UserInfo"));
const UserPam = lazy(() => import("./UserPam"));
const UserPosts = lazy(() => import("./UserPosts"));

const Users = () => {
  const lnkname = [
    "Profile Info",
    "Adds",
    "Purchases and memberships",
    "Setting",
  ];
  const lnk = ["/user/profile", "/user/adds", "/user/pam", "/user/setting"];
  const media = [
    <FontAwesomeIcon icon={faAddressCard} />,
    <FontAwesomeIcon icon={faGraduationCap} />,
    <FontAwesomeIcon icon={faAddressCard} />,
    <FontAwesomeIcon icon={faAddressCard} />,
  ];

  return (
    <div className="user w-100 center">
      <div className="sideNave center h-100 align-items-start">
        <ul className="w-100 text-center">
          <Select
            livalue={lnkname}
            media={media}
            urllist={lnk}
            id="user"
            active="selected"
          />
        </ul>
      </div>
      <div className="content h-100 center flex-direction-column justify-content-start">
        <Suspense fallback={<Spiner />}>
          <Routes>
            <Route path="/profile" element={<UserInfo />} />
            <Route path="/adds" element={<UserPosts />} />
            <Route path="/pam" element={<UserPam />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Users;
