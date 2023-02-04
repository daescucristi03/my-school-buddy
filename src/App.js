import './assets/css/App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Topnav from './components/navigation/topNav/Topnav';
import Sidenav from './components/navigation/sideNav/Sidenav';
import Home from './pages/Home/Home';

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
