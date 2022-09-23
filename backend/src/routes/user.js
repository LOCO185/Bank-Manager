const express = require("express");
const router = express.Router();
const { createUser, deposit, withdraw, updateCredit, transferring } = require("../controllers/userControllers");
const User = require("../models/user");

router.get("/users/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/users/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const userDeleted = await User.deleteOne({ id: req.params.id });
    res.status(200).send(userDeleted);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.patch("/users/deposit", (req, res) => {
  try {
    const updatedAccount = deposit(req.body.amount, req.body.id);
    res.status(200).send(updatedAccount);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.patch("/users/withdraw", (req, res) => {
  try {
    const updatedAccount = withdraw(req.body.amount, req.body.id);
    res.status(200).send(updatedAccount);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.patch("/users/updateCredit", (req, res) => {
  try {
    const updatedAccount = updateCredit(req.body.amount, req.body.id);
    res.status(200).send(updatedAccount);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.patch("/users/transferring", transferring);


module.exports = router;
