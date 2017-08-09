/**
 * Server dependencies
 */
const express = require('express');
const compression = require('compression');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const server = express();
server.use(compression());
server.use(logger('dev'));

/**
 * Parsers for POST data
 */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Total-Count");
    res.header("Access-Control-Expose-Headers", "X-Total-Count");
    next();
});
/**
 * Point static path to `public`
 */
server.use('/', express.static('../dist', { index: false }));

/**
 * Catch all routes and return the `index.html`
 */



server.get('/users', (req, res) = > {
    fs.readFile('./mocks/users.json', 'utf8', (err, data) = > {
    if(err) {
        throw err;
    }
    const users = JSON.parse(data);
res.header("X-Total-Count", users.length);
res.json(users);
})
;
})
;

server.post('/users', (req, res) = > {
    fs.readFile('./mocks/users.json', 'utf8', function readFileCallback(err, data) {
    if (err) {
        console.log(err);
    } else {
        const list = JSON.parse(data);
        list.push(req.body);
        fs.writeFile('./mocks/users.json', JSON.stringify(list), 'utf8', (err) = > {
            if(err) {
                console.log(err);
            }
            res.json(req.body);
    })
        ;
    }
});
})
;

server.options('*', function (req, res) {
    res.sendStatus(200);
});

server.get('*', (req, res) = > {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})
;

/**
 * Error handlers
 */
// development error handler
// will print stacktrace
if (server.get('env') === 'development') {
    server.use(function (err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
server.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/**
 * Port & host settings
 */
const PORT = process.env.PORT || 1337;
const HOST = process.env.BASE_URL || 'localhost';
const baseUrl = `http://${HOST}:${PORT}`;

server.set('port', PORT);

/**
 * Begin listening
 */
server.listen(server.get('port'), () = > {
    console.log(`Express server listening on ${baseUrl}`);
})
;

module.exports = server;
