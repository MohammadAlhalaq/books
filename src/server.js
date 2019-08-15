const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  console.log(`you now listen to http://localhost:${port}`);
});
