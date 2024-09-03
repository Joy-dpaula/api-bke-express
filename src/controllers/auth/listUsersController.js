import { listUsers } from "../../models/authModel.js";

const listController =  async (req, res) => {

    const user = await listUsers()
    res.json({message: "Users listadas com sucesso!",
     user
    })
}

export default listController;