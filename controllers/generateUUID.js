var { nanoid } = require("nanoid");

module.exports = {

	// generates a UUID of 32 characters
	generate: async () => {
		return new Promise((res, rej) => {
			var ID = nanoid(32);
			res(ID)
		})

	}, 

	generateUKEY: async () => {
		return new Promise((res, rej) => {
			var ID = nanoid(7);
			res(ID)
		})

	}
}