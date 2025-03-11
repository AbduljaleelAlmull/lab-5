document.getElementById('recipe-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const diet = document.getElementById('diet').value;
    const ingredients = document.getElementById('ingredients').value;

    try {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ diet, ingredients })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();
        displayRecipes(data.recipes);
    } catch (error) {
        displayError(error.message);
    }
});

function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';
        recipeElement.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
        `;
        recipesDiv.appendChild(recipeElement);
    });
}

function displayError(message) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = `<p class="error">${message}</p>`;
}
