import Burrito from "./components/Burrito";
import CounterWithHooks from "./components/CounterHooks";


function App() {
    return (
        <div className='main'>
            <Burrito />
            <Burrito />
            <Burrito />
            <CounterWithHooks />
        </div>
    );
}

export default App;
