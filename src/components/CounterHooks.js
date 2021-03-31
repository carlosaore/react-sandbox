import React, { useState } from 'react';

const CounterWithHooks = () => {
    const [count, setCount] = useState(0);

    const addToCount = () => setCount(count + 1)
    const removeFromCount = () => setCount(count - 1);
    const withEvent = (event) => {
        setCount(count + (event.target.innerHTML === '+' ? 1 : - 1));
    };

    return (
        <>
            <p>{`The current count (with hooks) is: ${count}`}</p>
            <button onClick={addToCount}>+</button>
            <button onClick={removeFromCount}>-</button>
            <br/>
            <button onClick={event => withEvent(event)}>+</button>
            <button onClick={event => withEvent(event)}>-</button>
        </>
    )
};

export default CounterWithHooks;