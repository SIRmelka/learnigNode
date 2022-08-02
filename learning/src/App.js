import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Test from './pages/Test';
import Performances from './pages/Performances';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/performances" element={<Performances/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <h5>test</h5>
    </BrowserRouter></>
   
  );
}

export default App;