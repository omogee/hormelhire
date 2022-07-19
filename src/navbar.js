import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Landing from './landing';
import "./s.css"

function Navbar() {
    const [display, changedisplay] = useState("none")
    const [navlinks, setnavlinks] = useState([{url:"",name:"home"},{url:"#about",name: "about us"},{url:"profile",name: "profile"},{url:"contacts",name:"contact"},
    {url:"services",name:"services"}])
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
        <div style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"white",width:"100%",margin:"0",padding:"0",zIndex:"1000"}}>
            <nav style={{padding:"0",margin:"0"}}>
                <div className='navdiv' style={{zIndex:"15",padding:"0",marginL:"0",width:"100%",justifyContent:"space-evenly"}}>
                  <div className='navbrand' >
                      <img style={{width:"100%",marginTop:"10px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                  </div>
                 <div className='navlistdiv' style={{display:"flex",order:"2",justifyContent:"space-evenly",textAlign:"center"}}>
                 {navlinks.map((navlink,i) =>               
                  <div key={i} className='navdivlist'>
                <a  style={{textDecoration:"none",textTransform:"uppercase",color:"black",fontWeight:"bold"}}  href={`/${navlink.url}`}><small>{navlink.name}</small></a>
                </div>
             )}
                 </div>
                  <div className="nav-btn" style={{padding:"0",margin:"0"}}>
                      <center style={{fontWeight:"bold",marginBottom:"3px",color:"rgb(0, 34, 102)"}}>
                        <small style={{fontSize:"12px"}}><span style={{fontSize:"18px"}} className='fa fa-globe' ></span> | Support | Documentation | <a href="/login"  style={{color:"rgb(0, 34, 102)",textDecoration:"none"}}>Login</a></small><br/>
                     <a href="/register" >
                     <button style={{backgroundColor:"indianred",fontWeight:"bold",border:"none",margin:"0px",borderRadius:"20px",color:"white",fontSize:"15px",padding:"10px 13px "}}>
                        <small>SIGN UP FOR FREE</small>
                      </button>
                     </a>
                      </center>
                  </div>
                </div>
            </nav>
          
            <div className='bardiv' style={{display:"absolute",top:"5px",width:"100%",height:"8vh",backgroundColor:"white",opacity:"0.9", right:"0px",padding:"10px"}}>
            <div className='navbrand_sm' style={{float:"left"}}>
                      <img style={{width:"100%"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                </div>
               <div style={{padding:"2px 17px"}}>
               <span onClick={displaynav} className='fa fa-bars' style={{float:"right",color:"grey",border:"2px solid grey",borderRadius:"5px",fontSize:"20px",padding:"5px",color:"grey",cursor:"pointer",transition:"opacity 2s"}}></span>
               </div>
            </div>
            <div className='navdiv_sm' ref={navref}>
             <div style={{padding:"20px"}}>
                 {subnavlinks.map(navlink =>
                 <a style={{textDecoration:"none",color:"white"}} href={`/${navlink.url}`}><p>{navlink.name}</p></a>
                    )}
                 <center className="navdiv_smbtm" style={{fontWeight:"bold",marginBottom:"3px"}}>
                        <small style={{fontSize:"12px"}}><span style={{fontSize:"18px"}} className='fa fa-globe' ></span> | Support | Documentation | <a href="/login"  style={{color:"white",textDecoration:"none"}}>Login</a></small><br/>
                        <a href="/register" >
                      <button style={{backgroundColor:"indianred",fontWeight:"bold",fontSize:"17px",border:"none",margin:"0px",borderRadius:"20px",color:"white",padding:"10px 15px"}}>
                        <small>SIGN UP FOR FREE</small>
                      </button>
                      </a>
                      </center>
             </div>
            </div>
        </div>
     );
}

export default Navbar;