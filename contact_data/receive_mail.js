const express = require('express')
const nodemailer = require('nodemailer')
const nodemailMailgun = require('nodemailer-mailgun-transport');


const auth = {
    api_keys: '',
    domain: ''
}

// our transporter

let transporter = nodemailer.createTransport(nodemailMailgun(auth));

const mailOptions = {
    from: '',
    to: '',
    subject: '',
    body: '' 
}

transporter.sendMail(mailOptions, (err,data) => {
    if(err) {
        console.log(err)
    }
    else {
        console.log('Email sent')
    }
})

console.log(data.title);


    