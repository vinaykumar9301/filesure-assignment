exports.handler = async (event) => {
    const { request } = event.Records[0].cf;
    const userAgent = request.headers['user-agent'][0].value;
  
    if (/bot|crawl|spider/i.test(userAgent)) {
      return request; // Allow known crawlers
    } else if (/malicious-bot/i.test(userAgent)) {
      return { status: '403', statusDescription: 'Forbidden' };
    }
  
    return request;
  };
  