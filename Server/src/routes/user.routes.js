import { Router } from "express";
import { registerForOrganDonation } from "../controllers/organdonation.controller.js";
import { register, getDonar } from "../controllers/resgistration.controller.js";
const userRouter = Router();

userRouter.post("/registerForOrgan", registerForOrganDonation);
userRouter.post("/register", register);
userRouter.get("/getAllData", getDonar);
export default userRouter;
