const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

async function PostContact(contactForm) {
  const client = new SNSClient({ region: 'ap-south-1' });
  var params = {
    Message: JSON.stringify(contactForm, null, 2),
    TopicArn: 'arn:aws:sns:ap-south-1:519894366314:propertyportal',
  };
  try {
    const data = await client.send(new PublishCommand(params));
    console.log('Success.', data);
    return data;
  } catch (err) {
    console.log('Error', err.stack);
  }
}

export default PostContact;
