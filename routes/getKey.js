const gen = require("./../controllers/generateUUID")
const ipops = require("./../controllers/checkIP")
module.exports = (app) => {


	app.get('/key', async (req, res) => {
		console.log("Got a request from: ", req.ip, ". Now checking if it exists")
		var response = await ipops.checkExisting(req.ip);
		if(!response) {
			console.log("Did not exist, so generating a new one")
			var key = await gen.generate()
			var UKEY = await gen.generateUKEY()
			res.json({
				"status":200,
				"key": key, 
				"UKEY":UKEY,
				"message":"New Key"
			})
			ipops.add(req.ip, key, UKEY)
		}
		else {
			console.log("Already Existed. Returning the UKEY")
			res.json({
				"status":200, 
				"key":response["UKEY"],
				"message":"Existing Key. Please use this UKEY"
			})
		}
	})
}