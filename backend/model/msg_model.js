import mongoose from "mongoose";

const msgSchema = mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required:true,
    },

});
const Msg = mongoose.model("Msg",msgSchema);
export default Msg