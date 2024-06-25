import React, { useEffect, useState } from 'react';
import '../../styles/TopNav.css';
import { Link, useLocation } from 'react-router-dom';
import { getUser } from '../../services/auth.service';

function TopNav({ isCollapsed }) {
    const [user, setUser] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setUser(getUser());
    }, []);

    useEffect(() => {
        const path = location.pathname;
        if (path === '/dashboard') {
            setSelectedLink('linkDashboard');
        } else if (path === '/us') {
            setSelectedLink('linkUs');
        } else if (path === '/contact') {
            setSelectedLink('linkContact');
        }
    }, [location.pathname]);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <>
            <nav className='top_navbar'>
                <ul>
                    <li>
                        <Link
                            to='/dashboard'
                            className={selectedLink === 'linkDashboard' ? 'selectedLink' : 'link'}
                            onClick={() => handleLinkClick('linkDashboard')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/us'
                            className={selectedLink === 'linkUs' ? 'selectedLink' : 'link'}
                            onClick={() => handleLinkClick('linkUs')}
                        >
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/contact'
                            className={selectedLink === 'linkContact' ? 'selectedLink' : 'link'}
                            onClick={() => handleLinkClick('linkContact')}
                        >
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>

            <span className='login_logout_container btn d-flex'>
                <i className='bx bx-exit mt-1 me-1'></i> {user && <p>Salir</p>}
            </span>
        </>
    );
}

export default TopNav;
