import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    section: string;
}

const sections: Record<string, string[]> = {
    linguaggi: ['Javascript', 'Typescript', 'Python'], // C,C++,PHP
    algoritmi: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort', 'Selection Sort'],
    frontend: ['React'], // NextJs
    backend: ['NodeJs', 'Express', 'Fastify', 'NestJs', 'Django', 'Symfony'], // Mercurius
    database: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB'],
    datascience: ['Pandas', 'Numpy', 'Matplotlib'],
    git: [],
    docker: [],
};

const Sidebar: React.FC<SidebarProps> = ({ section }) => {
    return (
        <aside className="sidebar">
            <ul>
                {sections[section]?.map(subsection => (
                    <li key={subsection}>
                        <Link to={`/${section.toLowerCase()}/${subsection.toLowerCase()}`}>{subsection}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;

