const User = require('../models/User');

module.exports = {
  inputValidation(req, res, next) {
    const { email, senha } = req.body;
    if (email === '' || senha === '') {
      return res.status(400).send({ Error: 'Insira todos os campos!' });
    }
    return next();
  },

  checkUserListExist(req, res, next) {
    const users = User.find();
    if (users === undefined) {
      return res.status(400).send({ Error: 'UsersList.json não existe, por favor crie um usuário para instânciar o arquivo' });
    }
    return next();
  },
};
