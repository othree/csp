# CSP

```
const CSP = (directives) => {
  return directives
    .map((directive) => {
    	return `${directive.name} ${directive.value.join(' ')}`;
    })
    .join('; ') + ';';
};
```

Sample structure of directives:

```
[
  {
    name: 'default-src',
    value: ["'none'"]
  },
  {
    name: 'script-src',
    value: [
      "'self'",
      '*.flickr.com',
      'cdn.ampproject.org',
      '*.twitter.com',
      'disqus.com',
      '*.disqus.com',
      '*.disquscdn.com',
      '*.google-analytics.com',
      'speakerdeck.com',
      'apis.google.com'
    ]
  }
]

```

The data structure of directives is based on how to parse CSP section in the [Content Security Policy Level 3][p]

```
type Directive = {
  name: string;
  value: string[];
};

type Policy = {
  source: "header" | "meta";
  disposition: "enforce" | "report";
  directiveSet: Directive[];
};

type Policies = Policy[];
```

[g]:https://w3c.github.io/webappsec-csp/#framework-policy
[p]:https://github.com/google/csp-evaluator/blob/master/csp.ts
