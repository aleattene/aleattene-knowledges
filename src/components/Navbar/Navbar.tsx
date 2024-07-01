import React from 'react';
import './Navbar.css';

interface NavbarProps {
    onSectionChange: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSectionChange }) => {
    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => onSectionChange('frontend')}>Frontend</li>
                <li onClick={() => onSectionChange('backend')}>Backend</li>
                <li onClick={() => onSectionChange('database')}>Database</li>
                <li onClick={() => onSectionChange('docker')}>Docker</li>
                <li onClick={() => onSectionChange('git')}>Git</li>
            </ul>
        </nav>
    );
};

export default Navbar;
