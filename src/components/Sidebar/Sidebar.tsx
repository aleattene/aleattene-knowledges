import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    section: string;
}

const sections: Record<string, string[]> = {
    frontend: ['Js', 'React', 'NextJs'],
    backend: ['Js', 'NodeJs', 'Express', 'Fastify', 'NestJs', 'Mercurius'],
    database: ['SQLite', 'MySQL', 'PostgreSQL', 'MongoDB'],
    docker: [],
    git: []
};

const Sidebar: React.FC<SidebarProps> = ({ section }) => {
    return (
        <aside className="sidebar">
            <ul>
                {sections[section]?.map(subsection => (
                    <li key={subsection}>{subsection}</li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
