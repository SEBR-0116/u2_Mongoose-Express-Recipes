const Direction = require("../models/direction");

const getAllDirections = async (req, res) => {
  try {
    const directions = await Direction.find();
    res.json(directions);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getDirectionsById = async (req, res) => {
  try {
    const { id } = req.params;
    const direction = await Direction.findById(id);
    if (direction) {
      return res.json(direction);
    }
    return res
      .status(404)
      .send("Directions with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createDirections = async (req, res) => {
  try {
    const direction = await new Direction(req.body);
    await direction.save();
    return res.status(201).json({
      direction,
    });
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const updateDirections = async (req, res) => {
  try {
    let { id } = req.params;
    let direction = await Direction.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (direction) {
      return res.status(200).json(plant);
    }
    throw new Error("Directions not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteDirections = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Direction.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Directions deleted");
    }
    throw new Error("Directions not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllDirections,
  getDirectionsById,
  createDirections,
  updateDirections,
  deleteDirections,
};
