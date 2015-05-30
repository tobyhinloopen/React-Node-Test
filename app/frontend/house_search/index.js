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
        average_price_person_night: 3800,
        thumbnail: '/du471.jpg'
      }
    ]
  });
});

module.exports = app;
