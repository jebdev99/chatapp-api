const userService = require('../services/UserService');

const index = async (req, res) => {
    try {
        const data = await userService.getUsers();
        res.status(200).json({users: data})
    } catch (error) {
        res.status(500).json('user index error: ', error)
    } finally {
        console.log('finally');
    }
}

const show = async (req, res) => {
    try {
        const data = await userService.getUserById(req.params.id)
        res.status(200).json({user: data})
    } catch (error) {
        res.status(500).json('user index error: ', error)
    } finally {
        console.log('finally');
    }
}

const create = async (req, res) => {
    try {
        await userService.createUser(req.body);
        res.status(200).json({ message: "Successfully Saved" });
    } catch (err) {
        res.status(500).json({ error: 'user index error: ' + err.message });
    } finally {
        console.log('finally');
    }
}

const update = async (req, res) => {
    try {
        const data = await userService.updateUser(req.body._id,  req.body)
        res.status(200).json({user: data})
    } catch (error) {
        res.status(500).json('user index error: ', error)
    } finally {
        console.log('finally');
    }
}

const destroy = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUser(req.body._id);
        if (!deletedUser) {
            console.log('User not found');
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({user: deletedUser})
    } catch (error) {
        res.status(500).json('user index error: ', error)
    } finally {
        console.log('finally');
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}