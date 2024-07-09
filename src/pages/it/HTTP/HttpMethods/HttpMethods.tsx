import React from 'react';
import './HttpMethods.css'

const httpRequestMethods = [
    'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'
]

const HttpRequestMethods: React.FC = () => {
    return (
        <div>
            <h1>HTTP Request Methods</h1>
            <ul>
                { httpRequestMethods.map(((method, index) => (
                    <li key={index}> {method} </li>
                )))}
            </ul>

        </div>
    );
};

export default HttpRequestMethods;