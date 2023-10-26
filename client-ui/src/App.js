import { React, useState } from 'react'
import './App.css';

import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Toolbar from './Layout/Toolbar';
import NotFound from './Pages/NotFound';
import { ProfileContext } from './Helper/Contexts';
import { Login } from './Pages/Login';


function App() {

  const [headerClass, setHeaderClass] = useState("")
  const [title, setTitle] = useState("")

  const _token = localStorage.getItem("token");
  let _route = <Layout>
    <Router>
      <Toolbar>
      </Toolbar>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </Layout>
  if (!_token) {
    _route =
      <Router>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
  }


  return (
    <div className="wrapper">
      <ProfileContext.Provider value={{ title, setTitle, headerClass, setHeaderClass }}>
        {_route}
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
