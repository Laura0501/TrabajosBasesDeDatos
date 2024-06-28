const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();

router.post("/createUser",usercontroller.createUser);
router.get('/listUsers', usercontroller.listUsers );
router.put("/updateUser/:userId", usercontroller.updateUser);
router.delete("/disableUser/:userId",usercontroller.disableUser);
router.put("/enableUser/:userId",usercontroller.enableUser);

module.exports = router;