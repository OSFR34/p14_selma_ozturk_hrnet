import React from 'react'
import './createform.css'
import states from'../../states.json'

export default function CreateForm() {
  return (
    <div className='create-form-parent'>
        <form className='create-form'>
            <h2 className='creat-form-title'>Create Employee</h2>
            <div className='identifications'>
                <h3>Identification</h3>
                <div className='form-group-first'>
                <div>
                    <label className='firstname-label'>First Name</label>
                    <input type='text' id='firstname-input' />
                </div>
                <div>
                    <label className='lastname-label'>Last Name</label>
                    <input type='text' id='lastname-input' />
                </div>
            </div>
            <div className='form-group-first'>
                <div>
                    <label className='birthdate-label'>Date of Birth</label>
                    <input type='date' id='birthdate-input' />
                </div>
                <div>
                    <label className='startdate-label'>Start Date</label>
                    <input type='date' id='startdate-input' />
                </div>
            </div>
            </div>
            <div className='adress'>
                <h3>Adress</h3>
                <div className='form-group-first'>
                <div>
                    <label className='street-label'>Street</label>
                    <input type='text' id='firstname-input' />
                </div>
                <div>
                    <label className='City-label'>City</label>
                    <input type='text' id='city-input' />
                </div>
            </div>
            <div className='form-group-first'>
                <div>
                    <label className='state-label'>State</label>
                    <select name='state-selectbox'>
                        {
                            states ? states.map((state, index) => {
                                return(
                                    <option key={index} value={state}>{state}</option>
                                )

                            }):null
                        }
                    </select>
                </div>
                <div>
                    <label className='zip-label'>Zip code</label>
                    <input type='number' id='zip-input' />
                </div>
            </div>
            </div>
            <div className='form-group-second'>
                        <div>
                            <label className='department-label'>Department</label>
                            <select name='department-selectbox'>
                                <option value='Sales'>Sales</option>
                                <option value='Marketing'>Marketing</option>
                                <option value='Engineering'>Engineering</option>
                                <option value='Human Resources'>Human Resources</option>
                                <option value='Legal'>Legal</option>
                            </select>
                        </div>
                    </div>


        </form>
      
    </div>
  )
}
