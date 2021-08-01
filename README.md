# CSP

## Usage

Just copy the code snippets to your function and use it. See [examples][] to learn more.

[examples]:https://github.com/othree/csp/tree/master/examples/

```javascript
const CSP = (directives) => {
  return directives
    .map((directive) => {
    	return `${directive.name} ${directive.value.join(' ')};`;
    })
    .join(' ');
};
```

Minimized:

```javascript
const CSP = p => p.map(d => `${d.name} ${d.value.join(' ')};`).join(' ');
```

Sample structure of directives:

```json
[
  {
    "name": "default-src",
    "value": ["'none'"]
  },
  {
    "name": "script-src",
    "value": [
      "'self'",
      "*.flickr.com",
      "cdn.ampproject.org",
      "*.twitter.com",
      "disqus.com",
      "*.disqus.com",
      "*.disquscdn.com",
      "*.google-analytics.com",
      "speakerdeck.com",
      "apis.google.com"
    ]
  }
]

```

## MISC

The data structure of directives is based on section 2.2 in the [Content Security Policy Level 3][p].

Data structure in TypeScript notation:

```typescript
type Source = string;

type Directive = {
  name: string;
  value: Source[];
};

type Policy = {
  source: "header" | "meta";
  disposition: "enforce" | "report";
  directiveSet: OrderedSet<Directive>;
};

type Policies = Policy[];
```

[g]:https://w3c.github.io/webappsec-csp/#framework-policy
[p]:https://github.com/google/csp-evaluator/blob/master/csp.ts
