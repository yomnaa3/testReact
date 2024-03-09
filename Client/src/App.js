import React from 'react'
import RoadMaps from './Pages/RoadMaps'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roadmap/*' element={<RoadMaps />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;

