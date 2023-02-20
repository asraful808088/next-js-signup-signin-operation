import axios from "axios";
export default async function final({ updateStap, inputData, setData, image }) {
  setData((data) => ({
    ...data,
    hash_codeError: null,
  }));
  const form = new FormData();
  form.append("name", inputData.name);
  form.append("email", inputData.email);
  form.append("password", inputData.password);
  form.append("hash_code", inputData.hash_code);
  form.append("file", image);
  try {
    const response = await axios({
      method: "post",
      url: "/auth/final",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });

    // if (response.data) {
    //   updateStap((s) => s - 1);
    // }
  } catch (error) {
    if (error.response.data.error) {
      setData((data) => ({
        ...data,
        hash_codeError: error.response.data.error,
      }));
    }
  }
}
