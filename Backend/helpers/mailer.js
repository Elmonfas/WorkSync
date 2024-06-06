const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "monfasbusiness@gmail.com",
      pass: "llrr ggmn bnra keyk",
    },
});

async function mailer(email, requested_day, message) {

    try {

    const info = await transporter.sendMail({
        from: '"WORKSYNC 🔔" <monfasbusiness@gmail.com>',
        to: `${email}`,
        subject: "NEW REQUEST FOR " + requested_day + " 📌",
        html: message , 
      });
  
        
    } catch (e) {

        console.log(e)
        
    }

}

module.exports = mailer;