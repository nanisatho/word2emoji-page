---
title: Soporte y Contacto
---

# Soporte y Contacto

¡Estamos aquí para ayudar! Si tiene preguntas, necesita asistencia o desea reportar un problema con Emojify Text, no dude en contactarnos.

## Contáctenos

Para consultas de soporte, contáctenos en:

- **Correo electrónico:** [info@inventa-labs.com](mailto:info@inventa-labs.com)

Nuestro objetivo es responder todas las consultas dentro de 48 horas durante días hábiles.

## Preguntas Frecuentes

### ¿Cómo funciona Emojify Text?

Emojify Text utiliza inteligencia artificial (Google Gemini AI modelo gemini-2.0-flash-lite) para convertir su entrada de texto en representaciones de emoji. Simplemente ingrese texto (hasta 1,000 caracteres), y la App generará hasta 5 opciones de emoji para que elija. Puede configurar la cantidad de emojis devueltos (de 1 a 5) y seleccionar preferencias de color.

### ¿Mis datos son privados?

Su historial de conversión se almacena localmente en su dispositivo. Sin embargo, su entrada de texto se envía a Google Gemini AI para su procesamiento. Por favor, revise nuestra [Política de Privacidad](/privacy-policy/) para obtener información detallada sobre la recopilación y el uso de datos.

### ¿Puedo eliminar mi historial?

¡Sí! Puede eliminar elementos individuales del historial o borrar todo el historial a través de la función de historial de la App. Sus datos se almacenan localmente en su dispositivo, por lo que tiene control total sobre ellos.

### ¿Por qué necesito una conexión a internet?

Emojify Text requiere una conexión a internet porque utiliza Google Gemini AI para generar sugerencias de emoji. La App realiza llamadas de red seguras a Firebase Cloud Functions, que procesan su entrada de texto usando Google Gemini AI y devuelven opciones de emoji. La App también utiliza Firebase App Check para verificar la autenticidad de la app y garantizar una comunicación segura.

### ¿Qué pasa si la App no funciona?

Si está experimentando problemas:

- Verifique su conexión a internet
- Asegúrese de no haber excedido el límite de velocidad (10 solicitudes por minuto - intente nuevamente después de un minuto)
- Verifique que su entrada esté entre 1 y 1,000 caracteres y contenga texto válido
- Verifique que su versión de iOS admita la App (se recomienda iOS 14.0 o posterior para todas las funciones)
- Reinicie la App
- Si los problemas persisten, contáctenos en [info@inventa-labs.com](mailto:info@inventa-labs.com)

### ¿Hay restricciones de edad?

Emojify Text está destinado a usuarios que tengan al menos 13 años de edad. Los usuarios menores de 13 años deben usar la App bajo supervisión parental.

### ¿Puedo usar los emojis generados comercialmente?

Sí, puede usar las sugerencias de emoji generadas por la App para fines personales o comerciales. Sin embargo, por favor revise nuestros [Términos de Servicio](/terms-of-service/) para obtener detalles completos.

### ¿Qué tan precisas son las sugerencias de emoji?

Las sugerencias de emoji son generadas por IA (Google Gemini AI modelo gemini-2.0-flash-lite) y pueden variar en precisión y adecuación. Proporcionamos hasta 5 opciones por solicitud para que pueda elegir el emoji más adecuado para sus necesidades. La App también admite preferencias de idioma y filtros de paleta de colores para refinar los resultados. Por favor, revise las sugerencias antes de usar.

### ¿Qué idiomas admite Emojify Text?

Emojify Text admite los siguientes idiomas para descripciones de emoji:

- Inglés (en)
- Español (es)
- Francés (fr)
- Alemán (de)
- Italiano (it)
- Japonés (ja)
- Coreano (ko)
- Portugués - Brasileño (pt-BR)
- Ruso (ru)
- Chino - Simplificado (zh-Hans)

Nota: Si bien las descripciones pueden estar en cualquier idioma admitido, el campo "vibe" en los resultados siempre permanece en inglés.

### ¿Por qué se bloqueó mi contenido?

Emojify Text implementa filtrado de contenido para mantener un servicio seguro y apropiado. El filtrado de contenido se realiza principalmente mediante los filtros de seguridad integrados de Google Gemini AI, que configuramos para bloquear contenido inapropiado. Su entrada puede ser bloqueada si viola nuestra política de contenido, que restringe:

- Contenido de acoso o amenazante
- Discurso de odio o contenido discriminatorio
- Contenido sexualmente explícito
- Contenido que promueve violencia, autolesión o actividades ilegales
- Intentos de manipular o explotar el sistema de IA

**Nota:** No somos responsables del contenido que los filtros de seguridad de Gemini no detectan. Siempre debe revisar el contenido generado por IA antes de usarlo. Si recibe un mensaje de que su contenido viola nuestra política de contenido, intente con palabras o frases diferentes. La App también hace cumplir los límites de longitud de entrada y valida la entrada en nuestro backend para prevenir abusos.

Además, las solicitudes que excedan los límites de tiempo de procesamiento serán terminadas. Las solicitudes de API tienen un tiempo de espera de 30 segundos para el procesamiento de IA, y la ejecución general de la función tiene un límite de tiempo de espera de 60 segundos. La validación de entrada también se hace cumplir: su texto debe estar entre 1 y 1,000 caracteres (después de recortar), contener caracteres UTF-8 válidos y no puede estar vacío o contener solo espacios en blanco. Si su solicitud se agota el tiempo de espera o falla la validación, recibirá un mensaje de error y puede intentar nuevamente. Para más información, por favor revise nuestros [Términos de Servicio](/terms-of-service/).

### ¿Qué sucede si mi solicitud se agota el tiempo de espera?

Emojify Text tiene límites de tiempo de espera integrados para asegurar un servicio receptivo y prevenir que las solicitudes se queden colgadas indefinidamente. Si su solicitud excede estos límites, será terminada automáticamente:

- **Tiempo de espera del procesamiento de API:** 30 segundos para el procesamiento de IA por Google Gemini AI
- **Tiempo de espera general de la función:** 60 segundos para el procesamiento completo de la solicitud

Si su solicitud se agota el tiempo de espera, recibirá un mensaje de error que indica que el servicio no está disponible temporalmente. Esto puede suceder si:

- El procesamiento de IA tarda más de lo esperado
- Hay problemas de conectividad de red
- El servicio está experimentando una alta carga

Si encuentra un error de tiempo de espera, por favor intente nuevamente. La mayoría de las solicitudes se completan muy dentro de los límites de tiempo de espera. Los errores de tiempo de espera pueden ocurrir si su entrada es muy larga (acercándose al límite de 1,000 caracteres) o si hay problemas de conectividad de red. Si experimenta constantemente errores de tiempo de espera, intente acortar su entrada o verifique su conexión a internet. Si los problemas persisten, contáctenos en [info@inventa-labs.com](mailto:info@inventa-labs.com).

## Reportar Problemas

Si encuentra un error, un bug o tiene una solicitud de función, envíenos un correo electrónico a [info@inventa-labs.com](mailto:info@inventa-labs.com) con la siguiente información:

- Descripción del problema
- Pasos para reproducir (si aplica)
- Modelo de dispositivo y versión de iOS
- Versión de la App (si se conoce)
- Texto de entrada que causó el problema (si aplica, notando que será tratado de forma confidencial)
- Cualquier mensaje de error que haya recibido
- Capturas de pantalla (si es útil)

### Limitación de Velocidad

Emojify Text hace cumplir la limitación de velocidad para asegurar un uso justo y prevenir abusos:

- **Límite:** 10 solicitudes por minuto por usuario
- **Ventana:** Las solicitudes se cuentan dentro de una ventana de 60 segundos rodante
- **¿Qué sucede si excedo el límite?** Recibirá un mensaje de error "Límite de velocidad excedido. Por favor, intente nuevamente más tarde." Simplemente espere a que la ventana de límite de velocidad se restablezca (hasta 1 minuto) antes de intentar nuevamente.

### Límites de Entrada

Emojify Text tiene los siguientes requisitos y límites de entrada:

- **Longitud mínima:** 1 carácter (después de recortar espacios en blanco)
- **Longitud máxima:** 1,000 caracteres
- **Codificación de caracteres:** Debe ser UTF-8 válido
- **Contenido:** No puede estar vacío o contener solo espacios en blanco
- **Sanitización de entrada:** Los bytes nulos y ciertos caracteres de control se eliminan automáticamente, y los espacios en blanco excesivos se normalizan

## Privacidad y Legal

Para obtener información sobre cómo manejamos sus datos, consulte nuestra [Política de Privacidad](/privacy-policy/).

Para los términos y condiciones de uso, consulte nuestros [Términos de Servicio](/terms-of-service/).

## Comentarios

¡Valoramos sus comentarios! Si tiene sugerencias para mejorar Emojify Text, compártalas con nosotros en [info@inventa-labs.com](mailto:info@inventa-labs.com).