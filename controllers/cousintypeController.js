const { response } = require('express');
const  { CousinType,Recipe,Ingredient,Direction }  = require('../models');
const { json } = require('body-parser');

const get_All_cousin_type = async (req,res) =>{
    try{

        const cousin_types = await CousinType.find()
        if(cousin_types)
        {
            return res.status(200).json(cousin_types)
        }
        throw new Error("Cousin type not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const get_cousin_type_by_id = async (req,res) =>{
    try{
        const {id} = req.params
        console.log("======== " + id)
        const cousin_types = await CousinType.findById(id)
        console.log(">>>>>>>> " + cousin_types)
        if(cousin_types)
        {
            res.json(cousin_types)
            // return response.status(200).json(cousin_types)
        }
        throw new Error("Cousin type not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const create_Cousin_Type = async (request,response) => {
    try{
        const cousin_types = await new CousinType(request.body)
        await cousin_types.save()
        return response.status(201).json({
            cousin_types,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}


const update_Cousin_Type = async (request,response) => {
    try{
        let {id} = request.params
        let cousintype_Details = await CousinType.findByIdAndUpdate(id, request.body,{new:true})
        if(cousintype_Details){
            return response.status(200).json(cousintype_Details)
        }
        throw new Error("Cousin Type not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}


const delete_cousinType = async (request,response) => {
    try{
        const { id }= request.params
        const cousinType_delete = await CousinType.findByIdAndDelete(id)
        if(cousinType_delete){
            return response.status(200).send("Cousin Type Deleted!")
        }
        throw new Error ("Cousin Type not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}


module.exports = {

    get_All_cousin_type,
    get_cousin_type_by_id,
    create_Cousin_Type,
    update_Cousin_Type,
    delete_cousinType

}