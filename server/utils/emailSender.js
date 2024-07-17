// const nodemailer = require('nodemailer');
// const fs = require("fs");
// const dotenv = require("dotenv");
// const path = require("path");
// const {all} = require("express/lib/application");
// dotenv.config();
//
//
// const { SENDGRID_API_KEY } = process.env;
//
// function replaceContent(content,creds){
// //This function replaces placeholders in the email template with actual values from creds.
// let allKeysarr =Object.keys(creds);
// allKeysarr.forEach(function (key){
//     content = content.replace(`#{${key}}`,creds[key]);
// })
//     return content;
// }
//
//
//
//
// async function EmailHelper(templateName,reciverEmail,creds){
//     //This function sends an email to the reciverEmail using the templateName and creds.
//     try{
//         const templatePath = path.join(__dirname,"email_templates",templateName);
//         let content = fs.readFileSync(templatePath,"utf-8");
//
//         const emailDetails = {
//             to:reciverEmail,
//             from:'r555sid@gmail.com' ,
//             subject:'OTP for password reset',
//             text:`Hi ${creds.name} this is your reset otp ${creds.otp}`,
//             html:replaceContent(content,creds),
//
//         }
//
//
//
//         const transportDetails ={
//
//         }
//     }
// }