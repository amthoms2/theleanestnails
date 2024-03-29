const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const EMAIL = process.env.EMAIL;
  const NODEMAIL = process.env.NODEMAIL

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

  const mail = {
    from: name,
    to: NODEMAIL,
    subject: 'Leanest Nails - Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Number: ${number}</p>
           <p>Message: ${comments}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});

module.exports = router;

// html: `<p>Name: ${name}</p>
//                <p>Email: ${email}</p>
//                <p>Number: ${number}</p>
//                <p>Message: ${comments}</p>`,
