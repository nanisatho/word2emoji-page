---
title: Informativa sulla Privacy
lastUpdated: 20 dicembre 2025
---

# Informativa sulla Privacy

**Ultimo aggiornamento: 20 dicembre 2025**

Questa Informativa sulla Privacy descrive come Nathalia Thomas @ Inventa Labs 💡 ("noi", "nostro" o "ci") raccoglie, utilizza e protegge le tue informazioni quando utilizzi l'applicazione mobile Emojify Text (l'"App").

## 1. Informazioni che Raccolgiamo

### 1.1 Contenuti Generati dall'Utente

Quando utilizzi Emojify Text, raccogliamo le seguenti informazioni:

- **Input di Testo:** Il testo che inserisci nell'App per convertire in emoji (limitato a un massimo di 1.000 caratteri)
- **Risultati Emoji:** I suggerimenti di emoji generati in risposta al tuo input (fino a 5 opzioni per richiesta)
- **Timestamp:** La data e l'ora in cui generi conversioni di emoji
- **Configurazione App:** Impostazioni opzionali come preferenza linguistica, numero di emoji, tavolozza colori e versione iOS per compatibilità

### 1.2 Informazioni Raccolte Automaticamente

L'App può raccogliere automaticamente determinate informazioni sul tuo dispositivo e sull'utilizzo, inclusi:

- Informazioni sul dispositivo (modello, versione del sistema operativo)
- Statistiche di utilizzo dell'App
- Log degli errori e rapporti di crash
- Token App Check per verifica di sicurezza (Firebase App Check)
- Dati di limitazione della velocità per prevenire abusi (conteggio richieste e timestamp)
- Dati relativi alla pubblicità (identificatori del dispositivo inclusi IDFA se consentito, indirizzo IP, dati di interazione con gli annunci) raccolti da Google AdMob per la pubblicazione di annunci e scopi di misurazione

## 2. Come Utilizziamo le Tue Informazioni

Utilizziamo le informazioni che raccogliamo per:

- Fornire la funzionalità principale dell'App (convertire testo in suggerimenti di emoji)
- Memorizzare la cronologia delle conversioni localmente sul tuo dispositivo
- Migliorare le prestazioni e l'esperienza utente dell'App
- Diagnosticare e risolvere problemi tecnici

## 3. Archiviazione dei Dati

### 3.1 Archiviazione Locale

La tua cronologia di conversione (input di testo, risultati emoji e timestamp) viene memorizzata localmente sul tuo dispositivo utilizzando iOS UserDefaults. Questi dati:

- Rimangono sul tuo dispositivo e non vengono trasmessi ai nostri server
- Possono essere inclusi nel backup iCloud del tuo dispositivo se hai abilitato il Backup iCloud
- Possono essere eliminati in qualsiasi momento tramite la funzione cronologia dell'App

### 3.2 Archiviazione Cloud

Utilizziamo i servizi Firebase per:

- **Firebase Cloud Functions:** Elaborare il tuo input di testo e generare suggerimenti di emoji utilizzando Google Gemini AI (modello gemini-2.0-flash-lite)
- **Firebase App Check:** Verificare che le richieste provengano da istanze di app autenticate e non modificate per prevenire abusi e accesso non autorizzato
- **Firebase Firestore:** Archiviare dati di limitazione della velocità (conteggi richieste e timestamp) per far rispettare limiti di utilizzo equi
- **Firebase Analytics:** Comprendere come viene utilizzata l'App (se abilitato)
- **Registrazione Errori:** Raccogliere rapporti di crash e informazioni sugli errori per migliorare l'App

Il filtraggio del contenuto viene eseguito dai filtri di sicurezza integrati di Google Gemini AI, che configuriamo per bloccare contenuti inappropriati. Il contenuto viene filtrato in quattro categorie specifiche di danno:

- **Molestie:** Contenuti che molestano, intimoriscono o minacciano altri
- **Discorso d'Odio:** Contenuti che promuovono odio, discriminazione o violenza contro individui o gruppi
- **Contenuti Sessualmente Espliciti:** Contenuti sessualmente espliciti o pornografici
- **Contenuti Pericolosi:** Contenuti che promuovono violenza, autolesionismo o attività illegali

I filtri di sicurezza di Google Gemini AI sono configurati per bloccare contenuti con probabilità BASSA, MEDIA o ALTA di danno in queste categorie. I contenuti che violano queste politiche verranno rifiutati e riceverai un messaggio di errore che indica che il contenuto viola la nostra politica sui contenuti.

## 4. Servizi di Terze Parti

### 4.1 Google Gemini AI

Per generare suggerimenti di emoji, inviamo il tuo input di testo al servizio Google Gemini AI. Quando utilizzi Emojify Text:

- Il tuo input di testo viene trasmesso ai server di Google per l'elaborazione
- Il servizio AI di Google analizza il tuo testo e genera suggerimenti di emoji
- Google può elaborare e archiviare il tuo input di testo secondo le loro pratiche sulla privacy
- Non controlliamo come Google elabora i tuoi dati una volta inviati al loro servizio

Per ulteriori informazioni su come Google gestisce i tuoi dati, consulta la [Politica sulla Privacy di Google](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

Utilizziamo Firebase, un servizio fornito da Google, per:

- Elaborazione backend tramite Cloud Functions
- Analytics e statistiche di utilizzo (se abilitato)
- Reporting degli errori e analisi dei crash

Firebase è soggetto alle pratiche sulla privacy di Google. Per ulteriori informazioni, consulta la [Politica sulla Privacy di Firebase](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

Utilizziamo Google AdMob per visualizzare annunci nell'App. Quando utilizzi Emojify Text, AdMob può raccogliere ed elaborare le seguenti informazioni:

- **Identificatori Dispositivo:** Incluso l'Identificatore per gli Inserzionisti (IDFA) sui dispositivi iOS, se hai concesso il permesso per il tracciamento
- **Indirizzo IP:** L'indirizzo IP del tuo dispositivo può essere raccolto per fornire annunci rilevanti
- **Informazioni Dispositivo:** Informazioni sul tuo dispositivo come modello dispositivo, versione del sistema operativo e impostazioni dispositivo
- **Dati di Utilizzo:** Informazioni su come interagisci con gli annunci, inclusi visualizzazioni annunci, clic e metriche di coinvolgimento
- **Log di Crash:** Informazioni tecniche relative alla pubblicazione di annunci, inclusi rapporti di crash e log degli errori

Queste informazioni vengono utilizzate da AdMob per:

- Fornire annunci personalizzati o non personalizzati in base alle tue preferenze e al consenso
- Misurare le prestazioni e l'efficacia degli annunci
- Prevenire frodi e garantire la qualità degli annunci
- Rispettare le normative pubblicitarie

La raccolta e l'utilizzo dei dati di AdMob sono disciplinati dalle pratiche sulla privacy di Google. Per ulteriori informazioni su come Google AdMob gestisce i tuoi dati, consulta la [Politica sulla Privacy di Google](https://policies.google.com/privacy) e le [Informazioni sulla Privacy di AdMob](https://support.google.com/admob/answer/6128543).

Puoi controllare la pubblicità personalizzata attraverso le impostazioni sulla privacy del tuo dispositivo. Su iOS, puoi gestire i permessi di tracciamento tramite Impostazioni → Privacy e Sicurezza → Tracciamento.

## 5. Condivisione e Divulgazione dei Dati

Non vendiamo, affittiamo né commerciamo le tue informazioni personali. Tuttavia, condividiamo i tuoi dati con i seguenti servizi di terze parti secondo necessità per fornire la funzionalità dell'App:

- **Google Gemini AI:** Il tuo input di testo viene inviato al servizio AI di Google per generare suggerimenti di emoji
- **Firebase (Google):** I tuoi dati possono essere elaborati e archiviati da Firebase per operazioni backend
- **Google AdMob:** Identificatori dispositivo, indirizzo IP, informazioni dispositivo, dati di utilizzo e log di crash possono essere condivisi con AdMob per fornire e misurare annunci

Possiamo anche divulgare le tue informazioni se richiesto dalla legge o per proteggere i nostri diritti e sicurezza.

## 6. Conservazione dei Dati

### 6.1 Dati Locali

La tua cronologia di conversione memorizzata localmente sul tuo dispositivo:

- Viene conservata fino a quando non la elimini tramite l'App
- È limitata a un massimo di 100 conversioni recenti per prevenire una crescita illimitata dell'archiviazione
- Può essere cancellata in qualsiasi momento utilizzando le funzioni di eliminazione cronologia dell'App

### 6.2 Dati Cloud

I dati elaborati tramite Firebase e Google Gemini AI:

- Vengono elaborati temporaneamente per generare suggerimenti di emoji
- Possono essere conservati da Google secondo le loro politiche di conservazione dei dati
- Non archiviaamo il tuo input di testo o risultati emoji sui nostri server dopo l'elaborazione
- I dati di limitazione della velocità (conteggi richieste e timestamp) vengono archiviati in Firebase Firestore e utilizzati esclusivamente per far rispettare i limiti di utilizzo

## 7. I Tuoi Diritti e Scelte

### 7.1 Accesso ed Eliminazione

Hai il diritto di:

- Visualizzare la tua cronologia di conversione all'interno dell'App
- Eliminare singoli elementi della cronologia in qualsiasi momento
- Cancellare tutti i dati della cronologia dal tuo dispositivo

### 7.2 Portabilità dei Dati

La tua cronologia di conversione è memorizzata localmente sul tuo dispositivo. Puoi accedere a questi dati tramite la funzione cronologia dell'App.

### 7.3 Opt-Out

Se non desideri che i tuoi dati vengano elaborati da servizi di terze parti, puoi smettere di utilizzare l'App. L'App richiede l'elaborazione dei dati da parte di Google Gemini AI per funzionare.

## 8. Privacy dei Minori

Emojify Text non è destinato ai minori di età inferiore a 13 anni. Non raccogliamo consapevolmente informazioni personali da minori di 13 anni. Se ritieni che abbiamo raccolto informazioni da un minore di 13 anni, contattaci immediatamente.

## 9. Sicurezza

Implementiamo misure tecniche e organizzative appropriate per proteggere le tue informazioni:

- Sanitizzazione degli input per prevenire vulnerabilità di sicurezza
- Filtraggio e validazione del contenuto per bloccare contenuti inappropriati o dannosi
- Rilevamento di iniezione di prompt per prevenire la manipolazione del sistema AI
- Limitazione della velocità per prevenire abusi
- Comunicazione API sicura utilizzando HTTPS
- Archiviazione sicura di chiavi API e credenziali sensibili

Implementiamo la limitazione della velocità per prevenire abusi: gli utenti sono limitati a 10 richieste al minuto. Le richieste che superano questo limite verranno temporaneamente bloccate fino al ripristino della finestra di limitazione della velocità.

Tuttavia, nessun metodo di trasmissione su Internet o archiviazione elettronica è sicuro al 100%. Sebbene ci impegniamo a proteggere le tue informazioni, non possiamo garantire una sicurezza assoluta.

## 10. Trasferimenti Internazionali di Dati

Le tue informazioni possono essere trasferite ed elaborate in paesi diversi dal tuo paese di residenza. Quando utilizzi Emojify Text, i tuoi dati possono essere elaborati da:

- I server di Google, che possono essere ubicati in vari paesi
- I servizi Firebase, che operano globalmente

Utilizzando l'App, acconsenti al trasferimento delle tue informazioni verso questi paesi.

## 11. Modifiche a Questa Informativa sulla Privacy

Possiamo aggiornare questa Informativa sulla Privacy di volta in volta. Ti informeremo di eventuali modifiche mediante:

- Pubblicazione della nuova Informativa sulla Privacy su questa pagina
- Aggiornamento della data "Ultimo aggiornamento" in cima a questa politica

Ti consigliamo di rivedere periodicamente questa Informativa sulla Privacy per eventuali modifiche. Le modifiche a questa Informativa sulla Privacy sono efficaci quando vengono pubblicate su questa pagina.

## 12. Contattaci

Se hai domande su questa Informativa sulla Privacy o sulle nostre pratiche sui dati, contattaci a:

- Email: [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Pagina di Supporto: [Visita la nostra Pagina di Supporto](/support/)

**Ultimo aggiornamento: 20 dicembre 2025**
