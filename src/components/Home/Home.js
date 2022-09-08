import React, {useEffect} from 'react'
import './home.css'
import Menu from '../Menu/Menu'
import CreateForm from '../CreateForm/CreateForm'

export default function Home() {

  useEffect (() => {
    document.title = 'Home Page | HRnet'
  }
  )
  return (
    <div className='home'>
      <Menu />
      <CreateForm />
      <Footer />
    </div>
  )
}
