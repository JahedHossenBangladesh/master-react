import React from 'react';

const UseEffect2 = () => {
    const [showxy,setShowXy] = React.useState('0.0')

    const changeXy = e =>{
    const str = e.pageX + ',' + e.pageY;
    setShowXy(str)
    console.log(str)
    }

    React.useEffect(() =>{
window.addEventListener('mousemove', changeXy)
return () =>{
    window.removeEventListener('mousemove', changeXy)
    
}
    })


    return (
        <div>
            <h1>{showxy}</h1>
        </div>
    );
};
// function UseEffect3() {
//  const [showxy, setShowXy] = React.useState("0.0");

//     return (
//         <>
// <h1>{showxy}</h1>
//         </>
//     )
// }
export default UseEffect2;