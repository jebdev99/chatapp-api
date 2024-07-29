const bcrypt = require('bcrypt');

const hashPasswordOnSave = async (next) => {
    if (this.isModified('password') || this.isNew) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
}

const hashPasswordOnUpdate = async (next) => {
    const update = this.getUpdate();
    if (update.password) {
        const saltRounds = 10;
        update.password = await bcrypt.hash(update.password, saltRounds);
    }
    next();
}

module.exports = {
    hashPasswordOnSave,
    hashPasswordOnUpdate
}


