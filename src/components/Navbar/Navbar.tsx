import React from 'react';
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";

interface NavbarProps {
    onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {

    const location = useLocation();

    return (
        <nav className="navbar">
            <ul>

                <li
                    className={location.pathname === '/frontend' ? 'active' : ''}
                    onClick={() => onSectionChange('frontend')}
                >
                    <Link to="/frontend">Frontend</Link>
                </li>
                <li
                    className={location.pathname === '/backend' ? 'active' : ''}
                    onClick={() => onSectionChange('backend')}
                >
                    <Link to="/backend">Backend</Link>
                </li>
                <li
                    className={location.pathname === '/database' ? 'active' : ''}
                    onClick={() => onSectionChange('database')}
                >
                    <Link to="/database">Database</Link>
                </li>
                <li
                    className={location.pathname === '/docker' ? 'active' : ''}
                    onClick={() => onSectionChange('docker')}
                >
                    <Link to="/docker">Docker</Link>
                </li>
                <li
                    className={location.pathname === '/git' ? 'active' : ''}
                    onClick={() => onSectionChange('git')}
                >
                    <Link to="/git">Git</Link>
                </li>
                <li
                    className={location.pathname === '/algoritmi' ? 'active' : ''}
                    onClick={() => onSectionChange('algoritmi')}
                >
                    <Link to="/algoritmi">Algoritmi</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
