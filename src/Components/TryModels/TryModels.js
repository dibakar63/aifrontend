import React from 'react'
import './TryModels.css'
const TryModels = () => {
  return (
    <div className='container'>
    <div className='titleContent'>
      <h1>Models</h1>
      <p>Here are some popular generative model APIs that you can use in your application.</p>
      <div className='titlebutton'>
      <div >
        <button style={{background:"white",color:"purple",border:"1px solid purple",borderRadius:"15px",height:"25px",cursor:"pointer"}}>Text To Image</button>
        <button style={{marginLeft:"30px",background:"white",color:"purple",border:"1px solid purple",borderRadius:"15px",height:"25px",cursor:"pointer"}}>Image to Image</button>
        <button style={{marginLeft:"30px",background:"white",color:"purple",border:"1px solid purple",borderRadius:"15px",height:"25px",cursor:"pointer"}}>Utility Functions</button>
        <button style={{marginLeft:"30px",background:"white",color:"purple",border:"1px solid purple",borderRadius:"15px",height:"25px",cursor:"pointer"}}>Controlnets</button>
        </div>
        <div >
            <input placeholder='Controllenet' className='input' style={{marginRight:"30px",width:"230px"}}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TryModels
