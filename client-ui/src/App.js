import './App.css';
import './Assets/assets/css/bootstrap.min.css'
import './Assets/assets/css/atlantis.min.css'
import './Assets/assets/css/demo.css'
import Layout from './Layout/Layout';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';

function App() {


  let _routes = 
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<div>NotFound</div>}/>
    </Routes>
  </Router>

  return (
    <div className="wrapper">
      <Layout title='سلام دنیا'>
        {_routes}
      </Layout>
    </div>
  );
}

export default App;
