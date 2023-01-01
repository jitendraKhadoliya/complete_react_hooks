import React, { useRef } from "react";
import styled from "styled-components";

const RefHook = () => {
  // so here i can directly can select dom element so i will choose button here to change input background color with focus

  // first we need to define 

  const myFirstRef = useRef();
  // and we can declare it wherever we want to update and selct dom element

// here i gave into input type

const changeBorder = ()=>{

  myFirstRef.current.focus();
  myFirstRef.current.style.backgroundColor = "yellow";
}


  

  return (
    <Wrapper>
      <input type="text" ref={myFirstRef} />
      <br />
      <button onClick={changeBorder}>submit</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    min-width: 20rem;
    padding: 1rem 0.5rem;
    color: #000;
    font-size: 2rem;
  }

  button {
    text-transform: uppercase;
  }
`;

export default RefHook;
