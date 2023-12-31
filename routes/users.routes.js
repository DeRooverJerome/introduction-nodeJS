const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Voici les données" });
});

router.post("/:id", (req, res) => {
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

module.exports = router;
