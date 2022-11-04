import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Weak from './components/pages/Weak';
import Month from './components/pages/Month';
import Top from './components/pages/Top';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
  
      <Routes>
        <Route path='/' element={<Top/>}/>
        <Route path='/Week' element={<Weak/>}/>
        <Route path='/Month' element={<Month/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
