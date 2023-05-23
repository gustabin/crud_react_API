import React, { useEffect, useState } from 'react';

// Components
import EmployeeItem from './EmployeeItem';
import * as EmployeeServer from './EmployeeServer';

const EmployeeList = () => {
  const [employees, SetEmployees] = useState([]);

  const listEmployees = async () => {
    try {
      const res = await EmployeeServer.listEmployees();
      const data = await res.json();
      SetEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    listEmployees();
  },[])

  return (
    <div className='row'>
      {employees.map((employee) => (
        <EmployeeItem key={employee.id} employee={employee} listEmployees={listEmployees} />
      ))}
    </div>
  );
};

export default EmployeeList;
