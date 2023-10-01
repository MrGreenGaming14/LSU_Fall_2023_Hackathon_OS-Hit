import './RecipeDisplay.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import TopNav from '../../Components/TopNav/TopNav';
import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';

function RecipeDisplay() {
  const [counter, setCounter] = useState(0);
  const [recipeCards, setRecipeCards] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=10&apiKey=3e94b8791d99441f8a21b8a8dfef8928&includeNutrition=true')
    //fetch('https://api.https://pokeapi.co/api/v2/pokemon/.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=10&apiKey=3e94b8791d99441f8a21b8a8dfef8928&includeNutrition=true')
    .then((response) => response.json())
      .then((data) => {
        // Map the data to RecipeCard components
        const mappedCards = data.map((recipe: any) => (
          <RecipeCard key={recipe.name} recipe={recipe}></RecipeCard>
        ));
        // Update the recipeCards state with the mapped components
        setRecipeCards(mappedCards);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const nextRecipe = () => {
    if (counter < recipeCards.length - 1) {
      setCounter(counter + 1);
    }
  };

  const previousRecipe = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container>
      <div className="App">
        <button onClick={previousRecipe}>Previous Recipe</button>
        <button onClick={nextRecipe}>Next Recipe</button>
        {recipeCards[counter] && (
          <div key={counter}>
            {recipeCards[counter]}
          </div>
        )}
      </div>
      <TopNav />
    </Container>
  );
}

export default RecipeDisplay;
