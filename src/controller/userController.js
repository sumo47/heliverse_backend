const userModel = require('../model/userModel')

module.exports.createUser = async (req, res) => {
    try {

        let data = req.body
        let { first_name, last_name, email, gender, avatar, domain, available } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "Please provide details" });
        if (!first_name) return res.status(400).send({ status: false, message: "first_name require" })
        if (!last_name) return res.status(400).send({ status: false, message: "last_name require" })
        if (!email) return res.status(400).send({ status: false, message: "email require" })
        if (!gender) return res.status(400).send({ status: false, message: "gender require" })
        if (!avatar) return res.status(400).send({ status: false, message: "avatar require" })
        if (!domain) return res.status(400).send({ status: false, message: "domain require" })
        if (!available) return res.status(400).send({ status: false, message: "available require" })

        const saveData = await userModel.create(data)

        res.status(200).send({ status: true, message: saveData })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.getUser = async (req, res) => {
    try {

        let page = req.query.page
        let skipData = (page - 1) * 20

        const FindData = await userModel.find().skip(skipData).limit(20)
        if (FindData.length == 0) return res.status(404).send({ status: false, message: "no data found" })

        res.status(200).send({ status: true, message: FindData })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.getUserById = async (req, res) => {
    try {

        let id = req.params.id

        const FindDataById = await userModel.findById(id)
        if (!FindDataById) return res.status(404).send({ status: false, message: "no data found" })

        res.status(200).send({ status: true, message: FindDataById })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.updateUser = async (req, res) => {
    try {
        let id = req.params.id
        let data = req.body

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "data not found" });
        const updateById = await userModel.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )

        if (!updateById) return res.status(404).send({ status: false, message: "no user found" })

        res.status(200).send({ status: true, message: updateById })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.deleteUserById = async (req, res) => {
    try {

        let id = req.params.id

        if (!id) return res.status(404).send({ status: false, message: "provide id first" })

        const deleteUserById = await userModel.findByIdAndDelete(id)
        if (!deleteUserById) return res.status(404).send({ status: false, message: "no data found" })

        res.status(200).send({ status: true, message: "deleted sucessfully" })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


