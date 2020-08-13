const gen = require("./controllers/generateUUID")
module.exports = (app) => {


	app.get('/key', async (req, res) => {
		res.json({
			"status":200,
			"key":await gen.generate()
		})
	})
}