---
title: Support & Kontakt
---

# Support & Kontakt

Wir sind hier, um zu helfen! Wenn Sie Fragen haben, Unterstützung benötigen oder ein Problem mit Emojify Text melden möchten, zögern Sie bitte nicht, uns zu kontaktieren.

## Kontaktieren Sie uns

Für Support-Anfragen kontaktieren Sie uns bitte unter:

- **E-Mail:** [info@inventa-labs.com](mailto:info@inventa-labs.com)

Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden an Werktagen zu beantworten.

## Häufig gestellte Fragen

### Wie funktioniert Emojify Text?

Emojify Text verwendet künstliche Intelligenz (Google Gemini AI gemini-2.0-flash-lite Modell), um Ihre Texteingabe in Emoji-Darstellungen umzuwandeln. Geben Sie einfach Text ein (bis zu 1.000 Zeichen), und die App generiert bis zu 5 Emoji-Optionen zur Auswahl. Sie können die Anzahl der zurückgegebenen Emojis konfigurieren (von 1 bis 5) und Farbpräferenzen auswählen.

### Sind meine Daten privat?

Ihr Konvertierungsverlauf wird lokal auf Ihrem Gerät gespeichert. Ihre Texteingabe wird jedoch an Google Gemini AI zur Verarbeitung gesendet. Bitte lesen Sie unsere [Datenschutzerklärung](/privacy-policy/) für detaillierte Informationen zur Datenerfassung und -nutzung.

### Kann ich meinen Verlauf löschen?

Ja! Sie können einzelne Verlaufselemente löschen oder den gesamten Verlauf über die Verlaufsfunktion der App löschen. Ihre Daten werden lokal auf Ihrem Gerät gespeichert, sodass Sie die volle Kontrolle darüber haben.

### Warum benötige ich eine Internetverbindung?

Emojify Text benötigt eine Internetverbindung, da es Google Gemini AI verwendet, um Emoji-Vorschläge zu generieren. Die App stellt sichere Netzwerkanfragen an Firebase Cloud Functions, die Ihre Texteingabe mit Google Gemini AI verarbeiten und Emoji-Optionen zurückgeben. Die App verwendet auch Firebase App Check, um die Authentizität der App zu überprüfen und eine sichere Kommunikation zu gewährleisten.

### Was ist, wenn die App nicht funktioniert?

Wenn Sie Probleme haben:

- Überprüfen Sie Ihre Internetverbindung
- Stellen Sie sicher, dass Sie das Rate-Limit nicht überschritten haben (10 Anfragen pro Minute - versuchen Sie es nach einer Minute erneut)
- Überprüfen Sie, ob Ihre Eingabe zwischen 1 und 1.000 Zeichen liegt und gültigen Text enthält
- Überprüfen Sie, ob Ihre iOS-Version die App unterstützt (iOS 14.0 oder höher wird für volle Funktionen empfohlen)
- Starten Sie die App neu
- Wenn die Probleme weiterhin bestehen, kontaktieren Sie uns unter [info@inventa-labs.com](mailto:info@inventa-labs.com)

### Gibt es Altersbeschränkungen?

Emojify Text ist für Benutzer ab 13 Jahren bestimmt. Benutzer unter 13 Jahren sollten die App unter elterlicher Aufsicht verwenden.

### Kann ich die generierten Emojis kommerziell verwenden?

Ja, Sie können die von der App generierten Emoji-Vorschläge für persönliche oder kommerzielle Zwecke verwenden. Bitte lesen Sie jedoch unsere [Nutzungsbedingungen](/terms-of-service/) für vollständige Details.

### Wie genau sind die Emoji-Vorschläge?

Die Emoji-Vorschläge werden von KI (Google Gemini AI gemini-2.0-flash-lite Modell) generiert und können in Genauigkeit und Angemessenheit variieren. Wir bieten bis zu 5 Optionen pro Anfrage, damit Sie das am besten geeignete Emoji für Ihre Bedürfnisse auswählen können. Die App unterstützt auch Spracheinstellungen und Farbpalettenfilter, um Ergebnisse zu verfeinern. Bitte überprüfen Sie die Vorschläge vor der Verwendung.

### Welche Sprachen unterstützt Emojify Text?

Emojify Text unterstützt die folgenden Sprachen für Emoji-Beschreibungen:

- Englisch (en)
- Spanisch (es)
- Französisch (fr)
- Deutsch (de)
- Italienisch (it)
- Japanisch (ja)
- Koreanisch (ko)
- Portugiesisch - Brasilianisch (pt-BR)
- Russisch (ru)
- Chinesisch - Vereinfacht (zh-Hans)

Hinweis: Während Beschreibungen in jeder unterstützten Sprache sein können, bleibt das Feld "Vibe" in den Ergebnissen immer auf Englisch.

### Warum wurde mein Inhalt blockiert?

Emojify Text implementiert Inhaltsfilterung, um einen sicheren und angemessenen Service zu gewährleisten. Die Inhaltsfilterung wird hauptsächlich von den integrierten Sicherheitsfiltern von Google Gemini AI durchgeführt, die wir so konfigurieren, dass unangemessene Inhalte blockiert werden. Ihr Input kann blockiert werden, wenn er gegen unsere Inhaltsrichtlinie verstößt, die Folgendes einschränkt:

- Belästigungs- oder bedrohende Inhalte
- Hassrede oder diskriminierende Inhalte
- Sexuell explizite Inhalte
- Inhalte, die Gewalt, Selbstverletzung oder illegale Aktivitäten fördern
- Versuche, das KI-System zu manipulieren oder auszunutzen

**Hinweis:** Wir sind nicht verantwortlich für Inhalte, die die Sicherheitsfilter von Gemini nicht erkennen. Sie sollten KI-generierte Inhalte immer vor der Verwendung überprüfen. Wenn Sie eine Nachricht erhalten, dass Ihr Inhalt gegen unsere Inhaltsrichtlinie verstößt, versuchen Sie bitte andere Wörter oder Phrasen. Die App erzwingt auch Eingabelängenbegrenzungen und validiert Eingaben auf unserem Backend, um Missbrauch zu verhindern.

Zusätzlich werden Anfragen, die die Verarbeitungszeitgrenzen überschreiten, beendet. API-Anfragen haben ein 30-Sekunden-Timeout für die KI-Verarbeitung, und die gesamte Funktionsausführung hat ein 60-Sekunden-Timeout-Limit. Die Eingabevalidierung wird auch erzwungen: Ihr Text muss zwischen 1 und 1.000 Zeichen (nach dem Trimmen) liegen, gültige UTF-8-Zeichen enthalten und darf nicht leer oder nur aus Leerzeichen bestehen. Wenn Ihre Anfrage ein Timeout erreicht oder die Validierung fehlschlägt, erhalten Sie eine Fehlermeldung und können es erneut versuchen. Für weitere Informationen lesen Sie bitte unsere [Nutzungsbedingungen](/terms-of-service/).

### Was passiert, wenn meine Anfrage ein Timeout erreicht?

Emojify Text verfügt über integrierte Timeout-Limits, um einen reaktionsschnellen Service zu gewährleisten und zu verhindern, dass Anfragen unbegrenzt hängen bleiben. Wenn Ihre Anfrage diese Limits überschreitet, wird sie automatisch beendet:

- **API-Verarbeitungs-Timeout:** 30 Sekunden für die KI-Verarbeitung durch Google Gemini AI
- **Gesamtes Funktions-Timeout:** 60 Sekunden für die vollständige Anfrageverarbeitung

Wenn Ihre Anfrage ein Timeout erreicht, erhalten Sie eine Fehlermeldung, die darauf hinweist, dass der Service vorübergehend nicht verfügbar ist. Dies kann passieren, wenn:

- Die KI-Verarbeitung länger als erwartet dauert
- Netzwerkkonnektivitätsprobleme bestehen
- Der Service eine hohe Auslastung erfährt

Wenn Sie einen Timeout-Fehler erhalten, versuchen Sie es bitte erneut. Die meisten Anfragen werden deutlich innerhalb der Timeout-Limits abgeschlossen. Timeout-Fehler können auftreten, wenn Ihre Eingabe sehr lang ist (nahe an der 1.000-Zeichen-Grenze) oder wenn Netzwerkkonnektivitätsprobleme bestehen. Wenn Sie konsistent Timeout-Fehler erleben, versuchen Sie, Ihre Eingabe zu verkürzen, oder überprüfen Sie Ihre Internetverbindung. Wenn die Probleme weiterhin bestehen, kontaktieren Sie uns bitte unter [info@inventa-labs.com](mailto:info@inventa-labs.com).

## Probleme melden

Wenn Sie auf einen Fehler, einen Bug stoßen oder einen Funktionswunsch haben, senden Sie uns bitte eine E-Mail an [info@inventa-labs.com](mailto:info@inventa-labs.com) mit den folgenden Informationen:

- Beschreibung des Problems
- Schritte zur Reproduktion (falls zutreffend)
- Gerätemodell und iOS-Version
- App-Version (falls bekannt)
- Eingabetext, der das Problem verursacht hat (falls zutreffend, mit dem Hinweis, dass er vertraulich behandelt wird)
- Alle Fehlermeldungen, die Sie erhalten haben
- Screenshots (falls hilfreich)

### Rate-Limiting

Emojify Text erzwingt Rate-Limiting, um eine faire Nutzung zu gewährleisten und Missbrauch zu verhindern:

- **Limit:** 10 Anfragen pro Minute pro Benutzer
- **Fenster:** Anfragen werden in einem rollierenden 60-Sekunden-Fenster gezählt
- **Was passiert, wenn ich das Limit überschreite?** Sie erhalten eine Fehlermeldung "Rate-Limit überschritten. Bitte versuchen Sie es später erneut." Warten Sie einfach, bis das Rate-Limit-Fenster zurückgesetzt wird (bis zu 1 Minute), bevor Sie es erneut versuchen.

### Eingabelimits

Emojify Text hat die folgenden Eingabeanforderungen und -limits:

- **Mindestlänge:** 1 Zeichen (nach dem Trimmen von Leerzeichen)
- **Maximale Länge:** 1.000 Zeichen
- **Zeichencodierung:** Muss gültiges UTF-8 sein
- **Inhalt:** Darf nicht leer sein oder nur aus Leerzeichen bestehen
- **Eingabebereinigung:** Null-Bytes und bestimmte Steuerzeichen werden automatisch entfernt, und übermäßige Leerzeichen werden normalisiert

## Datenschutz und Rechtliches

Informationen darüber, wie wir mit Ihren Daten umgehen, finden Sie in unserer [Datenschutzerklärung](/privacy-policy/).

Für Nutzungsbedingungen finden Sie unsere [Nutzungsbedingungen](/terms-of-service/).

## Feedback

Ihr Feedback ist uns wichtig! Wenn Sie Vorschläge zur Verbesserung von Emojify Text haben, teilen Sie uns diese bitte unter [info@inventa-labs.com](mailto:info@inventa-labs.com) mit.