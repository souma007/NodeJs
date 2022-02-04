const { v4: uuidv4 } = require("uuid");
const { clients } = require("../data/clients");

// write your handlers here...
const getClients = (req, res) => {
  res.status(200).json({ status: 200, data: clients });
};

const getClientbyId = (req, res) => {
  const clientId = req.params.id;
  const client = clients.find((user) => {
    return user.id === clientId;
  });
  client
    ? res.status(200).json({ status: 200, data: client })
    : res.status(404).json({ status: 404, message: "User not found" });
};

const addClient = (req, res) => {
  const newCustomer = req.body;

  let existingEmail = clients.find((customer) => {
    return customer.email === newCustomer.email;
  });

  if (existingEmail) {
    return res.status(404).json({
      status: 404,
      error: "repeated-customer",
    });
  } else {
    clients.push(newCustomer);
    return res.status(200).json({ status: 200, data: clients });
  }
};

const deleteClient = (req, res) => {
  const clientId = req.params.id;
  const index = clients.findIndex((client) => {
    return client.id === clientId;
  });
  console.log(index);
  if (!index) {
    return res.status(400).json({ status: 400, error: "User not found." });
  } else {
    clients.splice(index, 1);
    return res.status(200).json({ status: 200, data: clients });
  }
};

module.exports = { getClients, getClientbyId, addClient, deleteClient };
