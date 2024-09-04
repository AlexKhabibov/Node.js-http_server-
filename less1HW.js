/* Домашнее Задание
Напишите HTTP сервер и реализуйте два обработчика, где:
— По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
— А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
— Также реализуйте обработку несуществующих роутов (404).
— * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.
*/

/*
const http = require('http');

const head = { 'Content-Type': 'text/html; charset=utf-8' };

const port = 3000;

let homePageCounter = 0;
let aboutPageCounter = 0;
let notFoundPageCounter = 0;

const homeHref = `<a href="http://localhost:${port}/">About</a>`;
const aboutHref = `<a href="http://localhost:${port}/about">Home</a>`;
const notFound = '<h1>Not Found</h1>';

const server = http.createServer((request, response) => {
    if(request.url === '/') {
        response.writeHead(200, head);
        response.end(aboutHref);
        console.log(`Home Page, visited: ${++homePageCounter} times`);
    } else if(request.url === '/about') {
        response.writeHead(200, head);
        response.end(homeHref);
        console.log(`About Page, visited: ${++aboutPageCounter} times`);
    } else {
        response.writeHead(404, head);
        response.end(notFound);
        console.log(`404 - Not found, visited: ${++notFoundPageCounter} times`);
    }
})


server.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
*/