const Directions = require('../models/directions')

const getAllDirections = async (req, res) => {
  try {
    const directions = await Directions.find();
    res.json(directions)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

////////////////////////////////////////////////////////

const createDirections = async (req, res) => {
  try {
    const { recipe_id, direction_order } = req.body
    if (!recipe_id || !direction_order) {
      return res.status(400).json({ error: 'Recipe ID and direction_order are required' })
    }

    // Find the first available empty slot in the directions list of the specified recipe
    const existingDirections = await Directions.findOne({ recipe_id })
    let emptySlot = 1

    while (existingDirections[`direction_order${emptySlot}`] !== undefined) {
      emptySlot++
    }

    // Create the new direction in the first available slot
    const updatedDirections = {
      ...existingDirections.toObject(),
      [`direction_order${emptySlot}`]: direction_order,
    }

    const result = await Directions.findOneAndUpdate(
      { recipe_id },
      updatedDirections,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )

    return res.status(201).json({ direction_order: result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message })
    }
    return res.status(500).json({ error: error.message })
  }
}

///////////////////////////////////////////////////////////////////

const updateDirections = async (req, res) => {
  try {
    let { id } = req.params
    let direction = await Directions.findByIdAndUpdate(id, req.body, { new: true})
    if (direction) {
      return res.status(200).json(direction)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

/////////////////////////////////////////////////////////////////

const deleteDirections = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Directions.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Ingredient deleted");
      }
      throw new Error("Ingredient not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllDirections,
  createDirections,
  updateDirections,
  deleteDirections
}