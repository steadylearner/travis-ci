const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
	console.log("[GET] request to /hello");
	console.log(req.headers);

	res.send("hello");
});

module.exports = router;