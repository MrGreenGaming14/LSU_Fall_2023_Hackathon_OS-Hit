import React, { useState } from 'react';

function RecipeCard({recipe}: any){
    let title = recipe.title;
    let id = recipe.id;
    let url = recipe.url;
    return (
    <div>
        <h1>{title}</h1>
        <p>{id}</p>
        <img src={url} alt="Image" height="200" />
    </div>
    )
}

export default RecipeCard