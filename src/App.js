import './assets/css/App.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Topnav from './components/navigation/topnav/Topnav';
import Sidenav from './components/navigation/sidenav/Sidenav';
import Login from './components/account/login/Login';
import Register from './components/account/register/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Topnav/>
          <section className='app__container'>
            <Sidenav/>
            <Routes>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
          </section>
      </div>
    </Router>
  );
}

export default App;
