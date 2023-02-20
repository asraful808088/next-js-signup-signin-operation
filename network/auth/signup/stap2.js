import axios from "axios";
export default async function stap2({ updateStap, inputData ,setData }) {

  setData((data) => ({
    ...data,
    passwordError: null,
    co_passwordError: null,
  }));
  if (inputData.password==inputData.co_password) {
    const form = new FormData();
  form.append("password", inputData.password);
  try {
    const response = await axios({
      method: "post",
      url: "/auth/stap2",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    if (response.data) {
      updateStap((s) => s - 1);
    }
  } catch (error) {
    if (error.response.data.password) {
      setData((data) => ({
        ...data,
        passwordError: error.response.data.password.msg,
      }));
    }
   
  }
  }else{
    console.log("error")
    setData((data) => ({
        ...data,
        co_passwordError: "password does not match",
      }));
  }
  
}
