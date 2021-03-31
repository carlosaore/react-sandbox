import React, { useState } from 'react';

const CounterWithHooks = (props) => {
    const [count, setCount] = useState(0);

    const addToCount = () => setCount(count + 1);

    const removeFromCount = () => setCount(count - 1);

    const withEvent = (event) => setCount(count + (event.target.innerHTML === '+' ? 1 : - 1));

    const withForm = (event) => {
        setCount(count + Number(event.target.form[0].value));
    }

    const reset = () => setCount(0);

    return (
        <>
            <p>{props.text}</p>
            <p>{`The current count (with hooks) is: ${count}`}</p>
            <button onClick={addToCount}>+</button>
            <button onClick={removeFromCount}>-</button>
            <br/>
            <button onClick={event => withEvent(event)}>+</button>
            <button onClick={event => withEvent(event)}>-</button>
            <br/>
            <form>
                <input
                    name="modifyField"
                    id="modifyField"
                    type="number"
                    placeholder='type a number'
                />
                <input type="submit" onClick={event => {
                    event.preventDefault();
                    withForm(event);
                    event.target.form[0].value = '';
                }}/>
            </form>
            <br/>
            <button onClick={reset}>Reset</button>

        </>
    )
};

export default CounterWithHooks;