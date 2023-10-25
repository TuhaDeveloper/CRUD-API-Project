const User = require("../Models/Model.user");
const { v4: uuidv4 } = require('uuid')

// for get data
const AllgetUser = (req, res) => {
    res.status(200).json({ User })
};

// for create data
const PostUser = (req, res) => {
    const NewUser = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.emailj
    }
    User.push(NewUser)
    res.status(200).json(User)
};

// for update data
const UpdateUser = (req, res) => {
    const userid = req.params.id;
    const { name, email } = req.body;
    User.filter((user) => {
        user.id = userid.map((selected) => {
            selected.name = name;
            selected.email = email;
        })
    })
    res.status(200).json({ User })
};
// for delete data
const deleteUser = (req, res) => {
    const userid = req.params.id;
    User = User.filter((user) => {
        user.id !== userid
    })
    res.status(200).json(User)
};







module.exports = { AllgetUser, PostUser, UpdateUser, deleteUser }

