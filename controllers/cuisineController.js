const Cuisine = require("../models/cuisineType");

const getAllCuisine = async (req, res) => {
  try {
    const cuisine = await Cuisine.find();
    res.json(cuisine);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCuisineById = async (req, res) => {
  try {
    const { id } = req.params;
    const cuisine = await Cuisine.findById(id);
    if (cuisine) {
      return res.json(cuisine);
    }
    return res
      .status(404)
      .send("Cuisine with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createCuisine = async (req, res) => {
  try {
    const cuisine = await new Cuisine(req.body);
    await cuisine.save();
    return res.status(201).json({
      cuisine,
    });
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const updateCuisine = async (req, res) => {
  try {
    let { id } = req.params;
    let cuisine = await Cuisine.findByIdAndUpdate(id, req.body, { new: true });
    if (cuisine) {
      return res.status(200).json(plant);
    }
    throw new Error("Cuisine not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCuisine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Cuisine.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Cuisine deleted");
    }
    throw new Error("Cuisine not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCuisine,
  getCuisineById,
  createCuisine,
  updateCuisine,
  deleteCuisine,
};
