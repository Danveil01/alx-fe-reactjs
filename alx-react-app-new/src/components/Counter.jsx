import { useState } from 'react';

function Counter() {
    // Initialize the count state at 0
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <p>Current Count: <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{count}</span></p>
            
            {/* Increment Button */}
            <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
                Increment
            </button>
            
            {/* Decrement Button */}
            <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
                Decrement
            </button>
            
            {/* Reset Button */}
            <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;