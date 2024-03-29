import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// when register route request is sent the registerUser is called, where upload is the middleware from multer
router.route("/register").post(
    upload.fields([
        // for sending Images
        {
            // in front end there should be field wiht name called "avatar"
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

export default router;