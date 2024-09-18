import React from "react";
import JavascriptCode from "../../../../../components/Code/JavascriptCode/JavascriptCode.tsx";
import TerminalCode from "../../../../../components/Code/TerminalCode/TerminalCode.tsx";

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

            <h2>Metodi Bind, Call e Apply</h2>
            <p>Per affrontare nel migliore dei modi i concetti che sono alla base di call e apply, partiamo da un
                esempio:
            </p>
            <JavascriptCode code={`
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    getFullName: function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                };
                
                console.log(user.getFullName());    // FULLNAME: John Doe
            `}/>
            <p>A questo punto diventa interessante aggiungere una function da agganciare al nostro oggetto user:</p>
            <JavascriptCode code={`
                function registerUser() {
                    console.log(this);
                }
                
                registerUser();
            `}/>
            <p>Il risultato sarà <code>Window</code> poiché la funzione <code>registerUser()</code> è stata chiamata
                direttamente dal contesto globale (window).
            </p>
            <TerminalCode code={`
                Window {
                    parent: Window,
                    opener: null,
                    ...
                }
            `}/>
            <p>Ecco che allora per agganciare la funzione <code>registerUser()</code> all'oggetto <code>user</code>,
                dobbiamo utilizzare il metodo <code>bind()</code>:
            </p>
            <JavascriptCode code={`
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    getFullName: function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                };
                
                function registerUser(username, password) {
                    // in questo caso this si riferirà all'oggetto user (passato all'interno di bind)
                    console.log(this, username, password);  
                }
                
                const registerUserBound = registerUser.bind(user, "john", "doe");
                registerUserBound();
            `}/>
            <p>Il risultato sarà proprio l'oggetto <code>user</code> seguito dai parametri passati alla funzione:</p>
            <TerminalCode code={`
                { firstName: "John", lastName: "Doe", getFullName: ƒ }, "john", "doe"
            `}/>
            <p>Qualora invece non volessimo salvare la funzione in una variabile (nel nostro caso registerUserBound),
                è possibile chiamare direttamente la funzione con il metodo <code>call()</code>:
            </p>
            <JavascriptCode code={`
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    getFullName: function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                };
                
                function registerUser(username, password) {
                    // in questo caso this si riferirà all'oggetto user (passato all'interno di call)
                    console.log(this, username, password);  
                }
                
                registerUser.call(user, username, password);
            `}/>
            <p>ed il risultato sarà sempre l'oggetto <code>user</code> seguito da username e password:</p>
            <TerminalCode code={`
                { firstName: "John", lastName: "Doe", getFullName: ƒ }, "john", "doe"
            `}/>
            <p>Infine, qualora volessimo passare i parametri alla funzione in un array, possiamo utilizzare il metodo
                <code>apply()</code>:
            </p>
            <JavascriptCode code={`
                const user = {
                    firstName: "John",
                    lastName: "Doe",
                    getFullName: function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                };
                
                function registerUser(username, password) {
                    // in questo caso this si riferirà all'oggetto user (passato all'interno di apply)
                    console.log(this, username, password);  
                }
                
                registerUser.apply(user, ["john", "doe"]);
            `}/>
            <p>ed anche in questo caso il risultato sarà sempre lo stesso:</p>
            <TerminalCode code={`
                { firstName: "John", lastName: "Doe", getFullName: ƒ }, "john", "doe"
            `}/>

            <h2>Costruttori</h2>
            <p>Sappiamo che le funzioni sono un speciale tipo di oggetto in JS. Vediamo un esempio:</p>
            <JavascriptCode code={`
                function User(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.getFullName = function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                }
                
                // Chiamata standard di funzione
                const user = User("John", "Doe");
                console.log(user);      // undefined
                
                // Chiamata di funzione con la keyword new
                const user = new User("John", "Doe");
                console.log(user);                  // User { firstName: "John", lastName: "Doe" }
                console.log(user.getFullName());    // FULLNAME: John Doe
            `}/>
            <p>Questo esempio ci mostra come la keyword <code>new</code> posta davanti ad una funzione, fa in modo che
                venga creata una nuova istanza di un oggetto, che eredita le proprietà e i metodi della funzione
                stessa.
            </p>

            <h2>Prototipi</h2>
            <p>Il prototype è un oggetto che viene creato automaticamente quando viene creata una funzione in JS.
                Questo oggetto contiene tutte le proprietà e i metodi che possono essere condivisi da tutte le
                istanze della funzione.
            </p>
            <JavascriptCode code={`
                function User(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.getFullName = function() { return \`FULLNAME: \${this.firstName} \${this.lastName}\`; }
                }
                
                user = new User("Mario", "Rossi");
                user2 = new User("Luca", "Verdi");
                
                
                consolle.log(user.getFullName === user2.getFullName);    // false               
            `}/>
            <p>Otteniamo come risultato <code>false</code> poiché ogni istanza della funzione <code>User</code> ha
                un proprio metodo <code>getFullName</code> salvato in una differente area di memoria. Per poter fare
                in modo che ogni oggetto condivida la stessa area di memoria per lo stesso metodo, possiamo utilizzare
                appunto il <code>prototype</code> disponibile per ogni funzione:
            </p>
            <JavascriptCode code={`
                function User(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                
                // Aggiunta di un metodo al prototype della funzione User (condiviso da tutte le istanze)
                User.prototype.getFullName = function() {
                    return \`FULLNAME: \${this.firstName} \${this.lastName}\`;
                };
                
                user = new User("Mario", "Rossi");
                user2 = new User("Luca", "Verdi");
                
                console.log(user.getFullName === user2.getFullName);    // true
            `}/>
            <p>Questo aspetto è anche evidenziabile andando a stampare l'oggetto <code>user</code>:</p>
            <JavascriptCode code={`
                console.log(user);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                User { 
                    firstName: "Mario", 
                    lastName: "Rossi" }
                    __proto__: 
                        getFullName: ƒ ()
                        constructor: ƒ User(firstName, lastName)
                        __proto__: Object
                        ...
            `}/>
            <p>Per comprendere ancora meglio questo aspetto del <code>prototype</code>, possiamo fare un esempio
                con oggetti built-in di JS, come ad esempio un array:
            </p>
            <JavascriptCode code={`
                const array = [1,2];
                console.log(array);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                (3) [1, 2, 3]
                    0: 1
                    1: 2
                    length: 
                    // Inizio della catena di prototype
                    __proto__: Array(0)
                        concat: ƒ concat()
                        constructor: ƒ Array()
                        copyWithin: ƒ copyWithin()
                        map: ƒ map()
                        pop: ƒ pop()
                        push: ƒ push()
                        reverse: ƒ reverse()
                        ...
                        __proto__: Object 
                            ...
            `}/>
            <p>Da questo output possiamo osservare la presenza di un prototype (<code>__proto__</code>) contenente
                tutti i metodi che possono essere utilizzati su un array, sino ad arrivare al prototype di base
                di tutti gli oggetti di JS.
            </p>
            <p>Parliamo infatti di una catena di prototype, dove infatti in questo caso il nostro specifico array
                è costruito su un prototype di Array che a sua volta è costruito su un prototype di Object (che è il
                prototype di base di tutti gli oggetti JS, quindi ultimo della catena di prototype).
            </p>
            <p>Un discorso simile (che può anche essere ingannevole) vale anche per le primitive:</p>
            <JavascriptCode code={`
                const string = new String("Hello");
                console.log(string);
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                String {"Hello"}
                    0: "H"
                    1: "e"
                    2: "l"
                    3: "l"
                    4: "o"
                    length: 
                    // Inizio della catena di prototype
                    __proto__: String
                        anchor: ƒ anchor()
                        big: ƒ big()
                        blink: ƒ blink()
                        bold: ƒ bold()
                        toUpperCase: ƒ toUpperCase()
                        ...
                        __proto__: Object
                            ...
                        [[PrimitiveValue]]: "Hello"
            `}/>

            <h3>Ereditarietà dei Prototipi (prototype chain)</h3>
            <p>La cosa più semplice da cui partire è proprio un esempio di ereditarietà tra due funzioni:</p>
            <JavascriptCode code={`
                function User(name) {
                    this.name = name;
                }
                
                User.prototype.getName = function() {
                    return \`NAME: \${this.name}\`;
                };
                
                function Admin(role, name) {
                    User.call(this.name);
                    this.role = role;
                }
                
                Admin.prototype = Object.create(User.prototype);
                
                const admin = new Admin("Admin", "John");
                console.log(admin);          
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Admin { 
                    name: "John", 
                    role: "Admin" }
                    __proto__: User
                        getName: ƒ ()
                        constructor: ƒ User(name)
                        __proto__: Object
                            ...
            `}/>
            <p>Qui possiamo osservare come l'oggetto <code>admin</code> è costruito sul prototype di User, a sua volta
                costruito sul prototype di Object.
            </p>
            <p>Volendo verificare che effettivamente l'oggetto <code>admin</code> abbia ereditato anche il metodo
                <code>getName()</code> di User, possiamo fare:</p>
            <JavascriptCode code={`
                console.log(admin.getName());
            `}/>
            <p>ed ottenere il risultato atteso:</p>
            <TerminalCode code={`
                NAME: John
            `}/>

            <h2>Classi</h2>
            <p>Le classi in JS sono un costrutto sintattico (zucchero sintattico) che permette di creare oggetti in
                modo più chiaro e semplice rispetto alle funzioni costruttrici e ai prototipi.
            </p>
            <p>L'esempio precedente con le funzioni costruttrici e i prototipi, può essere riscritto in modo più
                chiaro e semplice con le classi:</p>
            <JavascriptCode code={`
                class User {
                    constructor(name) {
                        this.name = name;
                    }
                    
                    getName() {
                        return \`NAME: \${this.name}\`;
                    }
                }
                
                class Admin extends User {
                    constructor(role, name) {
                        super(name);
                        this.role = role;
                    }
                }
                
                const admin = new Admin("Admin", "John");
                console.log(admin);          
            `}/>
            <p>Output:</p>
            <TerminalCode code={`
                Admin { 
                    name: "John", 
                    role: "Admin" }
                    __proto__: User
                        getName: ƒ ()
                        constructor: ƒ User(name)
                        __proto__: Object
                            ...
            `}/>
            <p>Sostanzialmente abbiamo trasformato:</p>
            <JavascriptCode code={`
                // Funzione costruttrice
                function User(name) {
                    this.name = name;
                }
            `}/>
            <p>in:</p>
            <JavascriptCode code={`
                // Classe
                class User {
                    constructor(name) {
                        this.name = name;
                    }
                }
            `}/>
            <p>e:</p>
            <JavascriptCode code={`
                // Prototipo
                User.prototype.getName = function() {
                    return \`NAME: \${this.name}\`;
                };
            `}/>
            <p>in:</p>
            <JavascriptCode code={`
                class User {
                    ...
                    
                    // Metodo
                    getName() {
                        return \`NAME: \${this.name}\`;
                    }
                }
            `}/>
            <p>ed infine:</p>
            <JavascriptCode code={`
                // Funzione costruttrice
                function Admin(role, name) {
                    User.call(this.name);
                    this.role = role;
                }
            `}/>
            <p>in:</p>
            <JavascriptCode code={`
                class Admin extends User {
                    constructor(role, name) {
                        super(name);
                        this.role = role;
                    }
                }
            `}/>

        </div>
    );
};

export default OOPJS;
