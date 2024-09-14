import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const LoopJS: React.FC = () => {
    return (
        <div>
            <h2>Loop</h2>
            <p>I loop sono dei costrutti che permettono di eseguire più volte (con il ciclo for il numero di iterazioni
                è noto a priori, con il while non è noto a priori) un blocco di codice.</p>
            <p>In JavaScript esistono diversi tipi di loop (che possono anche innestarsi tra loro):
                <ul>
                    <li><strong>for</strong>
                        <JavascriptCode code={`
                            // Esempio di ciclo for (10 iterazioni)
                            for (let i = 0; i < 10; i++) {
                                console.log(i);
                            }
                        `}/>
                    </li>
                    <li><strong>for...of</strong>
                        <JavascriptCode code={`
                            // Esempio di ciclo for...of (iterazione su elementi di un array)
                            const arr = [1, 2, 3, 4, 5];
                            for (const element of arr) {
                                console.log(element);
                            }
                        `}/>
                    </li>
                    <li><strong>for...in</strong>
                        <JavascriptCode code={`
                            // Esempio di ciclo for...in (iterazione su proprietà di un oggetto)
                            const person = {
                                name: 'John',
                                age: 30
                            };
                            for (const key in person) {
                                console.log(key, person[key]);
                            }
                        `}/>
                    </li>
                    <li><strong>while</strong>: non è garantita alcuna iterazione, poiché prima viene valutata la
                        condizione e solo dopo eseguito il codice dell'iterazione corrente
                        <JavascriptCode code={`
                            // Esempio di ciclo while (si va da nessuna iterazione a n iterazioni)
                            let i = 0;
                            while (i < 10) {
                                console.log(i);
                                i++;
                            }
                        `}/>
                    </li>
                    <li><strong>do...while</strong>: almeno una prima iterazione è garantita poiché prima viene
                        eseguito il codice dell'iterazione corrente e solo dopo valutata la condizione per decidere o
                        meno se eseguire l'iterazione successiva
                        <JavascriptCode code={`
                            // Esempio di ciclo do...while (si va da almeno una iterazione a n iterazioni)
                            let i = 0;
                            do {
                                console.log(i);
                                i++;
                            } while (i < 10);
                        `}/>
                    </li>
                </ul>
            </p>

            <h3>Break e Continue</h3>
            <p>Con l'istruzione <code>break</code> si può interrompere l'esecuzione di un loop e proseguire con il
                codice successivo.</p>
            <JavascriptCode code={`
                // Esempio di break
                console.log('Prima del ciclo');
                for (let i = 0; i < 5; i++) {
                    if (i === 2) {
                        break;
                    }
                    console.log(i);
                }
                console.log('Dopo il ciclo');
            `}/>
            <p>Output:</p>
            <JavascriptCode code={`
                Prima del ciclo
                0
                1
                Dopo il ciclo
            `}/>
            <p>Con l'istruzione <code>continue</code> si può saltare l'iterazione corrente e proseguire con la
                successiva.
            </p>
            <JavascriptCode code={`
                // Esempio di continue
                console.log('Prima del ciclo');
                for (let i = 0; i < 5; i++) {
                    if (i === 2) {
                        continue;
                    }
                    console.log(i);
                }
                console.log('Dopo il ciclo');
            `}/>
            <p>Output:</p>
            <JavascriptCode code={`
                Prima del ciclo
                0
                1
                3
                4
                Dopo il ciclo
            `}/>
        </div>
    );
};

export default LoopJS;