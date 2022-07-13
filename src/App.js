import logo from './logo.svg';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './landing';
import Navbar from './navbar';
import Login from './login';
import Register from './register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar /><Landing /></>} />
        <Route path='/login' element={<><Navbar /><Login /></>} />
        <Route path='/register' element={<><Navbar /><Register /></>} />
      </Routes>
    </Router>
  )
}

export default App;
