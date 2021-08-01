const CSP = p => p.map(d => `${d.name} ${d.value.join(' ')};`).join(' ');

module.exports = CSP;
