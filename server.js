// var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// var scrape = require('./routes/scrape');

app.set('port', (process.env.PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'dist')));

// Fix cannot get issue by using React router
app.get('*', function(req, res) {
  res.sendfile('./dist/index.html');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/scrape', scrape);
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));


// app.get('/comments.json', function(req, res) {
//   fs.readFile('comments.json', function(err, data) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(data);
//   });
// });
//
// app.post('/comments.json', function(req, res) {
//   fs.readFile('comments.json', function(err, data) {
//     var comments = JSON.parse(data);
//     comments.push(req.body);
//     fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
//       res.setHeader('Content-Type', 'application/json');
//       res.setHeader('Cache-Control', 'no-cache');
//       res.send(JSON.stringify(comments));
//     });
//   });
// });


app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
