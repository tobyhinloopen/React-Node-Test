

# SCSS_STYLE = compressed # expanded or compressed
#
# default: clean frontend backend
#
# frontend: assets/frontend.js assets/frontend.css
# backend: assets/backend.js assets/backend.css
#
# start: clean frontend backend
# 	node server.js
#
# clean:
# 	-rm assets/*
#
# assets/frontend.css: assets/frontend.postcss.css
# 	ln assets/frontend.postcss.css assets/frontend.css
#
# assets/frontend.postcss.css: assets/frontend.compiled.css
# 	postcss -u autoprefixer --safe assets/frontend.compiled.css > assets/frontend.postcss.css
#
# assets/frontend.compiled.css:
# 	sass --scss -t $(SCSS_STYLE) -Ilib -Iapp/frontend -Ibower_components/bootstrap-sass/assets/stylesheets frontend.scss > assets/frontend.compiled.css
#
# assets/frontend.js: assets/frontend.minified.js
# 	ln assets/frontend.minified.js assets/frontend.js
#
# assets/frontend.minified.js: assets/frontend.envified.js
# 	uglifyjs --screw-ie8 -mc -- assets/frontend.envified.js > assets/frontend.minified.js
#
# assets/frontend.envified.js: assets/frontend.browserified.js
# 	envify assets/frontend.browserified.js > assets/frontend.envified.js
#
# assets/frontend.browserified.js: frontend.js
# 	NODE_PATH=.:lib:app/frontend browserify frontend.js > assets/frontend.browserified.js
#
# assets/backend.css: assets/backend.postcss.css
# 	ln assets/backend.postcss.css assets/backend.css
#
# assets/backend.postcss.css: assets/backend.compiled.css
# 	postcss -u autoprefixer --safe assets/backend.compiled.css > assets/backend.postcss.css
#
# assets/backend.compiled.css:
# 	sass --scss -t $(SCSS_STYLE) -Ilib -Iapp/backend -Ibower_components/bootstrap-sass/assets/stylesheets backend.scss > assets/backend.compiled.css
#
# assets/backend.js: assets/backend.minified.js
# 	ln assets/backend.minified.js assets/backend.js
#
# assets/backend.minified.js: assets/backend.envified.js
# 	uglifyjs --screw-ie8 -mc -- assets/backend.envified.js > assets/backend.minified.js
#
# assets/backend.envified.js: assets/backend.browserified.js
# 	envify assets/frontend.browserified.js > assets/backend.envified.js
#
# assets/backend.browserified.js: backend.js
# 	NODE_PATH=.:lib:app/backend browserify backend.js > assets/backend.browserified.js
#
# .PHONY: frontend backend clean start
