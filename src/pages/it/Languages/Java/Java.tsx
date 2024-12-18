import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import JavaCode from "../../../../components/Code/JavaCode/JavaCode.tsx";


const Java: React.FC = () => {
    return (
        <div>
            <h1>Java</h1>
            <p> E' uno dei 3 principali linguaggi del momento (assieme a Python e JavaScript).
                Sappiamo che i computer non capiscono il linguaggio umano (poichè capiscono solo il linguaggio
                macchina),
                quindi abbiamo bisogno di un linguaggio di programmazione per comunicare con loro.
                Java è un linguaggio di programmazione ad alto livello, orientato agli oggetti e multi-piattaforma.</p>
            <p>Java è stato sviluppato da Sun Microsystems (acquisita da Oracle nel 2010) nel 1995.</p>
            <p>Con Java noi scriviamo il codice sorgente (.java), che viene poi compilato in bytecode
                (un linguaggio macchina virtuale) e infine eseguito dalla JVM (Java Virtual Machine).</p>
            <p>Questo permette a Java di essere un linguaggio multi-piattaforma, ovvero il codice sorgente
                può essere eseguito su qualsiasi sistema operativo che abbia installata la JVM.
                Alternativamente, se compilassimo il codice sorgente in un linguaggio macchina specifico,
                quindi un file eseuguibile, il programma potrebbe essere eseguito solo su quel sistema operativo,
                perdendo di conseguenza la portabilità
            </p>
            <p> Abbiamo quindi:</p>
            <TerminalCode code={`
                Codice Sorgente (.java) -> Compilazione -> Bytecode (.class) -> Esecuzione da parte della JVM -> Linguaggio Macchina           
            `}/>
            <p> Possiamo quindi osservare la presenza di alcuni componenti principali:</p>
            <ul>
                <li>La libreria Java (JDK - Java Development Kit) che contiene le API standard di Java</li>
                <li>La Java Runtime Environment (JRE) che contiene la JVM e le librerie standard</li>
                <li>Il compilatore Java (javac - java compiler) che traduce il codice sorgente in bytecode</li>
                <li>La Java Virtual Machine (JVM) che esegue il bytecode</li>
            </ul>
            <p> Di fatto la JDK contiene la JRE e il compilatore Java ed a sua volta
                la JRE contiene la JVM e le librerie standard.
            </p>
            <p>Java è un linguaggio di programmazione orientato agli oggetti, ovvero il codice è organizzato
                in classi e oggetti.
                Una classe è un modello che definisce le variabili e i metodi che un oggetto
                di quel tipo può avere.
                Un oggetto è un'istanza di una classe.
            </p>
            <h3>Sintassi base di un programma Java</h3>
            <JavaCode code={`
                // Classe Principale del programma (il nome Main è arbitrario)
                public class Main {
                    
                    // Metodo Principale (il nome main è doveroso) da cui il programma inizia l'esecuzione
                    public static void main(String[] args) {
                        ....... // Codice
                    }
                
                }
            `}/>
            <p>dove:
                <ul>
                    <li><code>public</code> è un modificatore di accesso
                        che indica che il metodo è accessibile da qualsiasi classe
                    </li>
                    <li><code>static</code> indica che il metodo è un metodo di classe,
                        quindi può essere chiamato senza creare un'istanza della classe
                    </li>
                    <li><code>void</code> indica che il metodo non restituisce alcun valore</li>
                    <li><code>main</code> è il nome del metodo</li>
                    <li><code>String[] args</code> è un array di stringhe
                        che rappresenta gli argomenti passati al metodo
                    </li>
                </ul>

            </p>

            <h3>Stampa a video unica riga - metodo <code className={'documentation-link'}>print</code></h3>
            <JavaCode code={`
                // Stampa a video la stringa "Ciao Mondo" e questo è un commento
                System.out.print("Ciao");
                System.out.print("Mondo");
            `}/>
            <TerminalCode code={`Ciao Mondo`}/>

            <h3>Stampa a video multipla riga - metodo <code className={'documentation-link'}>println</code></h3>
            <JavaCode code={`
                /* Stampa a video la stringa su due righe 
                 * e questo è un commento 
                 * su più righe 
                 */
                System.out.println("Ciao");
                System.out.println("Mondo");
            `}/>
            <TerminalCode code={`
                Ciao
                Mondo
            `}/>
            <h2>Variabili</h2>
            <p> Le variabili sono di fatto una delle fondamenta su cui si basa la programmazione.
                Possono essere viste come dei contenitori che contengono un valore che viene assegnato
                a questo stesso contenitore.
                Tale contenitore in realtà ha un nome, un tipo e un valore.
                Si può risalire al contenuto di una variabile attraverso il suo nome, il cui nome
                è un identificatore che a basso livello mappa un indirizzo di memoria.
            </p>
            <h3>Nomenclatura</h3>
            <p>In Java i nomi delle variabili devono iniziare con una lettera, un carattere di sottolineatura
                o un simbolo di dollaro.
                I nomi delle variabili possono contenere lettere, numeri, caratteri di sottolineatura
                e simboli di dollaro.
                I nomi delle variabili sono case-sensitive, quindi <code>nome</code> e <code>Nome</code> sono
                due variabili diverse.
                Per convenzione usiamo camelCase per i nomi delle variabili ed il PascalCase per i nomi delle classi.
                Per le costanti usiamo lo il formato <code>SNAKE_CASE</code>.
            </p>
            <h3>Dichiarazione - Assegnazione - Inizializzazione</h3>
            <p> In Java, una variabile può essere dichiarata, assegnata e inizializzata.
                La dichiarazione è il processo in cui si definisce il nome e il tipo di variabile.
                <JavaCode code={`int numero;    // dichiarazione delle variabile`}/>
                L'assegnazione è il processo in cui si assegna un valore alla variabile.
                <JavaCode code={`numero = 10;    // assegnazione del valore 10 alla variabile numero`}/>
                L'inizializzazione è il processo in cui si assegna un valore alla variabile
                al momento della dichiarazione.
                <JavaCode
                    code={`int numeroIntero = 10;           // dichiarazione e inizializzazione della variabile`}/>
                <JavaCode
                    code={`double numeroVirgola = 10.25;    // dichiarazione e inizializzazione della variabile`}/>
            </p>
            <h3>Errata inizializzazione</h3>
            <JavaCode code={`ìnt numero = 10.25; // Type mismatch: cannot convert from double to int`}/>
            <h3>Errata riassegnazione</h3>
            <JavaCode code={`
                    int numero = 10;
                    numero = 10.25; // Type mismatch: cannot convert from double to int
                `}/>
            <h2>Tipi di Dati</h2>
            <p> In Java, i tipi di dati possono essere divisi in due categorie principali:
                i tipi di dati primitivi (primitive) e i tipi di dati di riferimento (reference).
            </p>
            <h3>Tipi di Dato Primitivi</h3>
            <table>
                <thead>
                <th>Tipo di Dato</th>
                <th>Valori Possibili</th>
                <th>Occupazione in Memoria</th>
                <th>Esempio</th>
                </thead>
                <tbody>
                <tr>
                    <td>boolean</td>
                    <td>true / false</td>
                    <td>1 byte</td>
                    <td><JavaCode code={`boolean ilBoolean = true;`}/></td>
                </tr>
                <tr>
                    <td>byte</td>
                    <td>da -128 a 127</td>
                    <td>1 byte</td>
                    <td><JavaCode code={`byte ilByte = 127;`}/></td>
                </tr>
                <tr>
                    <td>short</td>
                    <td>-32,768 a 32,767</td>
                    <td>2 byte</td>
                    <td><JavaCode code={`short ilShort = -32768;`}/></td>

                </tr>
                <tr>

                    <td>int</td>
                    <td>-2^31 a 2^31-1 (circa da meno due miliardi a 2 miliardi)</td>
                    <td>4 byte</td>
                    <td><JavaCode code={`int loIntero = 2_000_000_000;`}/></td>

                </tr>
                <tr>

                    <td>long</td>
                    <td>-2^63L a 2^63-1L (circa da meno 9 quintilioni a 9 quintilioni con L finale)</td>
                    <td>8 byte</td>
                    <td><JavaCode code={`long ilLong = 9_000_000_000_000_000_000L;`}/></td>

                </tr>
                <tr>

                    <td>float</td>
                    <td>1.4e-45f a 3.4e+38f (numero con 6/7 cifre decimali)</td>
                    <td>4 byte</td>
                    <td><JavaCode code={`float ilFloat = 5.3465111f;`}/></td>

                </tr>
                <tr>

                    <td>double</td>
                    <td>4.9e-324 a 1.8e+308 (numero con 15 cifre decimali)</td>
                    <td>8 byte</td>
                    <td><JavaCode code={`double ilDouble = 5.123526236701522;`}/></td>

                </tr>
                <tr>

                    <td>char</td>
                    <td>un carattere tra singoli apici (no doppi apici)</td>
                    <td>2 byte</td>
                    <td><JavaCode code={`char ilCarattere = 'a';`}/></td>

                </tr>
                </tbody>
            </table>

            <h3>Tipi di Dato Reference</h3>
            <table>
                <thead>
                <th>Tipo di Dato</th>
                <th>Valori Possibili</th>
                <th>Occupazione in Memoria</th>
                <th>Esempio</th>
                </thead>
                <tbody>
                <tr>
                    <td>String</td>
                    <td>insieme di caratteri tra doppi apici (no singoli apici)</td>
                    <td>variabile</td>
                    <td><JavaCode code={`String laStringa = "Ciao Mondo";`}/></td>
                </tr>
                </tbody>
            </table>
            <p> Da quest'ultimo esempio possiamo notare che la Stringa è un tipo di dato reference e che i dati di tipo
                reference sono oggetti (istanze di una classe), quindi rispetto a dati primitivi portano con se
                attributi e metodi propri della classe stessa.
            </p>
            <h3>Esempio</h3>
            <JavaCode code={`
            String laStringa = "Ciao Mondo";
            
            // Proprietà
            laStringa.length();         // 10
            
            // Metodo
            laStringa.toUpperCase();    // "CIAO MONDO"
            `}/>

            <h2>Input Utente</h2>
            <p>Per ottenere l'input dell'utente possiamo utilizzare la classe <code>Scanner</code> che ci permette
                di leggere l'input da tastiera.
                Per utilizzare la classe Scanner dobbiamo importarla con
                <JavaCode code={`import java.util.Scanner;`}/>
            </p>
            <h3>Esempio</h3>
            <JavaCode code={`
                import java.util.Scanner;
                
                public class Main {
                
                    public static void main(String[] args) {
                    
                        // Creazione Oggetto di tipo Scanner chiamato input 
                        Scanner input = new Scanner(System.in);
                        
                        System.out.print("Inserisci il tuo nome: ");
                        
                        // Richiesta di input (stringa) all'utente nella riga successiva a quella di richiesta
                        String nome = input.nextLine();
                        
                        System.out.print("Inserisci la tua età: ");
                        
                        // Richiesta di input (intero) all'utente
                        String eta = input.nextInt();   // non sposta il cursore alla riga successiva 
                                                        // con possibili errori in eventuali letture successive
                        scanner.nextLine();             // sposta il cursore alla riga successiva
                        
                        // Concatenazione di stringhe e stampa a video
                        System.out.println("Ciao " + nome, "hai " + eta + " anni."); 
                    }
                }
            `}/>
            <h2>Operatori aritmetici</h2>
            <p>Java supporta gli operatori aritmetici standard:</p>
            <ul>
                <li><code>+</code> (addizione)</li>
                <li><code>+=</code> x += 1 equivale a x = x + 1</li>
                <li><code>-</code> (sottrazione)</li>
                <li><code>-=</code> x -= 1 equivale a x = x - 1</li>
                <li><code>*</code> (moltiplicazione)</li>
                <li><code>*=</code> x *= 1 equivale a x = x * 1</li>
                <li><code>/</code> (divisione)</li>
                <li><code>/=</code> x /= 1 equivale a x = x / 1</li>
                <li>
                    <code>%</code> (modulo - resto della divisione)

                    <JavaCode code={`
                        // Pattern individuazione numeri pari/dispari
                        int a = 10;
                        int b = 3;
                        int aPari = a % 2;  // 0 <- quindi a è un numero pari
                        int bPari = b % 2;  // 1 <- quindi b è un numero dispari
                    `}/>
                </li>
                <li><code>%=</code> x %= 2 equivale a x = x % 2</li>
            </ul>
            <h3>Operatori di incremento e decremento</h3>
            <p>Java supporta gli operatori di incremento e decremento:</p>
            <ul>
                <li><code>++</code> (incremento la variabile di 1)</li>
                <li><code>--</code> (decremento la variabile di 1)</li>
                <li><code>+= n</code> (incremento la variabile di n)</li>
                <li><code>-= n</code> (decremento la variabile di n)</li>
            </ul>
            <h3>Espressioni</h3>
            <p>Nelle espressioni, gli operatori vengono valutati in base alla loro precedenza.
                Se due operatori hanno la stessa precedenza, l'operatore viene valutato da sinistra a destra.
                Possiamo utilizzare le parentesi per forzare l'ordine di valutazione.
            </p>
            <h3>Precedenza degli operatori, segue più o meno la regola matematica PEMDAS:</h3>
            <ol>
                <li>Parentesi Tonde</li>
                <li>Parentesi Quadre</li>
                <li>Parentesi Graffe</li>
                <li>Esponenti</li>
                <li>Incremento e Decremento</li>
                <li>Moltiplicazione, Divisione e Modulo</li>
                <li>Somma e Sottrazione</li>
            </ol>
            <h2>Classe <code className={'documentation-link'}>Math</code></h2>
            <p>La classe Math contiene attributi e metodi per eseguire operazioni matematiche come radice quadrata,
                potenza
                esponenziale, logaritmi, ecc.
                I metodi della classe Math sono tutti statici, quindi non è necessario creare un oggetto Math per
                utilizzarli.
            </p>
            <h3>Metodi Principali</h3>
            <ul>
                <li><code className={'documentation-link'}>abs</code> - restituisce il valore assoluto di un numero
                    <JavaCode code={`Math.abs(-10); // 10`}/>
                </li>
                <li><code className={'documentation-link'}>sqrt</code> - restituisce la radice quadrata (square root)
                    di un numero
                    <JavaCode code={`Math.sqrt(25); // 5`}/>
                </li>
                <li><code className={'documentation-link'}>pow</code> - restituisce il valore di un numero elevato
                    alla potenza di un altro numero
                    <JavaCode code={`Math.pow(2, 3); // 8`}/>
                </li>
                <li><code className={'documentation-link'}>max</code> - restituisce il valore massimo tra due numeri
                    <JavaCode code={`Math.max(10, 20); // 20`}/>
                </li>
                <li><code className={'documentation-link'}>min</code> - restituisce il valore minimo tra due numeri
                    <JavaCode code={`Math.min(10, 20); // 10`}/>
                </li>
                <li><code className={'documentation-link'}>PI</code> - restituisce il valore di PiGreco
                    <JavaCode code={`Math.PI; // 3.141592653589793`}/>
                </li>
                <li><code className={'documentation-link'}>random</code> - restituisce un numero casuale tra 0 e 1
                    <JavaCode code={`Math.random(); // 0.123456789 (per esempio)`}/>
                </li>
            </ul>
            <h2>Operatori di Comparazione</h2>
            <p>Il risultato di un'operazione di comparazione è un valore booleano (true o false) e normalmente
                vengono utilizzati per controllare il flusso di un programma tramite la creazione di condizioni
                e struttura di controllo (come di seguito mostrato).
            </p>
            <p>Java supporta gli operatori di comparazione standard:</p>
            <ol>
                <li><code>==</code> (uguale a)
                    <JavaCode code={`
                    int a = 10;
                    int b = 20;
                    System.out.println(a == b); // false`}/>
                </li>
                <li><code>!=</code> (diverso da)
                    <JavaCode code={`System.out.println(a != b); // true`}/>
                </li>
                <li><code>&gt;</code> (maggiore di)
                    <JavaCode code={`System.out.println(a > b); // false`}/>
                </li>
                <li><code>&lt;</code> (minore di)
                    <JavaCode code={`System.out.println(a < b); // true`}/>
                </li>
                <li><code>&gt;=</code> (maggiore o uguale a)
                    <JavaCode code={`System.out.println(a >= b); // false`}/>
                </li>
                <li><code>&lt;=</code> (minore o uguale a)
                    <JavaCode code={`System.out.println(a <= b); // true`}/>
                </li>
            </ol>
            <h2>Operatori Logici (algebra booleana)</h2>
            <p>Come gli operatori di comparazione, gli operatori logici restituiscono un valore booleano (true o false).
                Anche gli operatori logici vengono utilizzati per controllare il flusso di un programma tramite
                la creazione di condizioni e strutture di controllo.
            </p>
            <p>Java supporta gli operatori logici standard:</p>
            <ol>
                <li><code>&&</code> (AND logico) - true se entrambe le condizioni sono true (vere)
                    <JavaCode code={`
                    int a = 10;
                    int b = 20;
                    System.out.println(a == 10 && b == 20); // true (true && true)
                    System.out.println(a == 10 && b == 10); // false (true && false)
                    System.out.println(a == 20 || b == 20); // false (false && true)
                    System.out.println(a == 20 && b == 10); // false (false && false)
                    `}/>
                </li>
                <li><code>||</code> (OR logico) - true se almeno una delle condizioni è true (vera)
                    <JavaCode code={`
                    System.out.println(a == 10 || b == 20); // true (true || true)
                    System.out.println(a == 10 || b == 10); // true (true || false)
                    System.out.println(a == 20 || b == 20); // true (false || true)
                    System.out.println(a == 20 || b == 10); // false (false || false)
                    `}/>
                </li>
                <li><code>!</code> (NOT logico) - true se la condizione è false (falsa) e viceversa
                    <JavaCode code={`
                    System.out.println(!(a == 10)); // false (!true)
                    System.out.println(!(a == 20)); // true (!false)
                    System.out.println(!(a == 10 && b == 20)); // false (!true)
                    `}/>
                </li>
            </ol>
            <h2>Strutture Condizionali</h2>
            <p>Le strutture di controllo condizionali sono utilizzate per controllare il flusso di un programma
                al verificarsi o meno di determinate condizioni.
                In Java, le strutture condizionali di controllo principali sono:</p>
            <ul>
                <li>if
                    <JavaCode code={`
                    int a = 10;
                    if (a == 10) { // Condizione
                        System.out.println("a è uguale a 10");
                    }
                    `}/>
                </li>
                <li>if-else(opzionale)
                    <JavaCode code={`
                    int a = 10;
                    if (a == 10) {  // Prima condizione
                        System.out.println("a è uguale a 10");
                    } else {        // Tutte la Altre condizioni
                        System.out.println("a non è uguale a 10");
                    }
                    `}/>
                </li>
                <li>if-else if(opzionale)-else(opzionale)
                    <JavaCode code={`
                    int a = 10;
                    if (a == 10) {          // Prima condizione
                        System.out.println("a è uguale a 10");
                    } else if (a == 20) {   // Seconda condizione
                        System.out.println("a è uguale a 20");
                    } else {                // Tutte le Altre condizioni
                        System.out.println("a non è uguale a 10 o 20");
                    }
                    `}/>
                </li>
                <li>ternary operator
                    <JavaCode code={`
                    int a = 10;
                    // Sintassi: (condizione) ? (vera) espressione1 : (falsa) espressione2
                    String risultato = (a == 10) ? "a è uguale a 10" : "a non è uguale a 10";
                    System.out.println(risultato);
                    `}/>
                </li>
                <li>if annidati
                    <JavaCode code={`
                    int a = 10;
                    if (a == 10) {      // Prima condizione
                        System.out.println("a è uguale a 10");
                        if (a > 5) {    // Prima condizione annidata
                            System.out.println("a è maggiore di 5");
                        }
                    }
                    `}/>
                </li>
                <li>switch-case
                    <JavaCode code={`
                    int value = 10;
                    
                    switch (value) {    // Valore da confrontare
                    
                        case 10:        // Caso 1
                            System.out.println("value è uguale a 10");
                            break;      // Uscita dallo switch
                            
                        case 20:        // Caso 2
                            System.out.println("value è uguale a 20");
                            break;      // Uscita dallo switch
                            
                        default:        // Tutti gli altri casi non previsti dai precedenti
                            System.out.println("value non è uguale nè a 10 nè a 20");
                    }
                    `}/>
                </li>
            </ul>
            <h2>Cicli</h2>
            <p>I cicli sono utilizzati per eseguire più volte un blocco di codice.
                In Java,i principali cicli sono:</p>
            <ul>
                <li>for (ciclo determinato - si conosce il numero di iterazioni)
                    <JavaCode code={`
                    for (int i = 0; i < 5; i++) {    // Inizializzazione; Condizione; Incremento
                        System.out.println(i);
                    }
                    `}/>
                </li>
                <li>for annidati (cicli determinati - si conosce il numero di iterazioni)
                    <JavaCode code={`
                    for (int riga = 1; riga < 5; riga++) {                   // Ciclo Esterno
                        for (int colonna = 1; colonna < 5; colonna++) {      // Ciclo Interno (annidato)
                            System.out.println("Riga: " + riga + "| Colonna " + colonna);
                        }
                    }
                    `}/>
                </li>
                <li>for-enhanced/for-each (ciclo determinato - il numero di iterazioni dipende dalla lunghezza
                    dell'array)
                    <JavaCode code={`
                    int[] numeri = {1, 2, 3, 4, 5};
                    for (int numero: numeri) {    // Tipo di dato; Nome variabile; Array
                        System.out.println(numero);
                    }
                    `}/>
                </li>
                <li>while (ciclo indeterminato - si esegue finché la condizione è verificata)
                    <JavaCode code={`
                    int i = 0;
                    while (i < 5) {    // Condizione (se verificata si esegue iterativamente il blocco di codice)
                        System.out.println(i);
                        i++;            // Incremento
                    }
                    `}/>
                </li>
                <li>do-while (ciclo indeterminato - si esegue almeno una volta e poi finché la condizione è verificata)
                    <JavaCode code={`
                    int i = 0;
                    do {
                        System.out.println(i);
                        i++;
                    } while (i < 5);    // Condizione (se verificata si esegue iterativamente il blocco di codice)
                    `}/>
                </li>
                <h3>Break e Continue</h3>
                <p>Java supporta le parole chiave <code>break</code> e <code>continue</code> per controllare il flusso
                    di un ciclo. In particolare:</p>
                <ul>
                    <li><code>break</code> interrompe l'esecuzione del ciclo e passa al codice successivo.
                        <JavaCode code={`
                            for (int i = 0; i < 5; i++) {
                                if (i == 3) {   // Condizione di uscita
                                    break;      // Termina esecuzione del ciclo
                                }
                                System.out.println(i);
                            }
                            `}/>
                    </li>
                    <li><code>continue</code> interrompe l'iterazione corrente del ciclo e passa alla successiva.
                        <JavaCode code={`
                            for (int i = 0; i < 5; i++) {
                                if (i == 3) {   // Condizione di salto
                                    continue;   // Salta l'iterazione corrente e passa alla successiva
                                }
                                System.out.println(i);
                            }
                            `}/>
                    </li>
                </ul>
            </ul>
            <h2>Array</h2>
            <p>Gli array sono usati per memorizzare più valori dello stesso tipo in una singola variabile.
                Contrariamente ad altri linguaggi non tipizzati, in Java, gli array sono oggetti che contengono
                elementi dello stesso tipo.
            </p>
            <h3>Dichiarazione Array</h3>
            <JavaCode code={`
            // Dichiarazione di un array di interi di 5 elementi
            int[] numeri = new int[5];
            // Dichiarazione di un array di stringhe di 3 elementi
            String[] nomi = new String[3];
            `}/>
            <h3>Inizializzazione Array</h3>
            <JavaCode code={`
            // Inizializzazione di un array di interi di 5 elementi
            int[] numeri = {1, 2, 3, 4, 5};
            // Inizializzazione di un array di stringhe di 3 elementi
            String[] nomi = {"Alice", "Bob", "Charlie"};
            `}/>
            <h3>Accesso Elementi Array</h3>
            <p>Per accedere agli elementi di un array, utilizziamo l'indice dell'elemento.
                In un array, l'indice del primo elemento è 0, il secondo elemento è 1, ecc.
                Questo perchè alla base di un array c'è un'area di memoria contigua, ed il primo
                elemento è situato all'inizio di quest'area.
            </p>
            <JavaCode code={`
            // Accesso al primo elemento dell'array
            System.out.println(numeri[0]); // 1
            System.out.println(numeri[4]); // 5
            System.out.println(numeri[5]); // ArrayIndexOutOfBoundsException
            // Accesso all'ultimo elemento dell'array
            System.out.println(numeri[numeri.length - 1]); // 5
            `}/>
            <h3>Modifica Elementi Array</h3>
            <JavaCode code={`
            // Modifica del valore del secondo elemento dell'array
            numeri[1] = 10;
            System.out.println(numeri[1]); // 10
            // Modifica del valore dell'ultimo elemento dell'array
            numeri[numeri.length - 1] = 50;
            System.out.println(numeri[numeri.length - 1]); // 50
            `}/>
            <h3>Array Multidimensionali</h3>
            <p>Un array multidimensionale è un array di array.
                Java supporta array multidimensionali di qualsiasi dimensione.
            </p>
            <h3>Esempio:</h3>
            <JavaCode code={`
                // Dichiarazione di un array bidimensionale di interi
                int[][] numeri = {{1, 2, 3}, {4, 5, 6}};
                System.out.println(numeri[0][0]); // 1
                System.out.println(numeri[1][2]); // 6
            `}/>
            <h2>Iterare su Array</h2>
            <p>Per iterare su un array, possiamo utilizzare un ciclo for o un ciclo for-each.
                In particolare:</p>
            <ul>
                <li>for
                    <JavaCode code={`
                    int[] numeri = {1, 2, 3, 4, 5};
                    for (int i = 0; i < numeri.length; i++) {
                        System.out.println(numeri[i]);
                    }
                    
                    String[][] classi = {{"Alice", "Bob"}, {"Charlie", "David"}};
                    for (int i = 0; i < classi.length; i++) {
                        for (int j = 0; j < classi[i].length; j++) {
                            System.out.println(classi[i][j]);
                        }
                    }
                    `}/>
                </li>
                <li>for-each
                    <JavaCode code={`
                    int[] numeri = {1, 2, 3, 4, 5};
                    for (int numero: numeri) {
                        System.out.println(numero);
                    }
                    
                    String[][] classi = {{"Alice", "Bob"}, {"Charlie", "David"}};
                    for (String[] classe: classi) {
                        for (String studente: classe) {
                            System.out.println(studente);
                        }
                    }
                    `}/>
                </li>
            </ul>
            <h2>Metodi delle Stringhe</h2>
            <p>Java fornisce metodi per manipolare le stringhe.
                Alcuni dei metodi più comuni sono:</p>
            <ul>
                <li><code className={'documentation-link'}>equals</code> - confronta due stringhe e
                    restituisce true se sono uguali (altrimenti false)
                    <JavaCode code={`
                        String nome1 = "Alice";
                        String nome2 = "Bob";
                        System.out.println(nome1.equals(nome2)); // false
                    `}/>
                </li>

                <li><code className={'documentation-link'}>equalsIgnoreCase</code> - confronta due stringhe
                    ignorando le differenze tra maiuscole e
                    minuscole
                    <JavaCode code={`
                        String nome1 = "Alice";
                        String nome2 = "alice";
                        System.out.println(nome1.equalsIgnoreCase(nome2)); // true
                    `}/>
                </li>
                <li><code className={'documentation-link'}>length</code> - restituisce la lunghezza di una stringa
                    <JavaCode code={`
                        String nome = "Alice";
                        System.out.println(nome.length()); // 5
                    `}/>
                </li>
                <li><code className={'documentation-link'}>charAt</code> - restituisce il carattere in una
                    posizione specifica
                    <JavaCode code={`
                        String nome = "Alice";
                        System.out.println(nome.charAt(0)); // A
                        System.out.println(nome.charAt(4)); // e
                        System.out.println(nome.charAt(5)); // StringIndexOutOfBoundsException
                    `}/>
                </li>
                <li><code className={'documentation-link'}>indexOf</code> - restituisce l'indice della prima occorrenza
                    di una sotto-stringa e/o carattere (se l'occorrenza non è presente restituisce -1)
                    <JavaCode code={`
                        String nome = "Alessia";
                        System.out.println(nome.indexOf("A"));  // 0
                        System.out.println(nome.indexOf("le")); // 1
                        System.out.println(nome.indexOf("ss")); // -1
                    `}/>
                </li>
                <li><code className={'documentation-link'}>lastIndexOf</code> - restituisce l'indice dell'ultima
                    occorrenza di una sotto-stringa e/o carattere (se l'occorrenza non è presente restituisce -1)
                    <JavaCode code={`
                        String nome = "Alessia";
                        System.out.println(nome.lastIndexOf("A"));  // 0
                        System.out.println(nome.lastIndexOf("s"));  // 5
                        System.out.println(nome.lastIndexOf("ss")); // 4
                        System.out.println(nome.lastIndexOf("li")); // -1
                    `}/>
                </li>
                <li><code className={'documentation-link'}>isEmpty</code> - restituisce true se la stringa è vuota
                    (altrimenti false)
                    <JavaCode code={`
                        String nome1 = "";
                        String nome2 = "Alice";
                        System.out.println(nome.isEmpty());     // true
                        System.out.println(nome2.isEmpty());    // false
                    `}/>
                </li>
                <li><code className={'documentation-link'}>toUpperCase</code> - converte la stringa in maiuscolo
                    <JavaCode code={`
                        String nome = "Alice";
                        System.out.println(nome.toUpperCase());     // ALICE
                    `}/>
                </li>
                <li><code className={'documentation-link'}>toLowerCase</code> - converte la stringa in minuscolo
                    <JavaCode code={`
                        String nome = "Alice";
                        System.out.println(nome.toLowerCase());     // alice
                    `}/>
                </li>
                <li><code className={'documentation-link'}>substring</code> - restituisce una sotto-stringa
                    <JavaCode code={`
                        String nome = "Alice";
                        System.out.println(nome.substring(0, 3));   // Ali (da indice 0 a 3 escluso)
                    `}/>
                </li>
                <li><code className={'documentation-link'}>trim</code> - rimuove gli spazi bianchi iniziali e finali
                    <JavaCode code={`
                        String nome = "   Alice    ";
                        System.out.println(nome.trim());   // Alice
                    `}/>
                </li>
                <li><code className={'documentation-link'}>replace</code> - sostituisce una sotto-stringa e/o carattere
                    con un'altra sotto-stringa e/o carattere
                    <JavaCode code={`
                        String nome1 = "Alice";
                        String nome2 = "Mario";
                        System.out.println(nome.replace("ice", "essia"));   // Alessia
                        System.out.println(nome.replace("o", "a"));         // Maria
                    `}/>
                </li>
            </ul>
            <h2>Wrapper Class</h2>
            <p>Le classi wrapper sono utilizzate per incapsulare i tipi di dati primitivi in oggetti.
                Sostanzialmente ci permettono quindi di trattare i tipi di dati primitivi come reference (oggetti).
                In Java, ogni tipo di dato primitivo ha una classe wrapper corrispondente.
                Le classi wrapper sono utilizzate in particolare per:</p>
            <ul>
                <li>convertire un tipo di dato primitivo in un oggetto</li>
                <li>convertire un oggetto in un tipo di dato primitivo</li>
                <li>passare un tipo di dato primitivo come oggetto</li>
            </ul>
            <p>Il vantaggio principale delle classi wrapper è che ci permettono di utilizzare i metodi e le proprietà
                delle classi stesse (come ad esempio i metodi della classe <code>String</code>).
                Se così non fosse, dovremmo creare metodi statici per eseguire queste operazioni, poiché i tipi di dati
                primitivi non dispongono propriamente di metodi e proprietà.
            </p>
            <p>Lo svantaggio principale delle classi wrapper è che sono meno efficienti dei tipi di dati primitivi,
                poiché richiedono più memoria e tempo di esecuzione.
            </p>
            <h3>Classi Wrapper Principali:</h3>
            <ul>
                <li><code className={'documentation-link'}>Integer</code> - per il tipo di dato primitivo int
                    <JavaCode code={`
                        // Creazione di un primitive int
                        int lInteroPrimitivo = 10;
                        System.out.println(lInteroPrimitivo); // 10
                        // Creazione di un oggetto di tipo Integer
                        Integer lIntero = 10;
                        System.out.println(lIntero); // 10
                        // Conversione di un oggetto Integer in un tipo di dato primitivo int
                        int lInteroPrimitivo = lIntero.intValue();
                        System.out.println(lInteroPrimitivo); // 10
                        // Conversione di un tipo di dato primitivo int in un oggetto Integer
                        Integer lIntero = Integer.valueOf(lInteroPrimitivo);
                        System.out.println(lIntero); // 10
                    `}/>
                </li>
                <li><code className={'documentation-link'}>Double</code> - per il tipo di dato primitivo double
                    <JavaCode code={`
                        // Creazione di un primitive double
                        double ilDoublePrimitivo = 10.5;
                        System.out.println(ilDoublePrimitivo); // 10.5
                        // Creazione di un oggetto di tipo Double
                        Double ilDouble = 10.5;
                        System.out.println(ilDouble); // 10.5
                        // Conversione di un oggetto Double in un tipo di dato primitivo double
                        double ilDoublePrimitivo = ilDouble.doubleValue();
                        System.out.println(ilDoublePrimitivo); // 10.5
                        // Conversione di un tipo di dato primitivo double in un oggetto Double
                        Double ilDouble = Double.valueOf(ilDoublePrimitivo);
                        System.out.println(ilDouble); // 10.5
                    `}/>
                </li>
                <li><code className={'documentation-link'}>Character</code> - per il tipo di dato primitivo char
                    <JavaCode code={`
                        // Creazione di un primitive char
                        char ilCaratterePrimitivo = 'a';
                        System.out.println(ilCaratterePrimitivo); // a
                        // Creazione di un oggetto di tipo Character
                        Character ilCarattere = 'a';
                        System.out.println(ilCarattere); // a
                        // Conversione di un oggetto Character in un tipo di dato primitivo char
                        char ilCaratterePrimitivo = ilCarattere.charValue();
                        System.out.println(ilCaratterePrimitivo); // a
                        // Conversione di un tipo di dato primitivo char in un oggetto Character
                        Character ilCarattere = Character.valueOf(ilCaratterePrimitivo);
                        System.out.println(ilCarattere); // a
                    `}/>
                </li>
                <li><code className={'documentation-link'}>String</code> - per il tipo di dato primitivo String
                    <JavaCode code={`
                        // Creazione di un primitive String
                        String laStringaPrimitiva = "Ciao Mondo";
                        System.out.println(laStringaPrimitiva); // Ciao Mondo
                        // Creazione di un oggetto di tipo String
                        String laStringa = "Ciao Mondo";
                        System.out.println(laStringa); // Ciao Mondo
                        // Conversione di un oggetto String in un tipo di dato primitivo String
                        String laStringaPrimitiva = laStringa.toString();
                        System.out.println(laStringaPrimitiva); // Ciao Mondo
                        // Conversione di un tipo di dato primitivo String in un oggetto String
                        String laStringa = String.valueOf(laStringaPrimitiva);
                        System.out.println(laStringa); // Ciao Mondo
                    `}/>
                </li>
                <li><code className={'documentation-link'}>Boolean</code> - per il tipo di dato primitivo boolean
                    <JavaCode code={`
                        // Creazione di un primitive boolean
                        boolean ilBooleanPrimitivo = true;
                        // Creazione di un oggetto di tipo Boolean
                        Boolean ilBoolean = true;
                        System.out.println(ilBoolean); // true
                        // Conversione di un oggetto Boolean in un tipo di dato primitivo boolean
                        boolean ilBooleanPrimitivo = ilBoolean.booleanValue();
                        System.out.println(ilBooleanPrimitivo); // true
                        // Conversione di un tipo di dato primitivo boolean in un oggetto Boolean
                        Boolean ilBoolean = Boolean.valueOf(ilBooleanPrimitivo);
                    `}/>
                </li>
            </ul>
            <h3>Boxing, Unboxing e Autoboxing</h3>
            <p> Prima dell'introduzione dell'autoboxing (da java 1.5), per convertire un tipo di dato primitivo in un
                oggetto (e viceversa), dovevamo utilizzare il boxing (incapsulamento) e unboxing (estrazione).
                L'autoboxing è il processo automatico di conversione di un tipo di dato primitivo in un oggetto wrapper
                corrispondente e viceversa.
            </p>
            <h2>Boxing</h2>
            <p>Il boxing è il processo di incapsulamento di un tipo di dato primitivo in un oggetto wrapper
                corrispondente.
                In particolare:</p>
            <ul>
                <li>int -&gt; Integer
                    <JavaCode code={`
                        int lInteroPrimitivo = 10;
                        Integer lIntero = Integer.valueOf(lInteroPrimitivo);
                    `}/>
                </li>
                <li>double -&gt; Double
                    <JavaCode code={`
                        double ilDoublePrimitivo = 10.5;
                        Double ilDouble = Double.valueOf(ilDoublePrimitivo);
                    `}/>
                </li>
                <li>char -&gt; Character
                    <JavaCode code={`
                        char ilCaratterePrimitivo = 'a';
                        Character ilCarattere = Character.valueOf(ilCaratterePrimitivo);
                    `}/>
                </li>
                <li>boolean -&gt; Boolean
                    <JavaCode code={`
                        boolean ilBooleanPrimitivo = true;
                        Boolean ilBoolean = Boolean.valueOf(ilBooleanPrimitivo);
                    `}/>
                </li>
            </ul>
            <h2>Unboxing</h2>
            <p>L'unboxing è il processo di estrazione di un tipo di dato primitivo da un oggetto wrapper corrispondente.
                In particolare:</p>
            <ul>
                <li>Integer -&gt; int
                    <JavaCode code={`
                        Integer lIntero = 10;
                        int lInteroPrimitivo = lIntero.intValue();
                    `}/>
                </li>
                <li>Double -&gt; double
                    <JavaCode code={`
                        Double ilDouble = 10.5;
                        double ilDoublePrimitivo = ilDouble.doubleValue();
                    `}/>
                </li>
                <li>Character -&gt; char
                    <JavaCode code={`
                        Character ilCarattere = 'a';
                        char ilCaratterePrimitivo = ilCarattere.charValue();
                    `}/>
                </li>
                <li>Boolean -&gt; boolean
                    <JavaCode code={`
                        Boolean ilBoolean = true;
                        boolean ilBooleanPrimitivo = ilBoolean.booleanValue();
                    `}/>
                </li>
            </ul>
            <h2>Autoboxing</h2>
            <p>L'autoboxing è il processo automatico di conversione di un tipo di dato primitivo in un oggetto wrapper
                corrispondente e viceversa.
                In particolare:</p>
            <ul>
                <li>int -&gt; Integer
                    <JavaCode code={`
                        int lInteroPrimitivo = 10;
                        Integer lIntero = lInteroPrimitivo;
                    `}/>
                </li>
                <li>double -&gt; Double
                    <JavaCode code={`
                        double ilDoublePrimitivo = 10.5;
                        Double ilDouble = ilDoublePrimitivo;
                    `}/>
                </li>
                <li>char -&gt; Character
                    <JavaCode code={`
                        char ilCaratterePrimitivo = 'a';
                        Character ilCarattere = ilCaratterePrimitivo;
                    `}/>
                </li>
                <li>boolean -&gt; Boolean
                    <JavaCode code={`
                        boolean ilBooleanPrimitivo = true;
                        Boolean ilBoolean = ilBooleanPrimitivo;
                    `}/>
                </li>
            </ul>
            <h2>Confronto tra Class/Oggetti Wrapper e Tipi di Dati Primitivi</h2>
            <p>Esempi:</p>
            <JavaCode code={`
                // Integer vs int
                Integer lIntero = 10;
                int lInteroPrimitivo = 10;
                System.out.println(lIntero == lInteroPrimitivo); // true (grazie all'autoboxing -> unboxing)
                // Character vs char
                Character ilCarattere = 'a';
                char ilCaratterePrimitivo = 'a';
                System.out.println(ilCarattere == ilCaratterePrimitivo); // true 
                // String vs String
                String laStringa = "Ciao Mondo";
                String laStringaPrimitiva = "Ciao Mondo";
                System.out.println(laStringa == laStringaPrimitiva); // true 
                // Boolean vs boolean
                Boolean veroReference = true;
                boolean veroPrimitivo = true;
                System.out.println(veroReference == veroPrimitivo); // true
                // Double vs double
                Double ilDouble = 10.5;
                double ilDoublePrimitivo = 10.5;
                System.out.println(ilDouble == ilDoublePrimitivo); // true
            `}/>
            <h2>ArrayList</h2>
            <p>ArrayList è una classe di Java che implementa l'interfaccia List.
                ArrayList memorizza gli elementi in un array dinamico che può essere ridimensionato.
                ArrayList è simile agli array, ma fornisce metodi per manipolare la dimensione dell'array.
                Rispetto agli array che accettano come elementi solo tipi di dati primitivi, ArrayList può
                contenere solo reference.
            </p>
            <h3>Dichiarazione ArrayList</h3>
            <JavaCode code={`
                // Dichiarazione di un ArrayList di interi
                ArrayList<Integer>; numeri = new ArrayList<Integer>();
                // Dichiarazione di un ArrayList di stringhe
                ArrayList<String> nomi = new ArrayList<String>();
                // Dichiarazione di un ArrayList di interi
                ArrayList<int> numeri = new ArrayList<int>(); // Errore - ArrayList non accetta tipi di dato primitivi
            `}/>
            <h3>Inizializzazione ArrayList</h3>
            <JavaCode code={`
                // Inizializzazione di un ArrayList di interi
                ArrayList<Integer>t numeri = new ArrayList<Integer>();
                numeri.add(1);
                numeri.add(2);
                numeri.add(3);
                // Inizializzazione di un ArrayList di stringhe
                ArrayList<String> nomi = new ArrayList<String>();
                nomi.add("Alice");
                nomi.add("Bob");
                nomi.add("Charlie");
            `}/>
            <h3>Accesso Elementi ArrayList</h3>
            <JavaCode code={`
                // Accesso al primo elemento dell'ArrayList
                System.out.println(numeri.get(0)); // 1
                System.out.println(nomi.get(0)); // Alice
                // Accesso all'ultimo elemento dell'ArrayList
                System.out.println(numeri.get(numeri.size() - 1)); // 3
                System.out.println(nomi.get(nomi.size() - 1)); // Charlie
                // Accesso a tutti gli elementi dell'ArrayList
                for (int i = 0; i < numeri.size(); i++) {
                    System.out.println(numeri.get(i));
                }
            `}/>
            <h3>Modifica Elementi ArrayList</h3>
            <JavaCode code={`
                // Modifica del valore del secondo elemento dell'ArrayList
                numeri.set(1, 10);
                System.out.println(numeri.get(1)); // 10
                // Modifica del valore dell'ultimo elemento dell'ArrayList
                numeri.set(numeri.size() - 1, 50);
                System.out.println(numeri.get(numeri.size() - 1)); // 50
            `}/>
            <h3>Cancellazione Elementi ArrayList</h3>
            <JavaCode code={`
                // Rimozione di un elemento dall'ArrayList
                numeri.remove(1);
                System.out.println(numeri.get(1));  // 3
                System.out.println(numeri);         // [1, 3]
                // Rimozione di tutti gli elementi dall'ArrayList
                numeri.clear();
                System.out.println(numeri.size()); // 0
            `}/>
            <h3>Iterare su ArrayList</h3>
            <JavaCode code={`
                // Iterazione su tutti gli elementi dell'ArrayList
                for (int i = 0; i < numeri.size(); i++) {
                    System.out.println(numeri.get(i));
                }
                // Iterazione su tutti gli elementi dell'ArrayList
                for (Integer numero: numeri) {
                    System.out.println(numero);
                }
            `}/>
            <h3>ArrayList Multidimensionali</h3>
            <p>Un ArrayList multidimensionale è un ArrayList di ArrayList.
                Java supporta ArrayList multidimensionali di qualsiasi dimensione.
            </p>
            <h3>Esempio:</h3>
            <JavaCode code={`
                // Dichiarazione di un ArrayList bidimensionale
                ArrayList<ArrayList<String>> classi = new ArrayList<ArrayList<String>>();
                // Creazione di un ArrayList di stringhe
                ArrayList<String> classe1 = new ArrayList<String>();
                classe1.add("Mario");
                classe1.add("Luigi");
                classe1.add("Alessandro");
                ArrayList<String> classe2 = new ArrayList<String>();
                classe2.add("Alice");
                classe2.add("Bob");
                classe2.add("Charlie");
                classi.add(classe1);
                classi.add(classe2);
                System.out.println(classi.get(0).get(0)); // Mario
                System.out.println(classi.get(1).get(2)); // Charlie
                // Stampa di tutti gli elementi dell'ArrayList bidimensionale
                for (ArrayList<String> classe: classi) {
                    for (String studente: classe) {
                        System.out.print(studente, " ");
                    }
                    System.out.println();
                }
            `}/>
            <p>Output</p>
            <TerminalCode code={`Mario Luigi Alessandro\nAlice Bob Charlie`}/>
            <h2>Metodi</h2>
            <p>I metodi in Java sono blocchi di codice che eseguono una specifica funzione. Sono analoghi alla funzioni,
                ma sono così definiti poiché implementati all'interno di una classe. Come le funzioni anche i metodi
                sono utilizzati per organizzare il codice in unità riutilizzabili e per eseguire operazioni specifiche.
                In Java, un metodo è definito all'interno di una classe e può essere chiamato da altre parti del codice
                ed accettare parametri (valorizzati con gli argomenti passati dal chiamante il metodo stesso, i quali
                devono essere dello stesso tipo dei parametri dichiarati nel metodo) e restituire o meno un valore.
            </p>
            <h3>Sintassi Metodo</h3>
            <JavaCode code={`
                Modificatore di accesso - Tipo di ritorno - Nome del metodo (Parametri) {
                     Blocco di codice
                }
                
                // Esempio Stampa Stringa - Metodo pubblico che non restituisce nulla (void)
                public void saluta() {
                    System.out.println("Ciao Mondo!");
                }
                string saluto = saluta();       // Ciao Mondo!
                System.out.println(saluto);     // null (perché il metodo non restituisce nulla)
                
                // Esempio Somma - Funzione pubblica che restituisce un intero (int)
                public int somma(int a, int b) {
                    return a + b;
                }
                
                // Chiamata alla funzione Somma
                int risultatoSomma = somma(5, 10);
                System.out.println(risultatoSomma); // 15        
            `}/>
            <h3>Stesso Metodo con Diversi Parametri (diversa signature) - Overloaded Methods</h3>
            <p>Java supporta la possibilità di definire più metodi con lo stesso nome
                ma con diversi parametri (diversa signature). Ad esempio:</p>
            <JavaCode code={`
                // Metodo somma con due parametri interi
                public int somma(int a, int b) {
                    return a + b;
                }
                              
                // Metodo somma con tre parametri interi
                public int somma(int a, int b, int c) {
                    return a + b + c;
                }
                
                // Metodo somma con due parametri double
                public double somma(double a, double b) {
                    return a + b;
                }
                
                // Chiamata ai metodi somma
                int risultato1 = somma(5, 10);          // 15
                int risultato2 = somma(5, 10, 15);      // 30
                double risultato3 = somma(5.5, 10.5);   // 16.0
            `}/>
            <p> Come si può osservare dai risultati ottenuti, Java è in grado di distinguere i metodi da utilizzare in
                base al numero ed al tipo dei parametri passati alla funzione chiamata (nel nostro caso, la funzione
                somma).
            </p>
            <h2>OOP - Programmazione Orientata agli Oggetti</h2>
            <p>La programmazione orientata agli oggetti (OOP) è un paradigma di programmazione che si basa sul concetto
                di Classe ed Oggetti.
                Gli oggetti sono entità (reali o astratte del dominio che andiamo a modellare) che contengono dati (variabili) e metodi (funzioni) che operano sull'oggetto
                stesso.
                In Java, tutto è un oggetto, tranne i tipi di dati primitivi (int, char, boolean, ecc.).
                L'OOP in Java si basa su quattro principi fondamentali:</p>
            <ul>
                <li>Incapsulamento</li>
                <li>Ereditarietà</li>
                <li>Polimorfismo</li>
                <li>Abstract</li>
            </ul>
            <h3>Classe</h3>
            <p>Una classe è un modello che definisce le variabili e i metodi comuni a tutti gli oggetti di quella classe.
                In Java, una classe è definita con la parola chiave <code>class</code>.
            </p>
            <h3>Sintassi Classe</h3>
            <JavaCode code={`
                Modificatore di accesso class NomeClasse {
                    // Variabili di istanza
                    Tipo variabile1;
                    Tipo variabile2;
                    // Costruttore
                    public NomeClasse(Tipo parametro1, Tipo parametro2, ...) {
                        // Inizializzazione delle variabili di istanza
                        this.variabile1 = parametro1;
                        this.variabile2 = parametro2;
                        ...
                    }
                    // Metodi
                    public void metodo1() {
                        // Blocco di codice
                    }
                    public Tipo metodo2(Tipo parametro1, Tipo parametro2, ...) {
                        // Blocco di codice
                    }
                }
            `}/>
            <h3>Esempio Classe</h3>
            <JavaCode code={`
                // Definizione della classe Persona nel file Persona.java
                public class Persona {
                    // Variabili di istanza
                    String nome;
                    String cognome;
                    int eta;
                    // Costruttore della classe Persona (richiamato quando si crea un oggetto tramite la keyword new)
                    public Persona(String nome, String cognome, int eta) {
                        this.nome = nome;
                        this.cognome = cognome;
                        this.eta = eta;
                    }
                    // Metodi
                    public void saluta() {
                        System.out.println("Ciao, mi chiamo " + nome + " e ho " + eta + " anni.");
                    }
                }
            `}/>
            <h3>Oggetto</h3>
            <p>Un oggetto è un'istanza di una classe. In Java, un oggetto è creato con la parola chiave
                <code>new</code>.
                Un oggetto ha attributi (variabili di istanza) e metodi (funzioni).
            </p>
            <h3>Sintassi Oggetto</h3>
            <JavaCode code={`NomeClasse nomeOggetto = new NomeClasse(parametri);`}/>
            <h3>Esempio Oggetto</h3>
            <JavaCode code={`
                // Creazione di un oggetto Persona nel file Main.java
                public class Main {

                    public static void main(String[] args) {
                    
                        // Creazione di due oggetti Persona (istanze della classe Persona)
                        Persona persona1 = new Persona("Alice", "Rossi", 30);   // Prima Istanza
                        Persona persona2 = new Persona("Bob", "Verdi", 25);     // Seconda Istanza
                        
                        // Chiamata al metodo saluta delle due istanze della classe Persona
                        persona1.nome = "Alice";
                        persona1.cognome = "Rossi";
                        persona1.eta = 30;
                        persona2.nome = "Bob";
                        persona2.cognome = "Verdi";
                        persona2.eta = 25;
                        persona1.saluta(); // Ciao, mi chiamo Alice e ho 30 anni.
                        persona2.saluta(); // Ciao, mi chiamo Bob e ho 25 anni.
                    }
                }
            `}/>
            <h2>Scope delle Variabili</h2>
            <p>Lo scope di una variabile è la parte del programma in cui la variabile è accessibile.
                In Java, le variabili possono essere dichiarate in variabili locali, parametri di metodo,
                campi di classe e campi di istanza.
            </p>
            <ul>
                <li>Le variabili locali sono dichiarate all'interno di un blocco di codice e sono accessibili solo
                    all'interno di quel blocco.
                    <JavaCode code={`
                        public class Main {
                            public static void main(String[] args) {
                                // Variabile locale
                                int numero = 10;
                                System.out.println(numero); // 10
                            }
                            System.out.println(numero); // Errore - numero non è accessibile
                        }
                    `}/>
                </li>
                <li>I parametri di metodo sono variabili che vengono passate a un metodo e sono accessibili solo
                    all'interno di quel metodo.
                    <JavaCode code={`
                        public class Main {
                            public static void main(String[] args) {
                                // Metodo somma con due parametri interi
                                public int somma(int a, int b) {
                                    return a + b;
                                }
                                System.out.println(a); // Errore - a non è accessibile
                            }
                        }
                    `}/>
                </li>
                <li>I campi di classe sono variabili dichiarate all'interno di una classe e sono accessibili
                    da tutti i metodi della classe.
                    <JavaCode code={`
                        public class Main {
                            // Campo di classe
                            static int numero = 10;
                            public static void main(String[] args) {
                                System.out.println(numero); // 10
                            }
                        }
                    `}/>
                </li>
                <li>I campi di istanza sono variabili dichiarate all'interno di una classe e sono accessibili
                    da tutti i metodi della classe e da tutte le istanze della classe.
                    <JavaCode code={`
                        public class Main {
                            // Campo di istanza
                            int numero = 10;
                            public static void main(String[] args) {
                                Main main = new Main();
                                System.out.println(main.numero); // 10
                            }
                        }
                    `}/>
                    <p>La differenza principale tra i campi di classe e i campi di istanza è che i campi di classe è
                        condiviso da tutte le istanze della classe, mentre i campi di istanza sono specifici per ogni
                        istanza della classe.
                    </p>
                    <li>Le variabili globali sono variabili dichiarate all'interno di una classe e sono accessibili da
                        tutti i metodi della classe e da tutte le istanze della classe.
                        <JavaCode code={`
                            public class Main {
                                // Variabile globale
                                static int numero = 10;
                                public static void main(String[] args) {
                                    System.out.println(numero); // 10
                                }
                            }
                        `}/>
                        <p>La differenza principale tra i campi di classe e le variabili globali è che i campi di classe
                            sono associati a una specifica istanza della classe, mentre le variabili globali sono
                            associate alla classe stessa.
                        </p>
                    </li>
                </li>
            </ul>
            <h2>Overload del Costruttore</h2>
            <p>Java supporta la possibilità di definire più costruttori con lo stesso nome ma con diversi parametri.
                Questo è proprio il concetto di overload del costruttore.
                Esempio:
            </p>
            <JavaCode code={`
                // File Automobile.java
                public class Automobile {
                    String marca;
                    String modello;
                    Boolean ariaCondizionata;
                    
                    // Costruttore con due parametri
                    public Automobile(String marca, String modello) {
                        this.marca = marca;
                        this.modello = modello;
                    }
                    
                    // Costruttore con tre parametri
                    public Automobile(String marca, String modello, Boolean ariaCondizionata) {
                        this.marca = marca;
                        this.modello = modello;
                        this.ariaCondizionata = ariaCondizionata;
                    }
                }
            `}/>
            <p>Sarà quindi richiamato il costruttore specifico in base al numero di parametri passati al momento della
                creazione dell'oggetto tramite la keyword <code>new Automobile</code>
            </p>
            <h2>Override di un Metodo</h2>
            <p>Il metodo <code>toString()</code> restituisce una rappresentazione in forma di stringa dell'oggetto.
                In Java, il metodo <code>toString()</code> è definito nella classe Object e può essere sovrascritto
                nelle classi derivate, tramite l'annotazione <code>@Override</code>.
                Se non si sovrascrive il metodo <code>toString()</code>, verrà utilizzata l'implementazione di default
                della classe Object.
            </p>
            <h3>Esempio:</h3>
            <JavaCode code={`
                // Definizione della classe Automobile nel file Automobile.java
                public class Automobile {
                    String marca;
                    String modello;
                    Boolean ariaCondizionata;
                    
                    public Automobile(String marca, String modello, Boolean ariaCondizionata) {
                        this.marca = marca;
                        this.modello = modello;
                        this.ariaCondizionata = ariaCondizionata;
                    }
                    
                    @Override
                    public String toString() {
                        return "Automobile{" +
                                "marca='" + this.marca + '\'' +
                                ", modello='" + this.modello + '\'' +
                                ", ariaCondizionata=" + this.ariaCondizionata +
                                '}';
                    }
                }
                // Creazione di un oggetto Automobile nel file Main.java
                public class Main {
                    public static void main(String[] args) {
                        Automobile automobile = new Automobile("Fiat", "500", true);
                        // Stampa dell'oggetto Automobile senza sovrascrivere il metodo toString()
                        System.out.println(automobile); // Automobile@1b6d3586
                        // Stampa dell'oggetto Automobile sovrascrivendo il metodo toString()
                        System.out.println(automobile); 
                        // Automobile{marca='Fiat', modello='500', ariaCondizionata=true}
                    }
                }
            `}/>
            <h2>Array di Oggetti</h2>
            <p>Un array di oggetti è un array di riferimenti a oggetti.
                Esempio:
            </p>
            <JavaCode code={`
                // Creazione di un array di oggetti Automobile nel file Main.java
                public class Main {
                    public static void main(String[] args) {
                        // Creazione di un array di 3 oggetti Automobile
                        Automobile[] automobili = new Automobile[3];            
                        automobili[0] = new Automobile("Fiat", "500", true);    
                        automobili[1] = new Automobile("Ford", "Focus", false);
                        automobili[2] = new Automobile("Audi", "A3", true);
                        // Stampa degli oggetti Automobile
                        for (Automobile automobile: automobili) {
                            System.out.println(automobile);
                        }
                    }
                }
                 // Creazione alternativa di un array di 3 oggetti Automobile nel file Main.java
                public class Main {
                    public static void main(String[] args) {
                        // Creazione di un array di 3 oggetti Automobile
                        Automobile automobile1 = new Automobile("Fiat", "500", true);
                        Automobile automobile2 = new Automobile("Ford", "Focus", false);
                        Automobile automobile3 = new Automobile("Audi", "A3", true);
                        Automobile[] automobili = {automobile1, automobile2, automobile3};
                    }
                }
            `}/>
            <h3>Output:</h3>
            <TerminalCode code={`
                Automobile{marca='Fiat', modello='500', ariaCondizionata=true}
                Automobile{marca='Ford', modello='Focus', ariaCondizionata=false}
                Automobile{marca='Audi', modello='A3', ariaCondizionata=true}
            `}/>
            <h2>Oggetti passati come Parametri</h2>
            <p>Gli oggetti possono essere passati come parametri ai metodi.</p>
            <h3>Esempio:</h3>
            <JavaCode code={`
                // Definizione della classe Automobile nel file Automobile.java
                public class Automobile {
                    String marca;
                    String modello;
                         
                    public Automobile(String marca, String modello) {
                        this.marca = marca;
                        this.modello = modello;
                    }
                }
                // Creazione di un oggetto Automobile nel file Main.java
                public class Main {
                    public static void main(String[] args) {
                        Automobile automobile = new Automobile("Fiat", "500");
                        // Chiamata al metodo stampaAutomobile passando l'oggetto Automobile come parametro
                        stampaAutomobile(automobile);
                    }
                    // Metodo stampaAutomobile che accetta un oggetto Automobile come parametro
                    public static void stampaAutomobile(Automobile automobile) {
                        System.out.println(automobile.marca);       // Fiat
                        System.out.println(automobile.modello);     // 500
                    }
                }
            `}/>
            <h2>Keywords final e static</h2>
            <p>Le keywords <code>final</code> e <code>static</code> sono utilizzate per definire costanti e metodi
                statici. Nello specifico:
            </p>
            <ul>
                <li>La keyword <code>final</code> viene utilizzata per definire costanti, variabili, metodi e classi
                    che non possono essere modificati o estesi.
                    Ad esempio:
                    <JavaCode code={`
                        public class Main {
                            // Costante
                            final int COSTANTE = 10;
                            COSTANTE = 20; // Errore - COSTANTE che non può essere riassegnata
                            // Metodo final
                            final void metodo() {
                                // Blocco di codice
                            }
                            // Classe final
                            final class Classe {
                                // Blocco di codice
                            }
                        }
                    `}/>
                </li>
                <li>La keyword <code>static</code> viene invece utilizzata per definire metodi e variabili che
                    appartengono alla classe e non alle istanze della classe, quindi per tutte le istanze saranno
                    univoci. Ad esempio:
                    <JavaCode code={`
                        // Classe Persona nel file Persona.java
                        public class Persona {
                            String nome;
                            static int numPersone = 0;
                            public Persona(String nome) {
                                this.nome = nome;
                                numPersone++;
                            }
                        }
                        
                        // Creazione di oggetti Persona nel file Main.java
                        public class Main {
                            public static void main(String[] args) {
                                // Creazione di due oggetti Persona
                                Persona persona1 = new Persona("Alice");
                                Persona persona2 = new Persona("Bob");
                                // Stampa del numero di persone (variabile condivisa da tutte le istanze della classe)
                                System.out.println(Persona.numPersone); // 2
                            }
                        }
                    `}/>
                    <h2>Ereditarietà (Inheritance)</h2>
                    <p>L'ereditarietà è un meccanismo in cui una nuova classe (sottoclasse) eredita i campi e i metodi
                        di una classe esistente (superclasse).
                        In Java, una classe può ereditare da una sola classe padre, ma può essere estesa da più classi
                        figlie.
                        La classe figlia eredita i campi e i metodi della classe padre e può aggiungere nuovi campi e
                        metodi.
                    </p>
                    <h3>Sintassi Ereditarietà</h3>
                    <JavaCode code={`
                        class NomeClassePadre {
                            // Variabili di istanza
                            Tipo variabile1;
                            Tipo variabile2;
                            // Costruttore
                            public NomeClassePadre(Tipo parametro1, Tipo parametro2, ...) {
                                // Inizializzazione delle variabili di istanza
                                this.variabile1 = parametro1;
                                this.variabile2 = parametro2;
                                ...
                            }
                            // Metodi
                            public void metodo1() {
                                // Blocco di codice
                            }
                            public Tipo metodo2(Tipo parametro1, Tipo parametro2, ...) {
                                // Blocco di codice
                            }
                        }
                    
                        class NomeClasseFiglia extends NomeClassePadre {
                            // Eventuali Attributi Aggiuntivi
                            Tipo variabile3;

                            // Costruttore
                            NomeClasseFiglia(Tipo parametro1, Tipo parametro2, Tipo parametro3...) {
                                // Chiamata al costruttore della classe padre
                                super(parametro1, parametro2, ...); 
                                // Inizializzazione Attributi della Classe Figlia
                                this.variabile3 = parametro1;
                                ...
                            }
                            // Override dei Metodi della Classe Padre
                            @Override
                            public void metodo1() {
                                // Blocco di codice (override del metodo della classe padre)
                            }
                            @Override
                            public Tipo metodo2(Tipo parametro1, Tipo parametro2, ...) {
                                // Blocco di codice (override del metodo della classe padre)
                            }
                            // Eventuali Metodi Aggiuntivi
                            public void metodo3() {
                                // Blocco di codice
                            }
                        }               
                    `}/>
                    <h3>Esempio:</h3>
                    <JavaCode code={`
                        // Classe Persona nel file Persona.java
                        public class Persona {
                            String nome;
                            int eta;
                            public Persona(String nome, int eta) {
                                this.nome = nome;
                                this.eta = eta;
                            }
                            public void saluta() {
                                System.out.println("Mi chiamo " + this.nome + " e ho " + this.eta + " anni.");
                            }
                        }
                        
                        // Classe Studente (che estende Persona) nel file Studente.java
                        public class Studente extends Persona {
                            String corso;
                            // Costruttore della classe Studente
                            public Studente(String nome, int eta, String corso) {
                                super(nome, eta);   // Chiamata al costruttore della classe padre
                                this.corso = corso;
                            }
                            // Override del metodo saluta della classe Persona
                            @Override 
                            public void saluta() {
                                System.out.println("Frequento il corso di " + this.corso + ".");
                            }
                            // Metodo aggiuntivo
                            public void salutaCompagni() {
                                System.out.println("Ciao compagni!");
                            }
                        }
                    
                        // Classe Insegnante (che estende Persona) nel file Insegnante.java
                        public class Insegnante extends Persona {
                            String materia;
                            // Costruttore della classe Insegnante
                            public Insegnante(String nome, int eta, String materia) {
                                super(nome, eta);       // Chiamata al costruttore della classe padre
                                this.materia = materia;
                            }
                            // Override del metodo saluta
                            public void saluta() {
                                System.out.println("Insegno " + this.materia + ".");
                            }
                            // Metodo aggiuntivo
                            public void salutaStudenti() {
                                System.out.println("Buongiorno studenti!");
                            }
                        }
                        
                        // Creazione di oggetti Persona, Studente e Insegnante nel file Main.java
                        public class Main {
                        
                            public static void main(String[] args) {
                                // Creazione di tre istanze (persona, studente, insegnante)
                                Persona persona = new Persona("Alice", 30);
                                Studente studente = new Studente("Bob", 25, "Informatica");
                                Insegnante insegnante = new Insegnante("Charlie", 40, "Programmazione");
                                
                                // Chiamata al metodo saluta delle tre istanze
                                persona.saluta();               // Mi chiamo Alice e ho 30 anni.
                                studente.saluta();              // Frequento il corso di Informatica.
                                insegnante.saluta();            // Insegno Programmazione.
                                
                                // Chiamata ai metodi aggiuntivi
                                studente.salutaCompagni();      // Ciao compagni!
                                insegnante.salutaStudenti();    // Buongiorno studenti!
                            }
                        }
                    `}/>

                </li>
            </ul>
            <h2>Classi Astratte</h2>
            <p>Una classe astratta è una classe che non può essere istanziata, non può cioè istanziare nuovo oggetti,
                ma può essere solo ereditata.
                In Java, una classe astratta è definita con la parola chiave <code>abstract</code>.
                Una classe astratta può contenere metodi astratti (senza corpo) che devono essere implementati
                dalle classi derivate.
            </p>
            <h3>Sintassi Classe Astratta</h3>
            <JavaCode code={`
                public abstract class NomeClasse {
                    // Variabili di istanza
                    Tipo variabile1;
                    // Costruttore
                    public NomeClasse(Tipo parametro1, ...) {
                        // Inizializzazione delle variabili di istanza
                        this.variabile1 = parametro1;
                        ...
                    }
                    // Metodo astratto
                    public abstract void metodo1();
                    public abstract Tipo metodo2(Tipo parametro1, ...);
                }
            `}/>
            <h3>Esempio:</h3>
            // Veicolo è una classe astratta
            <JavaCode code={`
                public abstract class Veicolo {
                    // Variabili di istanza
                    String marca;
                    String modello;
                    int numeroRuote;
                    // Costruttore
                    public Veicolo(String marca, String modello, int numeroRuote) {
                        this.marca = marca;
                        this.modello = modello;
                        this.numeroRuote = numeroRuote;
                    }
                    // Metodo astratto
                    public abstract void accelera();
                    public abstract void decelera();
                }
                
                // Classe Automobile che estende Veicolo
                public class Automobile extends Veicolo {
                    // Costruttore
                    public Automobile(String marca, String modello, int numeroRuote) {
                        super(marca, modello, numeroRuote);
                    }
                    // Implementazione dei metodi astratti
                    @Override
                    public void accelera() {
                        System.out.println("L'automobile accelera.");
                    }
                    @Override
                    public void decelera() {
                        System.out.println("L'automobile decelera.");
                    }
                }
                // Classe Moto che estende Veicolo
                public class Moto extends Veicolo {
                    // Costruttore
                    public Moto(String marca, String modello, int numeroRuote) {
                        super(marca, modello, numeroRuote);
                    }
                    // Implementazione dei metodi astratti
                    @Override
                    public void accelera() {
                        System.out.println("La moto accelera.");
                    }
                    @Override
                    public void decelera() {
                        System.out.println("La moto decelera.");
                    }
                }
                
                // Creazione di oggetti Automobile e Moto nel file Main.java
                public class Main {
                    public static void main(String[] args) {
                        // Creazione di un oggetto Automobile
                        Automobile automobile = new Automobile("Fiat", "500", 4);
                        automobile.accelera();  // L'automobile accelera.
                        automobile.decelera();  // L'automobile decelera.
                        // Creazione di un oggetto Moto
                        Moto moto = new Moto("Yamaha", "R1", 2);
                        moto.accelera();        // La moto accelera.
                        moto.decelera();        // La moto decelera.
                    }
                }
            `}/>
        </div>
    );
};

export default Java;