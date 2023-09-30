import './App.css';
import RecipeCard from './Components/RecipeCard/RecipeCard';
import TopNav from './Components/index';
import { Container } from '@mui/material';

function App() {
  return (
    <Container>
    <div className="App">
      <GenerateRandom/>
    </div>
      <TopNav/>
    </Container>
  );
}

export default App;
