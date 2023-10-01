// import { Button } from '@mui/material'

// <<<<<<< Robbie
// =======
function GenerateRandom() {
//   return (
//     <Button>Generate Random</Button>
//   )
// }
// >>>>>>> main

// import React, { useState } from 'react';
// import {data} from './result';
// function GenerateRandom() {
//   const [recipeTitles, setTitles] = useState<any>([]);
//   const [recipeIDs, setIds] = useState([]);
//   const [recipeUrls, setUrls] = useState<any>([]);
//   const [isFetching, setIsFetching] = useState(false);
//   var recipeID = null;

//   const fetchData = () => {
//     setIsFetching(true);
//     /*
//     fetch('/Users/robbiesmith/Documents/LSU_Fall_2023_Hackathon_OS-Hit/os-hit/src/Components/GenerateRandom/result.json') // Replace with your API endpoint
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((jsonData) => {
//         // Extract an array of specific elements from the JSON data
//         const specificElementsArray = jsonData.results.map((item: any) => item.title); // Replace 'specificElement' with the actual property name
//         recipeID = jsonData.id;
//         setData(specificElementsArray);
//         setIsFetching(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setIsFetching(false);
//       });
//       */
//      const jsonData = data;
//      const recipes = jsonData.map((item: any)=>item.title);
//      const recipePic = jsonData.map((item: any)=>item.image);
     
//      setTitles(recipes);
//      setUrls(recipePic);
//      setIsFetching(false);

//   };

//   return (
//     <div>
//       <h1>Data Fetching Component</h1>
//       <button onClick={fetchData} disabled={isFetching}>
//         {isFetching ? 'Fetching Data...' : 'Fetch Data'}
//       </button>
//       {recipeTitles.length > 0 && (
//         <div>
//           <h2>Specific Elements:</h2>
//           <ul>
//             {recipeTitles.map((element: any, index: any) => (
//               <li key={index}>{element}</li>
//             ))}
//             {recipeUrls.map((element: any, index: any) => (
//               <img src={element} alt="Image" height="200" />
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
}


export default GenerateRandom