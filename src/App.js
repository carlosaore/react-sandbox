import Burrito from "./components/Burrito";
import CounterWithHooks from "./components/CounterHooks";


function App() {
    return (
        <div className='main'>
            <Burrito />
            <Burrito />
            <Burrito />
            <CounterWithHooks text={[1,2,3,"pizza"]} />
        </div>
    );
}

export default App;
