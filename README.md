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

https://w3c.github.io/webappsec-csp/#framework-policy
https://github.com/google/csp-evaluator/blob/master/csp.ts
