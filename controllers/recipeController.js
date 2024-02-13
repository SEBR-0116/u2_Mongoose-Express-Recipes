const { response } = require('express');
const  { CousinType,Recipe }  = require('../models');
const { json } = require('body-parser');


const get_all_recipe = async (req,res) =>{
    try{
        const all_recipe = await Recipe.find()
        if(all_recipe)
        {
            return res.json(all_recipe)
        }
        throw new Error("Recipe not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const get_recipe_by_id = async (req,res) =>{
    try{
        const {id} = req.params
        const recipe_details = await Recipe.findById(id)
        if(recipe_details)
        {
            return res.status(201).json(recipe_details)
            
        }
        throw new Error("Recipe not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}


const get_recipe_by_name = async (req,res) =>{
    try{
        const recipe_name = req.params
        const recipe_details = await Recipe.find({name: recipe_name.name} )
        if(recipe_details)
        {
            return res.status(201).json(recipe_details)
            
        }
        throw new Error("Recipe name not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const create_recipe = async (request,response) => {
    try{
        const receipe_request = await new Recipe(request.body)
        await receipe_request.save()
        return response.status(201).json({
            receipe_request,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}


const update_recipe = async (request,response) => {
    try{
        let {id} = request.params
        let receipe_request = await Recipe.findByIdAndUpdate(id, request.body,{new:true})
        if(receipe_request){
            return response.status(200).json(receipe_request)
        }
        throw new Error("Recepi not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}


const delete_recipe = async (request,response) => {
    try{
        const { id }= request.params
        const recipe_delete = await Recipe.findByIdAndDelete(id)
        if(recipe_delete){
            return response.status(200).send("Recipe Deleted!")
        }
        throw new Error ("Recipe not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}


module.exports = {

    get_all_recipe,
    get_recipe_by_id,
    get_recipe_by_name,
    create_recipe,
    update_recipe,
    delete_recipe

}