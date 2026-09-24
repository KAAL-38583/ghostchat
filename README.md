# GhostChat

**Plataforma de mensajería privada y comunicación en tiempo real**

| | |
|---|---|
| Versión | 1.0.0 |
| Runtime | Node.js 18+ |
| Framework | Express.js 4.18 |
| Comunicación en tiempo real | Socket.IO 4.7 |
| Licencia | Educativa |

---

## Tabla de contenido

1. [Introducción](#introducción)
2. [Objetivos](#objetivos)
3. [Descripción del proyecto](#descripción-del-proyecto)
4. [Características principales](#características-principales)
5. [Tecnologías utilizadas](#tecnologías-utilizadas)
6. [Arquitectura del sistema](#arquitectura-del-sistema)
7. [Estructura del proyecto](#estructura-del-proyecto)
8. [Instalación](#instalación)
9. [Configuración](#configuración)
10. [Funcionamiento y flujo de datos](#funcionamiento-y-flujo-de-datos)
11. [Seguridad](#seguridad)
12. [Rendimiento](#rendimiento)
13. [Escalabilidad](#escalabilidad)
14. [Evaluación de calidad (ISO/IEC 25010)](#evaluación-de-calidad-isoiec-25010)
15. [Trabajo futuro](#trabajo-futuro)
16. [Contribuciones](#contribuciones)
17. [Licencia](#licencia)
18. [Autor](#autor)

---

## Introducción

GhostChat es una aplicación web de mensajería desarrollada sobre el ecosistema JavaScript, orientada a la comunicación en tiempo real entre múltiples clientes mediante conexiones persistentes basadas en Socket.IO.

El proyecto implementa una arquitectura cliente-servidor en la que un servidor construido con Express administra las conexiones entrantes, mientras que Socket.IO gestiona el intercambio bidireccional e inmediato de mensajes.

A diferencia de las aplicaciones que dependen exclusivamente de solicitudes HTTP discretas, GhostChat mantiene una conexión abierta entre el navegador y el servidor durante toda la sesión, reduciendo la latencia y mejorando la experiencia del usuario final.

El sistema fue diseñado bajo principios de simplicidad, modularidad y mantenibilidad, con el propósito de servir como base de aprendizaje para el desarrollo de aplicaciones en tiempo real.

---

## Objetivos

### Objetivo general

Desarrollar una plataforma de mensajería basada en tecnologías web modernas que permita la comunicación en tiempo real entre usuarios conectados, garantizando bajo tiempo de respuesta, escalabilidad y una arquitectura mantenible.

### Objetivos específicos

- Implementar un servidor HTTP utilizando Express.js.
- Establecer comunicación bidireccional mediante Socket.IO.
- Minimizar la latencia en el intercambio de mensajes.
- Incorporar mecanismos básicos de seguridad mediante Helmet.
- Proteger el servidor frente a volúmenes excesivos de solicitudes mediante Express Rate Limit.
- Diseñar una estructura de proyecto que facilite ampliaciones futuras.
- Aplicar buenas prácticas de desarrollo con Node.js.
- Servir como referencia académica para el estudio de arquitecturas cliente-servidor.

---

## Descripción del proyecto

GhostChat demuestra el funcionamiento interno de un sistema de mensajería instantánea. El servidor administra todas las conexiones activas y distribuye los mensajes recibidos a los clientes correspondientes.

Cada cliente mantiene una conexión persistente con el servidor mediante WebSockets, eliminando la necesidad de solicitudes HTTP repetidas. Este modelo permite que los mensajes se transmitan prácticamente en tiempo real.

La arquitectura, deliberadamente ligera, facilita tanto la comprensión del código como su mantenimiento, siendo adecuada para proyectos académicos, demostraciones técnicas y futuras ampliaciones funcionales.

---

## Características principales

| Característica | Descripción |
|---|---|
| Comunicación en tiempo real | Los mensajes se transmiten instantáneamente entre usuarios mediante Socket.IO. |
| Baja latencia | Las conexiones persistentes reducen significativamente el tiempo de envío y recepción. |
| Plataforma web | Funciona directamente desde el navegador, sin instalación de software adicional. |
| Seguridad básica integrada | Protección mediante Helmet y Express Rate Limit. |
| Arquitectura sencilla | Estructura clara que facilita la comprensión y modificación del código. |
| Footprint reducido | Número mínimo de dependencias, lo que agiliza la instalación. |
| Escalabilidad | La arquitectura permite incorporar nuevas funcionalidades sin reestructurar el sistema. |

---

## Tecnologías utilizadas

### Backend

**Node.js**
Entorno de ejecución sobre el cual corre el servidor. Permite ejecutar JavaScript fuera del navegador y gestionar múltiples conexiones concurrentes.

**Express.js**
Framework responsable de:
- Administración de rutas.
- Procesamiento de solicitudes.
- Envío de respuestas.
- Servicio de archivos estáticos.

**Socket.IO**
Biblioteca utilizada para la comunicación en tiempo real entre servidor y clientes. Ofrece:
- Comunicación bidireccional.
- Eventos personalizados.
- Reconexión automática.
- Baja latencia.

**Helmet**
Middleware de seguridad que configura automáticamente cabeceras HTTP para mitigar riesgos comunes, entre ellas:
- `X-Frame-Options`
- `Referrer-Policy`
- `X-Content-Type-Options`

**Express Rate Limit**
Limita la cantidad de solicitudes por cliente en un intervalo determinado, ayudando a prevenir:
- Ataques de fuerza bruta.
- Consumo excesivo de recursos.
- Denegación de servicio básica.

**UUID**
Genera identificadores únicos universales, evitando colisiones al identificar entidades dentro del sistema.

### Frontend

El cliente se desarrolla con tecnologías estándar del ecosistema web:

- HTML5
- CSS3
- JavaScript

Esto garantiza compatibilidad con cualquier navegador moderno, sin necesidad de complementos adicionales.

---

## Arquitectura del sistema

GhostChat implementa una arquitectura cliente-servidor. El navegador actúa como cliente, Express gestiona las conexiones entrantes y Socket.IO mantiene la comunicación persistente entre ambas partes.

```
                     INTERNET
                        │
             ┌──────────────────────┐
             │       Cliente        │
             │ HTML · CSS · JavaScript │
             └──────────┬───────────┘
                        │
                 HTTP / WebSocket
                        │
             ┌──────────▼───────────┐
             │      Express.js      │
             │       Servidor       │
             └──────────┬───────────┘
                        │
                  Eventos Socket.IO
                        │
             ┌──────────▼───────────┐
             │  Usuarios conectados │
             └──────────────────────┘
```

La conexión permanece abierta durante toda la sesión del usuario, permitiendo el intercambio inmediato de información.

---

## Estructura del proyecto

```text
ghostchat/
│
├── public/
│   ├── index.html
│   ├── intro.html
│   ├── style.css
│   └── terminos.html
│
├── server/
│   └── index.js
│
├── package.json
├── package-lock.json
└── index.html
```

### `public/`
Contiene los archivos servidos directamente al navegador: interfaces HTML, hojas de estilo y recursos estáticos del cliente.

### `server/`
Contiene el núcleo de la aplicación. El archivo `index.js` es responsable de:
- Inicializar Express.
- Configurar el servidor HTTP.
- Inicializar Socket.IO.
- Gestionar las conexiones de los clientes.
- Recibir y distribuir eventos y mensajes.

### `package.json`
Define la configuración principal del proyecto:

```json
{
  "name": "ghostchat",
  "version": "1.0.0",
  "description": "Chat privado y efímero - GhostChat",
  "main": "server/index.js"
}
```

### `package-lock.json`
Generado automáticamente por npm; fija las versiones exactas de cada dependencia instalada para garantizar reproducibilidad entre entornos. No debe modificarse manualmente.

---

## Instalación

**1. Clonar el repositorio**

```bash
git clone https://github.com/KAAL-38583/ghostchat.git
```

**2. Acceder al directorio del proyecto**

```bash
cd ghostchat
```

**3. Instalar dependencias**

```bash
npm install
```

**4. Iniciar el servidor**

```bash
npm start
```

Este comando ejecuta `server/index.js`.

**5. Acceder desde el navegador**

```
http://localhost:3000
```

o, alternativamente:

```
http://127.0.0.1:3000
```

(la dirección exacta depende de la configuración del entorno).

---

## Configuración

El punto de entrada del proyecto está definido mediante:

```json
"main": "server/index.js"
```

y el script de arranque:

```json
"scripts": {
  "start": "node server/index.js"
}
```

Esto permite iniciar la aplicación completa con un único comando: `npm start`.

### Dependencias principales

| Paquete | Función |
|---|---|
| Express | Servidor HTTP: rutas, archivos estáticos, procesamiento de solicitudes. |
| Socket.IO | Comunicación bidireccional en tiempo real, con reconexión automática. |
| Helmet | Cabeceras HTTP de seguridad (clickjacking, MIME sniffing, referrer policy). |
| Express Rate Limit | Control de volumen de solicitudes por cliente. |
| UUID | Generación de identificadores únicos para usuarios, mensajes y sesiones. |

---

## Funcionamiento y flujo de datos

### Flujo general

```text
Usuario → Abre la aplicación → Carga del frontend → Conexión con Express
→ Inicialización de Socket.IO → Conexión establecida → Usuario envía mensaje
→ Servidor recibe el evento → Procesamiento → Distribución del mensaje
→ Todos los clientes reciben la actualización
```

### Comunicación mediante Socket.IO

GhostChat utiliza una arquitectura basada en eventos: cada acción del usuario genera un evento que viaja al servidor, es procesado y posteriormente distribuido a los demás clientes conectados. Este mecanismo reduce el número de solicitudes HTTP y mejora la velocidad de comunicación.

```text
Cliente A ── socket.emit() ──► Servidor Express ── procesamiento ──►
socket.broadcast() ──► Cliente B / Cliente C / Cliente D
```

### Ciclo de vida de un mensaje

1. El usuario redacta un mensaje.
2. El navegador detecta la acción.
3. El cliente emite el mensaje mediante Socket.IO.
4. El servidor recibe el evento.
5. El servidor valida la información.
6. El servidor distribuye el mensaje.
7. Los demás clientes reciben la actualización.
8. La interfaz renderiza el nuevo mensaje.

Este ciclo se completa en milisegundos, ofreciendo una experiencia fluida al usuario.

---

## Seguridad

Aunque GhostChat es un proyecto de carácter educativo, incorpora mecanismos básicos orientados a reducir riesgos comunes en aplicaciones web.

**Helmet** configura automáticamente cabeceras HTTP de seguridad, reduciendo la superficie de ataque sin requerir configuración manual. Entre las protecciones implementadas:

- Prevención de clickjacking.
- Mitigación de MIME sniffing.
- Configuración de políticas de referencia (Referrer Policy).
- Restricción de contenido potencialmente inseguro.

**Express Rate Limit** restringe el número de solicitudes que un cliente puede realizar en un intervalo determinado, mitigando ataques de fuerza bruta, denegación de servicio básica y consumo excesivo de recursos.

**Socket.IO** mantiene la conexión abierta durante toda la sesión, reduciendo tráfico HTTP y mejorando la velocidad de respuesta frente al modelo tradicional basado en solicitudes discretas.

**UUID** garantiza identificadores únicos, evitando colisiones al referenciar entidades del sistema.

### Recomendaciones para versiones futuras

- Autenticación mediante JWT.
- Autenticación multifactor (MFA).
- Cifrado de extremo a extremo (E2EE).
- Implementación de HTTPS.
- Cookies seguras y protección CSRF.
- Validación y sanitización avanzada de entradas.
- Registro de auditoría y gestión de sesiones.
- Mecanismos de recuperación segura de cuentas.

---

## Rendimiento

El uso de Socket.IO elimina la necesidad de solicitudes HTTP repetitivas, reduciendo el tiempo de respuesta. Beneficios observados:

- Comunicación inmediata.
- Menor utilización de ancho de banda.
- Reducción de solicitudes HTTP.
- Baja latencia general.

Al tratarse de una arquitectura basada en eventos, el servidor procesa información únicamente cuando ocurre una acción concreta, optimizando el uso de recursos.

---

## Escalabilidad

La arquitectura actual facilita la incorporación progresiva de nuevas funcionalidades sin requerir una reestructuración completa del proyecto. Posibles ampliaciones incluyen:

- Registro e inicio de sesión de usuarios.
- Persistencia en base de datos.
- Chats privados y grupales.
- Estados de conexión e indicador de "escribiendo...".
- Compartición de archivos e imágenes.
- Mensajes de voz y videollamadas (VoIP).
- Notificaciones push.
- Clientes móviles y de escritorio.

---

## Evaluación de calidad (ISO/IEC 25010)

La norma ISO/IEC 25010 define un conjunto de características para evaluar objetivamente la calidad de un producto software. A continuación se presenta la evaluación de GhostChat conforme a dicho estándar.

| Característica | Evaluación | Nivel |
|---|---|:---:|
| Adecuación funcional | Cumple el objetivo principal mediante comunicación en tiempo real; pendiente autenticación e historial de conversaciones. | ⭐⭐⭐⭐☆ |
| Eficiencia del desempeño | Baja latencia gracias a Socket.IO; pendiente balanceo de carga y caché. | ⭐⭐⭐⭐☆ |
| Compatibilidad | Funciona en Chrome, Firefox, Edge, Opera y Brave. | ⭐⭐⭐⭐⭐ |
| Usabilidad | Interfaz sencilla; pendiente accesibilidad, modo oscuro y diseño responsive. | ⭐⭐⭐⭐☆ |
| Fiabilidad | Reconexión automática de Socket.IO; pendiente persistencia de mensajes y registro de errores. | ⭐⭐⭐⭐☆ |
| Seguridad | Helmet, Rate Limit y UUID implementados; pendiente JWT, HTTPS, E2EE y MFA. | ⭐⭐⭐☆☆ |
| Mantenibilidad | Código reducido y organizado; pendiente separación por módulos, controladores y servicios. | ⭐⭐⭐⭐☆ |
| Portabilidad | Compatible con Windows, Linux y macOS. | ⭐⭐⭐⭐⭐ |

### Conclusión de la evaluación

GhostChat constituye una base sólida para una plataforma de mensajería en tiempo real. Su arquitectura ligera, sustentada en Express.js y Socket.IO, junto con mecanismos básicos de seguridad como Helmet y Express Rate Limit, permite ofrecer una aplicación funcional, rápida y de fácil mantenimiento.

Existen oportunidades de mejora relevantes, particularmente en autenticación, cifrado y persistencia de datos. No obstante, el proyecto cumple adecuadamente su propósito académico y constituye una base apropiada para evolucionar hacia una plataforma de comunicación más robusta.

---

## Trabajo futuro

- Implementación de autenticación y gestión de usuarios.
- Persistencia de mensajes en base de datos.
- Cifrado de extremo a extremo.
- Soporte para archivos multimedia.
- Aplicaciones cliente móviles y de escritorio.

## Contribuciones

Las contribuciones son bienvenidas mediante *pull requests*. Para cambios significativos, se recomienda abrir primero un *issue* para discutir la propuesta.

## Licencia

Proyecto de carácter educativo.

## Autor

*(Completar con los datos del autor o equipo de desarrollo.)*
