import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    section: string;
}

export const sections: Record<string, string[]> = {
    languages: ['Javascript', 'Typescript', 'Python'], // C,C++,PHP
    algorithms: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Insertion Sort', 'Selection Sort'],
    datastructures: ['Array', 'Linked List', 'Stack', 'Queue', 'Tree', 'Graph', 'Hash Table'], // Dictionary
    frontend: ['React'], // NextJs
    backend: ['NodeJs', 'Express', 'Fastify', 'NestJs', 'Django', 'Symfony'], // Mercurius
    database: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB'],
    datascience: ['Pandas', 'Numpy', 'Matplotlib'],
    git: [],
    docker: [],
};

const Sidebar: React.FC<SidebarProps> = ({ section }) => {

    const location = useLocation();

    return (
        <aside className="sidebar">
            <ul>
                {sections[section]?.map(subsection => (
                    <li
                        key={subsection}
                        className={location.pathname === `/it/${section.toLowerCase()}/${subsection.toLowerCase()}`
                            ? 'active'
                            : ''
                        }
                    >
                        <Link to={`/it/${section.toLowerCase()}/${subsection.toLowerCase()}`}>{subsection}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;

