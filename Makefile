.PHONY: start stop \
        migration-generate migration-run migration-revert migration-show \
        lint lint-fix \
        prettier prettier-fix

export DOCKER_API_VERSION=1.53

start:
	docker compose up --build

stop:
	docker compose down

migration-generate:
	docker compose exec api npm run migration:generate src/migrations/$(name)

migration-run:
	docker compose exec api npm run migration:run

migration-revert:
	docker compose exec api npm run migration:revert

migration-show:
	docker compose exec api npm run migration:show

lint:
	npm run lint

lint-fix:
	npm run lint:fix

prettier:
	npm run prettier

prettier-fix:
	npm run prettier:fix
