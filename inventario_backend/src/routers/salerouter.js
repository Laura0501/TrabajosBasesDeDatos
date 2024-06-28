const express = require('express');
const salecontroller = require('../controllers/salecontroller');
const router = express.Router();

router.post("/createSale",salecontroller.createSale);
router.get('/listSale', salecontroller.ListSale );
router.put("/updateSale/:saleId", salecontroller.updateSale);
router.delete("/disableSale/:saleId",salecontroller.disableSale);
router.put("/enableSale/:saleId",salecontroller.enableSale);

module.exports = router;