const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) => {
  await sgMail.send({
    to: email,
    from: 'bigalbal.reivin@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendCancellationEmail = async (email, name) => {
  await sgMail.send({
    to: email,
    from: 'bigalbal.reivin@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you sometime soon.`

  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}

// sgMail.send({
//   to: 'bigalbal.reivin@gmail.com',
//   from: 'bigalbal.reivin@gmail.com',
//   subject: 'This is my first creation',
//   text: 'I hope this one actually get to you.'
// }).then(() => {}, error => {
//   console.error(error);

//   if (error.response) {
//     console.error(error.response.body)
//   }
// });