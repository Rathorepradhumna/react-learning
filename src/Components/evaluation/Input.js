import React    from 'react';

const Input = (props)=>{
    let new_name = '';
    const changeNameHandler = (event) =>{
        new_name = event.target.value;
        console.log(new_name);
      }


    return(
        
        <tr>
            <td>{props.number}</td> 
            <td><input type='text' value={props.name} onChange={changeNameHandler} /></td>
            <td><input type='text' value={props.salary}/></td>
            <td><button onClick={props.edit}>Edit</button></td>
            <td><button onClick={props.edit}>save</button></td>
        </tr>
        
    )  
}  
export default Input; 
            