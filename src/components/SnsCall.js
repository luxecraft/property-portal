const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');
const aws = require('aws-sdk');

async function PostContact(contactForm) {
  aws.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1',
  });
  var params = {
    Message: JSON.stringify(contactForm, null, 2),
    TopicArn: 'arn:aws:sns:ap-south-1:519894366314:propertyportal',
  };
  var publishTextPromise = new aws.SNS({ apiVersion: '2010-03-31' })
    .publish(params)
    .promise();

  // Handle promise's fulfilled/rejected states
  publishTextPromise
    .then(function(data) {
      console.log(
        `Message ${params.Message} sent to the topic ${params.TopicArn}`
      );
      console.log('MessageID is ' + data.MessageId);
    })
    .catch(function(err) {
      console.error(err, err.stack);
    });
}

export default PostContact;
