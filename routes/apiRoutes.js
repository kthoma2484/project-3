const axios = require("axios");
const router = require("express").Router();

router.get("/categories", (req, res) => {
  axios
    .get("http://opentdb.com/api_categories.php/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
