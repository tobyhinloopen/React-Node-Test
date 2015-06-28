import HomeDocument from './home_document';

var app = express();

app.get('/', function (req, res) {
  res.send(HomeDocument.renderWithDoctype({ title: 'Hinloopen Travel' }));
});

module.exports = app;
