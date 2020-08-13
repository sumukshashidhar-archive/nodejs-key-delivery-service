const key = require("./../models/key")

module.exports = {

    enumKeys: async function() {
        return new Promise((res, rej) => {
            key.find({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Got all keys successfully")
                    res({"status":200, "obj":obj})
                }
            })
        })
    }, 


    dropKeys: async function() {
        return new Promise((res, rej) => {
            key.deleteMany({}, async function(err, obj) {
                if(err) {
                    console.error(err)
                    rej(err)
                }
                else {
                    console.info("Dropped all keys successfully")
                    res(true)
                }
            })
        })
    }
}