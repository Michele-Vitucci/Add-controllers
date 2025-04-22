const express = require("express");
const router = express.Router();
const {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById
} = require("../controllers/planets");

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

module.exports = router;
