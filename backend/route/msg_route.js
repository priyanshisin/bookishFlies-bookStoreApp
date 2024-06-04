import express from "express"
import { message } from "../controller/msg_controller.js"
const router = express.Router()

router.post("/contactUs",message)


export default router