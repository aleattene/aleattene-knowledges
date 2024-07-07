import React from 'react';
import './Php.css'
import PhpCode from "../../../../components/Code/PhpCode/PhpCode.tsx";


const Php: React.FC = () => {
    return (
        <div>
            <h1>PHP</h1>
            <h2>Installazione XAMPP</h2>
            <p>XAMPP è un pacchetto software gratuito e open source che contiene i seguenti componenti:</p>
            <ul>
                <li> X - Cross-platform</li>
                <li> A - Apache</li>
                <li> M - MySQL</li>
                <li> P - PHP</li>
                <li> P - Perl</li>
            </ul>
            <p>Per installare XAMPP, seguire i seguenti passaggi:</p>
            <ol>
                <li>Andare sul sito <a href="https://www.apachefriends.org/it/index.html">https://www.apachefriends.org/it/index.html</a></li>
                <li>Scaricare la versione di XAMPP per il proprio sistema operativo</li>
                <li>Installare XAMPP</li>
                <li>Avviare XAMPP</li>
                <li>Aprire il browser e digitare <code>localhost</code> per verificare che XAMPP sia stato installato correttamente</li>
            </ol>
            <h2>Dichiarazione di una variabile</h2>
            <PhpCode code={`$nome_variabile = valore;`}/>
            <h2>Implementazione codice PHP in una pagina HTML</h2>
            <PhpCode code={`
                <!DOCTYPE html>
                ....
                <?php
                    // Codice PHP
                ?>
            `}/>
            <h2>Concatenazione Stringhe</h2>
            <PhpCode code={`
                <?php echo "Stampo la stringa" ?>
                
                <?= "Stampo la stringa shorthand" ?>
                
                $nome = "Mario"
                $cognome = "Rossi"
                
                echo "Mi chiamo" . $nome . $cognome
            `}/>
        </div>
    );
};

export default Php;