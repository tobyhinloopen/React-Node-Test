var app = require('app')();

app.set('views', __dirname);

app.get('/', function (req, res) {
  res.render("index_document", { houses: [], title: "Huizen" })
});

module.exports = app;
