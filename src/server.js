import BodyParser from 'body-parser';
import CookieParser from 'cookie-parser';

require('initialize');
const app = express();

// logging
app.use(require('morgan')('dev'));

// static files
app.use(express.static('assets'));
app.use(express.static('public'));

app.use('/fonts/bootstrap', express.static('bower_components/bootstrap-sass/assets/fonts/bootstrap'));
app.use(express.static('src/lib/font/cardo-regular'));
app.use(express.static('src/lib/font/open-sans-bold'));
app.use(express.static('src/lib/font/open-sans-regular'));

// request parsers
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());

// apps
app.use('/admin', require('admin'));
app.use('/', require('frontend'));

const server = app.listen(process.argv[process.argv.length-1]|0||3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
