import React, {useEffect} from 'react'
import Menu from '../Menu/Menu'
import './employeelistpage.css'


export default function EmployeeListPage() {

  useEffect (() => {
    document.title = 'Employee List | HRnet'
  })
  
  return (
    <div className='employee-page-parent'>
     <Menu />       
    </div>
  )
}
