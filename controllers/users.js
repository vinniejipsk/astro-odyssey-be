const modelUsers = require("../models/users");

module.exports = {
  createUser,
  getLoginDetails,
  loginUser,
  getUser,
  updateUser,
  logoutUser,
  getPosts,
};

async function createUser(req, res) {
  try {
    const user = await modelUsers.createUser(req.body);
    res.json({ user });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getLoginDetails(req, res) {
  try {
    const loginDetails = await modelUsers.getLoginDetails(req.query);
    if (loginDetails.success != true) {
      res.status(400).json({ errorMsg: loginDetails.error });
      return;
    }
    res.json(loginDetails.data); /// contains _id, salt, iterations
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function loginUser(req, res) {
  try {
    const token = await modelUsers.loginUser(req.body);
    res.json(token);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function logoutUser(req, res) {
  try {
    const result = await modelUsers.logoutUser(req.body);
    if (!result.success) {
      res.status(400).json({ errorMsg: result.error });
      return;
    }
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getUser(req, res) {
  try {
    const user = await modelUsers.getUser(req.params.userId);
    res.json({ user });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const user = await modelUsers.updateUser(req.params.userId, req.body);
    res.json({ user });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getPosts(req, res) {
  try {
    const user = await modelUsers.getPosts(req.params.userId);
    res.json({ user });
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}