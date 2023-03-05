<<<<<<< refs/remotes/origin/main
import './Styles/reset.css'
=======
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import HomePC from './components/HomePC';
import HomeMobile from './components/HomeMobile';

import Motel from './components/Motel';
import Hotel from './components/Hotel';
import Pension from './components/Pension';
import GuestHouse from './components/GuestHouse';
import Camping from './components/Camping';
import Overseas from './components/Overseas';
>>>>>>> 홈화면 구현

function App() {
  const [responsive, setResponsive] = useState(false);

  const isMoblie = useMediaQuery({
    query: "(max-width:1024px)"
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          { isMoblie ?
          <Route path="/" element={<HomeMobile />}></Route> :
          <Route path="/" element={<HomePC />}></Route>
          }
          
          <Route path="/product/search/1" element={<Motel/>}></Route>
          <Route path="/product/search/2" element={<Hotel />}></Route>
          <Route path="/product/search/3" element={<Pension />}></Route>
          <Route path="/product/search/4" element={<GuestHouse />}></Route>
          <Route path="/product/search/5" element={<Camping />}></Route>
          <Route path="/product/search/6" element={<Overseas />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
