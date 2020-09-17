import React ,{useState}    from 'react';

const EmpElement = (props)=>{
    const [edit , setEdit] = useState(false)
    const [name, setName] = useState('')
    const [salary , setSalary] = useState('')
    const nameChangeHandler = (event) =>{
        let new_name = event.target.value;
        setName(new_name);
        console.log(new_name);
    }
    const salaryChangeHandler =(event) =>{
        let new_salary = event.target.value;
        setSalary(new_salary);
        console.log(new_salary);
    }
    const saveChanges= ()=>{
        setEdit(false)
        props.done(name , salary , props.id);
    }
    const enableEditing = () =>{
        setEdit(true);
    }
    let indEmp = edit ? 
   <tr>
       <td>{props.number}</td>
        <td><input type='text' onChange={nameChangeHandler} placeholder='enter your name' /></td>
        <td><input type='text'  onChange={salaryChangeHandler} placeholder='enter your salary'/></td>
        <td><button onClick={saveChanges}>save</button></td>
   </tr>
    :
    <tr>
        <td>{props.number}</td>
        <td>{props.name}</td>
        <td>{props.salary}</td>
        <td><button onClick={enableEditing}>Edit</button></td>
    </tr>

    return indEmp
}  
export default EmpElement; 
            