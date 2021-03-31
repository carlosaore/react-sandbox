import Counter from "./components/Counter";
import CounterWithHooks from "./components/CounterHooks";

function App() {
    return (
        <div>
            <h1>Title</h1>
            <h2>Subtitle</h2>
            <p className="main-text">Text</p>
            <Counter />
            <CounterWithHooks />
        </div>
    );
}

export default App;
