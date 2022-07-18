import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Profile() {
    return ( 
        <div>
                   <div style={{textAlign:"center"}}>
                   <div>
                    <div>
                    <img style={{width:"80%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./profileimage1.jpeg`)} />
                    </div>
                   </div>
                   <p style={{fontWeight:"bold"}}>
                    <Link to={`/profile/details`}>
                    <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    <span className='fa fa-user' style={{float:"left"}}></span> Profile </button>
                    </Link></p>
                   <p style={{fontWeight:"bold"}}>
                    <Link to={`/profile/cover`}>
                    <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    Cover Story </button>
                  </Link></p>
                   <p style={{fontWeight:"bold"}}>
                    <Link to={`/profile/experience`}>
                    <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    Experience </button>
                    </Link></p>
                   <p style={{fontWeight:"bold"}}>
                   <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    Ratings </button>
                    </p>
                   <p style={{fontWeight:"bold"}}>
                    <Link to={`/profile/socials`}>
                    <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    Socials </button></Link></p>
                    <p style={{fontWeight:"bold"}}>
                    <Link to={`/profile/socials`}>
                    <button style={{fontWeight:"bold",textTransform:"uppercase",padding:"10px",borderRadius:"10px",width:"100%",color:"white",border:"none",backgroundColor:"indianred"}}>
                    History </button></Link></p>
                   </div>
                </div>
     );
}

export default Profile;