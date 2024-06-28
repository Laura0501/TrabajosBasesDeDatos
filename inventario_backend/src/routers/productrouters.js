const express = require ('express');
const productcontroller = require('../controllers/productcontroller');
const router = express.Router();

router.post("/createProduct", productcontroller.createProduct );

router.get("/listProduct", productcontroller.listProduct );

router.put("/updateProduct/:productId", productcontroller.updateProduct);
router.delete("/disableProduct/:productId",productcontroller.disableProduct);
router.put("/enableProduct/:productId",productcontroller.enableProduct);

module.exports=router;