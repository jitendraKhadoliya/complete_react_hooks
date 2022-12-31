import React from "react";
// import { useGlobalContext } from "./components/usecontext/userContext";
import { AppContext } from "./components/usecontext/userContext";
import { useContext } from "react";


const Child = () => {
  // const { name, age } = user;
  // const userData = useGlobalContext();
  // console.log("🚀 ~ file: Child.jsx ~ line 8 ~ Child ~ userData", userData);

  // how i can access it useContext data 
  const myData = useContext(AppContext);

  return (
    <div>
      Child = My name is {myData.name} and my age is {myData.age} .{" "}
    </div>
  );
};

export default Child;
