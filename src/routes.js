const express = require('express');
const UserController = require('./controllers/UserController');
const { checkUserListExist, inputValidation } = require('./middlewares/UserMiddlewares');

const router = express.Router();

router.get('/api/v1/users', checkUserListExist, UserController.index);
router.get('/api/v1/users/:id', checkUserListExist, UserController.getOne);

router.post('/api/v1/users', inputValidation, UserController.create);

router.put('/api/v1/users/:id', checkUserListExist, inputValidation, UserController.update);

router.delete('/api/v1/users', checkUserListExist, UserController.delete);
router.delete('/api/v1/users/:id', checkUserListExist, UserController.deleteOne);

module.exports = router;
