
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

            <Link to='/profile' className='link'>
              <i class='bx bxs-user me-1'></i>Perfil de usuario
            </Link>

            <Link to='/messages' className='link'>
              <i class='bx bxs-chat me-1' ></i>Mensajería
            </Link>

            <Link to='/settings' className='link'>
              <i class='bx bx-cog me-1'></i>Configuración
            </Link>
        </div>
    </>
  )
}

export default LateralNav