# CSP

## Motivation

When writing Lambda@Edge functions, I always prefer not to use any NPM modules to reduce
the complexity when deploying. This approach also helps reduce the total code size. 
But without any helper. It is tough to maintain the CSP header. So I implement this small 
function to help manage the CSP in a structured data format. And don't need to add too much 
code or use any NPM module.

## Usage

Just copy the code snippets to your function and use it. See [examples][] for real use case.

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

Compact:

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

[p]:https://w3c.github.io/webappsec-csp/#framework-policy
[g]:https://github.com/google/csp-evaluator/blob/master/csp.ts
