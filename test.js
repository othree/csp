const test = require('tape');

const CSP = require('./');
const CSPmin = require('./index.min.js');

test('Normal', function (t) {
  t.plan(1);

  const expected = "default-src 'none'; script-src 'self' *.flickr.com cdn.ampproject.org *.twitter.com cdn.syndication.twimg.com disqus.com *.disqus.com *.disquscdn.com *.google-analytics.com speakerdeck.com apis.google.com; style-src 'unsafe-inline' 'self' platform.twitter.com ton.twimg.com *.disquscdn.com; img-src 'self' geo.yahoo.com feeds.feedburner.com *.twimg.com *.twitter.com ton.twimg.com *.disqus.com *.disquscdn.com *.static.flickr.com *.static.flickr.com *.staticflickr.com *.google-analytics.com amp-error-reporting.appspot.com upload.wikimedia.org i.imgur.com data:; frame-src jsfiddle.net embed-ssl.ted.com syndication.twitter.com disqus.com *.google.com www.facebook.com platform.twitter.com speakerdeck.com www.youtube.com www.youtube-nocookie.com http://embed.ted.com; font-src themes.googleusercontent.com; connect-src 'self' geo.query.yahoo.com embedr.flickr.com *.disqus.com www.google-analytics.com;";

  const policy = {
    directives: [
      {
        name: 'default-src',
        value: ["'none'"],
      },
      {
        name: 'script-src',
        value: [
          "'self'",
          '*.flickr.com',
          'cdn.ampproject.org',
          '*.twitter.com',
          'cdn.syndication.twimg.com',
          'disqus.com',
          '*.disqus.com',
          '*.disquscdn.com',
          '*.google-analytics.com',
          'speakerdeck.com',
          'apis.google.com',
        ],
      },
      {
        name: 'style-src',
        value: [
          "'unsafe-inline'",
          "'self'",
          'platform.twitter.com',
          'ton.twimg.com',
          '*.disquscdn.com',
        ],
      },
      {
        name: 'img-src',
        value: [
          "'self'",
          'geo.yahoo.com',
          'feeds.feedburner.com',
          '*.twimg.com',
          '*.twitter.com',
          'ton.twimg.com',
          '*.disqus.com',
          '*.disquscdn.com',
          '*.static.flickr.com',
          '*.static.flickr.com',
          '*.staticflickr.com',
          '*.google-analytics.com',
          'amp-error-reporting.appspot.com',
          'upload.wikimedia.org',
          'i.imgur.com',
          'data:',
        ],
      },
      {
        name: 'frame-src',
        value: [
          'jsfiddle.net',
          'embed-ssl.ted.com',
          'syndication.twitter.com',
          'disqus.com',
          '*.google.com',
          'www.facebook.com',
          'platform.twitter.com',
          'speakerdeck.com',
          'www.youtube.com',
          'www.youtube-nocookie.com',
          'http://embed.ted.com',
        ],
      },
      {
        name: 'font-src',
        value: [
          'themes.googleusercontent.com'
        ],
      },
      {
        name: 'connect-src',
        value: [
          "'self'",
          'geo.query.yahoo.com',
          'embedr.flickr.com',
          '*.disqus.com',
          'www.google-analytics.com',
        ],
      },
    ],
  };

  t.equal(CSP(policy.directives), expected);
});

test('Minimized', function (t) {
  t.plan(1);

  const expected = "default-src 'none'; script-src 'self' *.flickr.com cdn.ampproject.org *.twitter.com cdn.syndication.twimg.com disqus.com *.disqus.com *.disquscdn.com *.google-analytics.com speakerdeck.com apis.google.com; style-src 'unsafe-inline' 'self' platform.twitter.com ton.twimg.com *.disquscdn.com; img-src 'self' geo.yahoo.com feeds.feedburner.com *.twimg.com *.twitter.com ton.twimg.com *.disqus.com *.disquscdn.com *.static.flickr.com *.static.flickr.com *.staticflickr.com *.google-analytics.com amp-error-reporting.appspot.com upload.wikimedia.org i.imgur.com data:; frame-src jsfiddle.net embed-ssl.ted.com syndication.twitter.com disqus.com *.google.com www.facebook.com platform.twitter.com speakerdeck.com www.youtube.com www.youtube-nocookie.com http://embed.ted.com; font-src themes.googleusercontent.com; connect-src 'self' geo.query.yahoo.com embedr.flickr.com *.disqus.com www.google-analytics.com;";

  const policy = {
    directives: [
      {
        name: 'default-src',
        value: ["'none'"],
      },
      {
        name: 'script-src',
        value: [
          "'self'",
          '*.flickr.com',
          'cdn.ampproject.org',
          '*.twitter.com',
          'cdn.syndication.twimg.com',
          'disqus.com',
          '*.disqus.com',
          '*.disquscdn.com',
          '*.google-analytics.com',
          'speakerdeck.com',
          'apis.google.com',
        ],
      },
      {
        name: 'style-src',
        value: [
          "'unsafe-inline'",
          "'self'",
          'platform.twitter.com',
          'ton.twimg.com',
          '*.disquscdn.com',
        ],
      },
      {
        name: 'img-src',
        value: [
          "'self'",
          'geo.yahoo.com',
          'feeds.feedburner.com',
          '*.twimg.com',
          '*.twitter.com',
          'ton.twimg.com',
          '*.disqus.com',
          '*.disquscdn.com',
          '*.static.flickr.com',
          '*.static.flickr.com',
          '*.staticflickr.com',
          '*.google-analytics.com',
          'amp-error-reporting.appspot.com',
          'upload.wikimedia.org',
          'i.imgur.com',
          'data:',
        ],
      },
      {
        name: 'frame-src',
        value: [
          'jsfiddle.net',
          'embed-ssl.ted.com',
          'syndication.twitter.com',
          'disqus.com',
          '*.google.com',
          'www.facebook.com',
          'platform.twitter.com',
          'speakerdeck.com',
          'www.youtube.com',
          'www.youtube-nocookie.com',
          'http://embed.ted.com',
        ],
      },
      {
        name: 'font-src',
        value: [
          'themes.googleusercontent.com'
        ],
      },
      {
        name: 'connect-src',
        value: [
          "'self'",
          'geo.query.yahoo.com',
          'embedr.flickr.com',
          '*.disqus.com',
          'www.google-analytics.com',
        ],
      },
    ],
  };

  t.equal(CSPmin(policy.directives), expected);
});
