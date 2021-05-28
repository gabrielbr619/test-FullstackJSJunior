module.exports = {
  InputValidation(req, res, next) {
    const { email, password } = req.body;
    if (email === undefined || password === undefined) {
      return res.status(400).send({ Error: 'Insira todos os campos!' });
    }
    return next();
  },
};
