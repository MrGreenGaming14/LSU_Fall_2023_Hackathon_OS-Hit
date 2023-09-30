import './App.css';
import {TopNav, BottomNav} from './Components/index';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <TopNav/>
      <BottomNav showGenerate/>
    </div>
  );
}

export default App;
