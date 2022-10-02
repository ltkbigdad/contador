import { useContext } from "react"
import { CounterContext } from "../../providers/Counter";

export const Display = () =>{
    const {counter} = useContext(CounterContext);
    return <h1>{counter}</h1>;
    
};