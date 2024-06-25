
import { Link, useLocation } from 'react-router-dom';
import '../../styles/LateralNav.css'
import { useEffect, useState } from 'react';
import TopNav from './TopNav';
import myImage from '../../assets/react.png'

function LateralNav() {

  const [ collapsed, setCollapsed] = useState(false)
  const [selectedLink, setSelectedLink] = useState(null);
  const location = useLocation();

  const handleCLick = () => {
    setCollapsed(collapsed => !collapsed)
  }

  const handleLinkClick = (link) => {
    setSelectedLink(link);
};

useEffect(() => {
  const path = location.pathname;
  if (path === '/profile') {
      setSelectedLink('linkProfile');
  } else if (path === '/messages') {
      setSelectedLink('linkMessages');
  } else if (path === '/settings') {
      setSelectedLink('linkSettings');
  }
}, [location.pathname]);

  return (
    <>
      <TopNav isCollapsed={collapsed} />
      <span id="toggle-btn" onClick={handleCLick}>&#9776;</span> 
      <div id="sidebar" className={collapsed ? 'collapsed' : ''}>
            <Link to='#'  className='link'>
                <img src={myImage} alt=''  width='10%' className='me-1 mb-1' />
                <span>React Seed</span>
                <hr />
            </Link>

            <Link to='/profile' className={selectedLink === 'linkProfile' ? 'selectedLink' : 'link'}
                onClick={() => handleLinkClick('linkProfile')}>
              <i className='bx bxs-user me-1'></i>Perfil
            </Link>

            <Link to='/messages' className={selectedLink === 'linkMessages' ? 'selectedLink' : 'link'}
                onClick={() => handleLinkClick('linkMessages')}>
              <i className='bx bxs-chat me-1' ></i>Mensajería
            </Link>

            <Link to='/settings' className={selectedLink === 'linkSettings' ? 'selectedLink' : 'link'}
                onClick={() => handleLinkClick('linkSettings')}>
              <i className='bx bx-cog me-1'></i>Configuración
            </Link>
        </div>
    </>
  )
}

export default LateralNav