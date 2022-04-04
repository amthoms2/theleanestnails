const router = require('express').Router();
const nodemailer = require('nodemailer');

const EMAIL = process.env.EMAIL;
console.log('testing email',EMAIL)
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theleanestnails.business@gmail.com',
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

router.post('/', (req, res) => {
  const name = req.body.Name;
  const email = req.body.Email;
  const number = req.body.Number;
  const comments = req.body.Comments;
  const mail = {
    from: name,
    to: 'theleanestnails.business@gmail.com',
    subject: 'Contact Form Submission - Leanest Nails',
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
