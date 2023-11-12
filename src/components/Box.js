import React, { useState } from 'react'
import Box from './Box.css';

const btnStyle=  {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff', 
    border: 'none',
};

const BoxGen = () => {
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const [boxes,setBoxes] = useState([]);

    const handleColor =(e) =>{
        setColor(e.target.value);
    };
    const handleSeize =(e) =>{
        setSize(e.target.value);
    };
    const handleSubmit =(e) =>{
        e.preventDefault();
        if (color){
            const newBox ={
                color : color,
                size : size || "200px",
            };
            setBoxes([...boxes, newBox]);
            setColor('');
            setSize('')
        }

    };

  return (
    <div className="container" >
        <form onSubmit={handleSubmit}>
            <label>
                Color :
                <input type="color" value={color} onChange={handleColor}/>
            </label>
            <label>
                Seize (px) :
                <input type="text" value={size} onChange={handleSeize}/>
            </label>
            <button style={btnStyle} type="submit">Add Color</button>
        </form>
        <div style={{display:'flex', flexWrap:'wrap'}}>
            {boxes.map((box,index)=>(
                <div key={index} style={{backgroundColor:box.color,
                                      width: box.size,
                                      height:box.size,
                                      margin:"10px",
                                      }}>
                </div>
            ))}
        </div>
        

    </div>
  );
};

export default BoxGen;