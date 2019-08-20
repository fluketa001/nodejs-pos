var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'My Website EDM' });
});

router.get('/page1', function(req, res, next) {
    res.render('page1');
});

router.get('/page2', function(req, res, next) {
    res.render('page2');
});

router.get('/page3', function(req, res, next) {
    res.render('page3');
});

router.get('/sayhello', function(req, res, next) {
    var param = {
        name: req.query.name
    };
    res.render('sayhello', param);
});

router.get('/multiparam', function(req, res, next) {
    var param = {
        fname: req.query.fname,
        lname: req.query.lname
    };
    res.render('multiparam', param);
});

router.get('/myform', function(req, res, next) {
    res.render('myform');
});

router.post('/formoutput', function(req, res, next) {
    var param = {
        name: req.body.name,
        tel: req.body.tel
    };
    res.render('formoutput', param);
});

router.get('/showArray', function(req, res, next) {
    var array = ['kob', 'tavan', 'joy', 'poy', 'hope'];
    res.render('showArray', { arr: array });
});

router.get('/showArrayObject', function(req, res, next) {
    var array = [
        { barcode: 1001, name: 'JAVA Basic' },
        { barcode: 1002, name: 'NodeJS Basic' },
        { barcode: 1003, name: 'AngularJS' }
    ];
    res.render('showArrayObject', { arr: array });
});

router.get('/connectjs', function(req, res, next) {
    res.render('connectjs');
});

router.get('/embedcss', function(req, res, next) {
    res.render('embedcss');
});

router.get('/ifelse', function(req, res, next) {
    res.render('ifelse', { x: 10 });
});

router.get('/startRedirect', function(req, res, next) {
    res.render('startRedirect');
});

router.get('/myRedirect', function(req, res, next) {
    res.render('endRedirect');
});

router.get('/endRedirect', function(req, res, next) {
    res.render('endRedirect');
});

router.get('/redirectAndSendParam', function(req, res, next) {
    res.render('redirectAndSendParam');
});

router.get('/redirectToNewPage', function(req, res, next) {
    var param = { name: 'Tavon' };
    var url = require('url');
    var config = {
        pathname: '/showParam',
        query: param
    };
    res.redirect(url.format(config));
});

router.get('/showParam', function(req, res, next) {
    res.render('showParam', { name: req.query.name });
});

router.get('/startSend', function(req, res, next) {
    res.render('startSend');
});

router.post('/testSend', function(req, res, next) {
    var data = req.body.data;
    if (data.length > 0) {
        res.send('pass');
    } else {
        res.send('fail');
    }
});

module.exports = router;