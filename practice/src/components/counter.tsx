import React, {useEffect, useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {

        /* code to be run */
        console.log(`The count is: ${count}`)

        /* return function(cleans up) */
        return () => {
            /* cleanup function to clean up, side effects like subscriptions or timers */
        }

    }, [count]);

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