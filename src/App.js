import { Counter } from "./components/Counter"
import { Display } from "./components/Display"
import "./App.css"

export const App = () =>{
  return (
    <content>
      <div className="counter">
        <div className="display">
          <Display/>
        </div>
        <Counter/>    
      </div>
    </content>
  )
}
