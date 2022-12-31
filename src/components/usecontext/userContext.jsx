import { createContext, useContext } from "react";




// what userContext solves is => it's provide the prop dealing solution
// prop dealing = let assume jitu you have a component named as grandParent and inside grand parent i have sub component that is parent component and there is many components and inside that component i have more sub components named as child componet and 

// now i want to get grandComponent value inside the child component for that tradisnational method is first i will send that value using prop inside the parent after that send that value inside the child so code will messup 

// solution is useContext api 
// how can i use it=>

// 1. use storage location there on grandParent (App data)
// 2. create Provider
// 3. consume it whenever we want


const AppContext = createContext();

const AppProvider = ({children})=>{

  const myData = {
    name : "jitendra",
    age : "24",
    email : "jitenKhadoliya@gmail.com"
  }


  return <AppContext.Provider value= {myData} >{children}</AppContext.Provider>


}




// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const userData = {
//     name: "vinod",
//     age: 28,
//   };

//   return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
// };

// // custom hook
// const useGlobalContext = () => {
//   return useContext(AppContext);
// };

export { AppContext, AppProvider };
