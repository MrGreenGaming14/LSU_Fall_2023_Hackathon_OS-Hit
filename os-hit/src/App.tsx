import './App.css';

import {TopNav, BottomNav, IngredientsView} from './Components/index';
import RecipeDisplay from './Pages/RecipeDisplay/RecipeDisplay';

function App() {
  return (
    <div>
      <TopNav/>
      <div className='mainViewport'>
        <IngredientsView/>
        <RecipeDisplay></RecipeDisplay>
      </div>
      
      <BottomNav showGenerate/>
    </div>
  );
}

export default App;
