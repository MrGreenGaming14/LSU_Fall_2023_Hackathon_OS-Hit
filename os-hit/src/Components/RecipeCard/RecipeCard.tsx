import React, { useState } from 'react';

function RecipeCard({recipe}: any){
    let title = recipe.title;
    let id = recipe.id;
    console.log(title);
    let url = "https://spoonacular.com/recipeImages/"+id+"-"+"480x360."+recipe.imageType;
    return (
    <div>
        <h1>Recipe Name: {title}</h1>
        <p>Recipe ID: {id}</p>
        <img src={url} alt="Image" height="200" />
    </div>
    )
}

export default RecipeCard