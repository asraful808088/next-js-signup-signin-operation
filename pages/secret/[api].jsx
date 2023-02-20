// import React from "react";
import axios from "axios";
import background from "../../assets/background/token.png";
import Error from "../error/error";
import Token from "./token";
// import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(
//   () => import('yourcomponent using react apex-charts'),
//   { ssr: false }
// )

// export default function Secret({ token }) {

// }

// export async function getServerSideProps(context) {
//   const { api } = context.query;
//   const request = await axios.get(`/auth/secret/${api}`);
//   console.log(request.data)

//   return { props: { token: "api" } };
// }

function Page( data ) {
  
  return (
    <div
      className="w-[100%] h-[100%] absolute flex justify-center  items-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {data.success == true ? <Token  name={data.data.name} email={data.data.email} token={data.data.token}/> : <Error />}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // // Fetch data from external API
  let data = {};
  try {
    const res = await axios.get(
      `http://localhost:4000/auth/secret/${context.query.api}`
    );
    data = {
      success: true,
      data: res.data,
    };
  } catch (error) {
    data = {
      success: false,
      error: error.response.data.error,
    };
  }
  // const data = await res.data;

  // Pass data to the page via props
  return { props:data };
}

export default Page;
