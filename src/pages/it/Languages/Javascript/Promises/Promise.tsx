import React from 'react';
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

const promiseStaticMethods = [
    {
        Method: 'Promise.all(iterable/promises)',
        Description: `aspetta che tutte le promise siano risolte e ritorna array un array dei loro risultati. 
            Se una qualsiasi delle promise date viene respinta, allora diventa l’errore di <\code>Promise.all</code>, 
            e tutti gli altri risultati sono ignorati.`
    },
    {
        Method: `Promise.allSettled(promises)`,
        Description: `aspetta che tutte le promises vengano risolte o respinte e ritorna un array dei loro risultati`
    },
    {
        Method: `Promise.race(promises)`,
        Description: `aspetta che la prima promise sia ferma (settle), ed il suo risultato/errore diventa il risultato.`
    },
    {
        Method:`Promise.any(promises)`,
        Description: `aspetta che la prima promise venga risolta e restituisca il risultato. Se tutte le promises 
            vengono respinte,AggregateError diventa l’errore di <\code>Promise.any</code>.`
    },
    {
        Method: `Promise.resolve(value)`,
        Description: `crea una promise risolta (resolved) con il valore dato.`
    },
    {
        Method:`Promise.reject(error)`,
        Description: `crea una promise respinta (rejected) con il valore dato.`
    }
];



const Javascript: React.FC = () => {
    return (
        <div>
            <h1>Promise</h1>
            <p>[TO FIX] Description</p>

            <p>Ci sono {promiseStaticMethods.length} metodi statici della classe Promise:</p>
            <ul>
                {promiseStaticMethods.map((method, index) => {
                    return (
                        <li key={index}>
                            <b><code className={'documentation-link'}>{method.Method}</code></b>: {method.Description}
                        </li>
                    );
                })}
            </ul>
            
            
            <h2>Metodo
                <a href={'https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Promise/all'}>
                    <code className={'documentation-link'}> Promise.all() </code>
                </a>
            </h2>
            <p>Si tratta di un metodo che restituisce una Promise che si risolve quando tutte le Promise nel
                parametro iterable sono state risolte, o si rigetta non appena una delle Promise è stata rigettata.
                Se la Promise restituita viene risolta, essa restituirà un array contenente i valori delle Promise
                risolte nell'ordine in cui sono state passate come parametro iterable.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                const promise1 = Promise.resolve(3);
                const promise2 = 42;
                const promise3 = new Promise((resolve, reject) => {
                  setTimeout(resolve, 100, 'foo');
                });
                
                Promise.all([promise1, promise2, promise3])
                    .then((values) => {
                        console.log(values);
                });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                [3, 42, "foo"]
            `}/>
            <p>Una particolarità di questo metodo riguarda il fatto che se una delle Promise passate come parametro
                iterable viene rigettata, tutte le Promise passate come parametro iterable verranno ignorate ed avremo
                come unico output la Promise rigettata (senza sapere cosa sia successo alle altre.
            </p>
            <p>Ecco allora che una possibile soluzione è quella di utilizzare il metodo
                <code>Promise.allSettled()</code> che restituisce una Promise che si risolve quando tutte le Promise
                nel parametro iterable sono state risolte o rigettate.
            </p>

            <h2>Metodo
                <a href={'https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled'}>
                    <code className={'documentation-link'}> Promise.allSettled() </code>
                </a>
            </h2>
            <p>Si tratta di un metodo che restituisce una Promise che si risolve quando tutte le Promise nel
                parametro iterable sono state risolte o rigettate, con un array contenente un oggetto descrittivo per
                ogni Promise risolta o rigettata.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={
                `const promise1 = Promise.resolve(3);
                const promise2 = 42;
                const promise3 = new Promise((resolve, reject) => {
                  setTimeout(reject, 100, 'foo');
                });
                
                Promise.allSettled([promise1, promise2, promise3])
                    .then((results) => {
                        console.log(results);
                });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                [
                    {status: "fulfilled", value: 3},
                    {status: "fulfilled", value: 42},
                    {status: "rejected", reason: "foo"}
                ]
            `}/>
            <p>In questo caso anche se c'è stata una promise rigettata, le altre promise sono state comunque prese
                in considerazione. Spetterà poi al programmatore decidere come gestire il caso in cui una promise
                venga rigettata pur considerando che le altre sono state risolte.
            </p>
            <p>[TO FIX] Polyfill (nuove funzionalità non supportate nei browser)</p>

            <h2>Metodo
                <a href={'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race'}>
                    <code className={'documentation-link'}> Promise.race() </code>
                </a>
            </h2>
            <p>Si tratta di un metodo che restituisce una Promise che si risolve o si rigetta non appena una delle
                Promise nel parametro iterable si risolve o si rigetta, con il valore o il motivo della Promise
                risolta o rigettata.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                const promise1 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 500, 'promiseOneResolved');
                });

                const promise2 = new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, 'promiseTwoResolved');
                });

                Promise.race([promise1, promise2]).then((value) => {
                    console.log(value);
                });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                promiseTwoResolved
            `}/>
            <p>In questo caso le promise verranno risolte entrambe, ma il valore che avremo come output del metodo
                <code>Promise.race()</code> sarà quello della promise che si è risolta per prima (nel nostro caso
                la seconda promise).
            </p>

            <h2>Metodo
                <a href={'https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Promise/any'}>
                    <code className={'documentation-link'}> Promise.any() </code>
                </a>
            </h2>
            <p>Si tratta di un metodo che restituisce una Promise che si risolve non appena una delle Promise nel
                parametro iterable si risolve, con il valore della Promise risolta.
                Se tutte le Promise nel parametro iterable vengono rigettate, viene restituita una Promise rigettata
                con un AggregateError contenente tutti i motivi di rigetto.
            </p>
            <p>Esempio:</p>
            <JavascriptCode code={`
                const promiseRejected = new Promise((resolve, reject) => {
                    reject("Promise Rejected");
                });

                const promiseResolvedSlow = new Promise((resolve, reject) => {
                    setTimeout(resolve, 500, "Promise Slow Resolved");
                });

                const promiseResolvedSlowFast = new Promise((resolve, reject) => {
                    setTimeout(resolve, 100, "Promise Fast Resolved");
                });

                Promise.any([promiseRejected, promiseResolvedSlow, promiseResolvedSlowFast])
                    .then((value) => {
                        console.log(value);
                });
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Promise Fast Resolved
            `}/>
            <p>In questo caso la promise che si è risolta per prima è stata la terza, quindi il valore che avremo
                come output sarà quello della terza promise.
            </p>
        </div>
    );
}

export default Javascript;