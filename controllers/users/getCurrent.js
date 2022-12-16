const { User } = require("../../model");

const getCurrent = async(req, res) => {
    // const { name, email} = req.user;

    // res.json({
    //     status: "success",
    //     code: 200,
    //     data: {
    //         user: {
    //             name,
    //             email
    //         }
    //     }
    // })

    const {_id} = req.user;
    await User.findByIdAndUpdate(_id, {token: null});
    res.status(204).json();
}

module.exports = getCurrent; 
