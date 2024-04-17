// const {
//   addExpense,
//   getExpenses,
//   deleteExpense,
// } = require("../controllers/expense");
const { addItem, getItems, deleteItem } = require("../controllers/farmer");

const router = require("express").Router();

router.post("/add-item", addItem);
router.get("/get-items", getItems);
router.delete("/delete-item/:id", deleteItem);

// router.post("/add-expense", addExpense);
// router.get("/get-expense", getExpenses);
// router.delete("/delete-expense/:id", deleteExpense);

router.get("/", (req, res) => {
  res.send("Hello");
});
module.exports = router;
