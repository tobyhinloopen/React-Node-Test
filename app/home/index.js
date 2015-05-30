var app = require('app');

app.set('views', __dirname);

app.get('/', function (req, res) {
  res.render('home_document', { name: 'John', title: 'Test pagina!' });
});

module.exports = app;
