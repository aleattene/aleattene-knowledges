import React from 'react';
import {QANodeJSContent} from "./QANodeJSContent.ts";

const QANodeJsBe: React.FC = () => {
    return (
        <div>
            <h1>Q&A NodeJS</h1>
            <ol>
                { QANodeJSContent.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>
                                <li>{item.question}</li>
                            </h3>
                            <p>{item.answer}</p>
                        </div>
                    );
                })}
            </ol>
        </div>
    );
};

export default QANodeJsBe;