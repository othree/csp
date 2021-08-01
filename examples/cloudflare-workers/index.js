const CSP = p => p.map(d => `${d.name} ${d.value.join(' ')};`).join(' ');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // This proxies your Pages application under the condition that your Worker script is deployed on the same custom domain as your Pages project
  const response = await fetch(request)
  
  // Clone the response so that it is no longer immutable
  const newResponse = new Response(response.body, response)

  newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
  newResponse.headers.set('Referrer-Policy', 'same-origin');

  newResponse.headers.set('Content-Security-Policy', CSP(
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
  ));

  return newResponse;
}

