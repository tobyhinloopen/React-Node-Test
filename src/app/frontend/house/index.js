var app = require('app')();

app.set('views', __dirname);

var HOUSES = [
  {
    id: 1,
    url: '/du471',
    code: 'DU471',
    label: 'Duitsland in de Nederrijn bij Venlo',
    beds: 30,
    bedrooms: 10,
    averagePricePersonNight: 3800,
    summary: 'Huis Dickenberg is rustig gelegen in de bossen van het Teutoburgerwoud. Het huis is ingericht voor 25 personen en heeft een grote tuin. Tevens heb je beschikking over een grote feestzaal voor bruiloften en partijen.',
    image: '/du471-square.jpg',
    mapCenter: 'Teutoburgerwald, Duitsland'
  },
];

function findHouseByPathName(pathName) {
  for(var i=0, house; house = HOUSES[i]; i++)
    if(house.url == pathName)
      return house;
  return null;
}

app.use('/', function (req, res, next) {
  var house;
  if(req.method == 'GET' && (house = findHouseByPathName(req.url)))
    res.render('house_document', { house: house, title: house.label });
  else
    next();
});

module.exports = app;
