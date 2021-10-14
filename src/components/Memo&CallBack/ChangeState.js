import React from 'react';

const ChangeState = (props) => {
   
    console.log('Change the state');
    const design ={
        height:'50px',
        width:'150px',
        margin:'5px'
    }
    return (
        <div>
<button onClick={props.click}>{props.caption}</button>            
        </div>
    );
};

export default React.memo(ChangeState);