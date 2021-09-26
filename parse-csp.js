const parseCSP = (policy) => {
  return policy.split(";").reduce((directives, directive) => {
    const tokens = directive.trim().split(" ");
    const name = tokens.shift();

    if (name) {
      directives.push({
        name,
        value: tokens,
      });
    }

    return directives;
  }, []);
};
