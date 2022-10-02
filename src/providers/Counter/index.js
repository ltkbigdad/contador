import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const addCounter = () =>{
        setCounter(counter +1);
    };

    const subCounter = () => {
        if(counter === 0){
            return setCounter(counter)
        }else{
            setCounter(counter -1);
        }
    };

    return (
        <CounterContext.Provider
         value={{counter, addCounter, subCounter}} >
            {children}
        </CounterContext.Provider>
    )
}