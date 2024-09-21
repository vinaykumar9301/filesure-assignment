const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

const params = {
  AlarmName: 'Lambda-Error-Alarm',
  MetricName: 'Errors',
  Namespace: 'AWS/Lambda',
  Period: 60,
  EvaluationPeriods: 1,
  Statistic: 'Sum',
  Threshold: 5,
  ComparisonOperator: 'GreaterThanThreshold',
  ActionsEnabled: true,
  AlarmActions: ['arn:aws:sns:region:account-id:sns-topic'],
  Dimensions: [
    {
      Name: 'FunctionName',
      Value: 'your-lambda-function-name'
    }
  ]
};

cloudwatch.putMetricAlarm(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
