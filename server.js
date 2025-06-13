const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

// 📬 Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_app_password'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your_email@gmail.com',
    subject: 'New Contact Submission',
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.send('Error sending message.');
    res.send('Message sent successfully!');
  });
});

// 📘 Assignment form route
app.post('/assignment', (req, res) => {
  const { topic, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'workshackofficial@gmail.com',
      pass: 'budozxoouqztwsto'
    }
  });

  const mailOptions = {
    from: 'no-reply@workshack.com',
    to: 'workshackofficial@gmail.com',
    subject: 'New Assignment Submission',
    text: `Assignment Topic: ${topic}\nSubject: ${subject}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.send('Error sending assignment.');
    res.send('Assignment submitted successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
