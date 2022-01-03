import Product from "../models/product.js";

export const GetAllProduct= async(req,res)=>{
    try {
        const product = await Product.findAll()
        res.json(product)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const Createproduct = async (req,res)=>{
    try {
        await Product.create(req.body);
        res.json({
            msg : "datacreated..."
        })
    } catch (error) {
        res.json({
            msg:error
        })
    }
}

export const GetProductById= async (req,res)=>{
    try {
        const product = await Product.findAll({
            where :{
                id : req.params.id
            }
        })
        res.json(product[0])
    } catch (error) {
        res.json({msg:error})
    }
}

export const UpdateProduct = async (req,res)=>{
    try {
        await Product.update(req.body,{
            where: {
                id : req.params.id
            }
        });
        res.json({
            msg: "data update"
        })
    } catch (error) {
        res.json({msg:error})
    }
}

export const Deletproduct= async (req,res)=>{
    try {
        await Product.destroy({
            where : {
                id: req.params.id
            }
        })
        res.json({
            msg:"data deleted"
        })
    } catch (error) {
        res.json({
            msg: error
        })
    }
}