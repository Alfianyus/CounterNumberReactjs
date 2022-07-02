 import React, {useState}  from "react";

const FComp=()=>{

    const [number, setNumber ]= useState(0);


    const counterNumber = (counter)=>{
        if(counter === "+") return setNumber((state) => state + 1);
        return setNumber((state) => (state - 1=== -1 ? 0: state -1));

    };

      
    
     
    return(
    <>
    <h1>Functional Component</h1>;
    <div style={{display:"flex",  alignItems:"center"}}>
    <button 
    type="button" 
    onClick={()=>counterNumber("+")}
    style={{ marginRight:"15px" }}>
        +
        </button>
    <h2 style={{ padding: 0, margin:0 }}>{number}</h2>
    <button 
    type="button"
     onClick={()=>counterNumber("-")}
     style={{ marginLeft:"15px" }}>
        -
        </button>
    </div>
    </>
    );
};

export default FComp;
