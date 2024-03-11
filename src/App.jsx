import { Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './components/HomePage/HomePage';
import { Status } from './components/Status/Status';

export const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/status' element={<Status/>} />



      </Routes>
    </div>
  );
}