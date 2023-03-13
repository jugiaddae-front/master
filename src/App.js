import './Styles/reset.css'
import RoomList from './Pages/RoomList';
import SearchResult from './Pages/SearchResult';
import { Routes ,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/product/result/" element={<SearchResult />} />
          <Route path="/product/search/" element={<RoomList />} />
        </Routes>
    </div>
  );
}

export default App;
