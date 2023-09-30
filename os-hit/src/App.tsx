import './App.css';
import {TopNav, BottomNav, IngredientsView} from './Components/index';

function App() {
  return (
    <div>
      <TopNav/>
      <div className='mainViewport'>
        <IngredientsView/>
      </div>
      
      <BottomNav showGenerate/>
    </div>
  );
}

export default App;
