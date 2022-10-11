const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')


//=======================test Api=========================

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//=================================userApi=================
router.post("/register", userController.createUser)

router.post("/login", userController.userLogin)

router.get("/user/:userId/profile", userController.getUser)

module.exports = router














module.exports = router;