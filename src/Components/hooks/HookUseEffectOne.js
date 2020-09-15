import React , {useEffect , useState} from 'react';

function HookUseEffectOne(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    useEffect(()=>{
        console.log('use effect - updatng document title');
        document.title = `you clicked ${count} times`;
    },[count])
    return(
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
         <button onClick={()=>{setCount(count=>count+1)}}>Click {count}</button>
    </div>
)

}
export default HookUseEffectOne;
