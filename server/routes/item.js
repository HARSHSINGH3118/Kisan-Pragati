const { addItem, getItems, deleteItem } = require("../controllers/farmer");
const {
  addSupply,
  getSupplies,
  deleteSupply,
} = require("../controllers/supplier");

const router = require("express").Router();

router.post("/add-item", addItem);
router.get("/get-items", getItems);
router.delete("/delete-item/:id", deleteItem);

router.post("/add-supply", addSupply);
router.get("/get-supplies", getSupplies);
router.delete("/delete-supply/:id", deleteSupply);

router.get("/", (req, res) => {
  res.send("Hello");
});
module.exports = router;
