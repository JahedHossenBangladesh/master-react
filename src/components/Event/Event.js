import React from 'react';

const Event = () => {

    function initialState(){
        console.log('high loading'+Date.now())
        return 0;
    }

    const [count,setCount] = React.useState(()=>initialState())

    
    function change(option){
        if(option === 'increment'){
setCount(count+1)
        }
        else{
            setCount(count-1)
        }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>change('increment')}>Increment</button>
            <button onClick={()=>change('decrement')}>Decrement</button>
        </div>
    );
};

export default Event;