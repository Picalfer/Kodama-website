REM Stop all running containers
FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i 

REM Remove container named kodama_container
docker rm kodama_container 

REM Remove image named kodama_image
docker rmi kodama_image 

REM Build Docker image named kodama_image
docker build -t kodama_image .

REM Retrieve hash from the list of images
for /f "tokens=1" %%a in ('docker image ls --format "{{.ID}}"') do set docker_hash=%%a

REM Extract the first 5 characters from the hash
set docker_hash=%docker_hash:~0,5%

REM Run Docker container with name kodama_container and image kodama_image
docker run -d -p 5050:5050 --name kodama_container kodama_image