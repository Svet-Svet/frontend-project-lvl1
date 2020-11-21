install:
	npm install
brain-games:
	node bin/brain-games.js
brain-evens:
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-calc:
	node bin/brain-calc.js