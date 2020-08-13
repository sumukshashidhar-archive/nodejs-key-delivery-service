const gen = require("./../controllers/generateUUID")
const ipops = require("./../controllers/checkIP")
module.exports = (app) => {


	app.get('/key', async (req, res) => {
		var response = await ipops.checkExisting(req.ip);
		if(!response) {
			var key = await gen.generate()
			res.json({
				"status":200,
				"key": key, 
				"message":"New Key"
			})
			ipops.add(req.ip, key)
		}
		else {
			console.log(response)
			res.json({
				"status":200, 
				"key":response["key"],
				"message":"Existing Key"
			})
		}
	})
}