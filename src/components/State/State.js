import React from 'react';

const State = () => {
 const [count,setCount] = React.useState({
     countValue:0,
     haveTime:true
 })
 function change(option){
        if(option === 'increment'){
setCount({...count,countValue: count.countValue +1})
        }
        else{
            setCount({...count,countValue:count.countValue -1})
        }
    }


    return (
      
        <div>
          <h1>{count.countValue}</h1>
        
          <button onClick={() => change("increment")}>Increment</button>
       <button onClick={() => change("decrement")}>Decrement</button>
       <h2>{count.haveTime.toString()}</h2>
<button onClick ={() => setCount({...count, haveTime:!count.haveTime})}>Toggle</button>
        </div>
     
    );
};

export default State;