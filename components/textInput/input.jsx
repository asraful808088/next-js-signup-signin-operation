import Image from "next/image";
import React from "react";
import code from "../../assets/icons/code.png";
import coin from "../../assets/icons/coin.png";
import email from "../../assets/icons/email.png";
import hide from "../../assets/icons/hidden.png";
import name from "../../assets/icons/name.png";
import password from "../../assets/icons/password.png";
import shield from "../../assets/icons/shield.png";
import show from "../../assets/icons/view.png";
export default function TextInput({
  error,
  type,
  passwordHide,
  onChange,
  value,
  id,
  onPressEye,
  placeholder
}) {
  return (
    <div className="w-[95%]  ">
      <div
        className={` h-12 mb-1 w-[100%] relative overflow-hidden border-2  flex   rounded-3xl ${
          error != null ? "   border-red-600" : "border-stone-800"
        }`}
      >
        <div className="h-12 w-12 relative flex  justify-center items-center ">
          <div className="h-6 w-6 ">
            <Image
              src={
                type == "email"
                  ? email
                  : type == "name"
                  ? name
                  : type == "code"
                  ? code
                  : type == "token"
                  ? coin
                  : type == "password"
                  ? password
                  : type == "shield"
                  ? shield
                  : ""
              }
              alt=""
            />
          </div>
        </div>{" "}
        <div className="ml-1 relative h-[100%] w-[100%]">
          {" "}
          <input
            id={id}
            type={
              type == "email"
                ? "email"
                : type == "password" && passwordHide == true
                ? "password"
                : "text"
            }
            className="h-[100%] w-[100%] bg-transparent    outline-0"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        </div>{" "}
        <div
          className={`h-12 w-12  absolute  flex  justify-center items-center right-0  cursor-pointer ${
            type == "password" ? " flex" : " hidden"
          }`}
        >
          <div className="h-8 w-8 " onClick={onPressEye}>
            <Image src={passwordHide == true ? show : hide} alt="" />
          </div>
        </div>
      </div>
      <p className={` text-red-900  font-bold`}>{error}</p>
    </div>
  );
}
