import { Createproduct, Deletproduct, GetAllProduct, GetProductById, UpdateProduct } from "../controller/index.js";
import express from "express";

const router = express.Router()

router.get('/',GetAllProduct);
router.post('/',Createproduct);
router.get('/:id',GetProductById);
router.patch('/:id',UpdateProduct);
router.delete('/:id',Deletproduct);




export default router;