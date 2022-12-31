import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ClearUp = () => {


  // here what am i going to do is first i will print the total width of my screen i print it inside h2 html teg using useState

  const [widthCount , setWidthCount] = useState(window.screen.width);

  // here i able to print screen size total but unable to print change the screen when we move screen size for that i need to use an effect method hook

  const resizeFunc = ()=>{
   setWidthCount( ()=>  window.innerWidth);
  }


  useEffect(()=>{

    window.addEventListener("resize",resizeFunc)
      // so whats happing here is it's creating resize event everytime when we move screen so whats the good approch is we should clear the last event log that perfomed for that i will clear that event data in useEffect 

      return ()=>{
        window.removeEventListener("resize" , resizeFunc)
      }

  })

  return (
    <Wrapper>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
        </h2>
      </div>
    </Wrapper>
  );
};
ClearUp;
const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;

export default ClearUp;
