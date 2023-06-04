import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Novels from './components/Novels';
import StyledLayout from './components/StyledLayout';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StyledLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/novel' element={<Novels/>}/>
      </Route>
    </Routes>
  );
}

export default App;
