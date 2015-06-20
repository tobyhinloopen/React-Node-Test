var app = express();

app.get('/', function(req, res) {
  res.redirect('/admin/huizen');
});

app.use('/huizen', require('./houses'));

module.exports = app;
