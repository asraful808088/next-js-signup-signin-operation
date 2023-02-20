import Image from "next/image";
import React, { useContext, useState } from "react";
import TextInput from "../../../components/textInput/input";
import authdata from "../../../data/auth/authdata";
import login from "../../../network/auth/login/login";
export default function Login() {
  const [userInputData, setData] = useState({
    email: "",
    password: "",
    emailError: null,
    passwordError: null,
  });
  const [eye, setEyeToggle] = useState(true);
  const data = useContext(authdata);
  const changeValue = (value) => {
    const userData = { ...userInputData };
    userData[value.target.id] = value.target.value;
    setData(userData);
  };
  return (
    <div className=" h-[100%] w-[100%] relative flex justify-around flex-col items-center">
      <div className=" h-36 w-36    relative">
        <Image src={require("../../../assets/logo/login.png")} alt={""} />
      </div>
      <TextInput
        id={"email"}
        type={"email"}
        value={userInputData.email}
        error={userInputData.emailError}
        onChange={changeValue}
      />
      <TextInput
        id={"password"}
        type={"password"}
        value={userInputData.password}
        onChange={changeValue}
        passwordHide={eye}
        onPressEye={() => {
          setEyeToggle(!eye);
        }}
      />
      <div
        className=" w-52 h-14 bg-slate-500 flex justify-center  items-center rounded-full"
        onClick={() => {
          login({
            email: userInputData.email,
            password: userInputData.password,
          });
        }}
      >
        <div className="w-8 h-8 relative flex justify-center items-center  rotate-180">
          <Image src={require("../../../assets/icons/arrow.png")} alt={""} />
        </div>
      </div>
      <div className=" h-16 w-[100%] flex justify-around  items-center ">
        {" "}
        <p>
          No account ?{" "}
          <span
            className=" cursor-pointer hover:underline text-sky-600"
            onClick={() => {
              data.switch(1);
            }}
          >
            Signup
          </span>
        </p>
        <p>
          {" "}
          <span
            className=" cursor-pointer hover:underline text-sky-600"
            onClick={() => {
              data.switch(2);
            }}
          >
            Forgot account ?
          </span>
        </p>
      </div>
    </div>
  );
}
