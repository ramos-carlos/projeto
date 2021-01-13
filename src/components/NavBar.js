import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick (false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick=
                    {closeMobileMenu}>
                        GM group <i className="fab fa-type3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
                                SOBRE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/marcas' className='nav-links' onClick={closeMobileMenu}>
                                MARCAS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/conceito' className='nav-links' onClick={closeMobileMenu}>
                                CONTATO
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
