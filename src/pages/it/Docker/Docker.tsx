import React from 'react';
import TerminalCode from "../../../components/Code/TerminalCode/TerminalCode.tsx";

const Docker: React.FC = () => {
    return (
        <div>
            <h1>Docker</h1>
            <h2>Immagini</h2>
            <TerminalCode code={`
                docker images ls # Mostra le immagini presenti nel sistema
                docker image rm image_id # Rimuove l'immagine con l'id specificato
                docker build -t image_name . # Crea un'immagine a partire dal Dockerfile presente nella directory corrente
                docker commit container_id image_name # Crea un'immagine a partire dal container con l'id specificato
                docker import url image_name # Crea un'immagine a partire da un'immagine remota
                docker history image_id # Mostra la cronologia delle modifiche dell'immagine con l'id specificato
            `}/>
            <h2>Container</h2>
            <TerminalCode code={`
                docker ps # Mostra i container in esecuzione
                docker ps -a # Mostra tutti i container
                docker run -it image_name # Crea un container a partire dall'immagine con il nome specificato
                docker start container_id # Avvia il container con l'id specificato
                docker pause container_id # Mette in pausa il container con l'id specificato
                docker stop container_id # Ferma il container con l'id specificato
                docker restart container_id # Riavvia il container con l'id specificato
                docker wait container_id # Blocca il container con l'id specificato
                docker kill container_id # Ferma il container con il id specificato
                docker rm container_id # Rimuove il container con l'id specificato
                docker exec -it container_id bash # Esegue un comando all'interno del container con il id specificato
                docker logs container_id # Mostra i log del container con il id specificato
                docker prune # Rimuove tutti i container non in esecuzione
            `}/>
            <h2>Volumi</h2>
            <TerminalCode code={`
                docker volume ls # Mostra i volumi presenti nel sistema
                docker volume create volume_name # Crea un volume
                docker volume rm volume_name # Rimuove il volume con il nome specificato
                docker volume inspect volume_name # Mostra i dettagli del volume con il nome specificato
            `}/>
            <h2>Servizi</h2>
            <TerminalCode code={`
                docker service ls # Mostra i servizi presenti nel sistema
                docker service ps service_name # Mostra i container del servizio con il nome specificato
                docker service create --name service_name image_name # Crea un servizio a partire dall'immagine con il nome specificato
                docker service update service_name --replicas 5 # Aggiorna il numero di istanze del servizio con il nome specificato a 5
                docker service scale service_name=5 # Scala il servizio con il nome specificato a 5 istanze
                docker service rm service_name # Rimuove il servizio con il nome specificato
                docker service inspect service_name # Mostra i dettagli del servizio con il nome specificato
                docker service logs service_name # Mostra i log del servizio con il nome specificato
                docker stack services # Mostra i servizi dello stack
            `}/>
            <h2>Registri</h2>
            <TerminalCode code={`
                docker login # Effettua il login al registro
                docker logout # Effettua il logout dal registro
                docker search image_name # Cerca l'immagine con il nome specificato nel registro
                docker pull image_name # Scarica l'immagine con il nome specificato dal registro
                docker push image_name # Carica l'immagine con il nome specificato nel registro
                docker tag image_name new_image_name # Crea un tag per l'immagine con il nome specificato
            `}/>
            <h2>Rete</h2>
            <TerminalCode code={`
                docker network ls # Mostra le reti presenti nel sistema
                docker network create network_name # Crea una rete
                docker network rm network_name # Rimuove la rete con il nome specificato
                docker network connect network_name container_id # Connette il container con l'id specificato alla rete con il nome specificato
                docker network disconnect network_name container_id # Disconnette il container con l'id specificato dalla rete con il nome specificato
                docker network inspect network_name # Mostra i dettagli della rete con il nome specificato
            `}/>

        </div>
    );
};

export default Docker;
