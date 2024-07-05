import React, {useEffect, useState} from 'react';
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

export const subSections: Record<string, string[]> = {
    javascript: ['Variabili', 'Funzioni', 'Array', 'Oggetti', 'Ricorsione', 'Callback', 'Promise', 'AsyncAwait', 'EventLoop', 'Closure', 'Hoisting', 'This', 'Prototype', 'Class', 'Module'],
    typescript: ['Tipi', 'Interfacce', 'Classi', 'Moduli', 'Namespace', 'Decoratori'],
    python: ['Variabili', 'Funzioni', 'Classi', 'Moduli', 'Pacchetti', 'Comprehension', 'Generatori', 'Decoratori'],
};

export const subSectionsRedirect: Record<string,string> = {
    variabili: 'variable',
    funzioni: 'function',
    array: 'array',
    oggetti: 'object',
    ricorsione: 'recursion',
    callback: 'callback',
    promise: 'promise',
    asyncawait: 'asyncawait',
    eventloop: 'eventloop',
    closure: 'closure',
    hoisting: 'hoisting',
    this: 'this',
    prototype: 'prototype',
    class: 'class',
module: 'module',

}

const Sidebar: React.FC<SidebarProps> = ({ section }) => {
    const [expandedSubsection, setExpandedSubsection] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        setExpandedSubsection(null);
    }, [section]);

    const handleSubsectionClick = (subsectionName: string) => {
        setExpandedSubsection(expandedSubsection === subsectionName ? null : subsectionName);
    };

    const isActive = (subsection: string) => {
        const pathParts = location.pathname.split('/');
        return pathParts.includes(subsection.toLowerCase());
    };

    return (
        <aside className="sidebar">
            <ul>
                {sections[section]?.map((subsection) => (
                    <li key={subsection}>
                        <div
                            onClick={() => handleSubsectionClick(subsection)}
                            className={`sidebar-subitem ${isActive(subsection) || expandedSubsection === subsection ? 'active' : ''}`}
                        >
                            <Link to={`/it/${section.toLowerCase()}/${subsection.toLowerCase()}`}>{subsection}</Link>
                        </div>
                        {(isActive(subsection) || expandedSubsection === subsection) && subSections[subsection.toLowerCase()] && (
                            <ul className="subsubsection-list">
                                {subSections[subsection.toLowerCase()].map((subsubsection) => (
                                    <li
                                        key={subsubsection}
                                        className={`subsubsection-item ${location.pathname === `/it/${section.toLowerCase()}/${subsection.toLowerCase()}/${subSectionsRedirect[subsubsection.toLowerCase()]}` ? 'active' : ''}`}
                                    >
                                        <Link to={`/it/${section.toLowerCase()}/${subsection.toLowerCase()}/${subSectionsRedirect[subsubsection.toLowerCase()]}`}>{subsubsection}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};



export default Sidebar;

