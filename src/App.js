import Burrito from "./components/Burrito";
import Counter from "./components/Counter";
import CounterWithHooks from "./components/CounterHooks";
import Size from "./components/Size";
import Tortilla from "./components/Tortilla"


function App() {
    return (
        <div className='main'>
            <Burrito />
            <Burrito />
            <Burrito />
        </div>
    );
}

export default App;
