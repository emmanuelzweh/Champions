const express = require('express');
// const lodash = require('lodash');
const memberRouter = require('./routes/memberRoute');
const blogs = require('./newsData/newsContent');
const nodemailer = require('nodemailer');
const nodemailMailgun = require('nodemailer-mailgun-transport');

// setting up our web
const app = express();

// Adding site title 
app.locals.brandName = "Champions";
 
// setting views
app.set('view engine', 'ejs');

// setting static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

// listening to port
app.listen(3000, ()=>{
    console.log('listing to server');
})
 
// handling requests

app.get('/', (req, res) => {
    res.render('index', {title: "Home"})
})

app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

app.get('/gallery', (req, res) => {
    res.render('gallery', {title: "Gallery"})
})

app.get('/latest', (req, res) => {
    // the news blogs
    
    res.render('latest', {title: "latest news", blogs})
})

app.get('/contact', (req, res) => {
    
    res.render('contact', {title: "Contact us"});
})

// Post request
app.post('/users', (req, res) => {

    const data = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        body: req.body.body
    }

        // receiving users email
    // const auth = {
    //     api_keys: '',
    //     domain: ''
    // }
    
    // our transporter
    
    // let transporter = nodemailer.createTransport(nodemailMailgun(auth));
    
    // const mailOptions = {
    //     from: data.email,
    //     to: 'leschampionslib@gmail.com',
    //     subject: data.subject,
    //     body: data.body 
    // }
    
    // transporter.sendMail(mailOptions, (err,data) => {
    //     if(err) {
    //         console.log(err)
    //     }
    //     else {
    //         console.log('Email sent')
    //     }
    // })
    
    res.render('success', {title: "Success", data});


    console.log(req.body);
})




// member routers

app.use( memberRouter);

// app.use((req, res) => {
//     res.render('404', {title: "404"});
// });

// gettting user data from form






