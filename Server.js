const express = require(“express”);
const app = express();
const router = express.Router();
const port = 4000;

router.get(“/”, function(req, res, next) {
    res.send(“API is working properly”);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = router;