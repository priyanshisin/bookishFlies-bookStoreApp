import Msg from '../model/msg_model.js'

export const message = async (req,res)=> {
    try {
        //we will get fullname, email and password from body
        const {name,email,message} = req.body

        // if user doesnot exist then we will add new user
        const createdMsg = new Msg({
            "name": name,
            "email": email,
           "message": message,
        })
        await createdMsg.save()
        res.status(201).json({message: "Message submitted succesfully", msg: {
            _id: createdMsg._id,
            name: createdMsg.fullname,
            email: createdMsg.email,
            message: createdMsg.message,
        }})
    } catch (error) {
        console.log("Error : ", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}