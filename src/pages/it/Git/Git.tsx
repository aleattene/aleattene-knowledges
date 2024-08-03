import React from 'react';
import TerminalCode from "../../../components/Code/TerminalCode/TerminalCode.tsx";

// INIZIALIZZAZIONE
const createEmptyLocalRepository: string = `git init`;
const cloneRepository: string = `git clone url_repository.git`;
// UPDATE
const getUpdatesNoApply: string = `git fetch`;
const getUpdatesApply: string = `git pull`;
// COMMIT
const addFileToStage: string = `git add path_file`;
const commitChanges: string = `git commit -m "message"`;
const commitChangesAll: string = `git commit -am "message"`;
const commitAmend: string = `git commit --amend -m "message"`;
// STATUS
const status: string = `git status`;
// PUSH
const push: string = `git push`;
// BRANCH
const createBranch: string = `git branch branch_name`;
const switchBranch: string = `git checkout branch_name`;
const createSwitchBranch: string = `git checkout -b branch_name`;
const mergeBranch: string = `git merge branch_name`;
const deleteBranch: string = `git branch -d branch_name`;
const branchList: string = `git branch`;
const branchListRemote: string = `git branch -r`;

// HISTORY
const history: string = `git log`;
const historyGraph: string = `git log --graph --oneline --all`;
// DIFF
const diff: string = `git diff path_file`;
const diffCached: string = `git diff --cached path_file`;
const diffCommits: string = `git diff commit1 commit2`;



const Git: React.FC = () => {
    return (
        <div>
            <h1>Git</h1>
            <h3>Creazione di un Nuovo Repository Locale</h3>
            <TerminalCode code={createEmptyLocalRepository}/>
            <h3>Clonare in Locale un Repository Remoto</h3>
            <TerminalCode code={cloneRepository}/>

            <h3>Verifica se ci sono aggiornamenti Remoti</h3>
            <TerminalCode code={getUpdatesNoApply}/>
            <h3>Applica Localmente gli Aggiornamenti Remoti</h3>
            <TerminalCode code={getUpdatesApply}/>
            <h3>Aggiunta File(s) all'area di Staging</h3>
            <TerminalCode code={addFileToStage}/>
            <h3>Commit delle modifiche (snapshot stato corrente progetto)</h3>
            <TerminalCode code={commitChanges}/>
            <TerminalCode code={commitChangesAll}/>
            <h3>Aggiorna/Modifica ultimo Commit</h3>
            <TerminalCode code={commitAmend}/>
            <h3>Visualizza Stato Corrente delle Working Dir e Staging Area</h3>
            <TerminalCode code={status}/>
            <h3>Invia le Modifiche al Repository Remoto</h3>
            <TerminalCode code={push}/>
            <h3>Crea un Nuovo Branch Locale</h3>
            <TerminalCode code={createBranch}/>
            <h3>Spostarsi da un Branch Locale ad un altro</h3>
            <TerminalCode code={switchBranch}/>
            <h3>Creare e Spostarsi in un Nuovo Branch Locale</h3>
            <TerminalCode code={createSwitchBranch}/>
            <h3>Fondere (merge) un Branch Locale nel Branch Locale corrente</h3>
            <TerminalCode code={mergeBranch}/>
            <h3>Cancellare un Branch Locale</h3>
            <TerminalCode code={deleteBranch}/>
            <h3>Visualizzare l'elenco dei Branch Locali</h3>
            <TerminalCode code={branchList}/>
            <h3>Visualizzare l'elenco dei Branch Remoti</h3>
            <TerminalCode code={branchListRemote}/>

            <h3>Visualizza la History dei Commit</h3>
            <TerminalCode code={history}/>
            <h3>Visualizza la History dei Commit sotto forma di Grafo</h3>
            <TerminalCode code={historyGraph}/>

            <h3>Visualizza la differenza tra Working Dir e Staging Area</h3>
            <TerminalCode code={diff}/>
            <TerminalCode code={diffCached}/>
            <h3>Visualizza la differenza tra 2 commit</h3>
            <TerminalCode code={diffCommits}/>

            <h2>Alias</h2>
            <p>Gli alias sono dei comandi personalizzati che consentono la creazione di abbreviazioni/sinonimi per
                comandi Git frequentemente utilizzati più lunghi e complessi.
                Il loro uso diventa quindi particolarmente utile per velocizzare il lavoro quotidiano.
                Per creare un alias è sufficiente aggiungere la seguente riga al file <code>.gitconfig</code> presente
                nella home directory:
            </p>
            <TerminalCode code={`
                [alias]
                    alias_name = command
            `}/>
            <p>che in maniera più specifica:</p>
            <TerminalCode code={`
                [alias]
                    co = checkout
                    ci = commit
                    br = branch
                    st = status
            `}/>
            <p>Quindi una volta che andremo ad utilizzare Git potremo scrivere:</p>
            <TerminalCode code={`
                // git checkout branch_name
                git co branch_name 
                
                // git commit -m "message"
                git ci -m "message"
                
                // git branch branch_name
                git br branch_name
                
                // git status
                git st 
            `}/>
        </div>
    );
};

export default Git;
