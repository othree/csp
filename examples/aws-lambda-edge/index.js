const CSP = p => p.map(d => `${d.name} ${d.value.join(' ')};`).join(' ');

function handler(event) {
  var response = event.response;
  var headers = response.headers;

  // Set HTTP security headers
  // Since JavaScript doesn't allow for hyphens in variable names, we use the dict["key"] notation 
  headers['strict-transport-security'] = { value: 'max-age=63072000; includeSubdomains; preload'}; 

  // headers['content-security-policy'] = { value: "default-src 'none'; img-src 'self'; script-src 'self' *.google-analytics.com speakerdeck.com apis.google.com; style-src 'self';" }; 
  headers['content-security-policy'] = { value: CSP(
    [
      {
        name: "default-src",
        value: ["'none'"],
      },
      {
        name: "img-src",
        value: ["'self'"],
      },
      {
        name: "script-src",
        value: [
          "'self'",
          "*.google-analytics.com",
          "speakerdeck.com",
          "apis.google.com",
        ],
      },
      {
        name: "style-src",
        value: ["'self'"],
      },
    ]
  )};

  headers['x-content-type-options'] = { value: 'nosniff'}; 
  headers['x-frame-options'] = {value: 'DENY'}; 
  headers['x-xss-protection'] = {value: '1; mode=block'}; 

  // Return the response to viewers 
  return response;
}
