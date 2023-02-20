import axios from "axios";
export default async function stap3({ updateStap, inputData, setData ,image}) {
 
  setData((data) => ({
    ...data,
    fileError: null,
  }));
  const form = new FormData();
  form.append("file", image);
  form.append("email", inputData.email);
  try {
    const response = await axios({
      method: "post",
      url: "/auth/file",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
    if (response.data) {
      updateStap((s) => s - 1);
    }
  } catch (error) {
    if (error.response.data.error) {
      setData((data) => ({
        ...data,
        fileError: error.response.data.error,
      }));
    }

  }
}
