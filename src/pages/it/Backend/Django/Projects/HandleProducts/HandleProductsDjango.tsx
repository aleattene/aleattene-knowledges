import React from 'react';
import PythonCode from "../../../../../../components/Code/PythonCode/PythonCode.tsx";


const HandleProductsDjango: React.FC = () => {
    return (
        <>
            <h1>Progetti Didattici Django</h1>
            <h2>01 - Gestione Prodotti</h2>
            <p>Partiamo con la configurazione del file settings.py:</p>
            <PythonCode code={`
                # settings.py
                
                # Configurazione database
                DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.sqlite3',
                        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'), 
                    }
                }
                
                # Configurazione variabili ambiente
                SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')
                
                # Configurazione sessioni
                SESSION_ENGINE = 'django.contrib.sessions.backends.db'
                SESSION_COOCKIE_SECURE = True
                
                # Configurazione sicurezza
                SECURE_BROWSER_XSS_FILTER = True
                CSRF_COOKIE_SECURE = True
                
                # Configurazione file statici
                STATIC_URL = '/static/'
                STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
                STATICFILES_DIRS = [
                    os.path.join(BASE_DIR, 'static')
                ]
            `}/>
            <p>Passiamo poi al file urls.py:</p>
            <PythonCode code={`
                # urls.py
                
                from django.urls import path
                from .views import HomePageView, ProductDetailView    
                
                urlpatterns = [
                    # URL per la home page
                    path('', HomePageView.as_view(), name='home'),
                    # URL per i dettagli di un prodotto specifico
                    path('product/<\int:pk>/', ProductDetailView.as_view(), name='product_detail'),
                ]
            `}/>
            <p>Naturalmente serve anche un file models.py:</p>
            <PythonCode code={`
                # models.py
                
                from django.db import models
                
                # definizione del modello che rappresenta un prodotto nel database
                class Product(models.Model):
                    title = models.CharField(max_length=100)
                    description = models.TextField()
            `}/>

            <p>ed un file views.py:</p>
            <PythonCode code={`
                # views.py
                
                from django.views.generic import ListView, DetailView
                from .models import Product
                
                # Vista che elenca tutti i prodotti sulla homepage
                class HomePageView(ListView):
                    model = Product
                    template_name = 'home.html'
                    context_object_name = 'products'
                               
                # Vista che mostra i dettagli di un prodotto specifico                    
                class ProductDetailView(DetailView):
                    model = Product
                    template_name = 'product_detail.html'
                    context_object_name = 'product'
            `}/>
            <p>Concludiamo con un file forms.py:</p>
            <PythonCode code={`
                # forms.py
                
                from django import forms
                from .models import Product
                
                # Form per la creazione di un nuovo prodotto (o per la modifica di uno esistente)
                class ProductForm(forms.ModelForm):
                    class Meta:
                        model = Product
                        fields = ['title', 'description']
            `}/>
            <p>In sintesi, per il momento abbiamo:
                <ul>
                    <li>configurato il file settings.py con le impostazioni principali del progetto</li>
                    <li>configurato il modello per rappresentare i prodotti</li>
                    <li>definito le viste per visualizzare i prodotti</li>
                    <li>definito un modulo pr gestire i form associati ai prodotti</li>
                    <li>configurato le URL per accedere alle rispettive viste</li>
                </ul>
            </p>
            <p>Oltre a questi file è comunque bene ricordare che esistono altri file/cartelle essenziali per il funzionamento
                di un progetto Django, come ad esempio:
                <ul>
                    <li>admin.py: per la registrazione dei modelli nel pannello di amministrazione (la cui interfaccia
                        è personalizzabile sia in termini di aspetto che di comportamento)
                    </li>
                    <li>apps.py: per la configurazione delle impostazioni dell'applicazione, come ad esempio il nome
                        visualizzato nel pannello di amministrazione
                    </li>
                    <li>templates: contenente i file dei template HTML utilizzati per generare le pagine web
                        dell'applicazione (ricordando che questi file possono anche essere organizzati in sottocartelle
                        per facilitarne gestione e manutenzione)
                    </li>
                    <li>migrationes: contenente i file necessari per la migrazione del database; si tratta di file
                        Python generati automaticamente da Django che descrivono i cambiamenti apportati ai modelli del
                        database nel tempo
                    </li>
                    <li>static: contenente i file statici (come ad esempio fogli di stile CSS, immagini, script
                        JavaScript) utilizzati dall'applicazione e serviti direttamente dal server web senza alcuna
                        elaborazione da parte di Django
                    </li>
                    <li>tests: contenente i file per i test unitari e funzionali (ricordando in merito che scrivere test
                        è essenziale per garantire che l'applicazione funzioni correttamente e rimanga stabile nel
                        tempo)
                    </li>
                    <li>media: una volta configurata correttamente l'archiviazione in questa cartella, essa conterrà
                        i file multimediali caricati dagli utenti (immagini, video, documenti, ecc.)
                    </li>
                    <li>middleware personalizzato: puù essere necessaria la sua creazione qualora si vogliano
                        implementare funzionalità aggiuntive per gestire le richieste o le risposte HTTP
                    </li>
                    <li>signal: utilizzati per eseguire determinate azioni in risposta a determinati eventi specifici
                        nell'applicazione (ad esempio in caso di creazione e salvataggio nel database di un nuovo
                        utente)
                    </li>
                </ul>
            </p>
            <p>E per concludere potrebbero anche essere necessario seguire policy del team di lavoro, e configurazioni
                aggiuntive:
                <ul>
                    <li>linter: per garantire la correttezza, la coerenza e la codifica uniforme del codice</li>
                    <li>documentazione: è pratica comune documentare il codice per renderlo più comprensibile e
                        manutenibile nel tempo, magari facendo anche uso di strumenti come Sphinx
                    </li>
                    <li>file di configurazione del progetto: a seconda dell'ambiente di sviluppo, potrebbero essere
                        necessari anche file di configurazione aggiuntivi per strumento quali ad esempio Docker,
                        Docker Compose o Kubernetes
                    </li>
                    <li>file di configurazione per il server web: potrebbero essere necessari qualora l'applicazione
                        Django venga distribuita su un server web come Nginx o Apache
                    </li>
                    <li>file di configurazione per i servizi esterni: potrebbero essere necessari qualora l'applicazione
                        dipenda da database remoti, servizi di memorizzazione cloud, API di terze parti, ecc.
                    </li>
                    <li>risorse di configurazioni aggiuntive: qualora il progetto preveda ad esempio di utilizzare
                        file di traduzione per l'internazionalizzazione dell'applicazione, file di configurazione
                        per la sicurezza, ecc.
                    </li>
                </ul>
            </p>
        </>
    );
};

export default HandleProductsDjango;