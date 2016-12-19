//expressjs
const express = require('express');
const app = express(); 


//imports app js files
const api = require('./app/api/fileSize.js');
const routes = require('./app/routes/index.js');

//uses views folder for displaying static file
app.use(express.static('views'));
const port = process.env.PORT || 8080;


routes(app);
api(app);


app.listen(port, () => {
	console.log('app listening on port '+port);
});


