---
title: Política de Privacidad
lastUpdated: 20 de diciembre de 2025
---

# Política de Privacidad

**Última actualización: 20 de diciembre de 2025**

Esta Política de Privacidad describe cómo Nathalia Thomas @ Inventa Labs 💡 ("nosotros", "nuestro" o "nos") recopila, usa y protege su información cuando utiliza la aplicación móvil Emojify Text (la "App").

## 1. Información que Recopilamos

### 1.1 Contenido Generado por el Usuario

Cuando utiliza Emojify Text, recopilamos la siguiente información:

- **Entrada de Texto:** El texto que ingresa en la App para convertir a emojis (limitado a un máximo de 1,000 caracteres)
- **Resultados de Emoji:** Las sugerencias de emoji generadas en respuesta a su entrada (hasta 5 opciones por solicitud)
- **Marcas de Tiempo:** La fecha y hora cuando genera conversiones de emoji
- **Configuración de la App:** Configuraciones opcionales como preferencia de idioma, cantidad de emoji, paleta de colores y versión de iOS para compatibilidad

### 1.2 Información Recopilada Automáticamente

La App puede recopilar automáticamente cierta información sobre su dispositivo y uso, incluyendo:

- Información del dispositivo (modelo, versión del sistema operativo)
- Estadísticas de uso de la App
- Registros de errores y informes de fallos
- Tokens de App Check para verificación de seguridad (Firebase App Check)
- Datos de limitación de velocidad para prevenir abusos (cantidad de solicitudes y marcas de tiempo)
- Datos relacionados con publicidad (identificadores de dispositivo incluyendo IDFA si está permitido, dirección IP, datos de interacción con anuncios) recopilados por Google AdMob para servir anuncios y propósitos de medición

## 2. Cómo Usamos Su Información

Utilizamos la información que recopilamos para:

- Proporcionar la funcionalidad principal de la App (convertir texto en sugerencias de emoji)
- Almacenar su historial de conversión localmente en su dispositivo
- Mejorar el rendimiento y la experiencia del usuario de la App
- Diagnosticar y corregir problemas técnicos

## 3. Almacenamiento de Datos

### 3.1 Almacenamiento Local

Su historial de conversión (entrada de texto, resultados de emoji y marcas de tiempo) se almacena localmente en su dispositivo usando iOS UserDefaults. Estos datos:

- Permanecen en su dispositivo y no se transmiten a nuestros servidores
- Pueden incluirse en la copia de seguridad de iCloud de su dispositivo si tiene habilitada la copia de seguridad de iCloud
- Pueden eliminarse en cualquier momento a través de la función de historial de la App

### 3.2 Almacenamiento en la Nube

Utilizamos servicios de Firebase para:

- **Firebase Cloud Functions:** Procesar su entrada de texto y generar sugerencias de emoji usando Google Gemini AI (modelo gemini-2.0-flash-lite)
- **Firebase App Check:** Verificar que las solicitudes provengan de instancias de aplicación autenticadas y no modificadas para prevenir abusos y acceso no autorizado
- **Firebase Firestore:** Almacenar datos de limitación de velocidad (conteos de solicitudes y marcas de tiempo) para hacer cumplir límites de uso justos
- **Firebase Analytics:** Entender cómo se usa la App (si está habilitado)
- **Registro de Errores:** Recopilar informes de fallos e información de errores para mejorar la App

El filtrado de contenido se realiza mediante los filtros de seguridad integrados de Google Gemini AI, que configuramos para bloquear contenido inapropiado. El contenido se filtra en cuatro categorías específicas de daño:

- **Acoso:** Contenido que acosa, intimida o amenaza a otros
- **Discurso de Odio:** Contenido que promueve odio, discriminación o violencia contra individuos o grupos
- **Contenido Sexualmente Explícito:** Contenido que es sexualmente explícito o pornográfico
- **Contenido Peligroso:** Contenido que promueve violencia, autolesión o actividades ilegales

Los filtros de seguridad de Google Gemini AI están configurados para bloquear contenido con probabilidad BAJA, MEDIA o ALTA de daño en estas categorías. El contenido que viole estas políticas será rechazado y recibirá un mensaje de error indicando que el contenido viola nuestra política de contenido.

## 4. Servicios de Terceros

### 4.1 Google Gemini AI

Para generar sugerencias de emoji, enviamos su entrada de texto al servicio de Google Gemini AI. Cuando utiliza Emojify Text:

- Su entrada de texto se transmite a los servidores de Google para su procesamiento
- El servicio de IA de Google analiza su texto y genera sugerencias de emoji
- Google puede procesar y almacenar su entrada de texto según sus prácticas de privacidad
- No controlamos cómo Google procesa sus datos una vez que se envían a su servicio

Para obtener más información sobre cómo Google maneja sus datos, consulte la [Política de Privacidad de Google](https://policies.google.com/privacy).

### 4.2 Firebase (Google)

Utilizamos Firebase, un servicio proporcionado por Google, para:

- Procesamiento del backend mediante Cloud Functions
- Análisis y estadísticas de uso (si está habilitado)
- Informes de errores y análisis de fallos

Firebase está sujeto a las prácticas de privacidad de Google. Para obtener más información, consulte la [Política de Privacidad de Firebase](https://firebase.google.com/support/privacy).

### 4.3 Google AdMob

Utilizamos Google AdMob para mostrar anuncios en la App. Cuando utiliza Emojify Text, AdMob puede recopilar y procesar la siguiente información:

- **Identificadores de Dispositivo:** Incluyendo el Identificador para Anunciantes (IDFA) en dispositivos iOS, si ha otorgado permiso para el seguimiento
- **Dirección IP:** La dirección IP de su dispositivo puede ser recopilada para servir anuncios relevantes
- **Información del Dispositivo:** Información sobre su dispositivo como modelo del dispositivo, versión del sistema operativo y configuración del dispositivo
- **Datos de Uso:** Información sobre cómo interactúa con los anuncios, incluyendo visualizaciones de anuncios, clics y métricas de participación
- **Registros de Fallos:** Información técnica relacionada con la entrega de anuncios, incluyendo informes de fallos y registros de errores

Esta información es utilizada por AdMob para:

- Servir anuncios personalizados o no personalizados basados en sus preferencias y consentimiento
- Medir el rendimiento y la efectividad de los anuncios
- Prevenir fraudes y asegurar la calidad de los anuncios
- Cumplir con las regulaciones publicitarias

La recopilación y uso de datos de AdMob se rige por las prácticas de privacidad de Google. Para obtener más información sobre cómo Google AdMob maneja sus datos, consulte la [Política de Privacidad de Google](https://policies.google.com/privacy) y la [Información de Privacidad de AdMob](https://support.google.com/admob/answer/6128543).

Puede controlar la publicidad personalizada a través de la configuración de privacidad de su dispositivo. En iOS, puede administrar los permisos de seguimiento a través de Configuración → Privacidad y Seguridad → Seguimiento.

## 5. Compartir y Divulgación de Datos

No vendemos, alquilamos ni comerciamos con su información personal. Sin embargo, compartimos sus datos con los siguientes servicios de terceros según sea necesario para proporcionar la funcionalidad de la App:

- **Google Gemini AI:** Su entrada de texto se envía al servicio de IA de Google para generar sugerencias de emoji
- **Firebase (Google):** Sus datos pueden ser procesados y almacenados por Firebase para operaciones del backend
- **Google AdMob:** Los identificadores de dispositivo, dirección IP, información del dispositivo, datos de uso y registros de fallos pueden compartirse con AdMob para servir y medir anuncios

También podemos divulgar su información si es requerido por ley o para proteger nuestros derechos y seguridad.

## 6. Retención de Datos

### 6.1 Datos Locales

Su historial de conversión almacenado localmente en su dispositivo:

- Se retiene hasta que lo elimine a través de la App
- Está limitado a un máximo de 100 conversiones recientes para prevenir un crecimiento ilimitado del almacenamiento
- Puede eliminarse en cualquier momento usando las funciones de eliminación de historial de la App

### 6.2 Datos en la Nube

Los datos procesados a través de Firebase y Google Gemini AI:

- Se procesan temporalmente para generar sugerencias de emoji
- Pueden ser retenidos por Google según sus políticas de retención de datos
- No almacenamos su entrada de texto o resultados de emoji en nuestros servidores después del procesamiento
- Los datos de limitación de velocidad (conteos de solicitudes y marcas de tiempo) se almacenan en Firebase Firestore y se usan únicamente para hacer cumplir límites de uso

## 7. Sus Derechos y Opciones

### 7.1 Acceso y Eliminación

Usted tiene derecho a:

- Ver su historial de conversión dentro de la App
- Eliminar elementos individuales del historial en cualquier momento
- Borrar todos los datos del historial de su dispositivo

### 7.2 Portabilidad de Datos

Su historial de conversión se almacena localmente en su dispositivo. Puede acceder a estos datos a través de la función de historial de la App.

### 7.3 Exclusión

Si no desea que sus datos sean procesados por servicios de terceros, puede dejar de usar la App. La App requiere procesamiento de datos por Google Gemini AI para funcionar.

## 8. Privacidad de los Niños

Emojify Text no está destinado para niños menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si cree que hemos recopilado información de un niño menor de 13 años, contáctenos inmediatamente.

## 9. Seguridad

Implementamos medidas técnicas y organizativas apropiadas para proteger su información:

- Sanitización de entrada para prevenir vulnerabilidades de seguridad
- Filtrado y validación de contenido para bloquear contenido inapropiado o dañino
- Detección de inyección de prompts para prevenir manipulación del sistema de IA
- Limitación de velocidad para prevenir abusos
- Comunicación segura de API usando HTTPS
- Almacenamiento seguro de claves API y credenciales sensibles

Implementamos limitación de velocidad para prevenir abusos: los usuarios están limitados a 10 solicitudes por minuto. Las solicitudes que excedan este límite serán bloqueadas temporalmente hasta que se restablezca la ventana de límite de velocidad.

Sin embargo, ningún método de transmisión a través de internet o almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por proteger su información, no podemos garantizar seguridad absoluta.

## 10. Transferencias Internacionales de Datos

Su información puede ser transferida y procesada en países distintos a su país de residencia. Cuando utiliza Emojify Text, sus datos pueden ser procesados por:

- Los servidores de Google, que pueden estar ubicados en varios países
- Los servicios de Firebase, que operan globalmente

Al usar la App, usted consiente la transferencia de su información a estos países.

## 11. Cambios a Esta Política de Privacidad

Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos sobre cualquier cambio mediante:

- Publicar la nueva Política de Privacidad en esta página
- Actualizar la fecha de "Última actualización" en la parte superior de esta política

Se le aconseja revisar esta Política de Privacidad periódicamente para ver cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.

## 12. Contáctenos

Si tiene alguna pregunta sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos en:

- Correo electrónico: [info@inventa-labs.com](mailto:info@inventa-labs.com)
- Página de Soporte: [Visite nuestra página de Soporte](/support/)

**Última actualización: 20 de diciembre de 2025**
