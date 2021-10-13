import React from 'react';

const UseEffect2 = () => {
    const [showxy,setShowXy] = React.useState('0.0')

    const changeXy = e =>{
    const str = e.pageX + ',' + e.pageY;
    setShowXy(str)
    }

    React.useEffect(() =>{
window.addEventListener('mousemove', changeXy)
return () =>{
    console.log('clean up the data')
}
    })


    return (
        <div>
            <h1>{showxy}</h1>
        </div>
    );
};

export default UseEffect2;