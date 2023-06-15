const nodemailer = require('nodemailer');

async function sendEmail() {
  email=document.getElementById("NewsLetter").value;
  if (email === '') {
    alert('Please enter your email address');
  } else {
   
 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zacneley@gmail.com', // replace with your email address
      pass: 'fylukfpxzdelarfh' // replace with your email password or an app password if you have two-factor authentication enabled
    }
  });

  // create an email message
  const message = {
    from: 'zacneley@gmail.com', // replace with your email address
    to: email,
    subject: 'Welcome to our newsletter!',
    text: `Dear ${email},\n\nThank you for signing up for our newsletter. You will now receive the latest news and event postings from us.\n\nBest regards,\nThe Newsletter Team`
  };

  // send the email
  const result = await transporter.sendMail(message);
  console.log(result);
} }
module.exports=sendEmail();
