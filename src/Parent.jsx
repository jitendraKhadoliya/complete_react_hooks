import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import Child from "./Child";
import { AppContext } from "./components/usecontext/userContext";

const Parent = () => {

const mydata2 = useContext(AppContext);

  return (
    <Wrapper>
      <h2>Parent Comp {mydata2.name} </h2>
      <Child />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  font-size: 3.2rem;
`;

export default Parent;
