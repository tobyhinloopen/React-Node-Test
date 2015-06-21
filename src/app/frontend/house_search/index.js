var app = express();
var SearchResultDocument = require('./search_result_document');

app.get('/', function (req, res) {
  res.send(SearchResultDocument.render({
    title: 'Zoekresultaten',
    results: [
      {
        id: 1,
        url: '/du471',
        code: 'DU471',
        label: 'Duitsland in de Nederrijn bij Venlo',
        beds: 30,
        bedrooms: 10,
        averagePricePersonNight: 3800,
        thumbnail: '/du471.jpg'
      }, {
        id: 2,
        url: '/du471',
        code: 'DU471',
        label: 'Duitsland in de Nederrijn bij Venlo',
        beds: 30,
        bedrooms: 10,
        averagePricePersonNight: 3800,
        thumbnail: '/du471.jpg'
      }
    ]
  }));
});

module.exports = app;