const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

const params = {
  AlarmName: 'High-CPU-Alarm',
  ComparisonOperator: 'GreaterThanThreshold',
  EvaluationPeriods: 1,
  MetricName: 'CPUUtilization',
  Namespace: 'AWS/EC2',
  Period: 300,
  Statistic: 'Average',
  Threshold: 80.0,
  ActionsEnabled: true,
  AlarmActions: ['arn:aws:sns:region:account-id:sns-topic'],
  Dimensions: [
    {
      Name: 'InstanceId',
      Value: 'your-instance-id'
    }
  ]
};

cloudwatch.putMetricAlarm(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else console.log(data);
});
