import AudioPlayer from "./components/AudioPlayer";
import Burrito from "./components/Burrito";
import CounterWithHooks from "./components/CounterHooks";
import Map from "./components/Map";


function App() {
    return (
        <div className='main'>
            <Burrito />
            <Burrito />
            <Burrito />
            <CounterWithHooks text={[1,2,3,"pizza"]} />
            <AudioPlayer />
            <Map />
        </div>
    );
}

export default App;
