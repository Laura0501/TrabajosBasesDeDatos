const express = require('express');
const departmentcontroller = require('../controllers/departmentcontroller');
const router = express.Router();

router.get('/listDepartments', departmentcontroller.listDepartments);

module.exports = router;
