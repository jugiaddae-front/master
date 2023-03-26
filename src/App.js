import './Styles/reset.css';
import SearchResult from './Pages/SearchResult';
import { BrowserRouter, Routes ,Route } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

import HomePC from './Pages/HomePC';
import HomeMobile from './Pages/HomeMobile';

import Login from './Pages/Login';
import Join from './Pages/Join'

import SearchRegion from './Pages/SearchRegion';
import DetailPage from './Pages/DetailPage';

import Motel from './Pages/Motel';
import Hotel from './Pages/RoomList';
import Pension from './Pages/Pension';
import GuestHouse from './Pages/GuestHouse';
import Camping from './Pages/Camping';
import Overseas from './Pages/Overseas';
import HotelDetailPage from './Pages/HotelDetailPage';


function App() {
  const isMoblie = useMediaQuery({
    query: "(max-width:1024px)"
  });
  return (
    <div className="App">
          
      <header className='App-header'>
      <BrowserRouter>
        <Routes>
          { isMoblie ?
          <Route path="/" element={<HomeMobile />}></Route> :
          <Route path="/" element={<HomePC />}></Route>
          }
          <Route path="/product/result/" element={<SearchResult />} />
          <Route path="/product/search/1" element={<Motel/>}></Route>
          <Route path="/product/search/2" element={<Hotel />}></Route>
          <Route path="/product/search/3" element={<Pension />}></Route>
          <Route path="/product/search/4" element={<GuestHouse />}></Route>
          <Route path="/product/search/5" element={<Camping />}></Route>
          <Route path="/product/search/6" element={<Overseas />}></Route>
          <Route path="/product/test" element={<HotelDetailPage />}></Route>
            <Route path="/searchregion" element={<SearchRegion />}></Route>
            <Route path="/detailpage" element={<DetailPage />}></Route>
            
          <Route path="/user/login" element={<Login />}></Route>
          <Route path="/user/join" element={<Join />}></Route>
        </Routes>
        </BrowserRouter>
        </header>
    </div>
  );
}

export default App;
