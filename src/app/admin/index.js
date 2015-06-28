let app = express();
import basicAuth from 'node-basicauth';

app.use(basicAuth({ 'hinloopen': 'pindakaas' }));

app.get('/', function(req, res) {
  res.redirect('/admin/huizen');
});

app.use('/huizen', require('./houses'));

module.exports = app;
