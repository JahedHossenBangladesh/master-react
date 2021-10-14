import React from 'react';

const Header = () => {
console.log('Header is loading')
    const design ={
        border:'2px solid gray',
        width:'100%',
        color:'blue'
    }
    return (
        <div>
            <h1 style={design}>This is header</h1>
        </div>
    );
};

export default React.memo(Header);