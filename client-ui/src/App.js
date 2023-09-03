import './App.css';
import './Assets/assets/css/bootstrap.min.css'
import './Assets/assets/css/atlantis.min.css'
import './Assets/assets/css/demo.css'
import Layout from './Layout/Layout';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import Toolbar from './Layout/Toolbar';

function App() {


  let _routes = 
  <Router>
    
    <Toolbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<div>NotFound</div>}/>
    </Routes>
  </Router>

  return (
    <div className="wrapper">
      <Layout>
        {_routes}
      </Layout>
    </div>
  );
}

export default App;
