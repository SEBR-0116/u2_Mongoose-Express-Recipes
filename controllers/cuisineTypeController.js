const CuisineType = require('../models/cuisineType')

const getCuisineTypes = async (req, res) => {
	try {
		const cuisineTypes = await CuisineType.find()
		res.json(cuisineTypes)
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getCuisineTypeById = async (req, res) => {
	try {
		const { id } = req.params
		const cuisineType = await CuisineType.findById(id)
		if (cuisineType) {
			return res.json(cuisineType)
		} else {
			return res
				.status(404)
				.send('CuisineType with the specified ID does not exist')
		}
	} catch (e) {
		return res.status(500).send(e.message)
	}
}

const createCuisineType = async (req, res) => {
	try {
		const cuisineType = new CuisineType(req.body)
		await cuisineType.save()
		return res.status(201).json({ cuisineType })
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const updateCuisineType = async (req, res) => {
	try {
		const { id } = req.params
		const cuisineType = await CuisineType.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		if (cuisineType) {
			return res.status(200).json(cuisineType)
		}
		throw new Error('CuisineType not found.')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const deleteCuisineType = async (req, res) => {
	try {
		const { id } = req.params
		const deleted = await CuisineType.findByIdAndDelete(id)
		if (deleted) {
			return res.status(200).send('CuisineType deleted')
		}
		throw new Error('CuisineType not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getCuisineTypes,
	getCuisineTypeById,
	createCuisineType,
	updateCuisineType,
	deleteCuisineType,
}
