const { AllgetUser, PostUser, UpdateUser, deleteUser } = require("../Controllers/Controller.user");

const router = require('express').Router();

router.get('/', AllgetUser);
router.post('/', PostUser);
router.put('/:id', UpdateUser);
router.delete('/:id', deleteUser);


module.exports = router;


