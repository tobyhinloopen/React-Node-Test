var app = express();

app.use('/', require('./home'));
app.use('/', require('./house'));
app.use('/huizen', require('./house_search'));

module.exports = app;
