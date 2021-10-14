import React from 'react';

const DisplayCounter = ({count}) => {
    console.log('DisplayCounter');
    return (
        <div>
            <h1>Counter: {count}</h1>
        </div>
    );
};

export default React.memo(DisplayCounter);