import React from 'react'
import 'boxicons'
const NavBar = () => {
  return (
    <>
      <nav className='navbar bg-dark text-white'>
        <h3 className='mx-2'>Design Challenge 3</h3>
        <a className='d-flex text-decoration-none text-white me-2' href='https://github.com/VoidGeek' target='_blank'>
            <div className='me-1'><box-icon name='github' type='logo' color='#fefefe'></box-icon></div>
            <h5>GitHub</h5>
        </a>
      </nav>
    </>
  )
}

export default NavBar
