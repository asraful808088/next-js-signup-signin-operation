import axios from "axios";
export default async function final({ updateData, updateStap, inputData }) {
  updateData((data) => ({
    ...data,
    hash_codeError: null,
    tokenError:null
  }));
  const form = new FormData();
  form.append("token", inputData.token);
  form.append("password", inputData.password);
  form.append("hash_code", inputData.hash_code);
  form.append("email", inputData.email);
  try {
    const response = await axios({
      method: "post",
      url: "/auth/forgot/final",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    // if (response.data) {
    //   updateStap((s) => s - 1);
    // }
  } catch (error) {
    console.log(error.response)
    if (error.response.data?.hash_code) {
      updateData((data) => ({
        ...data,
        hash_codeError: error.response.data.hash_code,
      }));
    }
    if (error.response.data?.token) {
      updateData((data) => ({
        ...data,
        tokenError: error.response.data.token,
      }));
    }
  }
}
