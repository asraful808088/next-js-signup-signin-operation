import Image from "next/image";
import React from "react";
export default function Error({}) {
  return (
    <div className="w-300 h-300  flex justify-around  flex-col  items-center  md:w-500 md:h-500 ">
      <div className="w-200 h-200 md:w-300 md:h-300  relative">
        <Image
          src={require("./../../assets/icons/error.png")}
          alt=""
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <p
        className="sm:text-5xl text-3xl md:text-7xl text-orange-700 "
        style={{
          fontFamily: "Lobster",
        }}
      >
        Not Host Found
      </p>
    </div>
  );
}
