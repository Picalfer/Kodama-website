docker stop $(docker ps -a -q) # Stop all running containers
docker rm $(docker ps -a -q) # Remove all containers
docker rmi my_image # Remove the image named my_image

REM Сборка Docker-образа
docker build -t my_image .

REM Извлечение хеша из списка образов
for /f "tokens=1" %%a in ('docker image ls --format "{{.ID}}"') do set docker_hash=%%a

REM Извлечение первых 5 символов из хеша
set docker_hash=%docker_hash:~0,5%

REM Запуск Docker-контейнера с полученным хешем
docker run -d -p 5050:5050 my_image