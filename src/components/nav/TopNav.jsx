import React, { useEffect, useState } from 'react'
import '../../styles/TopNav.css'
import { Link } from 'react-router-dom';
import { getUser } from '../../services/auth.service';


function TopNav({isCollapsed}) {

    const [user,setUser] = useState(false)

    useEffect(() => {
        setUser(getUser())
    },[])

        return (
            <>
                <nav className='top_navbar'>
                    <ul>
                        <li>
                           <Link to='/dashboard' className='link'>Home</Link>
                        </li>
                        <li>
                           <Link to='/us' className='link'>Nosotros</Link>
                        </li>
                        <li>
                           <Link to='/contact' className='link'>Contacto</Link>
                        </li>
                    </ul>
                 
                </nav>

                <span className='login_logout_container btn d-flex'>
                    <i class='bx bx-exit mt-1 me-1' ></i>  {user && <p>Salir</p>}
                </span>

            </>
        )
}

export default TopNav