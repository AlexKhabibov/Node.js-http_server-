
/*
function func1() {
    console.log('func1');
};

function func2() {
    func1();
};

func2();

// Вывод:
// func1
*/

/*
setTimeout(() => {
   console.log('settimeout log'); 
}, 1000);

console.log('global log');
*/

/*
let arr = [1, 2, 3, 4, 5, 6, 7, 20, 34, -5];
console.log(arr.reduce((sum, val) => sum += val));
*/

/*
// создаем http сервер
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
*/

/*
// создаем http сервер с встроенным ответом на запросы
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    res.writeHead(200, {
        'Content-type' : 'text/html; charset=UTF-8',
    });
    res.end('<h1>Привет</h1>')
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
*/

/*
//  Как обрабатывать разные пути запроса?
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Привет</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>About</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
*/

/*
// а теперь добавим еще оработку ошибки 404
const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>Привет</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-type': 'text/html; charset=UTF-8',
        });
        res.end('<h1>About</h1>');
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html; charset=UTF-8',
        })
        res.end('<h1>Страница не найдена</h1>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порте ${port}`);
});
*/