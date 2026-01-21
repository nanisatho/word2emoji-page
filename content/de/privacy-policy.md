---
title: Datenschutzerklärung
lastUpdated: 20. Dezember 2025
---

# Datenschutzerklärung

**Letzte Aktualisierung: 20. Dezember 2025**

Diese Datenschutzerklärung beschreibt, wie Nathalia Thomas @ Inventa Labs 💡 ("wir", "unser" oder "uns") Ihre Informationen sammelt, verwendet und schützt, wenn Sie die mobile Anwendung Emojify Text (die "App") verwenden.

## 1. Informationen, die wir sammeln

### 1.1 Nutzergenerierte Inhalte

Wenn Sie Emojify Text verwenden, sammeln wir die folgenden Informationen:

- **Texteingabe:** Der Text, den Sie in die App eingeben, um ihn in Emojis umzuwandeln (begrenzt auf maximal 1.000 Zeichen)
- **Emoji-Ergebnisse:** Die Emoji-Vorschläge, die als Antwort auf Ihre Eingabe generiert werden (bis zu 5 Optionen pro Anfrage)
- **Zeitstempel:** Das Datum und die Uhrzeit, wenn Sie Emoji-Konvertierungen generieren
- **App-Konfiguration:** Optionale Einstellungen wie Spracheinstellung, Emoji-Anzahl, Farbpalette und iOS-Version für Kompatibilität

### 1.2 Automatisch gesammelte Informationen

Die App kann automatisch bestimmte Informationen über Ihr Gerät und Ihre Nutzung sammeln, einschließlich:

- Geräteinformationen (Modell, Betriebssystemversion)
- App-Nutzungsstatistiken
- Fehlerprotokolle und Absturzberichte
- App-Check-Token zur Sicherheitsüberprüfung (Firebase App Check)
- Rate-Limiting-Daten zur Missbrauchsprävention (Anfrageanzahl und Zeitstempel)
- Werbebezogene Daten (Gerätekennungen einschließlich IDFA, falls erlaubt, IP-Adresse, Werbeinteraktionsdaten), die von Google AdMob zu Werbezwecken und für Messungen gesammelt werden

## 2. Wie wir Ihre Informationen verwenden

Wir verwenden die gesammelten Informationen, um:

- Die Kernfunktionalität der App bereitzustellen (Umwandlung von Text in Emoji-Vorschläge)
- Ihren Konvertierungsverlauf lokal auf Ihrem Gerät zu speichern
- Die Leistung und Benutzererfahrung der App zu verbessern
- Technische Probleme zu diagnostizieren und zu beheben

## 3. Datenspeicherung

### 3.1 Lokale Speicherung

Ihr Konvertierungsverlauf (Texteingabe, Emoji-Ergebnisse und Zeitstempel) wird lokal auf Ihrem Gerät mit iOS UserDefaults gespeichert. Diese Daten:

- Verbleiben auf Ihrem Gerät und werden nicht an unsere Server übertragen
- Können in die iCloud-Sicherung Ihres Geräts einbezogen werden, wenn Sie iCloud Backup aktiviert haben
- Können jederzeit über die Verlaufsfunktion der App gelöscht werden

### 3.2 Cloud-Speicherung

Wir verwenden Firebase-Dienste für:

- **Firebase Cloud Functions:** Verarbeitung Ihrer Texteingabe und Generierung von Emoji-Vorschlägen mit Google Gemini AI (gemini-2.0-flash-lite Modell)
- **Firebase App Check:** Überprüfung, dass Anfragen von authentifizierten, unveränderten App-Instanzen stammen, um Missbrauch und unbefugten Zugriff zu verhindern
- **Firebase Firestore:** Speicherung von Rate-Limiting-Daten (Anfrageanzahlen und Zeitstempel), um faire Nutzungsgrenzen durchzusetzen
- **Firebase Analytics:** Verständnis der App-Nutzung (falls aktiviert)
- **Fehlerprotokollierung:** Sammeln von Absturzberichten und Fehlerinformationen zur Verbesserung der App

Die Inhaltsfilterung wird von den integrierten Sicherheitsfiltern von Google Gemini AI durchgeführt, die wir so konfigurieren, dass unangemessene Inhalte blockiert werden. Inhalte werden in vier spezifischen Schadenskategorien gefiltert:

- **Belästigung:** Inhalte, die andere belästigen, einschüchtern oder bedrohen
- **Hassrede:** Inhalte, die Hass, Diskriminierung oder Gewalt gegen Personen oder Gruppen fördern
- **Sexuell explizite Inhalte:** Sexuell explizite oder pornografische Inhalte
- **Gefährliche Inhalte:** Inhalte, die Gewalt, Selbstverletzung oder illegale Aktivitäten fördern

Die Sicherheitsfilter von Google Gemini AI sind so konfiguriert, dass Inhalte mit NIEDRIGER, MITTLERER oder HOHER Wahrscheinlichkeit von Schäden in diesen Kategorien blockiert werden. Inhalte, die gegen diese Richtlinien verstoßen, werden abgelehnt, und Sie erhalten eine Fehlermeldung, die angibt, dass der Inhalt gegen unsere Inhaltsrichtlinie verstößt.

## 4. Drittanbieter-Dienste

### 4.1 Google Gemini AI

Um Emoji-Vorschläge zu generieren, senden wir Ihre Texteingabe an den Google Gemini AI-Dienst. Wenn Sie Emojify Text verwenden:

- Ihre Texteingabe wird zur Verarbeitung an Googles Server übertragen
- Googles KI-Dienst analysiert Ihren Text und generiert Emoji-Vorschläge
- Google kann Ihre Texteingabe gemäß ihren Datenschutzpraktiken verarbeiten und speichern
- Wir haben keine Kontrolle darüber, wie Google Ihre Daten verarbeitet, sobald sie an ihren Dienst gesendet wurden

Weitere Informationen darüber, wie Google mit Ihren Daten umgeht, finden Sie in der [Google-Datenschutzerklärung](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

Wir verwenden Firebase, einen von Google bereitgestellten Dienst, für:

- Backend-Verarbeitung über Cloud Functions
- Analyse und Nutzungsstatistiken (falls aktiviert)
- Fehlerberichterstattung und Absturzanalyse

Firebase unterliegt den Datenschutzpraktiken von Google. Weitere Informationen finden Sie in der [Firebase-Datenschutzerklärung](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

Wir verwenden Google AdMob, um Anzeigen in der App anzuzeigen. Wenn Sie Emojify Text verwenden, kann AdMob die folgenden Informationen sammeln und verarbeiten:

- **Gerätekennungen:** Einschließlich der Identifier for Advertisers (IDFA) auf iOS-Geräten, falls Sie die Erlaubnis zur Verfolgung erteilt haben
- **IP-Adresse:** Ihre Geräte-IP-Adresse kann gesammelt werden, um relevante Anzeigen bereitzustellen
- **Geräteinformationen:** Informationen über Ihr Gerät wie Gerätemodell, Betriebssystemversion und Geräteeinstellungen
- **Nutzungsdaten:** Informationen darüber, wie Sie mit Anzeigen interagieren, einschließlich Anzeigenaufrufen, Klicks und Engagement-Metriken
- **Absturzprotokolle:** Technische Informationen im Zusammenhang mit der Anzeigenbereitstellung, einschließlich Absturzberichten und Fehlerprotokollen

Diese Informationen werden von AdMob verwendet, um:

- Personalisierte oder nicht-personalisierte Anzeigen basierend auf Ihren Präferenzen und Ihrer Einwilligung bereitzustellen
- Anzeigenleistung und -wirksamkeit zu messen
- Betrug zu verhindern und Anzeigenqualität sicherzustellen
- Werberichtlinien einzuhalten

Die Datensammlung und -nutzung von AdMob unterliegt den Datenschutzpraktiken von Google. Weitere Informationen darüber, wie Google AdMob mit Ihren Daten umgeht, finden Sie in der [Google-Datenschutzerklärung](https://policies.google.com/privacy) und in den [AdMob-Datenschutzinformationen](https://support.google.com/admob/answer/6128543).

Sie können personalisierte Werbung über die Datenschutzeinstellungen Ihres Geräts steuern. Auf iOS können Sie Tracking-Berechtigungen über Einstellungen → Datenschutz & Sicherheit → Tracking verwalten.

## 5. Datenweitergabe und Offenlegung

Wir verkaufen, vermieten oder handeln nicht mit Ihren persönlichen Informationen. Wir teilen Ihre Daten jedoch mit den folgenden Drittanbieter-Diensten, soweit dies zur Bereitstellung der App-Funktionalität erforderlich ist:

- **Google Gemini AI:** Ihre Texteingabe wird an Googles KI-Dienst gesendet, um Emoji-Vorschläge zu generieren
- **Firebase (Google):** Ihre Daten können von Firebase zur Backend-Verarbeitung verarbeitet und gespeichert werden
- **Google AdMob:** Gerätekennungen, IP-Adresse, Geräteinformationen, Nutzungsdaten und Absturzprotokolle können mit AdMob geteilt werden, um Anzeigen bereitzustellen und zu messen

Wir können Ihre Informationen auch offenlegen, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte und Sicherheit zu schützen.

## 6. Datenspeicherung

### 6.1 Lokale Daten

Ihr auf Ihrem Gerät lokal gespeicherter Konvertierungsverlauf:

- Wird aufbewahrt, bis Sie ihn über die App löschen
- Ist auf maximal 100 aktuelle Konvertierungen begrenzt, um unbegrenztes Speicherwachstum zu verhindern
- Kann jederzeit über die Verlaufslöschfunktionen der App gelöscht werden

### 6.2 Cloud-Daten

Daten, die über Firebase und Google Gemini AI verarbeitet werden:

- Werden vorübergehend verarbeitet, um Emoji-Vorschläge zu generieren
- Können von Google gemäß ihren Datenspeicherungsrichtlinien aufbewahrt werden
- Wir speichern Ihre Texteingabe oder Emoji-Ergebnisse nicht auf unseren Servern nach der Verarbeitung
- Rate-Limiting-Daten (Anfrageanzahlen und Zeitstempel) werden in Firebase Firestore gespeichert und dienen ausschließlich der Durchsetzung von Nutzungsgrenzen

## 7. Ihre Rechte und Wahlmöglichkeiten

### 7.1 Zugriff und Löschung

Sie haben das Recht:

- Ihren Konvertierungsverlauf innerhalb der App einzusehen
- Einzelne Verlaufselemente jederzeit zu löschen
- Alle Verlaufsdaten von Ihrem Gerät zu löschen

### 7.2 Datenübertragbarkeit

Ihr Konvertierungsverlauf wird lokal auf Ihrem Gerät gespeichert. Sie können auf diese Daten über die Verlaufsfunktion der App zugreifen.

### 7.3 Opt-Out

Wenn Sie nicht möchten, dass Ihre Daten von Drittanbieter-Diensten verarbeitet werden, können Sie die App nicht mehr verwenden. Die App erfordert eine Datenverarbeitung durch Google Gemini AI, um zu funktionieren.

## 8. Datenschutz für Kinder

Emojify Text ist nicht für Kinder unter 13 Jahren bestimmt. Wir sammeln nicht wissentlich persönliche Informationen von Kindern unter 13 Jahren. Wenn Sie glauben, dass wir Informationen von einem Kind unter 13 Jahren gesammelt haben, kontaktieren Sie uns bitte sofort.

## 9. Sicherheit

Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Informationen um:

- Eingabesanitizerung zur Verhinderung von Sicherheitslücken
- Inhaltsfilterung und -validierung zur Blockierung unangemessener oder schädlicher Inhalte
- Prompt-Injection-Erkennung zur Verhinderung von KI-Systemmanipulation
- Rate-Limiting zur Missbrauchsprävention
- Sichere API-Kommunikation mit HTTPS
- Sichere Speicherung von API-Schlüsseln und sensiblen Anmeldedaten

Wir setzen Rate-Limiting zur Missbrauchsprävention um: Nutzer sind auf 10 Anfragen pro Minute beschränkt. Anfragen, die dieses Limit überschreiten, werden vorübergehend blockiert, bis das Rate-Limit-Fenster zurückgesetzt wird.

Allerdings ist keine Übertragungsmethode über das Internet oder elektronische Speicherung zu 100% sicher. Während wir uns bemühen, Ihre Informationen zu schützen, können wir keine absolute Sicherheit garantieren.

## 10. Internationale Datenübertragungen

Ihre Informationen können in Länder übertragen und dort verarbeitet werden, die sich von Ihrem Wohnsitzland unterscheiden. Wenn Sie Emojify Text verwenden, können Ihre Daten verarbeitet werden von:

- Googles Servern, die sich in verschiedenen Ländern befinden können
- Firebase-Diensten, die global betrieben werden

Durch die Nutzung der App stimmen Sie der Übertragung Ihrer Informationen in diese Länder zu.

## 11. Änderungen dieser Datenschutzerklärung

Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren durch:

- Veröffentlichung der neuen Datenschutzerklärung auf dieser Seite
- Aktualisierung des Datums "Letzte Aktualisierung" oben in dieser Richtlinie

Es wird empfohlen, diese Datenschutzerklärung regelmäßig auf Änderungen zu überprüfen. Änderungen an dieser Datenschutzerklärung werden wirksam, wenn sie auf dieser Seite veröffentlicht werden.

## 12. Kontaktieren Sie uns

Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter:

- E-Mail: [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Support-Seite: [Besuchen Sie unsere Support-Seite](/support/)

**Letzte Aktualisierung: 20. Dezember 2025**
