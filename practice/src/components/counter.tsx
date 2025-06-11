import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2> This is a simple counter that explains the use of useState Hooks</h2>
            <h3> Count: {count}</h3>
            <button onClick={() => setCount(count + 1) }>Increment</button>

            <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;