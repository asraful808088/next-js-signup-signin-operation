import Image from "next/image";
import React, { useContext, useState } from "react";
import TextInput from "../../../components/textInput/input";
import authdata from "../../../data/auth/authdata";
import main from "../../../network/auth/signup/main";
export default function Signup() {
  const [image, setImage] = useState(null);
  const [imagePath, setPath] = useState(null);
  const [index, setIndex] = useState(1);
  const data = useContext(authdata);

  const [eye, setEyeToggle] = useState({
    password: true,
    co_password: true,
  });
  const [userInputData, setData] = useState({
    name: "",
    email: "",
    password: "",
    co_password: "",
    hash_code: "",
    nameError: null,
    emailError: null,
    passwordError: null,
    co_passwordError: null,
    hash_codeError: null,
    fileError: null,
  });
  const changeValue = (value) => {
    const userData = { ...userInputData };
    userData[value.target.id] = value.target.value;
    setData(userData);
  };

  return (
    <div className=" h-[100%] w-[100%] relative flex flex-col  overflow-hidden    justify-around items-center">
      <div className=" h-36 w-36    relative">
        <Image src={require("../../../assets/logo/create.png")} alt={""} />
      </div>
      <div
        className="w-[300%] h-[50%]   relative flex  flex-row   transition-all   "
        style={{
          transform: `translateX(${33.333333 * index}%)`,
        }}
      >
        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"name"}
            type={"name"}
            value={userInputData.name}
            error={userInputData.nameError}
            onChange={changeValue}
            placeholder={"enter your name"}
          />
          <TextInput
            id={"email"}
            type={"email"}
            value={userInputData.email}
            error={userInputData.emailError}
            onChange={changeValue}
            placeholder={"enter your email"}
          />
        </div>
        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"password"}
            type={"password"}
            placeholder={"enter your password"}
            error={userInputData.passwordError}
            value={userInputData.password}
            onChange={changeValue}
            passwordHide={eye.password}
            onPressEye={() => {
              setEyeToggle({ ...eye, password: !eye.password });
            }}
          />
          <TextInput
            id={"co_password"}
            placeholder={"enter your Co-password"}
            error={userInputData.co_passwordError}
            type={"password"}
            value={userInputData.co_password}
            onChange={changeValue}
            passwordHide={eye.co_password}
            onPressEye={() => {
              setEyeToggle({ ...eye, co_password: !eye.co_password });
            }}
          />
        </div>

        <div className="min-w-[33.333333%] h-[100%] flex   justify-around items-center flex-col">
          <div className=" h-52 w-52 cursor-pointer  rounded-full overflow-hidden bg-white">
            <label htmlFor="file">
              <Image
                className="cursor-pointer"
                src={
                  image != null
                    ? imagePath
                    : require("../../../assets/logo/user.png")
                }
                alt=""
                height={208}
                width={208}
              />
              <input
                type="file"
                className="   hidden"
                onChange={(e) => {
                  if (e.target.files != null) {
                    if (
                      e.target.files[0].type == "image/png" ||
                      e.target.files[0].type == "image/jpg" ||
                      e.target.files[0].type == "image/jpeg"
                    ) {
                      if (userInputData.fileError != null) {
                        setData({ ...userInputData, fileError: null });
                      }
                      setImage(e.target.files[0]);
                      setPath(URL.createObjectURL(e.target.files[0]));
                    } else {
                      setData({
                        ...userInputData,
                        fileError: "only png, jpg, & jpeg allow",
                      });
                    }
                  }
                }}
                name="file"
                id="file"
              />
            </label>
          </div>
          <p className=" text-red-900 font-bold">{userInputData.fileError}</p>
        </div>
        <div className="min-w-[33.333333%] h-[100%] flex  justify-around items-center flex-col">
          <TextInput
            id={"hash_code"}
            type={"code"}
            placeholder={"#code"}
            value={userInputData.hash_code}
            onChange={changeValue}
            error={userInputData.hash_codeError}
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
            // setIndex((s) => s - 1);
            main({
              currentStap: index,
              updateStap: setIndex,
              inputValue: userInputData,
              setData,
              image,
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
