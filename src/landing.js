import React, { useState, useEffect } from 'react';
import "./index.css"
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

function Landing() {
    const [colours, setcolours] = useState(["goldenrod","brown","rgb(0, 34, 102)","brown","lightgreen","orange","olive","tomato","yellowgreen"])
    const [currentIndex, setIndex] =useState(0)
    const [reviews, setReviews] = useState([
        {name:"Eze Ogbonnaya",code:"ng",country:"nigeria", reviews:3.5, comment:"very trusted dealer but fewer options",client:"dela ventures"},
        {name:"Eze Oluchukwu",code:"ng",country:"nigeria", reviews:3.0, comment:"very trusted dealer but fewer options", client:"divine emeks"},
        {name:"Anyash rudra",code:"us", country:"united states", reviews:2.5, comment:"very trusted dealer but fewer options", client:"plumberger limited"},
        {name:"joshua christain",code:"fr", country:"france",reviews:5, comment:"very trusted dealer but fewer options",client:"karmako pines"}
    ])
    useEffect(()=>{
       let interval = setInterval(() => {
        let newIndex = currentIndex + 1 === 9 ? 0 : currentIndex + 1
            setIndex(newIndex)
            console.log(newIndex, "crrentIndex",colours.length)
        }, 8000);
        return () => clearInterval(interval);
    })
    document.title ="Welcome User, Hormel!"
    return ( 
        <div>
          <div className='sectOne_maindiv' style={{backgroundColor:colours[currentIndex]}}>
             <div style={{display:"flex",flexWrap:"wrap",width:"100%"}}>
                <div className='sectOne_divmainOne'>
                  <div className='sectOne_div'>
                  <span className='sectOne_textheader uppercase' >
                    Connect to our top-notch labour at your convenience
                   </span>
                   <p className='sectOne_text'>
                    Meet and Engage trusted Proffesionals in all endeavors across europe and west africa without stepping a foot outside your comfort zone...
                   </p>
                  </div>
                  <div style={{display:"flex",justifyContent:"space-between"}} className="sectOne_btndiv">
                    <div className='getstartedbtn'>
                        <button className='sectOne_btn'>get started <span className='fa fa-chevron-right' style={{marginLeft:"5px"}}></span></button>
                    </div>
                    <div className='chatbtn'>
                        <button className='sectOne_btn2'> chat our experts <span style={{fontFamily:"FontAwesome"}}>&#xf075; </span> <span className='fa fa-chevron-right' style={{marginLeft:"5px"}}></span></button>
                    </div>
                  </div>
                  <div  style={{padding:"5px 35px",display:"flex",justifyContent:"space-between"}}>
                   <div style={{width:"10%"}}>
                   <img src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/61ef95694c636d0c5e9fbae5_g2.svg`} /> 
                   </div>
                   <div style={{position:"relative",width:"50%",fontSize:"25px"}}>
                     <div>
                        <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>
                     </div>
                     <div style={{position:"absolute",top:"0px",color:"orange",width:"10vw",overflow:"hidden"}}>
                        <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>  
                     </div>
                     <div style={{color:"white"}}>
                        <small>We are pleased to inform you that we have a 5 <span className='fa fa-star'></span> rating on G2 <span style={{fontSize:"45px"}}> &#129327;</span></small>
                     </div>
                   </div>
                   <div style={{width:"30%"}}>
                   <p style={{color:"white"}}><a href="#" style={{color:""}}>Click</a> to See Our Customer Reviews</p>
                   </div>
                  </div>
                </div>
                <div className='sectOne_divmainTwo'>
                   
                </div>
             </div>
             </div>
             <div className='reviewdiv_maindiv div_sm'>
             <div className="reviewdiv_header">
                <span style={{fontSize:"40px",padding:"0",margin:"0"}}>Reviews <span className='fa fa-star' style={{color:"orange",fontSize:"20px",padding:"5px",border:"1px solid lightgrey"}}></span></span>
                <p style={{padding:"0",margin:"0"}}>Check Out Some Of Our Latest Reviews</p>
             </div>
             <div className="reviewdiv" style={{padding:"20px"}}>
            {reviews.map((review,index) =>
             <div key={index} style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:"10px"}}>
             <div className='reviewdiv_One' style={{width:"10%"}}>
             <img style={{width:"100%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./profileimage1.jpeg`)} />
             </div>
             <div style={{width:"85%"}}>
             <small style={{padding:"0",margin:"0",fontWeight:"bolder"}} > NAME: {getUnicodeFlagIcon(`${review.code}`)} {review.name}</small><br/>
             <small style={{padding:"0",margin:"0",fontWeight:"bolder"}} > Client: {getUnicodeFlagIcon(`${review.code}`)} {"Eze Ikechukwu"} <small>@delaventures</small></small><br/>
             <small style={{padding:"0",margin:"0",fontWeight:"bolder"}} > Skill:  {"Software Developer"} </small><br/>
             <small><span style={{fontWeight:"bold"}}>Comment : </span> very trusted dealer but fewer options but cool services </small><br/>
             <small style={{padding:"0",margin:"0",display:"inline"}} > <small>
                <div style={{position:"relative",width:"50%",fontSize:"18px"}}>
              <div>
                 <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>
              </div>
              <div style={{position:"absolute",top:"0px",color:"orange",overflow:"hidden"}}>
                 <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>  
              </div>
              
            </div>
            </small></small>



            </div>
         </div>
         )}
          </div>
         </div>
             <div className='reviewdiv_maindiv div_lg'>
               <div className="reviewdiv" style={{padding:"20px"}}>
            {reviews.map((review,index) =>
             <div key={index} style={{display:"flex",padding:"10px"}}>
             <div className='reviewdiv_One'>
             <img style={{width:"50%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./profileimage1.jpeg`)} />
                 <p > {getUnicodeFlagIcon(`${review.code}`)} {review.name}</p>
             </div>
             <div style={{width:"55%"}}>
             <div style={{position:"relative",width:"50%",fontSize:"18px"}}>
              <div>
                 <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>
              </div>
              <div style={{position:"absolute",top:"0px",color:"orange",overflow:"hidden"}}>
                 <span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span><span className='fa fa-star'></span>  
              </div>
              <small>{getUnicodeFlagIcon("ng")} Ikechukwu Eze : </small>
              <small>@dela_ventures <span style={{color:"darkblue"}} className='fa fa-check-circle'></span></small>
            </div>
            <p><span style={{fontWeight:"bold"}}>Comment : </span> very trusted dealer but fewer options but cool services </p>
             </div>
             <div style={{width:"25%",fontSize:"18px",fontWeight:"bold"}}>
                <small>1,265 verified Engagements</small><br/>
                <small>(Software Developer)</small><br/>
                <b>08-07-22</b>
             </div>
         </div>
         )}
         
              
             </div>
             </div>
             <div className='section2_maindiv'>
                <br/>
                <div style={{display:"flex",justifyContent:"space-around"}}>
              <div style={{width:"40%",marginTop:"10vh"}}>
                <center>
                <button className='sectOne_btn'>Why Hormel <span className='fa fa-chevron-down' style={{marginLeft:"5px"}}></span></button>
                </center>
                <br/>
              </div>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                <div className='aboutOdd_div'>
                    <img style={{width:"100%",borderRadius:"10px"}} src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/6139907a6ab566bcc30d2be1_portrait-woman-work-having-video-call-laptop%201.png`} />
                <p className="about_header">Access local expertise without a local entity.</p>
                <small className='about_text'>We are your eyes and ears on the ground! Our in-country expertise covers compliance, payroll, benefits, and more. We help you onboard the perfect hire, comply with labour laws, and take care of payments.</small>
                </div>
                <br/>
                <div className='aboutEven_div'>
                    <img style={{width:"100%",borderRadius:"10px",height:"250px"}} src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/613990767cd6d200c4536cb8_hannah-busing-Zyx1bK9mqmA-unsplash%201.png`} />
                <p className="about_header">Manage global employment needs quickly and reliably.</p>
                <small className='about_text'>We are your eyes and ears on the ground! Our in-country expertise covers compliance, payroll, benefits, and more. We help you onboard the perfect hire, comply with labour laws, and take care of payments.</small>
                </div>
             <br/>
             </div>
              <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                <div className='aboutOdd_div'>
                    <img style={{width:"100%",borderRadius:"10px"}} src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/6139907a6ab566bcc30d2be1_portrait-woman-work-having-video-call-laptop%201.png`} />
                <p className="about_header">Access local expertise without a local entity.</p>
                <small className='about_text'>We are your eyes and ears on the ground! Our in-country expertise covers compliance, payroll, benefits, and more. We help you onboard the perfect hire, comply with labour laws, and take care of payments.</small>
                </div>
                <div className='aboutEven_div'>
                    <img style={{width:"100%",borderRadius:"10px",height:"250px"}} src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/613990767cd6d200c4536cb8_hannah-busing-Zyx1bK9mqmA-unsplash%201.png`} />
                <p className="about_header">Manage global employment needs quickly and reliably.</p>
                <small className='about_text'>We are your eyes and ears on the ground! Our in-country expertise covers compliance, payroll, benefits, and more. We help you onboard the perfect hire, comply with labour laws, and take care of payments.</small>
                </div>
              </div>
              <div style={{ backgroundColor:"rgb(0, 34, 102)",borderRadius:"50px",marginTop:"30px"}}>
                <div style={{display:"flex",position:"relative"}}>
                    <div style={{width:"60%",padding:"30px"}}>
                        <span className='sectThree_textheader'>
                            make your skill visible to  over 5 million potential clients in One Click ...
                        </span>
                    </div>
                  <div style={{display:"flex",width:"40%",overflow:"hidden",backgroundImage:`url(https://assets-global.website-files.com/601cea0056c5710021a1f03c/6170fa842a6fc066e96eb303_globe%20solutions-p-800.png)`,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"right bottom"}}>
                    <div style={{padding:"10px"}}>
                       <img src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/623bf5a7043d8919bbeda935_Multi-CountryPayroll_BestSupport_QualityOfSupport.svg`} />
                   
                       <img  src={`https://assets-global.website-files.com/601cea0056c5710021a1f03c/623bf59c5aae698983d739a2_Multi-CountryPayroll_HighPerformer_HighPerformer.svg`} />
                    </div>
                  </div>
                </div>
                <div className='sectFour_base'>
                    <div className='sectFour_basediv'>
                        <p style={{color:"white",fontWeight:"bolder"}}><span className="fa fa-check-circle" style={{fontSize:"25px",marginRight:"10px"}}></span> Easy To Use</p>
                    </div>
                    <div className='sectFour_basediv'>
                        <p style={{color:"white",fontWeight:"bolder"}}><span className="fa fa-check-circle" style={{fontSize:"25px",marginRight:"10px"}}></span> Transparent Pricing</p>
                    </div>
                    <div className='sectFour_basediv_2'>
                        <p style={{color:"white",fontWeight:"bolder"}}><span className="fa fa-check-circle" style={{fontSize:"25px",marginRight:"10px"}}></span> Affordable and Convenient</p>
                    </div>
                    <div className='sectFour_basediv_2'>
                        <center>
                            <button style={{backgroundColor:"brown",cursor:"pointer",color:"white",fontSize:"20px",padding:"12px",borderRadius:"5px",border:"none"}}>Get Started</button>
                        </center>
                    </div>
                </div>
              </div>
              <div className='sectFive_maindiv'>
                 <div className='sectFive_div'>
                        <h1 className='sectFour_textHeader'>Hire Cheap expertise around your neighbourhood</h1>
                        <p style={{color:"rgb(0, 34, 102)"}}>
                      we are happy to inform you that we have set up quick and dependable super-fast systems to query based on your location. All you have to do is register using your current permanent address.. also we have a price-beat system where you dont have to pay more than our price marking. <br/>
                      Sit back and enjoy your confort <br/> <span style={{fontSize:"50px"}}> &#128523;</span>
                        </p>
                 </div>
                 <div className='sectFive_div' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems: "flex-start"}}>
                 <center className="sectFive_divcenter">
                   <div className='sectFive_divOne'>
                 
                    <div>
                        <img style={{width:"80%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./profileimage1.jpeg`)} />
                        <small style={{fontWeight:"bolder",float:"left",color:"grey"}}>France</small><br/><br/>
                        <p>Olivia THompson</p>
                        <p style={{padding:"0",margin:"0"}}>{getUnicodeFlagIcon("fr")} Sales Specialist</p>
                        <small style={{fontWeight:"bolder",color:"grey"}}>(5 Years Experience)</small><br/><br/>
                        <small style={{fontWeight:"bolder",marginTop:"10px"}}>charge</small>
                        <p style={{padding:"0",margin:"0",fontWeight:"bold"}}>$40 - $80</p>
                        <button style={{border:"1px solid orange",borderRadius:"15px",color:"grey",fontWeight:"bold",width:"80%",padding:"5px",marginTop:"10px",marginBottom:"10px"}}>
                           View Profile
                            </button>
                    </div>
                   
                   </div>
                   </center>
                   <br/>
                   <center className="sectFive_divcenter">
                   <div className='sectFive_divTwo'>
                   
                   <div>
                        <img style={{width:"80%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./plumber.jpeg`)} />
                        <small style={{fontWeight:"bolder",float:"left",color:"grey"}}>United States</small><br/><br/>
                        <p>Richard Cypher</p>
                        <p style={{padding:"0",margin:"0"}}>{getUnicodeFlagIcon("us")} Plumber</p>
                        <small style={{fontWeight:"bolder",color:"grey"}}>(over 15 Years Experience)</small><br/><br/>
                        <small style={{fontWeight:"bolder",marginTop:"10px"}}>charge</small>
                        <p style={{padding:"0",margin:"0",fontWeight:"bold"}}>$40 - $100</p>
                        <button style={{border:"1px solid orange",borderRadius:"15px",color:"grey",fontWeight:"bold",width:"80%",padding:"5px",marginTop:"10px",marginBottom:"10px"}}>
                           View Profile
                            </button>
                    </div>
                   
                  </div>
                  </center>
                  <br/>
                  <center className="sectFive_divcenter">
                  <div className='sectFive_divOne'>
                  <div>
                        <img style={{width:"80%",borderRadius:"50%",boxShadow:"2px 2px 5px 3px lightgrey"}} src={require(`./mechanic.jpeg`)} />
                        <small style={{fontWeight:"bolder",float:"left",color:"grey"}}>Nigeria</small><br/><br/>
                        <p>Oluebube Christine</p>
                        <p style={{padding:"0",margin:"0"}}>{getUnicodeFlagIcon("ng")} Car Technician</p>
                        <small style={{fontWeight:"bolder",color:"grey"}}>(2 Years Experience)</small><br/><br/>
                        <small style={{fontWeight:"bolder",marginTop:"10px"}}>charge</small>
                        <p style={{padding:"0",margin:"0",fontWeight:"bold"}}>$20 - $30</p>
                        <button style={{border:"1px solid orange",borderRadius:"15px",color:"grey",fontWeight:"bold",width:"80%",padding:"5px",marginTop:"10px",marginBottom:"10px"}}>
                           View Profile
                            </button>
                    </div>
   
                   </div>                </center>
                 </div>
              </div>
              <div style={{borderRadius:"50px",width:"100%",backgroundColor:"pink"}}>
             
              <div style={{display:"flex",flexWrap:"wrap",padding:"20px 30px"}}>
              <div className='sectSix_div'>
                <img style={{width:"100%",borderRadius:"20px"}} src={`https://surfshark.com/wp-content/uploads/2021/10/05_Who-is-Tracking-You_Header.3adfdda4.png`} />
                </div>
                 <div className='sectSix_div'>
                        <h1 className='sectFour_textHeader'>Track Profile View And View Previous Reviews, Ratings Of Potential Clients</h1>
                        <p style={{color:"rgb(0, 34, 102)"}}>
                      Our Team have installed tested and trusted mandated reviews after every engagement which is added to each profile so as to enable you track clients before engagement.<br/>
                       You can also view profile engagements at the top left corner of your profile page for as low as <span style={{fontSize:"16px",fontWeight:"bold"}}>$0</span>. <br/><br/>
                       <span style={{fontSize:"16px",fontWeight:"bold"}}> Super cool right !!! </span>
                        </p>
                 </div>
                 </div>
                 <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"20px 30px"}}>
                 <div className='sectSix_div'>
                        <h1 className='sectFour_textHeader'>Transparent Price System with Absolutely No Sentiments</h1>
                        <p style={{color:"rgb(0, 34, 102)"}}>
                      Our Transparent Pricing System would help you bid faster and budget pricisely before engagement.  <br/><br/>
                        </p>
                 </div>
                 <div className='sectSix_div'>
                <img style={{width:"100%",borderRadius:"20px"}} src={`https://thumbs.dreamstime.com/z/transparency-man-working-holographic-interface-visual-screen-high-quality-hologram-transparency-man-working-holographic-99552314.jpg`} />
                </div>
                 </div>
              </div>
              <div style={{display:"flex",padding:"50px"}}>
                 <div className='sectSix_div'>
                        <h1 className='sectFour_textHeader'>Meet Our Team</h1>
                        <p style={{color:"rgb(0, 34, 102)"}}>
                      Our Transparent Pricing System would help you bid faster and budget pricisely before engagement.  <br/><br/>
                        </p>
                 </div>
                 <div style={{width:"50%",marginTop:"50px",padding:"40px"}}>
               
                </div>             
                 </div>

             </div>
             <div style={{height:"80vh",width:"100%",backgroundColor:"rgb(0, 34, 102)"}}>
            Hello
        </div>
       
        </div>
     );
}

export default Landing;