var express = require('express'),
    http = require('http'),
    path = require('path');

var app = module.exports = express();

var server = require('http').createServer(app);

app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});