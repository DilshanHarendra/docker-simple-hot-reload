export PATH_DEPLOY=.deploy
export IMAGE_NAME=simple-express-dev

dockerBuild:
	docker build -f  -t ${IMAGE_NAME} .
runApp:
	docker-compose  up
