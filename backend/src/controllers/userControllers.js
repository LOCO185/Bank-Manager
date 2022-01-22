require("../db/mongoose");
const User = require("../models/user");

const createUser = async (details) => {
  const user = await new User(details);
  try {
    user.save().then(() => console.log("User created: \n" + user));
  } catch (e) {
    console.log(e.message);
  }

  return user;
};

const checkIfExists = async (id) => {
  return await User.exists({ id: id });
};

const deposit = async (amount, userId) => {
  if (!checkIfExists(userId)) {
    throw Error("user doesn't exist");
  }
  const updatedUser = await User.findOneAndUpdate(
    { id: userId },
    { $inc: { cash: amount } },
    { new: true }
  );
  updatedUser.save();
  return updatedUser;
};

const withdraw = async (amount, userId) => {
  if (!checkIfExists(userId)) {
    throw Error("user doesn't exist");
  }
  const updatedUser = await User.findOneAndUpdate(
    { id: userId },
    { $inc: { cash: -1 * amount } },
    { new: true }
  );
  updatedUser.save();
  return updatedUser;
};

const updateCredit = async (amount, userId) => {
  if (!checkIfExists(userId)) {
    throw Error("user doesn't exist");
  }
  const updatedUser = await User.findOneAndUpdate(
    { id: userId },
    { $inc: { credit: amount } },
    { new: true }
  );
  updatedUser.save();
  return updatedUser;
};

const transferring = async (req, res) => {
  const { id1, id2, transfer } = req.body;
  try {
    const user1 = await User.findById(id1);
    const user2 = await User.findById(id2);
    if (!user1 || !user2) {
      return res.status(404).send("Couldn't find user.");
    }
    const newCash1 = user1.cash - transfer;
    const newCash2 = user2.cash + transfer;

    const newUser1 = await User.findByIdAndUpdate(
      id1,
      { cash: newCash1 },
      { new: true }
    );

    const newUser2 = await User.findByIdAndUpdate(
      id2,
      { cash: newCash2 },
      { new: true }
    );

    if (!newUser1 || !newUser2) {
      return res.status(404).send("Couldn't find user.");
    }
    res.status(200).send(newUser1, newUser2);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  transferring,
  updateCredit,
  withdraw,
  deposit,
  createUser,
};
