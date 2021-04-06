import useWindowWidth from './useWindowWidth.js'

const Size = () => (
    <>
        <h2>What about a custom hook?</h2>
        <p>{`The screen width is ${useWindowWidth()} pixels`}</p>
    </>
);

export default Size;