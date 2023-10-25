const { v4: uuidv4 } = require('uuid')

const User = [
    {
        id: uuidv4(),
        name: "jahidul islam tuha",
        email: "jahid2004@gmail.com"
    },
    {
        id: uuidv4(),
        name: "Arafat hossain",
        email: "arafathossain@gmail.com"
    }
]


module.exports = User;



