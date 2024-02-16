const { response } = require('express');
const  { CousinType,Recipe,Ingredient }  = require('../models');
const { json } = require('body-parser');


const get_all_ingreadienc = async (req,res) =>{
    try{
        const all_ingreadienc = await Ingredient.find()
        if(all_ingreadienc)
        {
            return res.json(all_ingreadienc)
        }
        throw new Error("Recipe not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const get_ingreadience_id = async (req,res) =>{
    try{
        const {id} = req.params
        const ingreadence = await Ingredient.findById(id)
        if(ingreadence)
        {
            return res.status(201).json(ingreadence)
            
        }
        throw new Error("Ingreadence not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}


const get_ingreadients_name = async (req,res) =>{
    try{
        const ingreadient_name = req.params.name
        const ingreadients = await Ingredient.find({name: ingreadient_name} )
        if(ingreadients)
        {
            return res.status(201).json(ingreadients)
            
        }
        throw new Error("Ingreadient name not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const create_ingredient = async (request,response) => {
    try{
        const requests = await new Ingredient(request.body)
        await requests.save()
        return response.status(201).json({
            requests,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}


const update_ingreadient = async (request,response) => {
    try{
        let {id} = request.params
        let requests = await Ingredient.findByIdAndUpdate(id, request.body,{new:true})
        if(requests){
            return response.status(200).json(requests)
        }
        throw new Error("Ingreadients not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}


const delete_ingreadient = async (request,response) => {
    try{
        const { id }= request.params
        const in_delete = await Ingredient.findByIdAndDelete(id)
        if(in_delete){
            return response.status(200).send("Increadient Deleted!")
        }
        throw new Error ("Increadient not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}


module.exports = {

    get_all_ingreadienc,
    get_ingreadience_id,
    get_ingreadients_name,
    create_ingredient,
    update_ingreadient,
    delete_ingreadient

}