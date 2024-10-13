REM Остановка всех работающих контейнеров
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i 

REM Удаление контейнера с именем kodama_container
docker rm kodama_container 

REM Удаление образа с именем kodama_image
docker rmi kodama_image 

REM Сборка Docker-образа с именем kodama_image
docker build -t kodama_image .

REM Извлечение хеша из списка образов
for /f "tokens=1" %%a in ('docker image ls --format "{{.ID}}"') do set docker_hash=%%a

REM Извлечение первых 5 символов из хеша
set docker_hash=%docker_hash:~0,5%

REM Запуск Docker-контейнера с именем kodama_container и образом kodama_image
docker run -d -p 5050:5050 --name kodama_container kodama_image