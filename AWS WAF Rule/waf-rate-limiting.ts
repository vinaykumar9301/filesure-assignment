aws wafv2 create-web-acl --name "MyWAF" --scope CLOUDFRONT \
--rules '[{
  "Name": "BlockBots",
  "Priority": 0,
  "Statement": {
    "RateBasedStatement": {
      "Limit": 2000,
      "AggregateKeyType": "IP"
    }
  },
  "Action": {
    "Block": {}
  },
  "VisibilityConfig": {
    "SampledRequestsEnabled": true,
    "CloudWatchMetricsEnabled": true,
    "MetricName": "BlockBotsMetric"
  }
}]' \
--visibility-config '{
  "SampledRequestsEnabled": true,
  "CloudWatchMetricsEnabled": true,
  "MetricName": "MyWAFMetric"
}' \
--default-action '{
  "Allow": {}
}'
