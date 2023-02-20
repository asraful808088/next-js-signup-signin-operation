
import axios from "axios";
async function login({ email, password }) {
    const formData = new FormData()
    formData.append("email",email)
    formData.append("password",password)
    const response = await axios({
        method: "post",
        url: "/auth/login",
        data: formData,
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      });
}
export default login;
