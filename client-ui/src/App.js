import { React, createContext, useState } from 'react'
import './App.css';
import './Assets/assets/css/bootstrap.min.css'
import './Assets/assets/css/atlantis.min.css'
import './Assets/assets/css/demo.css'
import Layout from './Layout/Layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Toolbar from './Layout/Toolbar';
import NotFound from './Pages/NotFound';
import { ProfileContext } from './hoc/Contexts';


function App() {

  const [headerClass, setHeaderClass] = useState("")
  const [title, setTitle] = useState("")




  return (
    <div className="wrapper">
      <ProfileContext.Provider value={{ title, setTitle, headerClass, setHeaderClass }}>
        <Layout>
          <Router>
            <Toolbar>
            </Toolbar>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Router>
        </Layout>
      </ProfileContext.Provider>
    </div>
  );
}

export default App;
