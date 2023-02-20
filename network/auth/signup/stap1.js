import axios from "axios";
export default async function stap1({ updateStap, inputData ,setData }) {
 
  setData((data) => ({
    ...data,
    emailError: null,
    nameError: null,
  }));
  const form = new FormData();
  form.append("name", inputData.name);
  form.append("email", inputData.email);
  try {
    const response = await axios({
      method: "post",
      url: "/auth",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    if (response.data) {
      updateStap((s) => s - 1);
    }
  } catch (error) {
    
console.log(error.response.data.name)
    if (error.response.data.email) {
      setData((data) => ({
        ...data,
        emailError: error.response.data.email.msg,
      }));
    }
    if (error.response.data.name) {
      setData((data) => ({
        ...data,
        nameError: error.response.data.name.msg,
      }));
    }
  }
}
