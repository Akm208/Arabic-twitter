import React from "react"
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Sidebar from './components/sidebar/Sidebar';
// import Trend from './components/trend/Trend';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <div className='flex'>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
