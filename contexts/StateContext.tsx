import React, { createContext,useContext,useState,ReactNode } from "react";

interface StateContextType{
    value:string;
    setValue:(value:string)=>void;
}
const defaultValue:StateContextType={
    value: "",
    setValue:()=>{},
}

const StateContext=createContext<StateContextType>(defaultValue);


const StateContextProvider:React.FC<{children:ReactNode}>=({children})=>{
    const [value,setValue]=useState<string>("");
    return(
        <StateContext.Provider value={{value,setValue}}>
            {children}
        </StateContext.Provider>
    )
}

const useStateContext=() => useContext(StateContext)

export  {StateContextProvider,useStateContext} 