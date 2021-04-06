import Counter from "./components/Counter";
import CounterWithHooks from "./components/CounterHooks";
import Size from "./components/Size";

function App() {
    return (
        <div className='main'>
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <p className="main-text">Text</p>
            <Counter text="Some text from a prop."/>
            <CounterWithHooks text="More text from props." />
            <Size />
        </div>
    );
}

export default App;
