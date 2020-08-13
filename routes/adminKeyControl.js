const adKeyOps = require("./../controllers/adminKeyControl")
module.exports = function(app) {

    app.get('/deleteKeys', async (req, res) => {
        let response = await adKeyOps.dropKeys()
        if(response) {
            res.json({
                "status":200, 
                "message":"Dropped"
            })
        }
    })

    app.get('/getKeys', async  (req, res) => {
        let response = await adKeyOps.enumKeys();
        if(response["status"]===200) {
            res.json(response["obj"])
        }
    })
}