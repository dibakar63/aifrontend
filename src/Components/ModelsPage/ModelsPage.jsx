import React from "react";
import { data } from "./data";
import "./ModelsPage.css";
import { useNavigate } from "react-router-dom";

const ModelsPage = () => {
  const navigate = useNavigate();
  const handleOnClick = (element) => {
    navigate(`/models/${element.name}`,{state:{element:element}});
  };
  return (
    <div className="ModelsPageDiv">
      
      <div className="Home">
        <div className="HomeContent">
          <span><strong>Fastest APIs For Generative Models</strong></span>
          <p style={{marginTop:"30px",fontSize:"19px"}}>Effortlesly generate powerful ai models in your apps with our APIs,<strong>zero setup required</strong></p>
          <br/>
          <button>Try Models</button>
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
      
      <p style={{textAlign:"center",textDecoration:"underLine"}}>See All Models</p>
      <div>
      <div className="AboutText">
        <span><strong>Designed for Developers,by Developers</strong></span>
        <p>Scalable, Affordable and easy to use APIs for Generative Models.</p>
      </div>
      <div className="cardDiv" style={{marginTop:"80px"}}>
        <div className="card">
          <h1>Speed</h1>
          <p>Segemind Provides</p>
        </div>
        <div className="card">
        <h1>Speed</h1>
        </div>
        <div className="card">
        <h1>Speed</h1>
        </div>
        <div className="card">
        <h1>Speed</h1>
        </div>
      </div>
      </div>

</div>
    
  );
      }
  




export default ModelsPage;
