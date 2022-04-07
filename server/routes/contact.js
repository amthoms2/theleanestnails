const router = require('express').Router();
const nodemailer = require('nodemailer');
const ejs = require('ejs');

router.post('/', (req, res) => {
  const EMAIL = process.env.EMAIL;
  const NODEMAIL = process.env.NODEMAIL;

  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAIL,
      pass: EMAIL,
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Ready to Send');
    }
  });

  const name = req.body.Name;
  const email = req.body.Email;
  const number = req.body.Number;
  const comments = req.body.Comments;

  ejs.renderFile(
    __dirname + '/Emails/contactEmail.ejs',
    { name: name },
    function (err, data) {
      if (err) {
        res.status(500).json(err)
      } else {
        const mail = {
          from: name,
          to: NODEMAIL,
          subject: 'Leanest Nails - Contact Form Submission',
          html: data,
        };

        contactEmail.sendMail(mail, (err) => {
          if (err) {
            res.status(500).json(err)
          } else {
            res.status(200).json('Message Sent')
          }
        });
      }
    }
  );
});

module.exports = router;

// html: `<p>Name: ${name}</p>
//                <p>Email: ${email}</p>
//                <p>Number: ${number}</p>
//                <p>Message: ${comments}</p>`,
