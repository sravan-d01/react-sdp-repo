import { BrowserRouter , Routes, Route } from 'react-router-dom';
import MainNavBar from './pages/MainNavBar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <MainNavBar/>
    </BrowserRouter>
  );
}

export default App;
