import React , {Component} from 'react';
import EmpElement from './EmpElement'
import Input from './Input' 
class Table extends Component {
    state = {
        emp : [
            {number : 1 , name : "pradhumna" ,salary : 50000 , editOn: false},
            {number : 2 , name : "ram" , salary : 10000 , editOn: false},
            {number : 3 , name : 'ramesh' , salary : 50000 , editOn:false}
        ]
    }

    editEmp = (empIndex) =>{
        let new_emp = [...this.state.emp]
        new_emp[empIndex].editOn = !new_emp[empIndex].editOn;
        console.log(new_emp[empIndex].editOn);
        this.setState({emp:new_emp})
       }
      

    render(){

      let emp_data = (this.state.emp).map((e,index)=>{
            return e.editOn ? <Input number={e.number} name={e.name} salary={e.salary} edit={()=>{this.editEmp(index)}}/> : 
            <EmpElement number={e.number} name={e.name} salary={e.salary} edit={()=>{this.editEmp(index)}}/>
           // {if(e.editOn) { <Input number={e.number} name={e.name} salary={e.salary/>}
   //else{ <EmpElement number={e.number} name={e.name} salary={e.salary} edit={()=>{this.editEmp(index)}}/>}}
    // 
 })
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>salary</th>
                            <th>Edit</th>
                            <th>Save</th>
                        </tr>
                    </thead>
                    <tbody>
                       {emp_data}
                    </tbody>


                </table>
                
            </div>
        )
    }
}

export default Table;