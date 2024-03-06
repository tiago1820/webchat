import { Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './components/HomePage/HomePage';

export const App = () => {
  return (
    <div>
      <Routes>

        <Route path='/' element={<HomePage/>} />

      </Routes>
    </div>
  );
}