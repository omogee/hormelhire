import React, { useState, useEffect } from 'react';

function Socials() {
    return ( 
        <div>
               <div style={{display:"flex",flexWrap:"wrap",padding:"0 50px",marginTop:"30vh",marginLeft:"10vh"}}>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}><span className='fa fa-facebook-square' style={{color:" rgb(0, 34, 102)"}}></span> Facebook : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>Content Developer</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}><span className='fa fa-instagram' style={{color:" brown"}}></span> Instagram : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>Average</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}><span className='fa fa-linkedin' style={{color:" rgb(0, 34, 102)"}}></span> linkedIn : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>5 years</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}> <span className='fa fa-twitter' style={{color:" rgb(0, 34, 102)"}}></span> twitter : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>Content Developer</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}><span className='fa fa-tik-tok' style={{color:" rgb(0, 34, 102)"}}></span> Tik Tok : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>high</p>
                </div>
                
                </div>
        </div>
     );
}

export default Socials;