// import { reducer } from "react";


const reducer = (state , action)=>{

if(action.type === "INC"){
    return (state = state + 1);
}

// for zero value for normal use
        // if(action.type === "DEC" && state !== 0){
        //     return (state = state - 1);
        // }else{
        //     return state = 0;
        // }
// or same thing i can do with trinary operator
if(action.type === "DEC"){
    let newNum = 0;
    state >= 1 ? (newNum = state -1) : (newNum = 0);
    return newNum;

}


}

export default reducer;