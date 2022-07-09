const express = require("express");
const router = express.Router();
const {
    getWorkOuts,
    getWorkOut,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

router.get('/', getWorkOuts)

router.get('/:id', getWorkOut)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router