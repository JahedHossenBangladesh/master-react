import React from 'react';

const Useeffect = () => {
    const [times,setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() =>{
        setInterval(() =>setTime(new Date().toLocaleTimeString()),1000);
    })

    return (
        <div>
            <h1>{times}</h1>
            {/* <button onClick={()=>setTime(new Date().toLocaleTimeString())}>newTime</button> */}

            
        </div>
    );
};

export default Useeffect;
