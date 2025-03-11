const express = require('express');
const axios = require('axios');
const router = express.Router();

const SPOONTACULAR_API_KEY = '658b8e2c72f84346a339c5906c11a5ce';

router.post('/recipes', async (req, res) => {
    const { diet, ingredients } = req.body;
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
            params: {
                diet,
                includeIngredients: ingredients,
                number: 10,
                apiKey: SPOONTACULAR_API_KEY
            }
        });
        res.json({ recipes: response.data.results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch recipes', message: error.message });
    }
});

module.exports = router;
