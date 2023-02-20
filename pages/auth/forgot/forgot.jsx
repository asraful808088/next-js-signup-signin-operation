import Image from "next/image";
import React, { useContext, useState } from "react";
import TextInput from "../../../components/textInput/input";
import authdata from "../../../data/auth/authdata";
import main from "../../../network/auth/forgot/main";
export default function Forgot() {
  const [image, setImage] = useState(null);
  const [imagePath, setPath] = useState(null);
  const [fileError, setError] = useState(null);
  const [index, setIndex] = useState(1);
  const [eye, setEyeToggle] = useState({
    password: true,
    co_password: true,
  });
  const data = useContext(authdata);
  const [userInputData, setData] = useState({
    secret: "",
    email: "",
    password: "",
    co_password: "",
    token: "",
    tokenError: null,
    hash_code: "",
    secretError: null,
    emailError: null,
    passwordError: null,
    co_passwordError: null,
    hash_codeError: null,
  });
  const changeValue = (value) => {
    const userData = { ...userInputData };
    userData[value.target.id] = value.target.value;
    setData(userData);
  };

  return (
    <div className=" h-[100%] w-[100%] relative flex flex-col  overflow-hidden    justify-around items-center">
      <div className=" h-36 w-36    relative">
        <Image src={require("../../../assets/logo/forgot.png")} alt={""} />
      </div>
      <div
        className="w-[300%] h-[50%]   relative flex  flex-row   transition-all   "
        style={{
          transform: `translateX(${33.333333 * index}%)`,
        }}
      >
        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"secret"}
            type={"name"}
            placeholder={"Secret"}
            value={userInputData.secret}
            error={userInputData.secretError}
            onChange={changeValue}
          />
          <TextInput
            id={"email"}
            type={"email"}
            placeholder={"email"}
            value={userInputData.email}
            error={userInputData.emailError}
            onChange={changeValue}
          />
        </div>
        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"password"}
            type={"password"}
            placeholder={"Password"}
            value={userInputData.password}
            onChange={changeValue}
            passwordHide={eye.password}
            error={userInputData.passwordError}
            onPressEye={() => {
              setEyeToggle({ ...eye, password: !eye.password });
            }}
          />
          <TextInput
            id={"co_password"}
            type={"password"}
            placeholder={"Co-password"}
            error={userInputData.co_passwordError}
            value={userInputData.co_password}
            onChange={changeValue}
            passwordHide={eye.co_password}
            onPressEye={() => {
              setEyeToggle({ ...eye, co_password: !eye.co_password });
            }}
          />
        </div>

        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"hash_code"}
            type={"code"}
            placeholder={"#code"}
            value={userInputData.hash_code}
            error={userInputData.hash_codeError}
            onChange={changeValue}
          />
          <TextInput
            id={"token"}
            type={"token"}
            placeholder={"token"}
            value={userInputData.token}
            error={userInputData.tokenError}
            onChange={changeValue}
          />
        </div>
      </div>
      <div className=" h-20 w-[100%]  relative flex   justify-around ">
        <div
          className=" h-11 w-11   cursor-pointer   relative"
          onClick={() => {
            if (index < 1) {
              setIndex((s) => s + 1);
            }
          }}
        >
          <Image src={require("../../../assets/icons/arrow.png")} alt="" />
        </div>
        <div
          className=" h-11 w-11   rotate-180  cursor-pointer relative"
          onClick={() => {
            console.log("sdasdsa");
            main({
              inputData: userInputData,
              updateData: setData,
              currentStap: index,
              updateStap: setIndex,
            });
          }}
        >
          <Image src={require("../../../assets/icons/arrow.png")} alt="" />
        </div>
      </div>
      <div className="h-5  mb-2 flex justify-around items-center">
        <p>
          Already have an account ?{" "}
          <span
            className=" cursor-pointer hover:underline text-sky-600"
            onClick={() => {
              data.switch(0);
            }}
          >
            LogIn
          </span>
        </p>
      </div>
    </div>
  );
}
