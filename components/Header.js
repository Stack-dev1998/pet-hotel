import React, { useState } from "react";
import Image from "next/image";

import ProfileImage from "../public/images/ProfileImage.png";
import searchIcon from "../public/icons/searchIcon.svg";
import messageIcon from "../public/icons/message-text.svg";
import notificationIcon from "../public/icons/notification.svg";
import chevronIcon from "../public/icons/chevron.svg";
function Header(props) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="flex justify-between pb-3 border-b-2 border-[#F1F6FC]">
      <div className="flex align-middle">
        <Image src={ProfileImage} />
        <p className="my-auto font-semibold ml-4">Your Business</p>
      </div>
      <div className="search_box2 p-0 h-10   rounded-full bg-white w-1/3 border-[#D5EAF0] flex justify-between align-middle my-auto">
        <input
          type="text"
          placeholder="Search"
          className=" w-full focus:outline-none rounded-full px-1"
        />
        <Image src={searchIcon} className=" cursor-pointer" />
      </div>
      <div className="flex">
        <Image src={messageIcon} />
        <div className=" relative my-auto bg-[#FBFBFB] rounded-xl px-3 py-2 ml-3">
          <Image src={notificationIcon} className=" absolute" />
          <span
            className=" absolute bg-[#81D0DF] text-white rounded-full text-xs   my-auto w-5 h-5 flex align-middle justify-center"
            style={{ top: "-6px", right: "0" }}
          >
            <span className="my-auto">3</span>
          </span>
        </div>
        <div className="relative w-full border  rounded-md  px-3 py-1 ml-3 cursor-pointer ">
          <div
            className="flex justify-between align-middle bg-white"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          >
            <p className="flex flex-col">
              <span className=" font-semibold text-sm">Administrator</span>
              <span className=" opacity-50 text-xs">ID:12333</span>
            </p>
            <span
              className={`my-auto ${
                toggleDropdown ? "rotate_dropdown_icon" : "reset_dropdown_icon"
              }`}
            >
              <Image src={chevronIcon} />
            </span>
          </div>
          <div
            className={`absolute left-0 top-14 box_shadow text-sm bg-white border-2 border-[#F1F6FC] w-full divide-y z-10  ${
              toggleDropdown ? "show_dropdown" : "hide_dropdown"
            }`}
          >
            <p className="p-2">Acount setting</p>
            <p className=" p-2 ">Support</p>
            <p className="p-2">Licence</p>
            <p className="p-2">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
