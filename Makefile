default: clean frontend backend

frontend: assets/frontend.js assets/frontend.css

backend: assets/backend.js assets/backend.css

start: clean frontend backend
	node server.js

clean:
	-rm assets/*

assets/frontend.css:
	sass --scss -t compressed -Ilib -Iapp -Ibower_components/bootstrap-sass/assets/stylesheets frontend.scss > assets/frontend.css

assets/frontend.js: assets/frontend.minified.js
	ln assets/frontend.minified.js assets/frontend.js

assets/frontend.minified.js: assets/frontend.envified.js
	uglifyjs --screw-ie8 -mc -- assets/frontend.envified.js > assets/frontend.minified.js

assets/frontend.envified.js: assets/frontend.browserified.js
	envify assets/frontend.browserified.js > assets/frontend.envified.js

assets/frontend.browserified.js: frontend.js
	browserify frontend.js > assets/frontend.browserified.js

assets/backend.css:
	sass --scss -t compressed -Ilib -Iapp -Ibower_components/bootstrap-sass/assets/stylesheets backend.scss > assets/backend.css

assets/backend.js: assets/backend.minified.js
	ln assets/backend.minified.js assets/backend.js

assets/backend.minified.js: assets/backend.envified.js
	uglifyjs --screw-ie8 -mc -- assets/backend.envified.js > assets/backend.minified.js

assets/backend.envified.js: assets/backend.browserified.js
	envify assets/frontend.browserified.js > assets/backend.envified.js

assets/backend.browserified.js: backend.js
	browserify backend.js > assets/backend.browserified.js

.PHONY: frontend backend clean start
