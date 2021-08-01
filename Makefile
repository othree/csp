all: index.js index.min.js

index.js: csp.js
	cat csp.js > index.js
	echo "" >> index.js
	echo "module.exports = CSP;" >> index.js

index.min.js: csp.min.js
	cat csp.min.js > index.min.js
	echo "" >> index.min.js
	echo "module.exports = CSP;" >> index.min.js
