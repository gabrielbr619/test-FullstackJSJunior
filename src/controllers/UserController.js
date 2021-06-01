const { v4: uuid } = require('uuid');
const User = require('../models/User');

module.exports = {
  render(req, res) {
    return res.status(200).render('index', { users: User.find() });
  },

  renderOne(req, res) {
    const user = User.findById(req.params.id);

    if (user === undefined) {
      return res.status(400).send({ error: 'Usuário não foi encontrado!' });
    }

    return res.render('user', { user });
  },
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
    const { email, senha, name } = req.body;
    console.log(req.body);
    const id = uuid();
    const user = {
      id,
      name,
      email,
      senha,
    };
    const userNew = User.new(user);
    if (userNew === undefined) {
      return res.status(400).send({ Error: 'Usuário já existe' });
    }

    return res.status(201).send({ 'Usuário criado': user });
  },

  update(req, res) {
    const { id } = req.params;
    const { name, email, senha } = req.body;

    const user = User.findById(id);

    if (user === undefined) {
      return res.status(400).send({ error: 'Usuário não foi encontrado!' });
    }

    const userUpdate = User.update(id, name, email, senha);

    if (userUpdate === undefined) {
      return res.status(400).send({ error: 'Email já está em uso!' });
    }

    return res.status(200).send(userUpdate);
  },

  delete(req, res) {
    res.status(200).send(User.deleteAll());
  },

  deleteOne(req, res) {
    console.log(req.params.id);
    const users = User.deleteOne(req.params.id);
    res.status(200).send(users);
  },
};
