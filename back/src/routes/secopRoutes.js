import { Router } from "express"
import { getContratos } from "../controllers/secopController.js"

const router = Router()
router.get("/",getContratos)

export default router;