const { v4: uuid } = require('uuid');
const User = require('../models/User');

module.exports = {
  index(req, res) {
    return res.status(200).send(User.find());
  },

  getOne(req, res) {
    const user = User.findById(req.params.id);

    if (user === undefined) {
      return res.status(400).send({ error: 'Usuário não foi encontrado!' });
    }

    return res.status(200).send(user);
  },

  create(req, res) {
    const { email, senha } = req.body;
    const id = uuid();
    const user = {
      id,
      email,
      senha,
    };

    return res.status(201).send(User.new(user));
  },

  update(req, res) {
    const { id } = req.params;
    const { email, senha } = req.body;

    const user = User.findById(id);

    if (user === undefined) {
      return res.status(400).send({ error: 'Usuário não foi encontrado!' });
    }

    const userUpdate = User.update(id, email, senha);

    return res.status(200).send(userUpdate);
  },

  delete(req, res) {
    res.status(200).send(User.deleteAll());
  },

  deleteOne(req, res) {
    res.status(200).send(User.deleteOne(req.params.id));
  },
};
