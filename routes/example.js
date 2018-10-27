var express = require('express');
var router = express.Router();

//#region middleware+method 
// Router level Middleware 
router.use(function (req, res, next) {
    console.log('Middleware call');
    next();
});

//any route
router.all('/*', function (req, res, next) {
    console.log('all');
    next();
});

//HTTP Methods
/* Get */
router.get('/', function (req, res) {
    res.send('Test Response!!');
});

/* Post */
router.post('/', function (req, res) {
    res.send('Operation Post');
});

/* Put */
router.put('/', function (req, res) {
    res.send('Operation Put');
});

/* Delete */
router.delete('/', function (req, res) {
    res.send('Operation Delete');
});

//#endregion

//#region routepath+string
//optional 
router.get('/path/sh?ashangka', function (req, res) {
    res.send('here h is optional by h?');
});

//repeat 
router.get('/path/shashangka+', function (req, res) {
    res.send('here is repeating by a+');
});

//random 
router.get('/path/sha*ngka', function (req, res) {
    res.send('here * is for random character');
});

//grouping 
router.get('/path/sha(sha)?ngkas', function (req, res) {
    res.send('here () is for grouping, ? is for optional');
});

router.get('/path/sha(sha)?ngka+s', function (req, res) {
    res.send('here () is for grouping, ? is for optional, + is for repeating');
});

//#endregion

//#region routepath+regex

router.get(/^\/path\/sha(sha|sa)ngkar$/, function (req, res) {
    res.send('match shasangkar, shashangkar');
});

//#endregion

//#region routeparameters

// GET: /example/profile/shashangka
router.get('/profile/:id', function (req, res) {
    res.send(req.params);
    console.log('response with profile: ' + req.params.id);
});

// GET: /example/profile/shashangka/age/34
router.get('/profile/:id/age/:age(\\d+)', function (req, res) {
    res.send(req.params);
    console.log('response with profile: ' + req.params.id + ' age:' + req.params.age);
});

// GET: /example/profile/shashangka/34
router.get('/profile/:id/:age(\\d+)', function (req, res) {
    res.send(req.params);
    console.log('response with profile: ' + req.params.id + ' age:' + req.params.age);
});

// GET: /example/age/34-50
router.get('/age/:from(\\d+)-:to(\\d+)', function (req, res) {
    res.send(req.params);
    console.log('response with age: ' + req.params.from + ' to ' + req.params.to);
});

// GET: /example/profilename/shashangka.shekhar
router.get('/profilename/:firstname.:lastname', function (req, res) {
    res.send(req.params);
    console.log('response with profilename: ' + req.params.firstname + ' ' + req.params.lastname);
});

//#endregion

//#region route()

router.route('/data')
    .get(function (req, res) {
        res.send('Operation Get');
    })
    .post(function (req, res) {
        res.send('Operation Post');
    })
    .put(function (req, res) {
        res.send('Operation Put');
    })
    .delete(function (req, res) {
        res.send('Operation Delete');
    });

//#endregion

//#region routehandler
var callbackfunc1 = function (req, res, next) {
    console.log('callbackfunc1');
    next();
};

var callbackfunc2 = function (req, res, next) {
    console.log('callbackfunc2');
    next();
};

var callbackfunc3 = function (req, res, next) {
    console.log('callbackfunc3');
    next();
};

var callbackfunc4 = function (req, res, next) {
    console.log('callbackfunc4');
    next();
};

var callbackfunc5 = function (req, res, next) {
    console.log('callbackfunc5');
    next();
};

router.get('/route/handler', [callbackfunc1, callbackfunc2, callbackfunc3, callbackfunc4, callbackfunc5], function (req, res, next) {
    console.log('get method, continue next..')
    next()
}, function (req, res) {
    console.log('final callbackfunc')
    res.send('final callbackfunc')
});
//#endregion

module.exports = router;

