@echo off
REM Сборка Docker-образа
docker build .

REM Вывод списка образов и их хешей
docker image ls --format "{{.ID}}"

REM Извлечение хеша из списка образов
for /f "tokens=1" %%a in ('docker image ls --format "{{.ID}}"') do set docker_hash=%%a

REM Извлечение первых 5 символов из хеша
set docker_hash=%docker_hash:~0,5%

REM Запуск Docker-контейнера с полученным хешем
docker run -d -p 5050:5050 %docker_hash%