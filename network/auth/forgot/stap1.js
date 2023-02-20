import axios from "axios";
export default async function stap1({updateData,updateStap,inputData}){
  
    updateData((data) => ({
        ...data,
        emailError: null,
        secretError: null,
      }));
      const form = new FormData();
      form.append("secret", inputData.secret);
      form.append("email", inputData.email);
      try {
        const response = await axios({
          method: "post",
          url: "/auth/forgot",
          data: form,
          headers: {
            "Content-Type": `multipart/form-data`,
          },
        });
        if (response.data) {
          updateStap((s) => s - 1);
        }
      } catch (error) {
        console.log(error.response.data)
        if (error.response.data.email) {
          updateData((data) => ({
            ...data,
            emailError: error.response.data.email.msg,
          }));
        }
        if (error.response.data.secret) {
          updateData((data) => ({
            ...data,
            secretError: error.response.data.secret.msg,
          }));
        }
      }
}