import IndexDocument from './index_document';
import HouseFormDocument from './house_form_document';

let app = express();

app.get('/nieuw', (req, res) => {
  res.send(HouseFormDocument.renderWithDoctype({
    title: 'Huizen - Nieuw',
    house: {
      url: '',
      code: '',
      label: '',
      beds: null,
      bedrooms: null
    }
  }));
});

app.get('/', (req, res) => {
  res.send(IndexDocument.renderWithDoctype({
    title: 'Huizen',
    houses: [
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
