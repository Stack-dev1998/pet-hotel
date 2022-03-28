import React,{useState} from "react";
import Image from "next/image";

import beagleIcon from "../public/icons/Beagle.svg";
import userIcon from "../public/icons/tag-user.svg";
import cardIcon from "../public/icons/card.svg";
import calendarIcon from "../public/icons/calendar.svg";
import diagramIcon from "../public/icons/diagram.svg";
import dollarCircleIcon from "../public/icons/dollar-circle.svg";
import profile2UserIcon from "../public/icons/profile-2user.svg";
import receiptIcon from "../public/icons/receipt.svg";
import insuranceIcon from "../public/icons/insurance.svg";
import taskSquareIcon from "../public/icons/task-square.svg";
function Sidebar(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      
      <h1 className="text-4xl font-medium tracking-wide text-center">
        Your Business
      </h1>
      <div className="flex align-middle my-4">
        <p className=" font-medium">LISTING</p>
        <label className="switch ml-4 mr-2">
          <input
            type="checkbox"
            onClick={() => setToggle(!toggle)}
            defaultChecked={toggle ? true : false}
          />
          <span className="slider round"></span>
        </label>
        <span className=" text-sm opacity-50 my-auto">
          {toggle ? "ON" : "OFF"}
        </span>
      </div>
      <div className="top_button flex flex-col justify-center px-12 ">
        <div className="flex">
          <Image src={userIcon} alt='img'/>
          <p className="text-white ml-6 font-semibold cursor-pointer">Occupants</p>
        </div>
      </div>
      <div className="flex flex-col justify-center px-12  mt-4">
        <div className="flex my-4">
          <Image src={beagleIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer"> Pooch Marketplace</p>
        </div>
        <div className="flex my-4">
          <Image src={receiptIcon} width={20} height={20} alt='img'/>
          <p className=" ml-6 cursor-pointer"> Invoices</p>
        </div>
        <div className="flex my-4">
          <Image src={cardIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Payments</p>
        </div>
        <div className="flex my-4">
          <Image src={profile2UserIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Employees</p>
        </div>
        <div className="flex my-4">
          <Image src={calendarIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Calendar</p>
        </div>
        <div className="flex my-4">
          <Image src={taskSquareIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Quickbooks</p>
        </div>
        <div className="flex my-4">
          <Image src={diagramIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Analytics </p>
        </div>
        <div className="flex my-4">
          <Image src={dollarCircleIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Capital</p>
        </div>
        <div className="flex my-4">
          <Image src={insuranceIcon} alt='img'/>
          <p className=" ml-6 cursor-pointer">Insurance</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
