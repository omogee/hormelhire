import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Landing from './landing';
import "./s.css"

function Navbar() {
    const [display, changedisplay] = useState("none")
    const [navlinks, setnavlinks] = useState([{url:"",name:"home"},{url:"services",name: "services"},{url:"contacts",name:"contact"},
    {url:"login",name:"login/register"}])
    const [subnavlinks, setsubnavlinks] = useState([{url:"",name:"home"},{url:"services",name: "our services"},{url:"contacts",name:"contact us"},
    {url:"why hormel",name:"why hormel"}, {url:"about",name:"About us"},{url:"profile",name:"my profile"},{url:"meet Our Team",name:"Meet Our team"},{url:"hire",name:"Hire labour"},
    {url:"login",name:"login/register"}])

    const navref =useRef(false)



    //60vh
    const displaynav=(e)=>{
        let nav = document.querySelector(".navdiv_sm")
        if(nav.style.height === "80vh"){
            e.target.classList.add("fa-bars")
            e.target.classList.remove("fa-times")
        }else{
            e.target.classList.add("fa-times")
            e.target.classList.remove("fa-bars")
        }
        nav.style.height = nav.style.height === "80vh" ? "0%" : "80vh"
        nav.style.width = nav.style.height === "100%" ? "0%" : "100%"
        }
    return ( 
        <div style={{position:"sticky",top:"0px",left:"0px",backgroundColor:"white",width:"100%",margin:"0",padding:"0",zIndex:"1000"}}>
            <nav >
                <div className='navdiv navdivlist' style={{zIndex:"15"}}>
                  <div className='navbrand' >
                      <img style={{width:"100%",marginTop:"5px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                  </div>
                  {navlinks.map((navlink,i) =>               
                  <div key={i} className='navdivlist'>
                <a  style={{textDecoration:"none",textTransform:"uppercase",color:"grey",fontWeight:"bolder"}}  href={`/${navlink.url}`}>{navlink.name}</a>
                </div>
             )}
                  <div >
                      <center style={{padding:"5px"}}>
                      <button style={{backgroundColor:"indianred",border:"none",borderRadius:"10px",color:"white",padding:"10px"}}>ACCOUNT</button>
                      </center>
                  </div>
                </div>
            </nav>
          
            <div className='bardiv' style={{display:"absolute",top:"5px",width:"100%",height:"8vh",backgroundColor:"white",opacity:"0.9", right:"0px",padding:"10px"}}>
            <div style={{width:"30%",float:"left"}}>
                      <img style={{width:"100%"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                </div>
               <div style={{padding:"2px 12px"}}>
               <span onClick={displaynav} className='fa fa-bars' style={{float:"right",color:"grey",border:"2px solid grey",borderRadius:"5px",fontSize:"20px",padding:"5px",color:"grey",cursor:"pointer",transition:"opacity 2s"}}></span>
               </div>
            </div>
            <div className='navdiv_sm' ref={navref}>
             <div style={{padding:"20px"}}>
                 {subnavlinks.map(navlink =>
                 <a style={{textDecoration:"none",color:"white"}} href={`/${navlink.url}`}><p >{navlink.name}</p></a>
                    )}
                
             </div>
            </div>
        </div>
     );
}

export default Navbar;