import React, { useState, useEffect } from 'react';

function Details() {
    return ( 
        <div >
            <div style={{padding:"0 50px",marginTop:"30vh",marginLeft:"10vh"}}>
               <div style={{display:"flex",flexWrap:"wrap"}}>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}>Name : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>Eze Ogbonnaya Okereke</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}>Email : </p>
                </div>
                <div style={{width:"50%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>ezeogbonnayajnr@yahoo.com</p>
                </div>
                <div style={{width:"25%"}}>
                   <button style={{fontWeight:"bold",padding:"10px",borderRadius:"10px",color:"white",border:"none",backgroundColor:"indianred"}}>
                    <span className='fa fa-envelope'></span> Mail Client </button>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}>permanent Address : </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>No 30 owode street, Iwaya Yaba</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}>Business Address :   </p>
                </div>
                <div style={{width:"75%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>No 30 owode street, Iwaya Yaba</p>
                </div>
                <div style={{width:"25%"}}>
                   <p style={{fontWeight:"bold",color:"indianred"}}>Contact :   </p>
                </div>
                <div style={{width:"50%",color:" rgb(0, 34, 102",fontWeight:"bold"}}>
                    <p>08169319476</p>
                </div>
                <div style={{width:"25%"}}>
                   <button style={{fontWeight:"bold",padding:"10px",borderRadius:"10px",color:"white",border:"none",backgroundColor:"indianred"}}>
                    <span className='fa fa-phone'></span> Call Client </button>
                </div>
               </div>
            </div>
        </div>
     );
}

export default Details;