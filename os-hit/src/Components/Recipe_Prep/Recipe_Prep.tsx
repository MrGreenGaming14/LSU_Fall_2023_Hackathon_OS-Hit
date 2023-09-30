import React from 'react';
import Recipe from '../Recipe/List_Recipe';
import PrepTime from '../PrepTime/PrepTime';
import NutritionTable from '../NutritionalFacts/NutritionalFacts';
import VirtualizedList from '../List_Ingredients/List_Ingredients';

const Recipe_Prep: React.FC = () => {
 return (
    <div className="App">
      <h1>Recipe</h1>
      <Recipe />
      <h2>Prep Time</h2>
      <PrepTime />
      <h2>Nutrition Table</h2>
      <NutritionTable />
      <h1>Ingredients List</h1>
      <List_Ingredients />
    </div>
 );
}

export default Recipe_Prep;