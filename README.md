# Расписание для моноблока 




<details>
<summary style="font-size: 32px">Установка и запуск приложения</summary>

<h2>Используя docker</h2>
```bash
docker compose up --build -d
```

<h2>Вручную</h2>
```bash
cd app
npm insall
npm run build
npm run start
```
</details>


<details>
<summary style="font-size: 32px">Браузера в режиме kiosk</summary>

## Подготовка
- [ ] Нужно установить chrome браузер
- [ ] Зайти в _chrome://extensions_ и переключиться в режим разработчика

## Команды для запуска
### Linux
```bash
google-chrome --kiosk "http://localhost:3000" --no-sandbox --disable-infobars --disable-dev-shm-usage --start-fullscreen
```
### Window 7-11

```bash
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk "http://localhost:3000" --no-sandbox --disable-infobars --disable-dev-shm-usage --start-fullscreen
```

## Для выхода из режима киоска в Chrome
- Подключить клавиатуру и прожать комбинацию клавиш _ctrl + f4_

</details>


## Добавить в автозагрузку 
- [ ] Создать скрипт с запуском через docker или в ручную, приложения 
- [ ] Запуск браузера 


