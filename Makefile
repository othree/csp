all: index.js index.compact.js

index.js: csp.js
	cat csp.js > index.js
	echo "" >> index.js
	echo "module.exports = CSP;" >> index.js

index.compact.js: csp.compact.js
	cat csp.compact.js > index.compact.js
	echo "" >> index.compact.js
	echo "module.exports = CSP;" >> index.compact.js
