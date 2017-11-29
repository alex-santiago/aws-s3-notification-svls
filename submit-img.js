'use strict';
const AWS = require('aws-sdk'); 
const vars = require('./vars');

// twilio process #############
// Twilio Credentials
const accountSid = process.env.ACCOUNTSID; 
const authToken = process.env.AUTHTOKEN; 

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// send sms function
const sendsms = (message) => {
  const params = {
      to: process.env.MY_PHONE, 
      from: process.env.TWILLIO_PHONE, 
      body: message,
    };

  client.messages
  .create(params)
  .then(result => console.log(result.sid))
  .catch(error => {
      console.error(error);
      callback(new Error('Couldn\'t send message.'));
      return;
  });
};
// twilio process END #############

module.exports.onsave = (event) => {
  console.log('before event');
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const filesize = record.s3.object.size;
    var message = `New .png object has been created: ${filename} (${filesize} bytes)`;
    console.log(message);
    sendsms(message);
  });
};