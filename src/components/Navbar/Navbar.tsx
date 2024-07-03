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
                    className={location.pathname === '/it/languages' ? 'active' : ''}
                    onClick={() => onSectionChange('languages')}
                >
                    <Link to="/it/languages">Linguaggi</Link>
                </li>
                <li
                    className={location.pathname === '/it/algorithms' ? 'active' : ''}
                    onClick={() => onSectionChange('algorithms')}
                >
                    <Link to="/it/algorithms">Algoritmi</Link>
                </li>
                <li
                    className={location.pathname === '/it/datastructures' ? 'active' : ''}
                    onClick={() => onSectionChange('datastructures')}
                >
                    <Link to="/it/datastructures">StruttureDati</Link>
                </li>
                <li
                    className={location.pathname === '/it/frontend' ? 'active' : ''}
                    onClick={() => onSectionChange('frontend')}
                >
                    <Link to="/it/frontend">Frontend</Link>
                </li>
                <li
                    className={location.pathname === '/it/backend' ? 'active' : ''}
                    onClick={() => onSectionChange('backend')}
                >
                    <Link to="/it/backend">Backend</Link>
                </li>
                <li
                    className={location.pathname === '/it/database' ? 'active' : ''}
                    onClick={() => onSectionChange('database')}
                >
                    <Link to="/it/database">Database</Link>
                </li>
                <li
                    className={location.pathname === '/it/datascience' ? 'active' : ''}
                    onClick={() => onSectionChange('datascience')}
                >
                    <Link to="/it/datascience">DataScience</Link>
                </li>
                <li
                    className={location.pathname === '/it/git' ? 'active' : ''}
                    onClick={() => onSectionChange('git')}
                >
                    <Link to="/it/git">Git</Link>
                </li>
                <li
                    className={location.pathname === '/it/docker' ? 'active' : ''}
                    onClick={() => onSectionChange('docker')}
                >
                    <Link to="/it/docker">Docker</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
