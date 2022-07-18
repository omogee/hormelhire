import React, { useState, useEffect } from 'react';
import { states } from './state';
import "./index.css"
import axios from "axios"

function Register() {
    const [skills, setSkills] = useState([
        "Architect","bricklayer", "mechanic", "driver", "electrician", "agent"
    ])
    const [experience, setExperience] = useState([1,2,3,4,5,6,7,8,9,10, "over 10"])
    const [inputs, setInputs] = useState({})
    const [passwordconstants, setPasswordconstants] =useState({})
    const [selectedlocals, setLocals] =useState([])
    const [loading, setloading] = useState(false)
    const [register,setregister] = useState({})
    const [display, setdisplay] = useState("none")
    const [redirectcount, setredirectcount] = useState(5)

    const photochange =(e)=>{
      let file = e.target.files
      console.log(file)
      alert(JSON.stringify(file[0]))
      setInputs(prev => ({...prev, profileimage:e.target.files[0]}))
       let fileReader = new FileReader()
       fileReader.onload = (e) => {
         let imgprev = document.querySelector(".imgpreview")
         imgprev.src = fileReader.result
       }
       fileReader.readAsDataURL(file[0])

    }

    const change =(e)=>{
      setInputs(prev =>({ ...prev, [e.target.name]:e.target.value}))
    }
    useEffect(()=>{
      if(inputs.password && inputs.password.length > 0){
         const passwordContainLowercase = Array.from(inputs.password).some(pass => pass === pass.toLowerCase())
         const passwordContainUppercase = Array.from(inputs.password).some(pass => pass === pass.toUpperCase())
         const passwordContainNumber = /[0-9]/.test(inputs.password)
         console.log(passwordContainLowercase,passwordContainUppercase,passwordContainNumber)
         setPasswordconstants({number:passwordContainNumber ? "green" : "red",lowercase:passwordContainLowercase ? "green" : "red", uppercase:passwordContainUppercase ? "green" : "red"})
      }else{
         setPasswordconstants({number: "red",lowercase: "red", uppercase:"red"})
      }
      if((inputs.password && inputs.confirmpassword) && inputs.password.length > 0 && inputs.confirmpassword.length > 0){
         setPasswordconstants(prev =>({ ...prev, passwordconfirmation:inputs.password !== inputs.confirmpassword?"password mismatch" : "password match"}))
      } else{
         setPasswordconstants(prev =>({ ...prev, passwordconfirmation:""}))
      }
    },[inputs])
    const submit=()=>{
      setdisplay("block")
      setloading(true)
      const formdata = new FormData()
      formdata.append("files",inputs.profileimage)
      formdata.append("input",JSON.stringify(inputs))
           console.log(formdata.get('input'))
      axios.post(`http://localhost:5000/register`, formdata)
      .then(res => {
             setregister(res.data)
              setloading(false)
              if(res.data.sucess){
               setInputs({})
              }
      })
      .catch(err => console.log(err))
    }
    useEffect(()=>{
      const selectedlocals= inputs.state ? states.find(state => state.state.name === inputs.state).state.locals : []
      setLocals(selectedlocals)
      console.log(selectedlocals)
    },[inputs.state])
    return ( 
       <div >
         <div className='registerbg' style={{height:"100vh",width:"100%",filter:"blur(5px)"}}>
            </div>
          <div style={{position:"fixed",display:`${display}`,zIndex:"10",opacity:"0.5",backgroundColor:"rgb(242,242,242)",width:"100%",height:"100%",top:"0",left:"0"}}>
          </div>
          <div style={{position:"fixed",borderRadius:"10px",boxShadow:"2px 3px 2px 3px lightgrey",display:`${display}`,zIndex:"12",top:"30%",left:"30%",width:"40%",height:"50%",backgroundColor:"white"}}>
            <div style={{color:"grey"}}>
               <span style={{float:"right",padding:"10px",fontSize:"25px"}} onClick={()=> setdisplay("none")} className='fa fa-times '></span>
               {loading ?
             <div>
                 <h2 >please Wait a few Minutes</h2>
               <img  src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921`}  />
             </div>
               : <center>
                  <span className='fa fa-sign-in' style={{fontSize:"200px",color:`${register.success ? "green" : "red"}`}}></span>
                  <h2 style={{textTransform:"capitalize",marginTop:"5%"}}>{register.message} <span className='fa fa-check-circle'></span></h2>
                  {register.success ? 
                  <p> You Would be redirected in 5s</p>
                  : <button style={{padding:"5px 15px",color:"white",border:"none",fontWeight:"bolder",fontSize:"18px",backgroundColor:"indianred"}}>Try Again</button>}
               </center>
               }
            </div>
          </div>
           <div style={{position:"absolute",top:"100px",width:"100%",left:"0px"}}>
           <div style={{display:"flex"}}>
            <div className='registerdummydiv'> </div>
            <div className='registerdiv'>
                <h1 style={{color:"red",opacity:"1",paddingLeft:"10px"}}> Registration <span className='fa fa-pencil-square'></span></h1>
                
               <div style={{padding:"10px 25px",marginBottom:"10px"}}>
                  <div style={{textAlign:'center'}}>
                  <img className='imgpreview' style={{width:"50%",height:"200px",padding:"20px",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU"} />
                  </div>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span>Upload Portrait/Passport :</span>
               <input type="file" name="files" onChange={photochange} style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
                <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Full Name :</span>
               <input onChange={change} type="text" name="fullname" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Email :</span>
               <input onChange={change} type="text" name="email" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Permanent Address :</span>
               <input onChange={change} type="text" name="permanentaddress" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Business Adress <small>(if any)</small> :</span>
               <input onChange={change} type="text" name="businessaddress" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Select State Of Residence :</span>
               <select onChange={change} name="state" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>{states[0].state.name} </option>
                {states.map(state =>
                     <option style={{textTransform:"capitalize"}} value={state.state.name} key={state.state.name}>{state.state.name}</option>
                   )}
                </select><br/><br/>
                <span style={{color:"grey", fontWeight:"bold"}}>Select LGA Of Residence :</span>
               <select onChange={change} name="lga" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>{" "}</option>
               {inputs.state && selectedlocals ? selectedlocals.map(lga =>
                     <option style={{textTransform:"capitalize"}} value={lga.name} key={lga.name}>{lga.name}</option>
                   ) : ""}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}> Skill :</span>
               <select onChange={change} name="skill" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Choose Skill</option>
                {skills.map(skill =>
                     <option style={{textTransform:"capitalize"}} value={skill} key={skill}>{skill}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Experience Level :</span>
               <select onChange={change}  name="experiencelevel" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Experience Level (years) </option>
                {experience.map(exp =>
                     <option style={{textTransform:"capitalize"}} value={exp + " years"} key={exp}>{exp}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Skill (2) :</span>
               <select onChange={change}  name="skill2" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Choose Skill (2)</option>
                {skills.map(skill =>
                     <option style={{textTransform:"capitalize"}} value={skill} key={skill}>{skill}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Experience Level (2) :</span>
               <select onChange={change} name="experiencelevel2" style={{textTransform:"capitalize",width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}}>
               <option>Experience Level 2 (years) </option>
                {experience.map(exp =>
                     <option style={{textTransform:"capitalize"}} value={`${exp} years`} key={exp}>{exp}</option>
                   )}
                </select><br/><br/>
               <span style={{color:"grey", fontWeight:"bold"}}>Cover Story <small>brief description</small>:</span>
               <textarea onChange={change} type="text" multiple name="coverstory" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} /><br/><br/>
                 
               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Password :</span>
               <input onChange={change} type="text" name="password" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} />
               <small style={{color:`${passwordconstants.lowercase || "red"}`,fontWeight:"bold"}}>* must contain lowercase letter</small><br/>
               <small style={{color:`${passwordconstants.uppercase || "red"}`,fontWeight:"bold"}}>* must contain uppercase letter</small><br/>
               <small style={{color:`${passwordconstants.number || "red"}`,fontWeight:"bold"}}>* must contain a number</small><br/><br/>

               <span style={{color:"grey", fontWeight:"bold"}}><span style={{color:"indianred",fontSize:"20px"}}> * </span> Confirm Password :</span>
               <input onChange={change} type="text" name="confirmpassword" style={{width:"100%",padding:"10px",borderRadius:"20px",border:"1px solid lightgrey"}} />
               <small style={{fontWeight:"bold",color:`${passwordconstants.passwordconfirmation === "password match" ? "green" : "red"}`}}>{passwordconstants.passwordconfirmation}</small><br/><br/>
               <button type="submit" value='Submit' onClick={submit} style={{width:"100%",backgroundColor:"indianred",fontSize:"17px",textTransform:"uppercase",color:"white",fontWeight:"bold",padding:"20px",borderRadius:"20px",border:"1px solid lightgrey"}} >Submit</button><br/><br/>
               </div>
            </div>
            </div>
           </div>
       </div>
        
     );
}

export default Register;