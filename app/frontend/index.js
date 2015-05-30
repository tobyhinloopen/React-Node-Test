var app = express();

app.use('/', require('./home'));
app.use('/huizen', require('./house_search'));

module.exports = app;
