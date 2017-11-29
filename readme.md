# Notification service to AWS S3 file upload

A node.js fucntion that sends an sms message using [Twilio)(www.twilio.com) when a .png image file is uploaded to an AWS S3 bucket. 

## Instalation

1. Clone the repo.

2. Install Twilio: 
```js
 run npm install
```

3. Edit a vars.yml file with the following lines:
```yml
# environment variables
  var:
    IMG_BUCKET: 'Unique bucket name'
    MY_PHONE: 'Your Phone number to receive msg'
    TWILLIO_PHONE: 'Twilio account phone number'
    ACCOUNTSID: 'TwilioAccountSid'
    AUTHTOKEN: 'TwilioAccountToken'
```

4. Edit the serverless.yml file and change the user profile for aws
```yml
profile: serverless-profile
```

## Run

Upload a image to the AWS S3 bucket informed in Instalation step 3 and receive a sms message.

## View logs

Check the log for the S3 event:

```serverless
serverless logs -f postprocess -t
```