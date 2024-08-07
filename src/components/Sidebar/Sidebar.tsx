import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Sidebar.css';

interface SidebarProps {
    section: string;
}

export const sections: Record<string, string[]> = {
    languages: ['Javascript', 'Typescript', 'Python', `PHP`, 'Java', 'SQL'], // C,C++
    algorithms: ['Ricerca', 'Ordinamento', 'AlberoTrasversale', 'GrafoTrasversale'],
    datastructures: ['BynarySearchTree', 'Hash Table', 'Linked List', 'Queue', 'Array', 'Stack', 'Set',
                    'DirectedAcyclicGraph', 'DoublyLinkedList', 'TrieRadixTree', 'AvlTree', 'Heap'
    ], // Dictionary
    timecomplexity: ['Constante', 'Lineare', 'Logaritmica', 'LinearLogaritmica', 'Quadrata', 'Cubica', 'Esponenziale'],
    frontend: ['HTML', 'CSS', 'React'], // NextJs
    backend: ['NodeJs', 'Express', 'Fastify', 'NestJs', 'Django', 'Symfony'], // Mercurius
    http: ['StatusCodes', 'Methods'],
    database: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB'],
    datascience: ['Numpy', 'Pandas', 'Matplotlib'],
    git: [],
    docker: [],
};

export const subSections: Record<string, string[]> = {
    javascript: ['Console','Variabili', 'Funzioni', 'Array', 'Oggetti', 'Ricorsione', 'Callback', 'Promise', 'AsyncAwait', 'EventLoop', 'Closure', 'Hoisting', 'This', 'Prototype', 'Class', 'Module'],
    typescript: ['Tipi', 'Interfacce', 'Classi', 'Moduli', 'Namespace', 'Decoratori'],
    python: ['Stringhe', 'Variabili', 'Liste', 'Dizionari', 'Set', 'Funzioni', 'Classi',
        'Moduli', 'Pacchetti', 'Comprehension', 'Generatori', 'Decoratori'],
    php: [],
    java: [],
    sql: [],
    search: ['Lineare', 'Binaria'],
    sorting: ['SelectionSort', 'BubbleSort', 'InsertionSort', 'MergeSort', 'QuickSort', 'HeapSort', 'RedixSort', 'NNumbersKDigits'],
    tree: ['PreOrder', 'InOrder', 'PostOrder'],
    graph: ['DepthFirstSearch', 'BreadthFirstSearch'],
    nodejs: ['CoreModules', 'ErrorFirst','Chaining','Concorrenza','QA'],
    express: [],
    fastify: [],
};

export const subSectionsRedirect: Record<string,string> = {
    /* Javascript */
    console: 'console',
    variabili: 'variables',
    funzioni: 'function',
    array: 'arrays',
    oggetti: 'objects',
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
    /* Python */
    stringhe: 'strings',
    liste: 'lists',
    dizionari: 'dictionaries',
    set: 'sets',
    module: 'module',
    /* Typescript */
    /* NodeJs */
    coremodules: 'coremodules',
    errorfirst: 'errorfirst',
    chaining: 'chaining',
    qa: 'qa',
    /* Express */
    express: 'express',
    /* Fastify */
    fastify: 'fastify',

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

