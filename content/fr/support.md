---
title: Support et Contact
---

# Support et Contact

Nous sommes là pour vous aider ! Si vous avez des questions, besoin d'assistance ou souhaitez signaler un problème avec Emojify Text, n'hésitez pas à nous contacter.

## Contactez-nous

Pour les demandes de support, contactez-nous à :

- **Email :** [info@inventa-labs.com](mailto:info@inventa-labs.com)

Nous visons à répondre à toutes les demandes dans les 48 heures pendant les jours ouvrables.

## Questions Fréquemment Posées

### Comment fonctionne Emojify Text ?

Emojify Text utilise l'intelligence artificielle (Google Gemini AI modèle gemini-2.0-flash-lite) pour convertir votre saisie de texte en représentations d'emoji. Entrez simplement du texte (jusqu'à 1 000 caractères), et l'App générera jusqu'à 5 options d'emoji parmi lesquelles choisir. Vous pouvez configurer le nombre d'emojis retournés (de 1 à 5) et sélectionner des préférences de couleur.

### Mes données sont-elles privées ?

Votre historique de conversion est stocké localement sur votre appareil. Cependant, votre saisie de texte est envoyée à Google Gemini AI pour traitement. Veuillez consulter notre [Politique de Confidentialité](/privacy-policy/) pour des informations détaillées sur la collecte et l'utilisation des données.

### Puis-je supprimer mon historique ?

Oui ! Vous pouvez supprimer des éléments individuels de l'historique ou effacer tout l'historique via la fonction historique de l'App. Vos données sont stockées localement sur votre appareil, vous avez donc un contrôle total sur celles-ci.

### Pourquoi ai-je besoin d'une connexion Internet ?

Emojify Text nécessite une connexion Internet car il utilise Google Gemini AI pour générer des suggestions d'emoji. L'App effectue des appels réseau sécurisés à Firebase Cloud Functions, qui traitent votre saisie de texte en utilisant Google Gemini AI et renvoient des options d'emoji. L'App utilise également Firebase App Check pour vérifier l'authenticité de l'app et assurer une communication sécurisée.

### Que faire si l'App ne fonctionne pas ?

Si vous rencontrez des problèmes :

- Vérifiez votre connexion Internet
- Assurez-vous de ne pas avoir dépassé la limite de débit (10 demandes par minute - réessayez après une minute)
- Vérifiez que votre saisie est comprise entre 1 et 1 000 caractères et contient du texte valide
- Vérifiez que votre version iOS prend en charge l'App (iOS 14.0 ou ultérieur recommandé pour toutes les fonctionnalités)
- Redémarrez l'App
- Si les problèmes persistent, contactez-nous à [info@inventa-labs.com](mailto:info@inventa-labs.com)

### Y a-t-il des restrictions d'âge ?

Emojify Text est destiné aux utilisateurs âgés d'au moins 13 ans. Les utilisateurs de moins de 13 ans doivent utiliser l'App sous supervision parentale.

### Puis-je utiliser les emojis générés commercialement ?

Oui, vous pouvez utiliser les suggestions d'emoji générées par l'App à des fins personnelles ou commerciales. Cependant, veuillez consulter nos [Conditions d'Utilisation](/terms-of-service/) pour des détails complets.

### Quelle est la précision des suggestions d'emoji ?

Les suggestions d'emoji sont générées par l'IA (Google Gemini AI modèle gemini-2.0-flash-lite) et peuvent varier en précision et en pertinence. Nous fournissons jusqu'à 5 options par demande afin que vous puissiez choisir l'emoji le plus adapté à vos besoins. L'App prend également en charge les préférences linguistiques et les filtres de palette de couleurs pour affiner les résultats. Veuillez examiner les suggestions avant utilisation.

### Quelles langues Emojify Text prend-il en charge ?

Emojify Text prend en charge les langues suivantes pour les descriptions d'emoji :

- Anglais (en)
- Espagnol (es)
- Français (fr)
- Allemand (de)
- Italien (it)
- Japonais (ja)
- Coréen (ko)
- Portugais - Brésilien (pt-BR)
- Russe (ru)
- Chinois - Simplifié (zh-Hans)

Note : Bien que les descriptions puissent être dans n'importe quelle langue prise en charge, le champ "vibe" dans les résultats reste toujours en anglais.

### Pourquoi mon contenu a-t-il été bloqué ?

Emojify Text implémente un filtrage de contenu pour maintenir un service sûr et approprié. Le filtrage de contenu est principalement effectué par les filtres de sécurité intégrés de Google Gemini AI, que nous configurons pour bloquer le contenu inapproprié. Votre saisie peut être bloquée si elle viole notre politique de contenu, qui restreint :

- Le contenu de harcèlement ou menaçant
- Le discours de haine ou le contenu discriminatoire
- Le contenu sexuellement explicite
- Le contenu qui promeut la violence, l'automutilation ou des activités illégales
- Les tentatives de manipuler ou d'exploiter le système d'IA

**Note :** Nous ne sommes pas responsables du contenu que les filtres de sécurité de Gemini ne détectent pas. Vous devez toujours examiner le contenu généré par l'IA avant de l'utiliser. Si vous recevez un message indiquant que votre contenu viole notre politique de contenu, essayez des mots ou phrases différents. L'App applique également des limites de longueur de saisie et valide la saisie sur notre backend pour prévenir les abus.

De plus, les demandes qui dépassent les limites de temps de traitement seront terminées. Les demandes d'API ont un délai d'expiration de 30 secondes pour le traitement IA, et l'exécution générale de la fonction a une limite de délai d'expiration de 60 secondes. La validation de saisie est également appliquée : votre texte doit être compris entre 1 et 1 000 caractères (après suppression des espaces), contenir des caractères UTF-8 valides et ne peut pas être vide ou contenir uniquement des espaces. Si votre demande expire ou échoue la validation, vous recevrez un message d'erreur et pourrez réessayer. Pour plus d'informations, veuillez consulter nos [Conditions d'Utilisation](/terms-of-service/).

### Que se passe-t-il si ma demande expire ?

Emojify Text a des limites de délai d'expiration intégrées pour assurer un service réactif et empêcher les demandes de rester bloquées indéfiniment. Si votre demande dépasse ces limites, elle sera automatiquement terminée :

- **Délai d'expiration du traitement API :** 30 secondes pour le traitement IA par Google Gemini AI
- **Délai d'expiration global de la fonction :** 60 secondes pour le traitement complet de la demande

Si votre demande expire, vous recevrez un message d'erreur indiquant que le service est temporairement indisponible. Cela peut se produire si :

- Le traitement IA prend plus de temps que prévu
- Il y a des problèmes de connectivité réseau
- Le service connaît une charge élevée

Si vous rencontrez une erreur de délai d'expiration, veuillez réessayer. La plupart des demandes se terminent bien dans les limites de délai d'expiration. Les erreurs de délai d'expiration peuvent survenir si votre saisie est très longue (approchant la limite de 1 000 caractères) ou s'il y a des problèmes de connectivité réseau. Si vous rencontrez constamment des erreurs de délai d'expiration, essayez de raccourcir votre saisie ou vérifiez votre connexion Internet. Si les problèmes persistent, contactez-nous à [info@inventa-labs.com](mailto:info@inventa-labs.com).

## Signaler des Problèmes

Si vous rencontrez un bug, une erreur ou avez une demande de fonctionnalité, envoyez-nous un email à [info@inventa-labs.com](mailto:info@inventa-labs.com) avec les informations suivantes :

- Description du problème
- Étapes pour reproduire (si applicable)
- Modèle d'appareil et version iOS
- Version de l'App (si connue)
- Texte de saisie qui a causé le problème (si applicable, notant qu'il sera traité confidentiellement)
- Tout message d'erreur que vous avez reçu
- Captures d'écran (si utiles)

### Limitation du Débit

Emojify Text applique une limitation du débit pour assurer une utilisation équitable et prévenir les abus :

- **Limite :** 10 demandes par minute par utilisateur
- **Fenêtre :** Les demandes sont comptées dans une fenêtre glissante de 60 secondes
- **Que se passe-t-il si je dépasse la limite ?** Vous recevrez un message d'erreur "Limite de débit dépassée. Veuillez réessayer plus tard." Attendez simplement que la fenêtre de limitation du débit se réinitialise (jusqu'à 1 minute) avant de réessayer.

### Limites de Saisie

Emojify Text a les exigences et limites de saisie suivantes :

- **Longueur minimale :** 1 caractère (après suppression des espaces)
- **Longueur maximale :** 1 000 caractères
- **Encodage de caractères :** Doit être UTF-8 valide
- **Contenu :** Ne peut pas être vide ou contenir uniquement des espaces
- **Sanitisation de saisie :** Les octets nuls et certains caractères de contrôle sont automatiquement supprimés, et les espaces excessifs sont normalisés

## Confidentialité et Légal

Pour obtenir des informations sur la façon dont nous gérons vos données, consultez notre [Politique de Confidentialité](/privacy-policy/).

Pour les termes et conditions d'utilisation, consultez nos [Conditions d'Utilisation](/terms-of-service/).

## Commentaires

Votre avis nous est précieux ! Si vous avez des suggestions pour améliorer Emojify Text, partagez-les avec nous à [info@inventa-labs.com](mailto:info@inventa-labs.com).