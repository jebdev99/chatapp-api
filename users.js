const { v4:uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const getRoom = async () => {
    // const uuid = uuidv4();
    const uuid = 'jaksdjaksd';
    const saltRounds = 10;
    // res.status(200).send({roomUrl: uuid})
    const hashedPassword = bcrypt.hashSync('jaksdjaksd', saltRounds);
    const compare = await bcrypt.compare(uuid, hashedPassword)
    console.log({ hashedPassword, compare });
    // res.status(200).send({roomUrl: hashedPassword})
}
getRoom();