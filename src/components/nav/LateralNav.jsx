
import { Link } from 'react-router-dom';
import '../../styles/LateralNav.css'
import { useState } from 'react';
import TopNav from './TopNav';

function LateralNav() {

  const [ collapsed, setCollapsed] = useState(false)

  const handleCLick = () => {
    setCollapsed(collapsed => !collapsed)
  }

  return (
    <>

      <TopNav isCollapsed={collapsed} />
      <span id="toggle-btn" onClick={handleCLick}>&#9776;</span> 
      <div id="sidebar" className={collapsed ? 'collapsed' : ''}>
            <Link to='/profile' className='link'>Perfil de usuario</Link>
            <Link to='/profile' className='link'>Mensajería</Link>
        </div>
    </>
  )
}

export default LateralNav