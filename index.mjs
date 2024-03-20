//импорт происходит через require
import express from 'express';
//создаем приложение через express
const app = express();
//указываем порт
const port = 4000;


//добавляем middleware . Next - следующая функция.
app.use('/',(req, res, next) => {
    console.log('use');
    next();
})
app.use('/',(req, res, next) => {
    console.log('use2');
    next();
})






//app.get('при обращение к главной странице' , (какая функция будет вызываться) =>{
//

//сервер принимает запрос, сюда попадает обьект запроса и обьект ответа}

app.get('/', (req, res) => {
    res.send('Hello world! maza-faka-haka-naka')
})



//запускает наш сервер, колбэк не обязателен, это функция которая выовется после того , как запустился сервер
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

//запуск сервера : node index.js

//запускаем локальный сервер- 127.0.0.1:4000

//устанавливаем дополнение npm i nodemon - позволяет нам не браузер перезапускать , а сервер при изменения файлов
//и меняем в package json на
//"scripts": {
//"start" : "nodemon index.mjs",
//ну и сам файл меняем на index.mjs 