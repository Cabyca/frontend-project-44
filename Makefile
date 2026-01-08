install: # установить зависимости
	npm ci
	
brain-games: # запуск игры
	node bin/brain-games.js

brain-even: # игра на четность
	node bin/brain-even.js

publish: # публикация
	npm publish --dry-run

lint: # запуск eslint
	npx eslint .

lint-fix: # исправление ошибок
	npx eslint . --fix
