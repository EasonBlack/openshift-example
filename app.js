
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var dust = require('express-dustjs');
var router = require('./routes');

var app = express();
app.listen(3000, function(){
    console.log('connect success!');
});

dust._.optimizers.format = function (ctx, node) {
    return node
}

// Define custom Dustjs helper
dust._.helpers.demo = function (chk, ctx, bodies, params) {
    return chk.w('demo')
}

// Use Dustjs as Express view engine
app.engine('dust', dust.engine({
    // Use dustjs-helpers
    useHelpers: true
}))
app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(__dirname + '/public'));
app.use('/',router.home);