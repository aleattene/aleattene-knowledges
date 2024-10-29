import React, { useEffect, useState } from 'react';

// Definisci il tipo per il commit
interface Commit {
    sha: string;
    commit: {
        message: string;
        date: string
        author: {
            name: string;
            date: string;
        };
    };
    author?: {
        login: string;
        avatar_url: string;
    };
}

const History: React.FC = () => {
    const [commits, setCommits] = useState<Commit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);

    const numCommitsPage = 10;

    useEffect(() => {
        // const GITHUB_PUBLIC_ACCESS_TOKEN = import.meta.env.GITHUB_PUBLIC_ACCESS_TOKEN;
        // Funzione per recuperare i commit
        const fetchCommits = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/aleattene/aleattene-knowledges/commits?per_page=${numCommitsPage}&page=${page}\n`
                    // {
                    //     headers: {
                    //         Authorization: `Bearer ${GITHUB_PUBLIC_ACESS_TOCKEN}`,
                    //     },
                    // }
                );

                if (!response.ok) {
                    throw new Error(`Errore: ${response.status}`);
                }

                const data: Commit[] = await response.json();
                setCommits(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCommits();
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        if (commits.length === numCommitsPage) {
            setPage(page + 1);
        }

    };


    if (loading) return <p>Caricamento in corso...</p>;
    if (error) return <p>Errore nel recupero dei dati: {error}</p>;

    return (
        <div>
            <h2>Cronologia Aggiornamenti</h2>
            <ul>
                {commits.map((commit) => (
                    <li key={commit.sha}>
                        <p>
                            <strong>{new Date(commit.commit.author.date).toLocaleDateString()} </strong>
                            - {commit.commit.message}
                        </p>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={handlePrevPage} disabled={page === 1}>Pagina Precedente</button>
                <span>Pagina {page}</span>
                <button onClick={handleNextPage} disabled={commits.length < numCommitsPage }>Pagina successiva</button>
            </div>
        </div>
    );
};

export default History;
