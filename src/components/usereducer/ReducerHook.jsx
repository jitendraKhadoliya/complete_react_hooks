import React from "react";
import {FaMinus} from 'react-icons/fa';
import {BiPlusMedical} from 'react-icons/bi';
import styled from "styled-components";
import { useReducer } from "react";
import reducer from './reducer.jsx';

const initialValue = 0 ;


const ReducerHook = () => {

  // reducer is basically same as useState hook but it's more powerFull and it provides extraFunction while creating it 
  // let's see how can i create the reduce hook
 
  const [count , disptach] = useReducer(  reducer , initialValue);

  // in diapatch we give type of function that we want to perform 
  // reducer also have two props state and action 
  // inside the action we perform state

  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={()=> disptach({type : "INC"}) } >
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={()=>{ disptach({type:"DEC"}) }} >
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

export default ReducerHook;
