console.log('Loading event')

const aws = require('aws-sdk')
const ddb = new aws.DynamoDB({ params: { TableName: 'SESNotifications' } })

exports.handler = function (event, context, callback) {
  console.log('Received event:', JSON.stringify(event, null, 2))
  const [record] = event.Records
  const SnsPublishTime = record.Sns.Timestamp
  // let SnsTopicArn = record.Sns.TopicArn
  const SESMessage = JSON.parse(record.Sns.Message)
  console.log(`SESMessage`, SESMessage)
  const { notificationType, eventType, mail } = SESMessage
  const SESMessageType = notificationType || eventType

  const SESMessageId = mail.messageId
  const SESDestinationAddress = mail.destination.toString()
  // const LambdaReceiveTime = new Date().toString()
  console.log(`SESMessageType`, SESMessageType)
  if (!SESMessageType) return callback(null, '')

  if (SESMessageType === 'Bounce') {
    let SESreportingMTA = SESMessage.bounce.reportingMTA
    // let SESbounceSummary = JSON.stringify(SESMessage.bounce.bouncedRecipients)
    let itemParams = {
      Item: {
        SESMessageId: { S: SESMessageId },
        SnsPublishTime: { S: SnsPublishTime },
        SESreportingMTA: { S: SESreportingMTA },
        SESDestinationAddress: { S: SESDestinationAddress },
        // SESbounceSummary: { S: SESbounceSummary },
        SESMessageType: { S: SESMessageType }
      }
    }
    return putItem(itemParams, callback)
  } else if (SESMessageType === 'Complaint') {
    let SESComplaintFeedbackType = SESMessage.complaint.complaintFeedbackType
    let SESFeedbackId = SESMessage.complaint.feedbackId
    let itemParamscomp = {
      Item: {
        SESMessageId: { S: SESMessageId },
        SnsPublishTime: { S: SnsPublishTime },
        SESComplaintFeedbackType: { S: SESComplaintFeedbackType },
        SESFeedbackId: { S: SESFeedbackId },
        SESDestinationAddress: { S: SESDestinationAddress },
        SESMessageType: { S: SESMessageType }
      }
    }
    return putItem(itemParamscomp, callback)
  }
  return callback(null, '')
}

function putItem (params, callback) {
  ddb.putItem(params, function (err, data) {
    console.log(`PARAMS:`, params)
    if (err) {
      console.log(err)
      callback(err)
    } else {
      console.log(data)
      callback(null, '')
    }
  })
}
