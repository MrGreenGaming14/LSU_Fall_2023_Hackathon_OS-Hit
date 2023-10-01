import './RecipeCard.css';
import React from 'react';

function stringToHyphen(input: string): string {
  // Replace spaces and underscores with hyphens, and convert to lowercase
  return input.replace(/[\s_]/g, '-').toLowerCase();
}

function RecipeCard({ recipe }: any) {
  const title = recipe.title;
  const id = recipe.id;
  const url = `https://spoonacular.com/recipeImages/${id}-480x360.${recipe.imageType}`;
  const instructionUrl = `https://spoonacular.com/recipes/${stringToHyphen(title)}-${id}`;

  return (
    <div className="recipe-card">
      <h1 className="recipe-title">Recipe Name: {title}</h1>
      <p className="recipe-id">Recipe ID: {id}</p>
      <img className="recipe-image" src={url} alt="Recipe" />
      <p className="recipe-link">
        <a href={instructionUrl} target="_blank" rel="noopener noreferrer">
          Full Recipe
        </a>
      </p>
    </div>
  );
}

export default RecipeCard;
