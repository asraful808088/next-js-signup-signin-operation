import React, { useState } from "react";
import subbackground from "../../assets/background/websub.png";
import Authdata from "../../data/auth/authdata";
import background from "../../icon_image/background/background.png";
import Forgot from "./forgot/forgot";
import Signup from "./signup/signup";
import Login from "./login/login";
export default function Auth() {
  const [index, setIndex] = useState(0);
  return (
    <Authdata.Provider value={{ switch: setIndex }}>
      <div
        className="w-[100%] h-[100%]   absolute flex justify-center  "
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-[100%] h-700  md:h-700 md:w-500 shadow-xl overflow-hidden  rounded-2xl  bg-gray-200  mt-[6%] mb-[10%] relative"
          style={{
            backgroundImage: `url(${subbackground.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {index == 0 ? <Login /> : index==1? <Signup />:<Forgot />}
          
        </div>
      </div>
    </Authdata.Provider>
  );
}
