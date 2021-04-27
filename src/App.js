
import { useState } from "react";
import More from "./morepizza";


function App() {
    const [pizza, setPizza] = useState(0);

    const morePizza = () => {
        setPizza(pizza+1) 
    }

    const lessPizza = () => {
        setPizza(pizza -1)
    }

    return (
        <div>
            <h1>Title {pizza}</h1>
            <button onClick={morePizza}>plus</button>
            <button onClick={lessPizza}>minus</button>
            <p>More Pizza</p>
            <More yes={pizza} />


        </div>
    );
}

export default App;
