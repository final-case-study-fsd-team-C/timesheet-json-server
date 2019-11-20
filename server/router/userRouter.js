const nodemailer = require("nodemailer");
require("dotenv").config();
module.exports = app => {
  app.post("/invite", (req, res) => {
    console.log(req.body);
    nodemailer.createTestAccount((err, account) => {
      const htmlEmail = ` <h3> Contact Details</h3>
      <ul>
      <li> Name: ${req.body.name}</li>
      <li> Email: ${req.body.Email}</li></ul>
      <ul>
      <h3> Message</h3>
    <p> ${req.body.message} </p>
      `;
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });

      let mailOptions = {
        from: "nnode4352@gmail.com", // sender address
        to: `${req.body.Email}`, // list of receivers
        subject: "Join Me", // Subject line
        text: `${req.body.message}`, // plain text body
        html: `${req.body.message}` // html body
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return console.log("Error");
        }

        console.log("Message :  %s", info.message);
      });
    });
  });
};
