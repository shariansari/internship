import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Weak from './components/pages/Weak';
import Month from './components/pages/Month';
import Top from './components/pages/Top';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Top/>}/>
        <Route path='/Weak' element={<Weak/>}/>
        <Route path='/Month' element={<Month/>}/>
      </Routes>
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
