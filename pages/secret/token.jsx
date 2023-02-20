import React from "react";
export default function Token({ token, name, email }) {
  return (
    <div className="  h-300 w-[100%] md:w-700     flex flex-col  items-center justify-around">
      <header>
        <h1
          className=" text-7xl  text-blue md:text-9xl"
          style={{
            fontFamily: "Lobster",
          }}
        >
          Token
        </h1>
      </header>

      <div className="flex flex-col h-100  justify-around items-center">
        <p
          className="sm:text-xl md:text-xl  text-yellow-100 font-bold"
          style={{
            fontFamily: "Lobster",
          }}
        >
          Name :{"  "}
          <span className="  text-yellow-100  ">{name}</span>
        </p>
        <p
          className="sm:text-xl md:text-xl  text-yellow-100 font-bold"
          style={{
            fontFamily: "Lobster",
          }}
        >
          Token :{"  "}
          <span className="  text-yellow-100  ">{token}</span>
        </p>
        <p
          className="sm:text-xl md:text-xl  text-yellow-100 font-bold"
          style={{
            fontFamily: "Lobster",
          }}
        >
          Email :{"  "}
          <span className="  text-yellow-100  ">{email}</span>
        </p>
      </div>
    </div>
  );
}
