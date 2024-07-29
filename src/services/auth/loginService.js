const loginService = async(email, password) => {
    openConnection()
    const hashedPassword = bcrypt.encrypt(password)
    User = new UserModel();
    User.findOne({email})
    .then((data) => console.log(data))
    .catch((err) => console.log('Something went wrong', err))
}