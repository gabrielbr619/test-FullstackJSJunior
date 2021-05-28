const express = require('express');
const UserController = require('./controllers/UserController');
const UserMiddlewares = require('./middlewares/UserMiddlewares');

const router = express.Router();

router.get('/api/v1/users', UserController.index);
router.get('/api/v1/users/:id', UserController.getOne);

router.post('/api/v1/users', UserMiddlewares.InputValidation, UserController.create);

router.put('/api/v1/users/:id', UserMiddlewares.InputValidation, UserController.update);

router.delete('/api/v1/users', UserController.delete);
router.delete('/api/v1/users/:id', UserController.deleteOne);

module.exports = router;
