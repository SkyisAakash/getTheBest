const express = require('express')
const router = express.Router();
const validateServiceData = require('../../validations/service');

router.get("/services", (req, res) => {
    res.json("services route ois working");
})
