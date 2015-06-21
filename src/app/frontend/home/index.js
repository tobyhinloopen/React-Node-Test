import HomeDocument from './home_document';

var app = express();

app.get('/', function (req, res) {
  res.send(HomeDocument.render({ name: 'Toby', title: 'Test pagina!' }));
});

module.exports = app;
