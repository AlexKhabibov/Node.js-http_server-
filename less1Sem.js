/*
function funcCalc(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

const a = 1;
const b = -3;
const c = 2;

const calc1 = funcCalc(a, b, c);
console.log(calc1);

// при старте скрипта происходит инициализация пустого коллстека
// 1. const calc1() - Начало заполнения стека, так как это фактически первая вызванная функция, до этого были только объявления в Глобальный контекст
// 2. constCalc() в свою же очередь вызывает Math.pow()
// 3. constCalc()
// 4. console.log
*/

/*
function counter(n) {
    console.log(n);   
    setTimeout(() => counter(n + 1), 0);
}

// counter(0);

setTimeout(() => {
   console.log('Script END');
   process.exit(); 
}, 0);
*/

/*
// Создадим HTTP сервер с ответом на запрос

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log('require accepted');
    res.end('<h1>Hello</h1>');
});

const port = 3000;
server.listen(port);
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