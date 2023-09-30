
// import React, { useState, useEffect } from 'react';

// function RecipeListComponent() {
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Make an API request to fetch recipe data
//     fetch('https://api.example.com/recipes')
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming data is an array of recipe objects from the API
//         const transformedRecipes = data.map((apiRecipe: any) => {
//           // Extract and transform data as needed
//           return {
//             id: apiRecipe.id,
//             title: apiRecipe.title,
//             ingredients: apiRecipe.ingredients,
//             image: apiRecipe.image,
//             // Add more properties as needed
//           };
//         });

//         setRecipes(transformedRecipes);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Recipes</h1>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {recipes.map((recipe) => (
//             <li key={recipe.id}>
//               <h2>{recipe.title}</h2>
//               <img src={recipe.image} alt={recipe.title} />
//               <p>Ingredients: {recipe.ingredients.join(', ')}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default RecipeListComponent;
