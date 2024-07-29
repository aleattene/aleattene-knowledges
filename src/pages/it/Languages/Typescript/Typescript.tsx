import React from 'react';
import TypescriptCode from "../../../../components/Code/TypescriptCode/TypescriptCode.tsx";

const Typescript: React.FC = () => {
    return (
        <div>
            <h1>Typescript</h1>
            <p>TS è un linguaggio di programmazione costruito su JS, infatti ne condivide sintassi e funzionalità.</p>
            <p>Ma non solo, TS aggiunge funzionalità come tipizzazione statica, classi, interfacce, moduli e decoratori.
            </p>
            <TypescriptCode code={`
                // Javascript
                const prova = 5;
                // Typescript
                const prova: number = 5;
            `} />
            <p>TS non può essere eseguito direttamente dal browser e/o da NodeJs, ma deve essere prima compilato (processo
                di transpilazione) in JS.</p>
            <p>Framework come Angular, NestJs, Ionic, etc.. sono scritti in TS.</p>
            <h3>Installazione:</h3>
            <p>Node (incluso npm) è necessario per installare TS.</p>
            <TypescriptCode code={`
                [sudo] npm install -g typescript    // Installazione globale (su tutto il pc)
            `}/>
            <p>Strumenti Utili:</p>
                <ul>
                    <li>IDE: VSCode o Webstorm (ad esempio)</li>
                    <li>ESLint: per il controllo della qualità del codice</li>
                    <li>Prettier: per la formattazione del codice</li>
                </ul>
            <TypescriptCode code={`
                // Javascript
                function somma(a, b) {
                    return a + b;
                }
                somma(3, 5);    // 8
                somma('ciao', 5); // ciao5 (cast implicito number -> string e concatenazione)
                somma(3, '5');  // '35' (cast implicito number -> string e concatenazione)
                
                // Typescript
                function somma(a: number, b: number): number {
                    return a + b;
                }
                somma(3, '..5..');  // Errore in fase di implementazione
            `}/>
            <p>In questo ultimo esempio possiamo osservare come non sia neanche necessario arrivare alla transpilazione
                <code>tsc file.ts</code> poiché Ts ci avvisa del problema direttamente in fase di implementazione;
                questo naturalmente ci permette di scrivere codice più robusto e sicuro e soprattutto che non manifesta
                problemi a runtime.</p>
            <h2>TIPI di DATO (Data Types)</h2>
            <p>Come abbiamo visto in altri contesti JS ha una tipizzazione dinamica, mentre TS ha una tipizzazione
                statica</p>
            <TypescriptCode code={`
                // Javascript
                let a = 5;
                a = 'ciao'; // OK
                
                // Typescript
                let a: number = 5;
                ..a.. = 'ciao'; // Errore in fase di implementazione (type string is not assignable to type number)
            `}/>
            <p>TS supporta tipi di dato, quali ad esempio:</p>
            <ul>
                <li>String / Number / Boolean</li>
                <li>Object / Array / Tuple / Custom Type</li>
                <li>Enum / Any / Union / Alias</li>
            </ul>
            <h3>Object</h3>
            <TypescriptCode code={`               
                // Typescript
                const user: { } = {
                    name: 'Mario',
                    age: 30
                };
                ..user.name.. // Errore
            `}/>
            <p> In questo caso abbiamo un errore in fase di implementazione poiché abbiamo definito un oggetto vuoto con
                <code>{}</code> (sarebbe la stessa cosa se avessimo usato <code>object</code>).
                Di fronte a situazioni come queste, se non abbiamo chiaro come sarà l'oggetto meglio non srcivere nulla
                e lasciare che TS inferisca il tipo corretto.</p>
            <TypescriptCode code={`
                // Typescript
                const user : { name: string, age: number } = { name: "Mario", age: 30 };
                user.name // OK - Mario
                const ..user2.. : { name: string, age: number } = { name: "Mario" };    
                // Errore in fase di implementazione (age is missing) il quale ci specifica che ci siamo dimenticati
                // di inizializzare la proprietà age
            `}/>
            <p>In sostanza dall'esempio abbiamo potuto osservare come TS di fatto ci permetta di definire la struttura
                dell'oggetto (ma anche di oggetti innestati) e poi questa stessa struttura deve essere rispettata
                sia in termini di proprietà che di tipi.
                Alternativamente TS ci segnalerebbe un errore direttamente in fase di implementazione.
            </p>
            <TypescriptCode code={`
                function getData (data: { name: string, age: number }) {
                    return data;
                }
                getData({ name: 'Mario', age: 30 }); // OK
                getData({ name: 'Mario' }); 
                // Errore in fase di implementazione poiché la funzione si aspetta un oggetto con proprietà name e age
                // come definito in fase di dichiarazione della funzione stessa
            `}/>
            <TypescriptCode code={`
                // Union Type (nel nostro caso accetta solo stringhe, numeri e booleani)
                const array: (string | number | boolean)[] = ['Mario', 30, true];
            `}/>
            <TypescriptCode code={`
                // Any Type (viene accettato qualsiasi tipo)
                const array: any[] = ['Mario', 30, true];
            `}/>
            <h3>Tuple</h3>
            <p>Le tuple sono array di lunghezza fissa, dove ogni elemento ha un tipo definito in fase di
                dichiarazione ed inizializzazione.</p>
            <TypescriptCode code={`
                const array: [string, number, boolean] = ['Mario', 30, true];
                
                array[0] // Mario
                array[1] // 30
                array[2] // true
                
                array[3] // Errore - Element at index 3 is missing
                
                array[0] = 30; // Errore - Type '30' is not assignable to type 'string'
                
                const array2: [string, number] = [30, 'Rossi']; // Errore - Type '30' is not assignable to type 'string'              
            `}/>
            <p>Come è facilmente osservabile i requisiti imposti dalle tuple per ciò che riguarda numero di elementi
                e tipologia degli stessi sono molto stringenti. Una qualunque minima loro violazione genera
                immediatamente un errore.
            </p>
            <h3>ANY</h3>
            <p>Il tipo any è un tipo speciale che ci permette di essere il più generici possibile. Accettando qualsiasi
                tipo di dato, è l'equivalente di non avere tipizzazione e per tale motivo è consigliabile usarlo con
                estrema accrtezza.
            </p>
            <h3>UNION</h3>
            <p>Il tipo union ci permette di definire un tipo che può essere appartenente ad un insieme di più  tipi.</p>
            <TypescriptCode code={`
                // Array che può contenere stringhe o numeri, ma non altri tipi
                const value: (string | number)[] = ['Mario', 30, 'Rossi', 40];
                
                // La variabile può essere di tipo stringa o numero (non di altro tipo)
                let prova: string | number = 'Mario';     // string
                prova = 30;     // number
                
                // La variabile può essere un numero o un array di numeri (non altro tipo)
                let point: number | number[] = 5;   // number
                point = [5, 10];    // array di number
                point = 'ciao';     // Errore - Type 'string' is not assignable to type 'number | number[]'
            `}/>
            <h3>Custom Type</h3>
            <p>TS ci permette anche di definire tipi personalizzati, utilizzando la parola chiave <code>type</code>.</p>
            <TypescriptCode code={`
                type Point = {
                    x: number,
                    y: number
                };
                const point: Point = { x: 5, y: 10 };
            `}/>
            <h3>ENUM</h3>
            <TypescriptCode code={`
                enum Roles {    
                    ADMIN = 'admin',
                    USER = 'user',
                    GUEST = 'guest'
                }

                const user = {
                    name: 'Mario',
                    role: Roles.ADMIN
                };
                
                // Accesso ai valori dell'enum tramite la chiave
                if (user.role === Roles.ADMIN) {
                    console.log('Admin');
                }
                
                // Accesso agli indici dell'enum tramite il valore
                Object.keys(Roles).indexOf('admin')     // 0
                Object.keys(Roles).indexOf('user')      // 1
                Object.keys(Roles).indexOf('guest')     // 2
                
                // Accesso alle chiavi dell'enum tramite l'indice
                Object.keys(Roles)[0]    // ADMIN
                Object.keys(Roles)[1]    // USER
                Object.keys(Roles)[2]    // GUEST
            `}/>
            <h2>Funzioni</h2>
            <TypescriptCode code={`
                // Parametri e ritorno tipizzati
                function somma(a: number, b: number): number { ... };
                
                // Parametri opzionali e tipizzati e ritorno tipizzato
                function somma(a: number, b?: number): number { ... };
                
                // Parametri con valore di default e ritorno tipizzato
                function somma(a: number, b: number = 5): number { ... };
                somma(3, 4);    // 7
                somma(3);       // 8
                somma(1, .."ciao"..);   // Errore - Type 'string' is not assignable to type 'number'
                                
                // Parametri rest e ritorno tipizzato
                function somma(a: number, ...rest: number[]): number { ... };
                
                // Parametri inferiti e ritorno tipizzato
                function somma(a, b): number { ... };
                
                // Parametri inferti con valore di default e ritorno tipizzato
                function somma(a, b = 5): number { ... };
                
                // Parametri tipizzati e ritorno any (ovvero possiamo ritornare qualsiasi tipo)
                function somma(a: number, b: number): any { ... };
                
                // Parametri tipizzati e ritorno void (ovvero non ritorniamo nulla)
                function somma(a: number, b: number): void { ... };
                somma(3, 4);    // undefined (???)
                
                // Parametri tipizzati e ritorno undefined (ovvero ritorniamo undefined)
                function somma(a: number, b: number): undefined { ... };
                somma(3, 4);    // undefined  (???)
            `}/>
            <p>Osserviamo che in TS una funzione può anche essere un tipo di dato per una variabile.</p>
            <TypescriptCode code={`
                const somma: (a: number, b: number) => number;
                const variable: function = somma;                       // assignment poco specifico
                const otherVariable = somma;                            // inferenza del tipo
                const prova: (a: number, b: number) => number = somma;  // assignment specifico
                (???)
            `}/>
            <h2>Compilatore</h2>
            <p>Il compilatore di TS è chiamato <code>tsc</code> (transcompiler) e ci permette di trasformare il
                nostro codice TS in JS (eseguibile poi o nel browser o in NodeJs).</p>
            <TypescriptCode code={`
                // Compilazione di un file TS
                tsc file.ts
                
                // Compilazione di un file TS in un file JS
                tsc file.ts -outFile file.js
                
                // Compilazione continuativa di un file TS (similmente al comportamento di nodemon in NodeJS)
                tsc file.ts -watch  // Ogni modifica comporta la ri-transpilazione del file
                tsc file.ts -w
            `}/>
            <p>
            Sicuramente utilizzare watch mode per ogni singolo file è poco conveniente, meglio utilizzarlo a livello di
                progetto:</p>
            <TypescriptCode code={`
                // Inizializzazione di un progetto TS
                tsc --init
                // Compilazione di tutti i file TS del progetto
                tsc -w  // mette in watch mode tutti i file TS del progetto
                // File di configurazione tsconfig.json
                {
                    ....,
                    "exclude": ["./server.ts", ... ],   // File esclusi dal watch mode
                }
            `}/>
            <TypescriptCode code={`
                // File di configurazione tsconfig.json
                { 
                    ...
                    // Specifica al trans-compiler quali direttive seguire (es6/2016)
                    target: "es2016"    
                    
                    // Specifica di controllare le funzionalità dei file JS oltre a quelli TS
                    allowJs: true,      
                    checkJs: true,   
                    
                    // Permette di visualizzare nella console del browser (source) file JS e TS
                    sourceMap: true,  
                    
                    // Specifica la directory di input dei file TS da transpilare verso la directory di output (outDir)
                    rootDir: "./src",   
                    
                    // Specifica la cartella di output della transpilazione (directory di build)
                    outDir: "./dist",   
            `}/>
            <h2>Classi</h2>
            <TypescriptCode code={`
                class User {
                    // Proprietà tipizzate
                    name: string;
                    age: number;
                    
                    constructor(name: string, age: number) {
                        this.name = name;
                        this.age = age;
                    }
                    
                    // Metodi
                    getDetails(): string {
                        return \`Name: \${this.name} - Age: \${this.age}\`;
                    }
                }
                
                // Creazione due istanze (oggetti) della classe User
                const user1: User = new User('Mario', 30);
                const user2: User = new User('Luigi', 25);
                
                // Utilizzo dei metodi delle istanze della classe User
                user1.getDetails(); // Name: Mario - Age: 30
                user2.getDetails(); // Name: Luigi - Age: 25
            `}/>
            <h3>Modificatori di Accesso</h3>
            <p>Una delle cose da evitare quando si lavora con le classi è l'accesso diretto alle proprietà della classe,
                quindi cose del tipo <code>user.name = 'Mario'</code> o <code>user.age = 30</code> sono da evitare.
                Per tale motivo TS ci mette a disposizione dei modificatori dei accesso:
                <ul>
                    <li>public (default) - proprietà accessibile da qualsiasi parte del codice (da evitare)</li>
                    <li>protected - proprietà accessibile solo all'interno della classe e delle sue sottoclassi</li>
                    <li>private - proprietà accessibile solo all'interno della classe</li>
                    <li>readonly - proprietà che non può essere modificata dopo la sua inizializzazione</li>
                </ul>
            </p>
            <h3>Esempi:</h3>
            <TypescriptCode code={`
                user.name = 'Mario';    // Accesso diretto (da evitare)
                
                // Modifichiamo l'accesso alla proprietà name
                private name: string;
                
                user...name.. // Errore - Property 'name' is private and only accessible within class 'User'
            `}/>
            <h3>ShortHand Costruttore</h3>
            <p>TS ci permette di definire le proprietà della classe direttamente nel costruttore, evitando duplicazioni
                di codice:</p>
            <TypescriptCode code={`
                class User {
                    // Definizioni delle proprietà che saranno inizializzate nel costruttore come private
                    constructor(private name: string, private age: number, private readonly sex: string) {}
                    
                    getDetails(): string {
                        return \`Name: \${this.name} - Age: \${this.age} (sex: \${this.sec})\`;
                    }
                }
            `}/>
            <h3>Ereditarietà</h3>
            <TypescriptCode code={`
                class Person {
                    constructor(private name: string, private age: number) { 
                        this.name = name;
                        this.age = age;
                    }
                    
                    getDetails(): string {
                        return \`Name: \${this.name} - Age: \${this.age}\`;
                    }
                }
                
                class User extends Person {
                    constructor(name: string, age: number, private role: string) {
                        // Richiamo del costruttore della classe padre
                        super(name, age);
                        // Inizializzazione della proprietà role della classe figlia (User)
                        this.role = role;
                    }
                    
                    // Override del metodo getDetails
                    getDetails(): string {
                        return super.getDetails() + \` - Role: \${this.role}\`;
                    }
                }
                
                const user: User = new User('Mario', 30, 'admin');
                (???)
                user.name; // Non consentito perché la proprietà è private (se fosse stata protected avrei potuto)
                user.getDetails(); // Name: Mario - Age: 30 - Role: admin
            `}/>
            <h3>Metodi e Proprietà Statiche</h3>
            <p>Si tratta di metodi e proprietà accessibili direttamente dalla classe senza la necessità di creare
                oggetti (istanze).
            </p>
            <TypescriptCode code={`
                // Accesso ad una proprietà statica: NomeClasse.nomeProprietà;
                Math.PI;        // 3.141592653589793
                
                // Accesso ad un metodo statico: NomeClasse.nomeMetodo();
                Math.random();  // 0.123456789
            `}/>
            <p>Come si può osservare in entrambi i casi non è stato necessario creare alcuna istanza della classe Math
                per accedere alle sue proprietà statiche ed ai suoi metodi statici.</p>
            <h3>Classi Astratte</h3>
            <p>Questo genere di classi fungono solo da riferimento strutturale per altre classi che ne ereditano le
                proprietà ed i metodi, ma esse stesse non possono essere istanziate.
                Pensiamo ad esempio alla classe Persona, difficilmente esisterà la necessità di creare un'istanza di
                Persona, ma molto più probabile sarà la necessità di creare un'istanza di Studente, Insegnante, etc.
            </p>
            <TypescriptCode code={`
                // Dichiarazione di una classe astratta (keyword abstract)
                abstract class Person {
                    constructor(private name: string, private age: number) {
                        this.name = name;
                        this.age = age;
                    }
                    
                    abstract getDetails(): string;
                }
                
                class User extends Person {
                    constructor(name: string, age: number, private role: string) {
                        super(name, age);
                        this.role = role;
                    }
                    
                    // Obbligo di implementare il metodo astratto getDetails
                    getDetails(): string {
                        return \`Name: \${this.name} - Age: \${this.age} - Role: \${this.role}\`;
                    }
                }
                
                
                const persona: Person = new Person('Mario', 30); // Errore - Cannot create instance of abstract class
                
                const user: User = new User('Mario', 30, 'admin');
                user.getDetails(); // Name: Mario - Age: 30 - Role: admin
            
            `}/>
        </div>
    );
};

export default Typescript;