import './assets/css/App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Topnav from './components/navigation/topnav/Topnav';
import Sidenav from './components/navigation/sidenav/Sidenav';

function App() {
  return (
    <Router>
      <div className="app">
        <Topnav/>
          <section className='app__container'>
            <Sidenav/>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
          </section>
      </div>
    </Router>
  );
}

export default App;
