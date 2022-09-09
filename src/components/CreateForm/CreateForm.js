import React from 'react'
import './createform.css'
import states from'../../states.json'

export default function CreateForm() {
  return (
    <div className='create-form-parent'>
<form className='create-form'>
<h2 className='create-form-title'>Create Employee</h2>
<div className='identifications'>
<h3>Identification</h3>
<div className='form-group-first'>
<div>
<label className='firstname-label'>First Name</label>
<input type='text' id="firstname-input" />
</div>
<div>
<label className='lastname-label'>Last Name</label>
<input type='text' id="lastname-input" />
</div>
</div>
<div className='form-group-first'>
<div>
<label className='birthdate-label'>Date of Birth</label>
<input type='date' id="birthdate-input" />
</div>
<div>
<label className='startdate-label'>Start Date</label>
<input type='date' id="startdate-input" />
</div>
</div>
</div>
<div className='address'>
<h3>Informations</h3>
<div className='form-group-first'>
<div>
<label className='street-label'>Street</label>
<input type='text' id="street-input" />
</div>
<div>
<label className='city-label'>City</label>
<input type='text' id="city-input" />
</div>
</div>
<div className='form-group-first'>
<div>
<label className='state-label'>State</label>
<select name='state-selectbox'>
{
states ? states.map((state, index) => {
return (
<option key={index} value={state}>{state}</option>
)
}) : null
}
</select>
</div>
<div>
<label className='zip-label'>Zip Code</label>
<input type='text' id="zip-input" />
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
<div style={{ textAlign: 'center' }}>
<button type="button" className='save-button'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
<span>Save</span>
</button>
</div>
</div>

</form>
</div>

    
  )
}
