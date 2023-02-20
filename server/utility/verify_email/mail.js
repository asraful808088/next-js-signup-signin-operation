var nodemailer = require("nodemailer");
const nehb = require("nodemailer-express-handlebars");
const path = require("path");

async function send_mail({
  userEmail,
  hash_code,
  temp_api_key,
  subject,
  type,
}) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASS, // generated ethereal password
    },
  });
  transporter.use(
    "compile",
    nehb({
      viewEngine: {
        extname: ".handlebars",
        partialsDir: path.resolve(`${__dirname}../../../../template/${type}`),
        defaultLayout: false,
      },
      viewPath: path.resolve(`${__dirname}../../../../template/${type}`),
      extname: ".handlebars",
    })
  );

  const err = await transporter.sendMail({
    from: process.env.EMAIL,
    to: userEmail,
    subject: subject,
    template: "mail",
    attachments: [
      {
        path: `${__dirname}../../../../assets/background/mail.png`,
        filename: "mail.png",
        cid: "logo1",
      },
    ],
    context: {
      hash_code: hash_code,
      link: `http://localhost:4000/secret/${temp_api_key}`,
    },
  });

  if (err.accepted[0] == userEmail) {
    return true;
  } else {
    return false;
  }
}

module.exports = send_mail;
