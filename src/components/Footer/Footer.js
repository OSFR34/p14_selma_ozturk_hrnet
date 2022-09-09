import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
    HRnet  - { new Date(Date.now()).getFullYear() }
  </div>

  )
}
