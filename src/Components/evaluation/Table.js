import React , {Component} from 'react';
import EmpElement from './EmpElement'

class Table extends Component {
    state = {
        employee : [
            {number: 1 , name :'pradhumna' , salary : 100000},
            {number: 2 , name :'ram' , salary : 50000},
            {number: 3 , name :'ramesh' , salary : 10000},
        ]
    }
     save = (new_name , new_salary , index)=>{
        const new_employees=this.state.employee.slice()
        new_employees[index].name=new_name
     
        new_employees[index].salary=new_salary
        this.setState({emp:new_employees})
    }
  render(){
      let Emp = this.state.employee.map((emp,index)=>{
          return <EmpElement name={emp.name} salary={emp.salary} number = {emp.number} id={index} done={this.save}/>
      })
      return(
          <div>
              <h1>in table</h1>
              <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Emp}
                    </tbody>
              </table>
          </div>
      )
  }

}
export default Table;