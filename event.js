const event = {
  Records: [
    {
      EventSource: 'aws:sns',
      EventVersion: '1.0',
      EventSubscriptionArn:
        'arn:aws:sns:us-east-1:724843117799:ses_notifications_repo:69cb4383-a765-4cda-91c0-e4f1cd0fc28c',
      Sns: {
        Type: 'Notification',
        MessageId: '9330555f-922b-5eb5-a0bc-0f11ea5bad7c',
        TopicArn: 'arn:aws:sns:us-east-1:724843117799:ses_notifications_repo',
        Subject: 'Amazon SES Email Event Notification',
        Message:
          '{"eventType":"Bounce","bounce":{"feedbackId":"0100017e25edad6b-7a9b11fc-8398-44db-a7e7-883a554d121e-000000","bounceType":"Permanent","bounceSubType":"General","bouncedRecipients":[{"emailAddress":"bounce@simulator.amazonses.com","action":"failed","status":"5.1.1","diagnosticCode":"smtp; 550 5.1.1 user unknown"}],"timestamp":"2022-01-04T16:30:40.606Z","reportingMTA":"dns; a8-44.smtp-out.amazonses.com"},"mail":{"timestamp":"2022-01-04T16:30:39.978Z","source":"andresfelipe9619@gmail.com","sourceArn":"arn:aws:ses:us-east-1:724843117799:identity/andresfelipe9619@gmail.com","sendingAccountId":"724843117799","messageId":"0100017e25edab6a-296197bf-50c0-4754-91e7-7f13e59acf60-000000","destination":["bounce@simulator.amazonses.com"],"headersTruncated":false,"headers":[{"name":"From","value":"andresfelipe9619@gmail.com"},{"name":"To","value":"bounce@simulator.amazonses.com"},{"name":"Subject","value":"BOUNCE CONFIG"},{"name":"MIME-Version","value":"1.0"},{"name":"Content-Type","value":"multipart/alternative;  boundary=\\"----=_Part_4687079_2041744101.1641313839981\\""}],"commonHeaders":{"from":["andresfelipe9619@gmail.com"],"to":["bounce@simulator.amazonses.com"],"messageId":"0100017e25edab6a-296197bf-50c0-4754-91e7-7f13e59acf60-000000","subject":"BOUNCE CONFIG"},"tags":{"ses:operation":["SendEmail"],"ses:configuration-set":["bounce-set"],"ses:source-ip":["191.95.24.213"],"ses:from-domain":["gmail.com"],"ses:caller-identity":["andres"]}}}\n',
        Timestamp: '2022-01-04T16:30:40.709Z',
        SignatureVersion: '1',
        Signature:
          'PuoteHBkkR7hMy1ZzWsK5UA06+HGQj+KvOHUmcsTH/LSdaJcD27Vbhs9H10wq+UOolyJAOpkIhEYSj+TMh7nDGlSDE/Oa4OQNZUAPmDxpjasZBtqHdgyHQFtQbY2wJQzImnm19g1bJw7ApPaiU63bi1KTbUAbvljShsxP/6Lru/sprBirjiqCX1i5bOOzevaR36+VOYk5AHvE8zZATLimE67KOp/V/Dmig0WClH1854P72hzomr6QC0+xE5UchYgKox232M5Bng4HTAiv8H8/eMaHXj2+z8tzZhGaGdyIkhi/jgmbrQGKNb0oSeJyENCYQY1G5PeY6L4d6sDXLQXWA==',
        SigningCertUrl:
          'https://sns.us-east-1.amazonaws.com/SimpleNotificationService-7ff5318490ec183fbaddaa2a969abfda.pem',
        UnsubscribeUrl:
          'https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:724843117799:ses_notifications_repo:69cb4383-a765-4cda-91c0-e4f1cd0fc28c',
        MessageAttributes: {}
      }
    }
  ]
}

module.exports = event
