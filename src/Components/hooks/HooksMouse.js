import React , {useEffect , useState} from 'react';

const HooksMouse = () =>{
    const [x, setX] = useState(0);
    const [y,setY]  = useState(0);

    const logMousePosition = e =>{
        console.log('mouse event');
        setX(e.clintX);
        setY(e.clintY); 
    }

    useEffect(()=>{
        console.log('use Effect called');
        window.addEventListener('mouseover',logMousePosition);
    },[])
    return(
       <div>
           Hooks X - {x} Y - {y}
       </div> 
    )
}
export default HooksMouse;