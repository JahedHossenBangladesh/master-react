import React from 'react';

const Useeffect = () => {
    const [time,setTime] = React.useState(new Date().toLocaleTimeString());

    React.useEffect(() =>{
        setInterval(() =>setTime(new Date().toLocaleTimeString()),1000);
    })
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={()=>setTime(new Date().toLocaleTimeString())}>newTime</button>
        </div>
    );
};

export default Useeffect;
