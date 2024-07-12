import React from 'react';
import TerminalCode from "../../../../components/Code/TerminalCode/TerminalCode.tsx";
import JavaCode from "../../../../components/Code/Java/JavaCode.tsx";


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
            <h2>Classe <code className={'documentation-link'}>Math</code> </h2>
            <p>La classe Math contiene attributi e metodi per eseguire operazioni matematiche come radice quadrata, potenza
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
                <li>for-enhanced/for-each (ciclo determinato - il numero di iterazioni dipende dalla lunghezza dell'array)
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
        </div>
    );
};

export default Java;