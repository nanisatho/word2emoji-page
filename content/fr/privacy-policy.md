---
title: Politique de Confidentialité
lastUpdated: 20 décembre 2025
---

# Politique de Confidentialité

**Dernière mise à jour : 20 décembre 2025**

Cette Politique de Confidentialité décrit comment Nathalia Thomas @ Inventa Labs 💡 ("nous", "notre" ou "nos") collecte, utilise et protège vos informations lorsque vous utilisez l'application mobile Emojify Text (l'"App").

## 1. Informations que Nous Collectons

### 1.1 Contenu Généré par l'Utilisateur

Lorsque vous utilisez Emojify Text, nous collectons les informations suivantes :

- **Saisie de Texte :** Le texte que vous saisissez dans l'App pour convertir en emojis (limité à un maximum de 1 000 caractères)
- **Résultats d'Emoji :** Les suggestions d'emoji générées en réponse à votre saisie (jusqu'à 5 options par demande)
- **Horodatages :** La date et l'heure lorsque vous générez des conversions d'emoji
- **Configuration de l'App :** Paramètres optionnels tels que la préférence de langue, le nombre d'emojis, la palette de couleurs et la version iOS pour la compatibilité

### 1.2 Informations Collectées Automatiquement

L'App peut collecter automatiquement certaines informations sur votre appareil et votre utilisation, notamment :

- Informations sur l'appareil (modèle, version du système d'exploitation)
- Statistiques d'utilisation de l'App
- Journaux d'erreurs et rapports de plantage
- Jetons App Check pour la vérification de sécurité (Firebase App Check)
- Données de limitation du débit pour prévenir les abus (nombre de demandes et horodatages)
- Données liées à la publicité (identifiants d'appareil incluant IDFA si autorisé, adresse IP, données d'interaction avec les publicités) collectées par Google AdMob pour la diffusion de publicités et à des fins de mesure

## 2. Comment Nous Utilisons Vos Informations

Nous utilisons les informations que nous collectons pour :

- Fournir la fonctionnalité principale de l'App (convertir le texte en suggestions d'emoji)
- Stocker votre historique de conversion localement sur votre appareil
- Améliorer les performances et l'expérience utilisateur de l'App
- Diagnostiquer et corriger les problèmes techniques

## 3. Stockage des Données

### 3.1 Stockage Local

Votre historique de conversion (saisie de texte, résultats d'emoji et horodatages) est stocké localement sur votre appareil à l'aide d'iOS UserDefaults. Ces données :

- Restent sur votre appareil et ne sont pas transmises à nos serveurs
- Peuvent être incluses dans la sauvegarde iCloud de votre appareil si vous avez activé la Sauvegarde iCloud
- Peuvent être supprimées à tout moment via la fonction historique de l'App

### 3.2 Stockage en Nuage

Nous utilisons les services Firebase pour :

- **Firebase Cloud Functions :** Traiter votre saisie de texte et générer des suggestions d'emoji en utilisant Google Gemini AI (modèle gemini-2.0-flash-lite)
- **Firebase App Check :** Vérifier que les demandes proviennent d'instances d'application authentifiées et non modifiées pour prévenir les abus et l'accès non autorisé
- **Firebase Firestore :** Stocker les données de limitation du débit (compteurs de demandes et horodatages) pour appliquer des limites d'utilisation équitables
- **Firebase Analytics :** Comprendre comment l'App est utilisée (si activé)
- **Journalisation des Erreurs :** Collecter les rapports de plantage et les informations d'erreur pour améliorer l'App

Le filtrage du contenu est effectué par les filtres de sécurité intégrés de Google Gemini AI, que nous configurons pour bloquer le contenu inapproprié. Le contenu est filtré dans quatre catégories spécifiques de préjudice :

- **Harcèlement :** Contenu qui harcèle, intimide ou menace autrui
- **Discours de Haine :** Contenu qui promeut la haine, la discrimination ou la violence contre des individus ou des groupes
- **Contenu Sexuellement Explicite :** Contenu sexuellement explicite ou pornographique
- **Contenu Dangereux :** Contenu qui promeut la violence, l'automutilation ou des activités illégales

Les filtres de sécurité de Google Gemini AI sont configurés pour bloquer le contenu avec une probabilité FAIBLE, MOYENNE ou ÉLEVÉE de préjudice dans ces catégories. Le contenu qui viole ces politiques sera rejeté et vous recevrez un message d'erreur indiquant que le contenu viole notre politique de contenu.

## 4. Services Tiers

### 4.1 Google Gemini AI

Pour générer des suggestions d'emoji, nous envoyons votre saisie de texte au service Google Gemini AI. Lorsque vous utilisez Emojify Text :

- Votre saisie de texte est transmise aux serveurs de Google pour traitement
- Le service IA de Google analyse votre texte et génère des suggestions d'emoji
- Google peut traiter et stocker votre saisie de texte selon leurs pratiques de confidentialité
- Nous ne contrôlons pas la façon dont Google traite vos données une fois qu'elles sont envoyées à leur service

Pour plus d'informations sur la façon dont Google gère vos données, veuillez consulter la [Politique de Confidentialité de Google](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

Nous utilisons Firebase, un service fourni par Google, pour :

- Le traitement backend via Cloud Functions
- L'analyse et les statistiques d'utilisation (si activé)
- Les rapports d'erreurs et l'analyse des plantages

Firebase est soumis aux pratiques de confidentialité de Google. Pour plus d'informations, veuillez consulter la [Politique de Confidentialité de Firebase](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

Nous utilisons Google AdMob pour afficher des publicités dans l'App. Lorsque vous utilisez Emojify Text, AdMob peut collecter et traiter les informations suivantes :

- **Identifiants d'Appareil :** Y compris l'Identifiant pour les Annonceurs (IDFA) sur les appareils iOS, si vous avez accordé la permission de suivi
- **Adresse IP :** L'adresse IP de votre appareil peut être collectée pour diffuser des publicités pertinentes
- **Informations sur l'Appareil :** Informations sur votre appareil telles que le modèle de l'appareil, la version du système d'exploitation et les paramètres de l'appareil
- **Données d'Utilisation :** Informations sur la façon dont vous interagissez avec les publicités, y compris les vues de publicités, les clics et les métriques d'engagement
- **Journaux de Plantage :** Informations techniques liées à la diffusion publicitaire, y compris les rapports de plantage et les journaux d'erreurs

Ces informations sont utilisées par AdMob pour :

- Diffuser des publicités personnalisées ou non personnalisées en fonction de vos préférences et de votre consentement
- Mesurer les performances et l'efficacité des publicités
- Prévenir la fraude et assurer la qualité des publicités
- Se conformer aux réglementations publicitaires

La collecte et l'utilisation des données par AdMob sont régies par les pratiques de confidentialité de Google. Pour plus d'informations sur la façon dont Google AdMob gère vos données, veuillez consulter la [Politique de Confidentialité de Google](https://policies.google.com/privacy) et les [Informations de Confidentialité d'AdMob](https://support.google.com/admob/answer/6128543).

Vous pouvez contrôler la publicité personnalisée via les paramètres de confidentialité de votre appareil. Sur iOS, vous pouvez gérer les autorisations de suivi via Paramètres → Confidentialité et Sécurité → Suivi.

## 5. Partage et Divulgation des Données

Nous ne vendons, ne louons ni n'échangeons vos informations personnelles. Cependant, nous partageons vos données avec les services tiers suivants selon les besoins pour fournir la fonctionnalité de l'App :

- **Google Gemini AI :** Votre saisie de texte est envoyée au service IA de Google pour générer des suggestions d'emoji
- **Firebase (Google) :** Vos données peuvent être traitées et stockées par Firebase pour les opérations backend
- **Google AdMob :** Les identifiants d'appareil, l'adresse IP, les informations sur l'appareil, les données d'utilisation et les journaux de plantage peuvent être partagés avec AdMob pour diffuser et mesurer les publicités

Nous pouvons également divulguer vos informations si la loi l'exige ou pour protéger nos droits et notre sécurité.

## 6. Conservation des Données

### 6.1 Données Locales

Votre historique de conversion stocké localement sur votre appareil :

- Est conservé jusqu'à ce que vous le supprimiez via l'App
- Est limité à un maximum de 100 conversions récentes pour empêcher une croissance illimitée du stockage
- Peut être effacé à tout moment en utilisant les fonctionnalités de suppression de l'historique de l'App

### 6.2 Données en Nuage

Les données traitées via Firebase et Google Gemini AI :

- Sont traitées temporairement pour générer des suggestions d'emoji
- Peuvent être conservées par Google selon leurs politiques de conservation des données
- Nous ne stockons pas votre saisie de texte ou vos résultats d'emoji sur nos serveurs après traitement
- Les données de limitation du débit (compteurs de demandes et horodatages) sont stockées dans Firebase Firestore et utilisées uniquement pour appliquer les limites d'utilisation

## 7. Vos Droits et Choix

### 7.1 Accès et Suppression

Vous avez le droit de :

- Consulter votre historique de conversion dans l'App
- Supprimer des éléments individuels de l'historique à tout moment
- Effacer toutes les données de l'historique de votre appareil

### 7.2 Portabilité des Données

Votre historique de conversion est stocké localement sur votre appareil. Vous pouvez accéder à ces données via la fonction historique de l'App.

### 7.3 Désinscription

Si vous ne souhaitez pas que vos données soient traitées par des services tiers, vous pouvez arrêter d'utiliser l'App. L'App nécessite un traitement des données par Google Gemini AI pour fonctionner.

## 8. Confidentialité des Enfants

Emojify Text n'est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles d'enfants de moins de 13 ans. Si vous pensez que nous avons collecté des informations d'un enfant de moins de 13 ans, veuillez nous contacter immédiatement.

## 9. Sécurité

Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations :

- Assainissement des entrées pour prévenir les vulnérabilités de sécurité
- Filtrage et validation du contenu pour bloquer le contenu inapproprié ou nuisible
- Détection d'injection de prompts pour prévenir la manipulation du système IA
- Limitation du débit pour prévenir les abus
- Communication API sécurisée utilisant HTTPS
- Stockage sécurisé des clés API et des identifiants sensibles

Nous mettons en œuvre une limitation du débit pour prévenir les abus : les utilisateurs sont limités à 10 demandes par minute. Les demandes qui dépassent cette limite seront temporairement bloquées jusqu'à ce que la fenêtre de limitation du débit soit réinitialisée.

Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100 %. Bien que nous nous efforcions de protéger vos informations, nous ne pouvons pas garantir une sécurité absolue.

## 10. Transferts Internationaux de Données

Vos informations peuvent être transférées et traitées dans des pays autres que votre pays de résidence. Lorsque vous utilisez Emojify Text, vos données peuvent être traitées par :

- Les serveurs de Google, qui peuvent être situés dans divers pays
- Les services Firebase, qui fonctionnent à l'échelle mondiale

En utilisant l'App, vous consentez au transfert de vos informations vers ces pays.

## 11. Modifications de Cette Politique de Confidentialité

Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous vous informerons de tout changement en :

- Publiant la nouvelle Politique de Confidentialité sur cette page
- Mettant à jour la date de "Dernière mise à jour" en haut de cette politique

Il vous est conseillé de consulter périodiquement cette Politique de Confidentialité pour tout changement. Les modifications de cette Politique de Confidentialité prennent effet lorsqu'elles sont publiées sur cette page.

## 12. Nous Contacter

Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :

- Email : [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Page de Support : [Visitez notre page de Support](/support/)

**Dernière mise à jour : 20 décembre 2025**
