import React,{useState} from 'react';


function HooksCounterThree(){
    const [name , setName] = useState({firstName:'' , lastName:''})
    return(
    <div>
        <input type='text' value={name.firstName} onChange={event=>setName({...name,firstName:event.target.value})}/>
        <input type='text' value={name.lastName} onChange={event=>setName({...name,lastName:event.target.value})}/>
    <h2>your firstName is = {name.firstName}</h2>
    <h2>your lastName is : {name.lastName}</h2>
    <h2>{JSON.stringify(name)}</h2>
    </div>
    )
}
export default HooksCounterThree;