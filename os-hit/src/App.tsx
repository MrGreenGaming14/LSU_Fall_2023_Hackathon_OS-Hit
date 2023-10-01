import { useState } from 'react';
import './App.css';
import { TopNav, BottomNav, IngredientsView, RecipeDisplay } from './Components/index';
import { Button } from '@mui/base';
import { Typography } from '@mui/material';

const GenRecipeButton = (props: any) => {
  return (
    <Button onClick={props.handleClick}>
      <Typography >
        Generate Recipe
      </Typography>
    </Button>
  )
}
const EditIngButton = (props: any) => {
  return (
    <Button onClick={props.handleClick}>
      <Typography >
        Edit Ingredients
      </Typography>
    </Button>
  )
}

let setDisplayed = true;

function App() {

  const [ingredientList, setIngredientList] = useState<any>([]);
  const changeIngredient = (ingredient: any) => {
    setIngredientList(ingredient);
  }

  const handleClick = () => {
    if (setDisplayed) {
      setDisplayButton(<GenRecipeButton handleClick={handleClick} />);
      setDisplayed = !setDisplayed;

    }
    else {
      setDisplayButton(<EditIngButton handleClick={handleClick} />);
      setDisplayed = !setDisplayed;
    }

  }

  const [displayButton, setDisplayButton] = useState<any>(<GenRecipeButton handleClick={handleClick} />)

  const handleSwitch = (e: any) => {
    const name = e.target.name;
    const value = e.target.checked;
    
    let tempArr = [...ingredientList];
    const tempIndex = tempArr.indexOf(tempArr.find((o: any) => o.value === name));
        console.log(tempIndex, tempArr);
        tempArr[tempIndex].toggled = value;
        changeIngredient(tempArr);
  }; 


  return (
    <div>
      <TopNav displayButton={displayButton} />
      <div className='mainViewport'>
        {setDisplayed ?
          <IngredientsView changeIngredient={changeIngredient} ingredientList={ingredientList} handleSwitch={handleSwitch}/> 
          : <RecipeDisplay ingredientList={ingredientList} />}
      </div>
      {/* <BottomNav showGenerate /> */}
    </div>
  );
}

export default App;