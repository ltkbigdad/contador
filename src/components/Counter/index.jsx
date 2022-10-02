import { useContext } from "react"
import { CounterContext } from "../../providers/Counter";
import "./style.css";

export const Counter = () => {
const {addCounter, subCounter} = useContext(CounterContext);

    return(
        <>
            <button className="add" onClick={addCounter}>Adiciona 1</button>
            <button className="sub" onClick={subCounter}>Subtrai 1</button>
        </>
    )
}