import React    from 'react';

const EmpElement = (props)=>{
    return(
        
        <tr>
            <td>{props.number}</td>
            <td>{props.name}</td>
            <td onChange={e=>{}}>{props.salary}</td>
            <td><button onClick={props.edit}>Edit</button></td>
            <td><button>save</button></td>
        </tr>
        
    )
}  
export default EmpElement; 
            