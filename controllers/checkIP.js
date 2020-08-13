const key = require("./../models/key")
module.exports = {


	checkExisting: async (ip) => {
		return new Promise((res, rej) => {
			key.findOne({ip:ip}, async (err, obj) => {
				if(err) {
					console.error(err)
					rej(err)
				}
				else{
					if(obj!=undefined) {
						res(obj)
					}
					else {
						res(false)
					}
				}
			})
		})

	},

	add: async (ip, keyx) => {
		const newKey = new key({
			ip:ip, 
			key:keyx
		})

		newKey.save((err, obj) => {
			if(err) {
				console.error(err)
			}
		})
	}
}