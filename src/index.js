import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RoomList from './Pages/RoomList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RoomList />
  </React.StrictMode>
);
