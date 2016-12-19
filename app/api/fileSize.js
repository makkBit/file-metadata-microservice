module.exports = function(app){

	//multer
	const multer = require('multer');

	const upload = multer().single('recfile');

	app.post('/upload', function (req, res) {

		upload(req, res, function(err){

			if(err) throw err;
			console.log(req.file);
  			console.log(req.file.size);
  			res.json({
  				"size": req.file.size + "bytes"
  			});

		});
  		
	});

};