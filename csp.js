const CSP = (directives) => {
  return directives
    .map((directive) => {
      return `${directive.name} ${directive.value.join(' ')};`;
    })
    .join(' ');
};
