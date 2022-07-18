import logo from './logo.svg';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './landing';
import Navbar from './navbar';
import Login from './login';
import Register from './register';
import Profile from './profile';
import Details from './profile/profiledetails';
import CoverStory from './profile/profilecover';
import Experience from './profile/profile_exp';
import Socials from './profile/profilesocials';

function App() {
  const ProfileDetails =()=>{
    return(
      <div style={{display:"flex"}}>
        <div style={{width:"20%"}}><Profile /></div>
        <div style={{width:"70%"}}><Details /></div>
      </div>
    )
  }
  const ProfileCover =()=>{
    return(
      <div style={{display:"flex"}}>
        <div style={{width:"20%"}}><Profile /></div>
        <div style={{width:"70%"}}><CoverStory /></div>
      </div>
    )
  }
  const ProfileExperience =()=>{
    return(
      <div style={{display:"flex"}}>
        <div style={{width:"20%"}}><Profile /></div>
        <div style={{width:"70%"}}><Experience /></div>
      </div>
    )
  }
  const ProfileSocials =()=>{
    return(
      <div style={{display:"flex"}}>
        <div style={{width:"20%"}}><Profile /></div>
        <div style={{width:"70%"}}><Socials /></div>
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navbar /><Landing /></>} />
        <Route path='/login' element={<><Navbar /><Login /></>} />
        <Route path='/register' element={<><Navbar /><Register /></>} />
        <Route path="/profile/details" element={<><Navbar /> <ProfileDetails /></>} />
        <Route path="/profile/cover" element={<><Navbar /> <ProfileCover/></>} />
        <Route path="/profile/experience" element={<><Navbar /> <ProfileExperience/></>} />
        <Route path="/profile/socials" element={<><Navbar /> <ProfileSocials/></>} />
      </Routes>
    </Router>
  )
}

export default App;
