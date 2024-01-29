import React from "react";
import { data } from "./data";
import "./ModelsPage.css";
//import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoIosFlash } from "react-icons/io";
import { MdLightbulbOutline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { CiCloudOn } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
const ModelsPage = () => {
  const navigate = useNavigate();
  const handleOnClick = (element) => {
    navigate(`/models/${element.name}`,{state:{element:element}});
  };
  return (
    <div className="ModelsPageDiv" style={{marginTop:"100px"}}>
      
      <div className="Home">
        <div className="HomeContent">
          <span><strong>Fastest APIs For Generative Models</strong></span>
          <p style={{marginTop:"30px",fontSize:"19px"}}>Effortlesly generate powerful ai models in your apps with our APIs,<strong>zero setup required</strong></p>
          <br/>
          <button onClick={()=>navigate('/trymodels')}>Try Models  <FaArrowRight style={{marginTop:"2px"}}/></button>
        </div>
        <div className="HomeContent2">
          <img src="https://www.segmind.com/_next/image?url=%2Fsdxl2.jpeg&w=640&q=75" alt='panda'/>
          <br/>
          
        </div>
      </div>
       
       <div>
       <div className="imgTitle" style={{marginTop:"100px"}}>
        <h1>Popular Models</h1>
        
        <p style={{marginTop:"15px"}}>Here are some generative model APIs that you can use in your application.</p>
      </div>
      <div className="imgdiv" >
      
        {data?.map((element) => {
          return (
            <>
              <img src={element.image} onClick={() => handleOnClick(element)} />
            </>
          );
        })}
      </div>
      </div>
      
      <p style={{textAlign:"center",textDecoration:"underLine",cursor:"pointer"}}>See All Models</p>
      <div>
      <div className="AboutText">
        <span><strong>Designed for Developers,by Developers</strong></span>
        <p>Scalable, Affordable and easy to use APIs for Generative Models.</p>
      </div>
      <div className="cardDiv" style={{marginTop:"80px"}}>
        <div className="card">
        <IoIosFlash style={{fontSize:"50px",marginTop:"12px",color:"gray"}}/>
          <h1>Speed</h1>
          <p>Segemind Provides developers access to the fastest Serverless Stable Diffusion APIs</p>
        </div>
        <div className="card" style={{marginTop:"15px"}}>
        <MdLightbulbOutline style={{fontSize:"50px",marginTop:"12px",color:"gray"}}/>
        <h1>Ease of Use</h1>
        <p>Deploy our high perfomance APIs with one click seamless API integration.Scale efortlessly.</p>
        </div>
        <div className="card">
        <FaDollarSign style={{fontSize:"50px",marginTop:"18px",color:"gray"}}/>
        <h1>Affordability</h1>
        <p>Segemind's optimizations helping you get the most cost-effective inferences , paid per API call.</p>
        </div>
        <div className="card">
        <CiCloudOn style={{fontSize:"50px",marginTop:"22px",color:"gray"}}/>
        <h1>Scale</h1>
        <p>Segemind scales up automatically to scales up the demand.You only pay for the API calls</p>
        </div>
      </div>
      <div className="footerContent">
        <span>Get Started Right Away!</span>
        <p>Experience the fastest stable diffusion APIs available today.</p>
        <button>Try Models</button>
      </div>
      </div>

</div>
    
  );
      }
  




export default ModelsPage;
