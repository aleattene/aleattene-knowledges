import React from 'react';
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";

interface NavbarProps {
    onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {

    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    return (
        <nav className="navbar">
            <ul>
                <li
                    className={isActive('/it/languages') ? 'active' : ''}
                    onClick={() => onSectionChange('languages')}
                >
                    <Link to="/it/languages">Linguaggi</Link>
                </li>
                <li
                    className={isActive('/it/algorithms') ? 'active' : ''}
                    onClick={() => onSectionChange('algorithms')}
                >
                    <Link to="/it/algorithms">Algoritmi</Link>
                </li>
                <li
                    className={isActive('/it/datastructures') ? 'active' : ''}
                    onClick={() => onSectionChange('datastructures')}
                >
                    <Link to="/it/datastructures">StruttureDati</Link>
                </li>
                <li
                    className={isActive('/it/timecomplexity') ? 'active' : ''}
                    onClick={() => onSectionChange('timecomplexity')}
                >
                    <Link to="/it/timecomplexity">ComplessitàTemporale</Link>
                </li>
                <li
                    className={isActive('/it/frontend') ? 'active' : ''}
                    onClick={() => onSectionChange('frontend')}
                >
                    <Link to="/it/frontend">Frontend</Link>
                </li>
                <li
                    className={isActive('/it/backend') ? 'active' : ''}
                    onClick={() => onSectionChange('backend')}
                >
                    <Link to="/it/backend">Backend</Link>
                </li>
                <li
                    className={isActive('/it/database') ? 'active' : ''}
                    onClick={() => onSectionChange('database')}
                >
                    <Link to="/it/database">Database</Link>
                </li>
                <li
                    className={isActive('/it/datascience') ? 'active' : ''}
                    onClick={() => onSectionChange('datascience')}
                >
                    <Link to="/it/datascience">DataScience</Link>
                </li>
                <li
                    className={isActive('/it/git') ? 'active' : ''}
                    onClick={() => onSectionChange('git')}
                >
                    <Link to="/it/git">Git</Link>
                </li>
                <li
                    className={isActive('/it/docker') ? 'active' : ''}
                    onClick={() => onSectionChange('docker')}
                >
                    <Link to="/it/docker">Docker</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
