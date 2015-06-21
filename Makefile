JS_SRC = $(shell find src -name "*.js")
JS_BUILD = $(subst src,build,$(JS_SRC))
LIB_SCSS = $(shell find src/lib -name "*.scss")
FRONTEND_SCSS = $(shell find src/app/frontend -name "*.scss")

default: assets $(JS_BUILD)
assets: frontend backend
frontend: assets/frontend.css assets/frontend.js
backend: assets/backend.css assets/backend.js

console: $(JS_BUILD)
	NODE_PATH=build/app:build/lib node build/console.js

start: assets $(JS_BUILD)
	NODE_PATH=build/app:build/lib node build/server.js

clean:
	-rm -rf build/* assets/* .depend
	-mkdir -p build/assets

depend: .depend

.depend: $(JS_SRC)
	-rm .depend
	ruby make_depend.rb > .depend

assets/frontend.css: build/assets/frontend.postcss.css
	-cp build/assets/frontend.postcss.css assets/frontend.css

build/assets/frontend.postcss.css: build/assets/frontend.compiled.css
	postcss -u autoprefixer --safe build/assets/frontend.compiled.css > build/assets/frontend.postcss.css

build/assets/frontend.compiled.css: src/frontend.scss $(LIB_SCSS) $(FRONTEND_SCSS)
	sass --scss -Isrc/lib -Isrc/app/frontend -Ibower_components/bootstrap-sass/assets/stylesheets src/frontend.scss > build/assets/frontend.compiled.css

assets/frontend.js: build/assets/frontend.minified.js
	-cp build/assets/frontend.minified.js assets/frontend.js

build/assets/frontend.minified.js: build/assets/frontend.envified.js
	uglifyjs --screw-ie8 -mc -- build/assets/frontend.envified.js > build/assets/frontend.minified.js

build/assets/frontend.envified.js: build/assets/frontend.browserified.js
	envify build/assets/frontend.browserified.js > build/assets/frontend.envified.js

build/assets/frontend.browserified.js: build/frontend.js $(JS_BUILD)
	NODE_PATH=build/lib:build/app/frontend browserify build/frontend.js > build/assets/frontend.browserified.js

assets/backend.css: build/assets/backend.postcss.css
	-cp build/assets/backend.postcss.css assets/backend.css

build/assets/backend.postcss.css: build/assets/backend.compiled.css
	postcss -u autoprefixer --safe build/assets/backend.compiled.css > build/assets/backend.postcss.css

build/assets/backend.compiled.css: src/backend.scss $(LIB_SCSS)
	sass --scss -Isrc/lib -Isrc/app/backend -Ibower_components/bootstrap-sass/assets/stylesheets src/backend.scss > build/assets/backend.compiled.css

assets/backend.js: build/assets/backend.minified.js
	-cp build/assets/backend.minified.js assets/backend.js

build/assets/backend.minified.js: build/assets/backend.envified.js
	uglifyjs --screw-ie8 -mc -- build/assets/backend.envified.js > build/assets/backend.minified.js

build/assets/backend.envified.js: build/assets/backend.browserified.js
	envify build/assets/backend.browserified.js > build/assets/backend.envified.js

build/assets/backend.browserified.js: src/backend.js $(JS_BUILD)
	NODE_PATH=build/lib:build/app/backend browserify src/backend.js > build/assets/backend.browserified.js

.PHONY: frontend backend assets clean start console

include .depend
