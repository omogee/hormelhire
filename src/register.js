import React, { useState, useEffect } from 'react';
import "./index.css"

function Register() {
    const [skills, setSkills] = useState([
        "Architect","bricklayer", "mechanic", "driver", "electrician", "agent"
    ])
    const [experience, setExperience] = useState([1,2,3,4,5,6,7,8,9,10, "over 10"])
    return ( 
       <div >
         <div className='registerbg' style={{height:"100vh",width:"100%",filter:"blur(5px)"}}>
            </div>
           <div style={{position:"absolute",top:"100px",width:"100%",left:"0px"}}>
           <div style={{display:"flex"}}>
            <div className='registerdummydiv'> </div>
            <div className='registerdiv'>
                <h1 style={{color:"red",opacity:"1",paddingLeft:"10px"}}><img style={{width:"20%"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} /> Registration <span className='fa fa-pencil-square'></span></h1>
                
               <div style={{padding:"10px 25px",marginBottom:"10px"}}>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span>Upload Portrait/Passport :</span>
               <input type="file" multiple style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
                <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Full Name :</span>
               <input type="text" name="fullname" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Email :</span>
               <input type="text" name="email" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Permanent Address :</span>
               <input type="text" name="permanentaddress" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Business Adress <small>(if any)</small> :</span>
               <input type="text" name="businessaddress" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}> Skill :</span>
               <select  name="skill" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Choose Skill</option>
                {skills.map(skill =>
                     <option style={{textTransform:"capitalize"}} value={skill} key={skill}>{skill}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Experience Level :</span>
               <select  name="experiencelevel" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Experience Level (years) </option>
                {experience.map(exp =>
                     <option style={{textTransform:"capitalize"}} value={exp + " years"} key={exp}>{exp}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Skill (2) :</span>
               <select  name="skill2" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Choose Skill (2)</option>
                {skills.map(skill =>
                     <option style={{textTransform:"capitalize"}} value={skill} key={skill}>{skill}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Experience Level (2) :</span>
               <select  name="experiencelevel2" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Experience Level 2 (years) </option>
                {experience.map(exp =>
                     <option style={{textTransform:"capitalize"}} value={`${exp} years`} key={exp}>{exp}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Upload Cv (if available) :</span>
               <input type="file" multiple name="cv" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>

               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Password :</span>
               <input type="text" name="password" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>

               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Confirm Password :</span>
               <input type="text" name="confirmpassword" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>

               <input type="button" value='Submit' style={{width:"100%",backgroundColor:"indianred",fontSize:"17px",textTransform:"uppercase",color:"white",fontWeight:"bold",padding:"20px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               </div>
            </div>
            </div>
           </div>
       </div>
        
     );
}

export default Register;