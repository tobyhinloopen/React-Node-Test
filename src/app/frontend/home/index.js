var app = express();
var HomeDocument = require('./home_document');

app.get('/', function (req, res) {
  res.send(HomeDocument.render({ name: 'Toby', title: 'Test pagina!' }));
});

module.exports = app;
