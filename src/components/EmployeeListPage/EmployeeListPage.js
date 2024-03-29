import React, {useEffect} from 'react'
import Menu from '../Menu/Menu'
import './employeelistpage.css'
import Footer from '../Footer/Footer'
import EmployeeTable from '../EmployeeTable/EmployeeTable'



export default function EmployeeListPage() {
  //en: browser tab title change
//fr:changement du titre de l'onglet du navigateur
  useEffect (() => {
    document.title = 'Employee List | HRnet'
  })
  
  return (
    <div className='employee-page-parent'>
     <Menu /> 
     <h2 className='employee-list-title'>Current Employees</h2>
     <EmployeeTable />
     <Footer />      
    </div>
  )
}
