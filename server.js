var express=require('express');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var app=express();
var bodyParser = require('body-parser');

var smtpTransport = nodemailer.createTransport((smtpTransport({
  host: 'smtp.gmail.com',
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
    user: 'pintostack.bot@gmail.com',
    pass: 'V%+2Z2KWP]3eYN'
  }
})));

app.use(express.static('dist'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/',function(req,res){
  res.sendfile('./dist/index.html');
});

app.post('/send',function(req,res){
  var mailOptions={
    to: ' info@devicehive.com',
    from:  'pintostack.bot@gmail.com',
    subject: 'PintoStack Feedback',
    html : req.body.name + '<br>' + req.body.emailFrom + '<br>' + req.body.company + '<br>' + req.body.text
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
    }
  });
});
app.listen(3000,function(){
  console.log("Express Started on Port 3000");
});
