import React, { useState } from 'react'
import '../../styles/TopNav.css'
import LateralNav from './LateralNav';
import { Link } from 'react-router-dom';


function TopNav({isCollapsed}) {
        return (
            <>
                <nav className='top_navbar'>
                
                    <ul>
                        <li>
                           <Link to='/dashboard' className='link'>Home</Link>
                        </li>
                        <li>
                           <Link to='/nosotros' className='link'>Nosotros</Link>
                        </li>
                        <li>
                           <Link to='/contacto' className='link'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </>
        )
}

export default TopNav