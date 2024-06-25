
import { Link } from 'react-router-dom';
import '../../styles/LateralNav.css'
import { useState } from 'react';
import TopNav from './TopNav';
import myImage from '../../assets/react.png'

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

            <Link to='#' className='link'>
              <img src={myImage} alt=''  width='10%' className='me-1 mb-1' />
              <span>React Seed</span>
              <hr />
            </Link>

            <Link to='/profile' className='link'>
              <i className='bx bxs-user me-1'></i>Perfil
            </Link>

            <Link to='/messages' className='link'>
              <i className='bx bxs-chat me-1' ></i>Mensajería
            </Link>

            <Link to='/settings' className='link'>
              <i className='bx bx-cog me-1'></i>Configuración
            </Link>
        </div>
    </>
  )
}

export default LateralNav