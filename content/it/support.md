---
title: Supporto e Contatto
---

# Supporto e Contatto

Siamo qui per aiutarti! Se hai domande, hai bisogno di assistenza o vuoi segnalare un problema con Emojify Text, non esitare a contattarci.

## Contattaci

Per richieste di supporto, contattaci a:

- **Email:** [info@inventa-labs.com](mailto:info@inventa-labs.com)

Ci impegniamo a rispondere a tutte le richieste entro 48 ore durante i giorni lavorativi.

## Domande Frequenti

### Come funziona Emojify Text?

Emojify Text utilizza l'intelligenza artificiale (Google Gemini AI modello gemini-2.0-flash-lite) per convertire il tuo input di testo in rappresentazioni emoji. Inserisci semplicemente del testo (fino a 1.000 caratteri), e l'App genererà fino a 5 opzioni emoji tra cui scegliere. Puoi configurare il numero di emoji restituiti (da 1 a 5) e selezionare le preferenze di colore.

### I miei dati sono privati?

La tua cronologia di conversione viene memorizzata localmente sul tuo dispositivo. Tuttavia, il tuo input di testo viene inviato a Google Gemini AI per l'elaborazione. Si prega di rivedere la nostra [Informativa sulla Privacy](/privacy-policy/) per informazioni dettagliate sulla raccolta e l'uso dei dati.

### Posso eliminare la mia cronologia?

Sì! Puoi eliminare singoli elementi della cronologia o cancellare tutta la cronologia attraverso la funzione cronologia dell'App. I tuoi dati vengono memorizzati localmente sul tuo dispositivo, quindi hai il pieno controllo su di essi.

### Perché ho bisogno di una connessione Internet?

Emojify Text richiede una connessione Internet perché utilizza Google Gemini AI per generare suggerimenti emoji. L'App effettua chiamate di rete sicure a Firebase Cloud Functions, che elaborano il tuo input di testo utilizzando Google Gemini AI e restituiscono opzioni emoji. L'App utilizza anche Firebase App Check per verificare l'autenticità dell'app e garantire una comunicazione sicura.

### Cosa succede se l'App non funziona?

Se stai riscontrando problemi:

- Controlla la tua connessione Internet
- Assicurati di non aver superato il limite di velocità (10 richieste al minuto - riprova dopo un minuto)
- Verifica che il tuo input sia compreso tra 1 e 1.000 caratteri e contenga testo valido
- Verifica che la tua versione iOS supporti l'App (si raccomanda iOS 14.0 o successivo per tutte le funzionalità)
- Riavvia l'App
- Se i problemi persistono, contattaci a [info@inventa-labs.com](mailto:info@inventa-labs.com)

### Ci sono restrizioni di età?

Emojify Text è destinato agli utenti di almeno 13 anni di età. Gli utenti di età inferiore a 13 anni dovrebbero usare l'App sotto supervisione parentale.

### Posso usare gli emoji generati commercialmente?

Sì, puoi usare i suggerimenti emoji generati dall'App per scopi personali o commerciali. Tuttavia, si prega di rivedere i nostri [Termini di Servizio](/terms-of-service/) per i dettagli completi.

### Quanto sono accurati i suggerimenti emoji?

I suggerimenti emoji sono generati dall'IA (Google Gemini AI modello gemini-2.0-flash-lite) e possono variare in accuratezza e appropriatezza. Forniamo fino a 5 opzioni per richiesta in modo che tu possa scegliere l'emoji più adatto alle tue esigenze. L'App supporta anche le preferenze linguistiche e i filtri della tavolozza colori per affinare i risultati. Si prega di rivedere i suggerimenti prima dell'uso.

### Quali lingue supporta Emojify Text?

Emojify Text supporta le seguenti lingue per le descrizioni emoji:

- Inglese (en)
- Spagnolo (es)
- Francese (fr)
- Tedesco (de)
- Italiano (it)
- Giapponese (ja)
- Coreano (ko)
- Portoghese - Brasiliano (pt-BR)
- Russo (ru)
- Cinese - Semplificato (zh-Hans)

Nota: Mentre le descrizioni possono essere in qualsiasi lingua supportata, il campo "vibe" nei risultati rimane sempre in inglese.

### Perché il mio contenuto è stato bloccato?

Emojify Text implementa il filtraggio dei contenuti per mantenere un servizio sicuro e appropriato. Il filtraggio dei contenuti viene eseguito principalmente dai filtri di sicurezza integrati di Google Gemini AI, che configuriamo per bloccare contenuti inappropriati. Il tuo input può essere bloccato se viola la nostra politica sui contenuti, che limita:

- Contenuti di molestie o minacciosi
- Discorsi di odio o contenuti discriminatori
- Contenuti sessualmente espliciti
- Contenuti che promuovono violenza, autolesionismo o attività illegali
- Tentativi di manipolare o sfruttare il sistema AI

**Nota:** Non siamo responsabili per i contenuti che i filtri di sicurezza di Gemini non rilevano. Dovresti sempre rivedere il contenuto generato dall'IA prima dell'uso. Se ricevi un messaggio che il tuo contenuto viola la nostra politica sui contenuti, prova parole o frasi diverse. L'App applica anche limiti alla lunghezza dell'input e valida l'input sul nostro backend per prevenire abusi.

Inoltre, le richieste che superano i limiti di tempo di elaborazione verranno terminate. Le richieste API hanno un timeout di 30 secondi per l'elaborazione AI, e l'esecuzione generale della funzione ha un limite di timeout di 60 secondi. La validazione dell'input viene anche applicata: il tuo testo deve essere compreso tra 1 e 1.000 caratteri (dopo il trimming), contenere caratteri UTF-8 validi e non può essere vuoto o contenere solo spazi bianchi. Se la tua richiesta va in timeout o fallisce la validazione, riceverai un messaggio di errore e potrai riprovare. Per ulteriori informazioni, si prega di rivedere i nostri [Termini di Servizio](/terms-of-service/).

### Cosa succede se la mia richiesta va in timeout?

Emojify Text ha limiti di timeout integrati per garantire un servizio reattivo e impedire che le richieste rimangano bloccate indefinitamente. Se la tua richiesta supera questi limiti, verrà terminata automaticamente:

- **Timeout di elaborazione API:** 30 secondi per l'elaborazione AI da parte di Google Gemini AI
- **Timeout generale della funzione:** 60 secondi per l'elaborazione completa della richiesta

Se la tua richiesta va in timeout, riceverai un messaggio di errore che indica che il servizio non è temporaneamente disponibile. Questo può accadere se:

- L'elaborazione AI richiede più tempo del previsto
- Ci sono problemi di connettività di rete
- Il servizio sta subendo un carico elevato

Se incontri un errore di timeout, si prega di riprovare. La maggior parte delle richieste si completa ben entro i limiti di timeout. Gli errori di timeout possono verificarsi se il tuo input è molto lungo (avvicinandosi al limite di 1.000 caratteri) o se ci sono problemi di connettività di rete. Se riscontri costantemente errori di timeout, prova ad accorciare il tuo input o controlla la tua connessione Internet. Se i problemi persistono, contattaci a [info@inventa-labs.com](mailto:info@inventa-labs.com).

## Segnalare Problemi

Se incontri un bug, un errore o hai una richiesta di funzionalità, inviaci un'email a [info@inventa-labs.com](mailto:info@inventa-labs.com) con le seguenti informazioni:

- Descrizione del problema
- Passaggi per riprodurre (se applicabile)
- Modello del dispositivo e versione iOS
- Versione dell'App (se nota)
- Testo di input che ha causato il problema (se applicabile, notando che sarà trattato in modo confidenziale)
- Eventuali messaggi di errore ricevuti
- Screenshot (se utili)

### Limitazione della Velocità

Emojify Text applica la limitazione della velocità per garantire un uso equo e prevenire abusi:

- **Limite:** 10 richieste al minuto per utente
- **Finestra:** Le richieste vengono conteggiate all'interno di una finestra mobile di 60 secondi
- **Cosa succede se supero il limite?** Riceverai un messaggio di errore "Limite di velocità superato. Si prega di riprovare più tardi." Aspetta semplicemente che la finestra di limitazione della velocità si resetti (fino a 1 minuto) prima di riprovare.

### Limiti di Input

Emojify Text ha i seguenti requisiti e limiti di input:

- **Lunghezza minima:** 1 carattere (dopo il trimming degli spazi bianchi)
- **Lunghezza massima:** 1.000 caratteri
- **Codifica dei caratteri:** Deve essere UTF-8 valido
- **Contenuto:** Non può essere vuoto o contenere solo spazi bianchi
- **Sanitizzazione dell'input:** I byte null e certi caratteri di controllo vengono rimossi automaticamente, e gli spazi bianchi eccessivi vengono normalizzati

## Privacy e Legale

Per informazioni su come gestiamo i tuoi dati, consulta la nostra [Informativa sulla Privacy](/privacy-policy/).

Per i termini e le condizioni d'uso, consulta i nostri [Termini di Servizio](/terms-of-service/).

## Feedback

Apprezziamo il tuo feedback! Se hai suggerimenti per migliorare Emojify Text, condividili con noi a [info@inventa-labs.com](mailto:info@inventa-labs.com).