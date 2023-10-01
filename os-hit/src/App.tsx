import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {TopNav, BottomNav, IngredientsView, RecipeDisplay, MyRecipes} from './Components/index';

function App() {
  return (
    <BrowserRouter>
      
    <div>
      <TopNav/>
      <div className='mainViewport'>
        <Routes>
          <Route path='/' element={<IngredientsView/>} />
          <Route path='/recipe' element={< RecipeDisplay/>} />
          <Route path='/myrecipes' element={< MyRecipes/>} />
        </Routes>
      </div>
      
      <BottomNav showGenerate/>
    </div>
    </BrowserRouter>
  );
}

export default App;
