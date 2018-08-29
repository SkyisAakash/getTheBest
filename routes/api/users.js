const express = require('express');
const router = express.Router();
router.get("/test", (req, res) => res.json("user route works"));

module.exports = router;