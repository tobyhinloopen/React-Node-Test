var app = require('app')();

app.set('views', __dirname);

app.get('/', function (req, res) {
  res.render('search_result_document', {
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
  });
});

module.exports = app;
