const { response } = require('express');
const  { Recipe, Direction }  = require('../models');
const { json } = require('body-parser');


const get_all_direction = async (req,res) =>{
    try{
        const directions = await Direction.find()
        if(directions)
        {
            return res.json(directions)
        }
        throw new Error("Direction not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}

const get_direction_id = async (req,res) =>{
    try{
        const {id} = req.params
        const directions = await Direction.findById(id)
        if(directions)
        {
            return res.status(201).json(directions)
            
        }
        throw new Error("Directions not found")

    }catch(error){
        return  res.status(500).send(error.message)
    }
}


const get_directions_by_recipe_id = async (req,res) =>{
    try{
        const recipe_id = req.params.id
        const directions_by_recipe = await Direction.find({recipe_id: recipe_id} )
        if(directions_by_recipe)
        {
            return res.status(201).json(directions_by_recipe)
            
        }
        throw new Error(`Directions found for ${req.params.id} this recipe`)

    }catch(error){
        return  res.status(500).send(error.message)
    }
}



const create_direction = async (request,response) => {
    try{
        const requests = await new Direction(request.body)
        await requests.save()
        return response.status(201).json({
            requests,
        })
    } catch (error){
        return response.status(500).json({error:error.message})
    }
}


const update_direction = async (request,response) => {
    try{
        let {id} = request.params
        let requests = await Direction.findByIdAndUpdate(id, request.body,{new:true})
        if(requests){
            return response.status(200).json(requests)
        }
        throw new Error("Direction not found")
    }catch(error){
        return response.status(500).send(error.message)
    }
}


const delete_direction_id = async (request,response) => {
    try{
        const { id }= request.params
        const in_delete = await Direction.findByIdAndDelete(id)
        if(in_delete){
            return response.status(200).send("Direction Deleted!")
        }
        throw new Error ("Direction not found")
    }
    catch(error){
        return response.status(500).send(error.message)
    }
}


module.exports = {

    get_all_direction,
    get_direction_id,
    get_directions_by_recipe_id,
    create_direction,
    update_direction,
    delete_direction_id

}