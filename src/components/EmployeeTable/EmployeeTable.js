import React, {useState} from 'react'
import './employeetable.css'


export default function EmployeeTable() {

    const [datas, setData] = useState ([
        {
            firstname:'asdahhh',
            lastname:'ghjjkllllll',
            startdate:'22.02.1965',
            department: 'Quality Control',
            birthdate:'01.01.1965',
            street:'355',
            city:'Paris',
            state:'Alabama',
            zip:'45544'
        },
        {
            firstname: 'Steve',
            lastname: 'Jobs',
            startdate: '22.02.1999',
            department: 'Engineering',
            birthdate: '01.01.1966',
            street: '223',
            city: 'Flower',
            state: 'Texas',
            zip: '45642'
        },

    ])

  return (
    <div className='employee-table-parent'>
        
        <div className='data-table'>
        <div className='table-header'>
            <div>
                Show
                <select className='group-number'>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
                entries
            </div>
            <div>
                <div className='search-group'>
                    <span>Search: </span>
                    <input name='q' id='search-input' />
                </div>
            </div>
        </div>
        <table>
            <thead>
                <th>
                    <div>
                        <span>First Name</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>last Name</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>Start Date</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>Department</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>Date of birth</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>Street</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>City</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>State</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
                <th>
                    <div>
                        <span>Zip Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"/></svg>
                    </div>
                </th>
            </thead>
            <tbody>
                    {
                        datas.length === 0 ? <tr><td className='nodata-cell' colSpan={9}>No data avaible in table</td></tr>
                        :
                        datas.map((data, index) => {
                            return(
                                <tr key={index}>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.startdate}</td>
                                    <td>{data.department}</td>
                                    <td>{data.birthdate}</td>
                                    <td>{data.street}</td>
                                    <td>{data.city}</td>
                                    <td>{data.state}</td>                                        
                                    <td>{data.zip}</td>
                                </tr>                                       
                            )
                        })
                    }
            </tbody>
        </table>
                <div className='table-footer-content'>
                    <div>Showing 0 to 0 of 0 entries</div>
                    <div>
                        <button className='pagination-prev'>Prev</button>
                        <button className='pagination-prev'>Next</button>
                    </div>
                </div>
            </div>     
    
    </div>
    

  )
}
