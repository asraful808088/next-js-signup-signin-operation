const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const fileUploader = require("express-fileupload");
const handler = app.getRequestHandler();
const databaeInit = require("./../database/init");
const cookie_parser = require("cookie-parser");
const env = require("dotenv");
env.config();

app
  .prepare()
  .then(() => {
    const server = express();
    const auth = require("./routes/auth/main");
    const forgot = require("./routes/auth/forgot/main");
    const secret = require("./routes/auth/secret/secret");
    const login = require("./routes/auth/login/main");

    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(fileUploader({ useTempFiles: true }));
    server.use(cookie_parser(process.env.COOKIE_SECRET));
    server.use("/auth", auth);
    server.use("/auth/forgot", forgot);
    server.use("/auth/login", login);
    server.use("/auth/secret", secret);

    /**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 







 */

    server.get("*", (req, res) => {
      return handler(req, res);
    });
    server.listen(process.env.PORT, () => {
      console.log(`server Start in ${process.env.PORT} port `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
