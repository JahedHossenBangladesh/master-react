import React from 'react';

const DisplayFlag = ({flag}) => {
    console.log('DisplayFlag');
    return (
        <div>
            <h1>flag: {flag.toString()}</h1>
        </div>
    );
};

export default React.memo(DisplayFlag);