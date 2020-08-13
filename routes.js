module.exports = (app) => {

	require("./routes/getKey")(app);

	require("./routes/adminKeyControl")(app);

}