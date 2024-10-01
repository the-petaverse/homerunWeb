import React, { useState } from "react";
import "./UserAvarta.css";
import { FaChevronDown } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const UserAvarta = () => {
  const [openAvatarMenu, setOpenAvatarMenu] = useState(false);
  const navigate = useNavigate();

  const handleOpenAvartarMenuModal = () => {
    setOpenAvatarMenu((prev) => !prev);
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="user-avatar-main-container">
      <div className="user-avatar-header" onClick={handleOpenAvartarMenuModal}>
        {/* <img src="" alt="" /> */}
        <RxAvatar size={30} />
        <p>Michael Oladele</p>
        <FaChevronDown size={25} color="gray" />
      </div>
      {openAvatarMenu && (
        <div className="user-avatar-menu">
          <ul>
            <li
              onClick={() => {
                handleNavigate();
                handleOpenAvartarMenuModal();
              }}
              className="flex"
            >
              <span className="user-avatar-logo-wrapper">
                <BsPerson size={25} />
              </span>
              My Account
            </li>
            <li className="flex">
              <span>
                <MdOutlineSettings />
              </span>
              Settings
            </li>
            <li className="flex">
              <span>
                <TbLogout2 />
              </span>
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvarta;
