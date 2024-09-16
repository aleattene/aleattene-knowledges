import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";

const OOPJS: React.FC = () => {
    return (
        <div>
            <h1>OOP in JavaScript</h1>
            {/* [TO FIX] img classi / oggetti CAR*/}
            <p>La OOP è un paradigma di programmazione che permette di organizzare il codice in classi e oggetti.</p>
            <p>Una classe è un modello per creare oggetti. Gli oggetti sono le istanze di una classe.</p>
            <p>Gli oggetti hanno due caratteristiche principali di cui si compongono:</p>
            <ul>
                <li>Proprietà: variabili associate all'oggetto</li>
                <li>Metodi: funzioni associate all'oggetto</li>
            </ul>
            <p>La loro rappresentazione in JS è tramite la chiave (key) ed il valore (value).</p>
            <JavascriptCode code={`
                // Literal Object
                const user = {
                    // Proprietà
                    firstName: "John",
                    lastName: "Doe",
                    // Metodi
                    setSex: (user, sex) => { user.sex = sex; }
                    getFullName: (user) => { return \`FULLNAME: \${user.firstName} \${user.lastName}\`; }
                };
            `}/>
            <h3>Accesso alle proprietà e ai metodi di un Literal Object</h3>
            <p>Per accedere alle proprietà e ai metodi di un oggetto, possiamo utilizzare due tipologie di
                notazione:
                <ul>
                    <li>Notazione con punto: <code>user.firstName</code>
                        <JavascriptCode code={`
                            console.log(user.firstName); // John
                        `}/>
                    </li>
                    <li>Notazione con parentesi quadre: <code>user["firstName"]</code>
                        <JavascriptCode code={`
                            console.log(user["firstName"]); // John
                        `}/>
                    </li>
                </ul>
            </p>
            <p>Attenzione però alle chiavi del tipo "my key" poiché in tal caso si può utilizzare solo la notazione
                con parentesi quadre (con lo spazioni nella chiave la dot notation non sarebbe ovviamente
                utilizzabile).
            </p>

            <h3>Verifica se una chiave è presente in un oggetto</h3>
            <p>Per verificare se una chiave è presente in un oggetto, possiamo utilizzare l'operatore <code>in</code>.
                Questo operatore restituisce <code>true</code> se la chiave è presente nell'oggetto, altrimenti
                restituisce <code>false</code>.
            </p>
            <JavascriptCode code={`
                // Verifica se una chiave è presente in un oggetto
                const keyExists = "firstName" in user;
            `}/>

            <h3>Stampare tutte le chiavi ed i valori presenti in un oggetto</h3>
            <p>Un modo per stampare tutte le chiavi (ed i relativi valori) è mediante un ciclo <code>for...in</code>:
            </p>
            <JavascriptCode code={`
                // Stampa tutte le chiavi presenti in un oggetto
                for (const key in user) {
                    console.log(key);       // Stampa chiave
                    console.log(user[key]); // Stampa valore 
                }
            `}/>
            <p>Altra alternativa è mediante il metodo <code>Object.keys()</code> che restituisce un array con tutte le
                chiavi dell'oggetto, assieme al metodo <code>fotEach()</code> per iterare su di esso:
            </p>
            <JavascriptCode code={`
                // Stampa tutte le chiavi presenti in un oggetto
                Object.keys(user).forEach(key => {
                    console.log(key);           // Stampa chiave
                    console.log(user[key]);     // Stampa valore
                });
            `}/>
            <p>Per la stampa dei soli valori, possiamo utilizzare il metodo <code>Object.values()</code> che restituisce
                un array con tutti i valori dell'oggetto:
            </p>
            <JavascriptCode code={`
                // Stampa tutti i valori presenti in un oggetto
                Object.values(user).forEach(value => {
                    console.log(value); // Stampa valore
                });
            `}/>
            <p>Infine, ulteriore possibilità è mediante il metodo <code>Object.entries()</code> che restituisce un array
                con tutte le chiavi e i valori dell'oggetto, assieme al metodo <code>fotEach()</code> per iterare su di
                esso:
            </p>
            <JavascriptCode code={`
                // Stampa tutte le chiavi e i valori presenti in un oggetto
                Object.entries(user).forEach(([key, value]) => {
                    console.log(key);       // Stampa chiave
                    console.log(value);     // Stampa valore
                });
            `}/>

            <h3>Creare un Literal Object con il costruttore Object()</h3>
            <p>Un altro modo per creare un oggetto è mediante il costruttore <code>Object()</code>:
            </p>
            <JavascriptCode code={`
                // Creare un oggetto con il costruttore Object()
                const user = new Object( { ... } );
            `}/>
            <p> equivalente di: </p>
            <JavascriptCode code={`
                const user = { ... };
            `}/>

            <h3>Manipolare Literal Object</h3>
            <p>Per manipolare un oggetto, possiamo operare in diversi modi:
                <ul>
                    <li>aggiungere una proprietà/chiave e/o un metodo:
                        <JavascriptCode code={`
                            // Aggiungere la proprietà age all'oggetto user
                            user.age = 30;
                            user["age"] = 30;
                            
                            // Aggiungere il metodo parla all'oggetto user
                            user.parla = () => { console.log("Ciao!"); };  
                        `}/>
                    </li>
                    <li>modificare una proprietà/chiave e/o un metodo:
                        <JavascriptCode code={`
                            // Modifica la proprietà age dell'oggetto user
                            user.age = 40;
                            user["age"] = 40;
                            
                            // Modifica il metodo parla dell'oggetto user
                            user.parla = () => { console.log("Hello!"); };  
                        `}/>
                    </li>
                    <li>resettare una proprietà/chiave e/o un metodo (usare sempre null, mai undefined):
                        <JavascriptCode code={`
                            // Resetta la proprietà age dell'oggetto user 
                            user.age = null;
                            user["age"] = null;
                            
                            // Resetta il metodo parla dell'oggetto user
                            user.parla = null;
                        `}/>
                    </li>
                    <li>cancellare una proprietà/chiave e/o un metodo:
                        <JavascriptCode code={`
                            // Cancella la proprietà age dall'oggetto user
                            delete user.age;
                            delete user["age"]; 
                                                                         
                           // Cancella il metodo parla dall'oggetto user
                           delete user.parla;
                        `}/>
                    </li>
                </ul>
            </p>

            <h3>Proprietà Dinamiche</h3>
            <p>Le proprietà di un oggetto, in alcuni casi se necessario, possono anche essere dinamiche, ovvero possono
                essere definite in fase di esecuzione del codice:
            </p>
            <JavascriptCode code={`
                // Proprietà dinamiche
                let keyDynamic = "data";
                
                const user = {
                    [keyDynamic]: "John Doe"
                };
                
                console.log(user.data);     // John Doe
                
                keyDynamic = "name";
                
                console.log(user.name);     // John Doe
            `}/>

            <h3>THIS</h3>
            <p>Il THIS è una parola chiave di JS che fa riferimento all'oggetto corrente (nella arrow function fare
                attenzione perché si riferisce a window).</p>
            <JavascriptCode code={`
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    setSex: (sex) => { this.sex = sex; },       // Attenzione perché this si riferisce a window
                };
                
                user.setSex("M");   // TypeError: Cannot set property 'sex' of undefined
                
                // Soluzione
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    setSex: function(sex) { this.sex = sex; }
                    getFullName: function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                    
                user.setSex("M");       // OK
                console.log(user);      // { firstName: "John", lastName: "Doe", sex: "M" }
                user.getFullName();     // FULLNAME: John Doe
            `}/>

            <h3>Setter e Getter</h3>
            <p>I setter e getter sono metodi speciali che permettono di impostare e ottenere il valore di una proprietà
                di un oggetto, che non vogliamo sia direttamente accessibile (e quindi anche manipolabile)
                dall'esterno.
            </p>
            <JavascriptCode code={`
                const user = {
                    
                    // Setter
                    set firstName(value) {
                        this._firstName = value;
                    }   
                    
                    // Getter
                    get firstName() {
                        return this._firstName;
                    }
                };
                
                user.firstName = "John";
                console.log(user.firstName); // John
            `}/>

            <h2>Classi</h2>
            <p>Le classi sono un tamplate (stampino) per creare oggetti in JS. Sono un costrutto sintattico che
                permette di creare oggetti strutturati (con proprietà ed oggetti) in modo più semplice e chiaro
                rispetto ai Literal Object.
            </p>
            <p>Un primo importantissimo concetto legato alla OOP e le relative classi è quello che riguarda
                l'ereditarietà (inheritance). Questo concetto permette di creare una classe figlia (child class)
                che eredita le proprietà e i metodi della classe padre (parent class).
            </p>
            <p>Per creare una classe, si utilizza la parola chiave <code>class</code> seguita dal nome della classe.
                Il nome della classe deve iniziare con la lettera maiuscola.
            </p>
            <JavascriptCode code={`
                class User {
                
                    // Field (diventano proprietà all'interno del costruttore)
                    firstName = 'Default';
                    lastName = '';
                    
                    // Costruttore
                    constructor(firstName, lastName) {
                        this.firstName = firstName;
                        this.lastName = lastName;
                    }
                    
                    
                    // Metodo
                    getFullName() {
                        return \`FULLNAME: \${this.firstName} \${this.lastName}\`;
                    }
                }
                
                // Creazione di un oggetto (istanza della classe User) con la parola chiave new   
                const user = new User("John", "Doe");
                console.log(user.getFullName());    // FULLNAME: John Doe
            `}/>
            <p>Nel momento in cui vogliamo creare una classe figlia, possiamo utilizzare la parola chiave
                <code>extends</code> seguita dal nome della classe padre.
            </p>
            <JavascriptCode code={`
                class Admin extends User {
                    
                    // Costruttore
                    constructor(firstName, lastName) {
                        super(firstName, lastName);     // Richiama il costruttore della classe padre
                    }
                    
                    // Metodi
                    setRole = (role) => { this.role = role; }
                    
                    // Override del metodo getFullName
                    getFullName() {
                        return \`FULLNAME: \${this.firstName} \${this.lastName}\ - ROLE: \${this.role}\`;
                    }
                }
                
                const admin = new Admin("John", "Doe");
                admin.setRole("Admin");
                console.log(admin.getFullName());   // FULLNAME: John Doe - ROLE: Admin
            `}/>



        </div>
    );
};

export default OOPJS;
