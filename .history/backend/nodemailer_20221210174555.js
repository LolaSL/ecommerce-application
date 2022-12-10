
const nodemailer = require('nodemailer');
const smtpConfig = {
    pool: true,
    maxconnections: 10,
    maxmessages: 50, // possible 'infinity'
    socketTimeout: 500000,
    rateLimit: 2,
    rateDelta: 3000,
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'helloartgallery2021@gmail.com',
        pass: 'wfrdhwvdmhcvzpfy'
    },

    from: 'Mailer Test <helloartgallery2021@gmail.com>', // Sender address

}


// const poolconfig = "smtps://helloartgallery2021@gmail.com:wfrdhwvdmhcvzpfy@smtp.gmail.com/?pool=true"
transporter = nodemailer.createTransport(smtpConfig);


console.log(transporter);

transporter.verify((error, success) => {
    error ? console.log(error) :
        console.log('Server is ready for mailing', success);
});
const mailer = message => {
    transporter.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
            // transporter.close()
        }


    })
};
module.exports = mailer;
