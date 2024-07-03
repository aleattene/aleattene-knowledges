import React from 'react';

interface TableProps {
    headers: string[];
    data: { [key: string]: string }[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
    return (
        <table>
            <thead>
            <tr>
                {headers.map(header => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {Object.keys(row).map(key => (
                        <td key={key}>{row[key]}</td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
