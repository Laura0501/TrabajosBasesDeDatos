const express = require ('express');
const branchcontroller = require('../controllers/branchcontroller');
const router = express.Router();

router.post("/createBranch", branchcontroller.createBranch);
router.get("/listBranch", branchcontroller.listBranch);
router.put("/updateBranch/:branchId", branchcontroller.updateBranch);
router.delete("/disableBranch/:branchId",branchcontroller.disableBranch);
router.put("/enableBranch/:branchId",branchcontroller.enableBranch);
router.get("/listBranchByCities", branchcontroller.listBranchByCities);

module.exports = router;