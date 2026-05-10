var nm = require('nodemailer');
var transporter = nm.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { 
        user: 'manushyop@gmail.com',
        pass: 'yxkexggbzqgguhvl'
    }
});

var mailOptions = {
    from: 'manushyop@gmail.com',
    to: 'rathodmihir1113@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<h1>That was easy!</h1>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});