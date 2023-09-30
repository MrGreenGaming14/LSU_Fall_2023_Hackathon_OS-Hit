import './RecipeDisplay.css';
import RecipeCard from '../../Components/RecipeCard/RecipeCard';
import TopNav from '../../Components/TopNav/TopNav';
import { Container } from '@mui/material';
import {data} from '../../result';
import React, {useState} from 'react';
var recipeCards = [];

function fetchCards() {
  const jsonData = data;
  data.forEach((recipe: any) => {
    recipeCards.push(<RecipeCard recipe={recipe}></RecipeCard>)
  }
  ) 
}

function RecipeDisplay() {
  const [counter, setCounter] = useState(0);

  // Handler function to increment the counter
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
    <div className="App">
    <button onClick={incrementCounter}>Increment</button>
      recipeCards[counter]
    </div>
      <TopNav/>
    </Container>
  );
}

export default RecipeDisplay;
