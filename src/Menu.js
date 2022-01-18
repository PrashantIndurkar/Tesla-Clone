import React from 'react'
import MenuItem from './MenuItem'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <MenuItem title='Existing inventory' />
      <MenuItem title='Used inventory' />
      <MenuItem title='Trade-in' />
      <MenuItem title='Cybertruck' />
      <MenuItem title='Roadster' />
      <MenuItem title='Semi' />
      <MenuItem title='Charging' />
      <MenuItem title='Powerwall' />
      <MenuItem title='Commercial solar' />
      <MenuItem title='Test drive' />
      <MenuItem title='Find us' />
      <MenuItem title='Support' />
      <MenuItem title='United states' />
    </div>
  )
}

export default Menu
