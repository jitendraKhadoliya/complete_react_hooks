import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";


// use effect allows use to side effect in the components
// use effect have two arguments first is call back second is optional
// optional types = 1. direct 2. assign empty array 3. prop & state

// 1. it will rander everyTime but cons. if there is more use Effects then all will be rander again and again and it will create problem
// 2. while using the empty [] array it will only randor once
// 3. state and props will randor once but 

const UseEffect = ()=>{
  const [count ,setCount] = useState(0);

  const countUpdate = (value)=>{
      if(value === "inc"){
        return setCount( count + 1);
      }if(value === "dec" && count !== 0 ){
        return setCount(count -1);
      }
  }


  // here i will use effect
  // here it will rander everyTime
       useEffect(()=>{
           document.title = count ;
          })

  // here it will randor for fiest time
        useEffect(()=>{
          document.title = count ;
        },[])

  // here it will randor only when props and state value changes
          useEffect(()=>{
            document.title = count ;
          },[count])

  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={() => countUpdate("inc")}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={() => countUpdate("dec")}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default UseEffect;
