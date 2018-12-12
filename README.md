# Введение

Это тестовая версия frontend часть сайта booksExchange написанная с использованием библиотеки react

# Запуск

Для запуска проекта используеться Docker 

С начала необходимо собрать образ следующей командой
```sh
docker build -t <name> . 
# name имя контейнера
```

Затем запустить
```sh
docker run --rm -p <yourPort>:3000 -d -v /path/to/my-app:/app <image name> 
```