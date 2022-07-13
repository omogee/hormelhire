import React, { useState, useEffect } from 'react';
import "./index.css"

function Login() {
    return ( 
        <div className="container">
             <div style={{height:"500px",backgroundRepeat:"no-repeat",backgroundPosition:"center bottom",filter:"blur(5px)",backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU)"}}></div>
        <div style={{position:"absolute",width:"100%",top:"0px"}}>
        <div style={{display:"flex"}}>
        <div  className='logindummydiv'></div>
         <div className='logindiv'>
         <div style={{marginTop:"20px"}}>
                <center>
                   <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`}  style={{width:"20%"}} /> 
                   </center>
              </div>
             
              <div className='loginbox' >
            <div>
                <center>
                    <h2 style={{padding:"25px",fontWeight:"bolder",fontSize:"20px"}}>Sign in to Hormel Hire</h2>
                </center>
            </div>
            <div style={{backgroundColor:"white",border:"1px solid lightgrey"}}>
                <center>
                   <div style={{padding:"20px",fontWeight: "normal",fontFamily: "Open Sans, sans-serif",wordSpacing: "0.8px"}}>
                    <small style={{fontSize:"15px",fontWeight:"bold"}}>
                        New to Hormel?<br/>
                        <a href="/register" style={{textDecoration:"underline"}}>Create an Hormel account</a>
                    </small>
                   </div>
                </center>
            </div>
            <div style={{padding: "20px"}}>
              <form   method="post">
                <small style={{fontSize:"15px"}}>Email</small><br/>
                <input type="text"  name="email" placeholder="Enter your email" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
                <br/>
                <br/>
                <small style={{fontSize:"15px"}}>Password</small><br/>
                <input type="password"  name="password" placeholder="Enter your password" style={{width: "100%",padding:"15px 0px 15px 15px",border:"2px solid rgba(140, 140, 140,0.6)",borderRadius:"5px"}} />
                <br/>
                <br/>
<br/>
                <button type="submit" className="btn" style={{backgroundColor:"rgb(0, 34, 102)",padding:"18px",fontWeight: "normal",border:"none",fontFamily: "Open Sans, sans-serif",color:"white",borderRadius:"5px",width:"100%"}}>
                <center>
                  <span style={{fontSize:"17px"}}>  Sign in to Hormel</span>
                </center>
                </button>
              </form>
                <br/>
                <br/>
                <center>
                   <a href="" style={{textDecoration:"underline",color:"rgb(0, 34, 102)"}}>
                    <small>
                        Forgot password ?
                    </small>
                   </a>
                </center>
                <br/>
                <center>
                    <small>
                       -- Or sign in with --
                    </small>
                </center>
                <br/>
                <div style={{display:"flex",flexWrap:"wrap"}}>
                 <div style={{width:"50%"}}>
                  <div style={{padding:"0",margin:"0"}}>
                <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                   <small style={{padding:"2px",paddingRight:"0"}}>
                    <span  style={{color:"rgb(0, 34, 102)"}} className=" fa fa-facebook-square fa-2x" ></span>
                   </small> Facebook</small>
                </div>
                </div>
                <div style={{width:"50%"}}>
                    <div style={{padding:"0",margin:"0",float:"right"}}>
                  <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                    <small style={{padding:"5px"}}>
         <span style={{color:"indianred"}}
           className="fa fa-google fa-2x text-danger"></span>
                    </small> Google</small>
                  </div>
                  </div>
                </div>
                <br/><br/>
                <div style={{display:"flex",flexWrap:"wrap"}}>
              <div style={{width:"50%"}}>
                    <div style={{padding:"0",margin:"0"}}>
                  <small style={{border:"1px solid lightgrey",padding:"10px"}}>
                    <small style={{padding:"5px"}}>
                        <span style={{color:"rgb(0, 34, 102)"}} className=" fa fa-linkedin fa-2x"></span>
                    </small> Linkedin</small>
                  </div>
                  </div>  
                  </div>
                  <br/>
                  <br/>
                  <div style={{width:"100%",border:"1px solid lightgrey"}}>
                    <center style={{padding:"13px"}}>
                        <small >View more options <span style={{fontWeight:"normal"}} className="fa fa-chevron-right text-primary ml-2"></span></small>
                    </center>
                    </div>
            </div>
              </div>
              <div style={{height:"150px"}}>
            <div style={{display: "flex",flexWrap:"nowrap",marginTop:"10px"}}>
            <div style={{width:"30%"}}>
            <center><small>What is Hormel About?</small></center>
            </div>
            <div style={{width:"3%"}}>
                <small>|</small>
                </div>
                <div style={{width:"30%"}}>
                    <small>Terms of Service</small>
                    </div>
                    <div style={{width:"3%"}}>
                        <small>|</small>
                        </div>
                    <div style={{width:"30%"}}>
                        <center><small>Having Problems?</small></center>
                        </div>
            </div>
              </div>
         </div>
         </div>   
         </div>  
    </div>
     );
}

export default Login;