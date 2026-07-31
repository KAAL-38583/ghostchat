<div align="center">

# 👻 GhostChat

### Plataforma de mensajería privada y comunicación en tiempo real

![Versión](https://img.shields.io/badge/Versión-1.0.0-blue?style=for-the-badge)
![NodeJS](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.18-black?style=for-the-badge&logo=express)
![Socket.IO](https://img.shields.io/badge/Socket.IO-4.7-white?style=for-the-badge&logo=socket.io)
![Licencia](https://img.shields.io/badge/Licencia-Educativa-orange?style=for-the-badge)

---

*"La privacidad no consiste en esconder información; consiste en tener el control sobre ella."*

</div>

---

# 📖 Tabla de Contenido

- Introducción
- Objetivos
- Descripción del proyecto
- Características
- Tecnologías utilizadas
- Arquitectura del sistema
- Estructura del proyecto
- Instalación
- Configuración
- Funcionamiento
- Comunicación en tiempo real
- Seguridad
- Rendimiento
- Escalabilidad
- Evaluación ISO/IEC 25010
- Buenas prácticas implementadas
- Futuras mejoras
- Contribuciones
- Licencia
- Autor

---

# 📚 Introducción

GhostChat es una aplicación web de mensajería privada desarrollada utilizando tecnologías modernas del ecosistema JavaScript. Su objetivo principal es ofrecer un sistema de comunicación en tiempo real entre múltiples clientes mediante conexiones persistentes utilizando Socket.IO.

El proyecto fue concebido como una implementación práctica de una arquitectura Cliente-Servidor, donde un servidor desarrollado con Express administra las conexiones de los usuarios mientras Socket.IO permite el intercambio instantáneo de mensajes.

A diferencia de las aplicaciones tradicionales que dependen exclusivamente del protocolo HTTP, GhostChat mantiene una conexión abierta entre el navegador y el servidor, reduciendo significativamente la latencia y mejorando la experiencia del usuario.

El sistema fue diseñado siguiendo principios de simplicidad, modularidad y facilidad de mantenimiento, convirtiéndose en una excelente base para el aprendizaje de tecnologías relacionadas con aplicaciones en tiempo real.

---

# 🎯 Objetivos

## Objetivo General

Desarrollar una plataforma de mensajería privada basada en tecnologías web modernas que permita la comunicación en tiempo real entre usuarios conectados, garantizando rapidez, escalabilidad y una arquitectura fácilmente mantenible.

---

## Objetivos Específicos

- Implementar un servidor utilizando Express.js.

- Establecer comunicación bidireccional mediante Socket.IO.

- Reducir la latencia durante el intercambio de mensajes.

- Implementar mecanismos básicos de seguridad utilizando Helmet.

- Proteger el servidor frente a solicitudes excesivas mediante Express Rate Limit.

- Facilitar futuras ampliaciones del proyecto mediante una estructura sencilla.

- Aplicar buenas prácticas de desarrollo utilizando Node.js.

- Servir como proyecto académico para el estudio de arquitecturas cliente-servidor.

---

# 📖 Descripción del Proyecto

GhostChat es una aplicación web orientada a demostrar el funcionamiento interno de un sistema de mensajería instantánea.

El servidor es responsable de administrar todas las conexiones activas y distribuir los mensajes recibidos hacia los clientes correspondientes.

Cada cliente mantiene una conexión permanente con el servidor utilizando WebSockets, lo que elimina la necesidad de realizar solicitudes HTTP continuas.

Gracias a este modelo de comunicación, los mensajes son enviados y recibidos prácticamente en tiempo real.

El proyecto utiliza una arquitectura ligera que facilita tanto su comprensión como su mantenimiento, siendo apropiado para proyectos académicos, demostraciones y futuras ampliaciones.

---

# ⭐ Características Principales

## 💬 Comunicación en tiempo real

Los mensajes se transmiten instantáneamente entre los usuarios mediante Socket.IO.

---

## ⚡ Baja latencia

La utilización de conexiones persistentes reduce considerablemente el tiempo necesario para enviar y recibir información.

---

## 🌐 Plataforma Web

La aplicación funciona directamente desde el navegador sin necesidad de instalar software adicional.

---

## 🔒 Seguridad básica integrada

GhostChat implementa mecanismos de protección mediante Helmet y Express Rate Limit.

---

## 🧩 Arquitectura sencilla

La organización del proyecto facilita la comprensión del código y futuras modificaciones.

---

## 📦 Proyecto ligero

El número reducido de dependencias permite una instalación rápida y sencilla.

---

## 📈 Escalable

Aunque actualmente es un proyecto compacto, la arquitectura permite incorporar nuevas funcionalidades sin necesidad de reestructurar completamente el sistema.

---

# 🛠 Tecnologías Utilizadas

## Backend

### Node.js

Entorno de ejecución utilizado para desarrollar el servidor.

Permite ejecutar JavaScript fuera del navegador y gestionar múltiples conexiones simultáneamente.

---

### Express.js

Framework encargado de crear el servidor HTTP.

Sus responsabilidades incluyen:

- Administración de rutas.
- Procesamiento de solicitudes.
- Envío de respuestas.
- Servir archivos estáticos.

---

### Socket.IO

Biblioteca utilizada para implementar comunicación en tiempo real entre servidor y clientes.

Permite:

- Comunicación bidireccional.
- Eventos personalizados.
- Reconexión automática.
- Baja latencia.

---

### Helmet

Middleware de seguridad encargado de configurar automáticamente diferentes cabeceras HTTP para reducir riesgos comunes en aplicaciones web.

Entre ellas:

- X-Frame-Options
- Referrer Policy
- X-Content-Type-Options

---

### Express Rate Limit

Protege el servidor limitando la cantidad de solicitudes que un cliente puede realizar durante un periodo determinado.

Esto ayuda a prevenir:

- Ataques de fuerza bruta.
- Consumo excesivo de recursos.
- Denegación de servicio básica.

---

### UUID

Biblioteca utilizada para generar identificadores únicos universalmente.

Su utilización evita colisiones al crear identificadores dentro de la aplicación.

---

# 🎨 Tecnologías del Frontend

El cliente está desarrollado utilizando tecnologías estándar del desarrollo web.

- HTML5
- CSS3
- JavaScript

Esto permite que GhostChat pueda ejecutarse en cualquier navegador moderno sin necesidad de instalar complementos adicionales.

---

# 🏛 Arquitectura del Sistema

GhostChat implementa una arquitectura Cliente-Servidor.

El navegador actúa como cliente mientras Express administra todas las conexiones.

Socket.IO se encarga de mantener una comunicación permanente entre ambas partes.

```

                     INTERNET

                          │

              ┌──────────────────────┐
              │      Cliente         │
              │ HTML CSS JavaScript  │
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
              │ Usuarios Conectados  │
              └──────────────────────┘

```

La comunicación permanece abierta durante toda la sesión del usuario, permitiendo el intercambio inmediato de información.

---

---

# 📁 Estructura del Proyecto

La organización del proyecto fue diseñada para separar claramente los recursos del cliente de la lógica del servidor, facilitando su mantenimiento y futuras ampliaciones.

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

---

# 📂 Descripción de cada directorio

## 📁 public/

Esta carpeta contiene todos los archivos públicos que son enviados directamente al navegador.

En ella se encuentran:

- Interfaces HTML.
- Hojas de estilo CSS.
- Recursos utilizados por el cliente.
- Archivos estáticos.

Todo el contenido de esta carpeta puede ser servido directamente por Express.

---

## 📁 server/

Esta carpeta contiene el núcleo de la aplicación.

Dentro de ella se encuentra el archivo:

```
index.js
```

Este archivo es responsable de:

- Inicializar Express.
- Configurar el servidor HTTP.
- Inicializar Socket.IO.
- Gestionar las conexiones de los clientes.
- Recibir eventos.
- Enviar mensajes.
- Mantener activa la comunicación en tiempo real.

En otras palabras, representa el corazón de GhostChat.

---

## 📄 package.json

Este archivo contiene la configuración principal del proyecto.

Actualmente define:

```json
{
  "name": "ghostchat",
  "version": "1.0.0",
  "description": "Chat privado y efímero - GhostChat",
  "main": "server/index.js"
}
```

También especifica las dependencias necesarias para ejecutar la aplicación.

---

## 📄 package-lock.json

Este archivo es generado automáticamente por npm.

Su función consiste en fijar exactamente las versiones instaladas de cada dependencia para garantizar que el proyecto funcione de la misma manera en diferentes equipos.

No debe modificarse manualmente.

---

# 🚀 Instalación

GhostChat ha sido diseñado para instalarse en pocos minutos.

## Paso 1

Clonar el repositorio.

```bash
git clone https://github.com/KAAL-38583/ghostchat.git
```

---

## Paso 2

Ingresar al directorio.

```bash
cd ghostchat
```

---

## Paso 3

Instalar todas las dependencias.

```bash
npm install
```

Durante este proceso npm descargará automáticamente todas las librerías necesarias para ejecutar el proyecto.

---

## Paso 4

Iniciar el servidor.

```bash
npm start
```

El comando ejecutará automáticamente:

```
server/index.js
```

---

# 🌐 Acceso desde el navegador

Una vez iniciado el servidor, abra su navegador preferido.

Ingrese la dirección correspondiente al puerto configurado.

Generalmente:

```
http://localhost:3000
```

o

```
http://127.0.0.1:3000
```

Dependiendo de la configuración utilizada.

---

# ⚙ Configuración del Proyecto

Actualmente GhostChat posee una configuración sencilla.

El punto de entrada está definido mediante:

```json
"main": "server/index.js"
```

y el script principal es:

```json
"scripts": {
    "start": "node server/index.js"
}
```

Esto permite iniciar toda la aplicación simplemente ejecutando:

```bash
npm start
```

---

# 📦 Dependencias

GhostChat utiliza únicamente las librerías necesarias para ofrecer una aplicación ligera y eficiente.

## Express

Express es el framework utilizado para construir el servidor HTTP.

Permite:

- Crear rutas.
- Servir archivos.
- Procesar solicitudes.
- Enviar respuestas.

---

## Socket.IO

Socket.IO implementa comunicación bidireccional en tiempo real.

Gracias a esta tecnología los mensajes son enviados instantáneamente entre usuarios.

Entre sus ventajas destacan:

- Reconexión automática.
- Comunicación basada en eventos.
- Baja latencia.
- Compatibilidad con múltiples navegadores.

---

## Helmet

Helmet fortalece la seguridad del servidor configurando automáticamente múltiples cabeceras HTTP.

Entre las protecciones que ofrece destacan:

- Prevención de Clickjacking.
- Protección frente a ataques MIME.
- Configuración de políticas de referencia.
- Restricción de contenido potencialmente inseguro.

---

## Express Rate Limit

Este middleware controla la cantidad de solicitudes permitidas por cliente.

Su objetivo es evitar:

- Ataques por fuerza bruta.
- Saturación del servidor.
- Consumo excesivo de recursos.

---

## UUID

UUID genera identificadores únicos.

Estos identificadores pueden utilizarse para:

- Usuarios.
- Conversaciones.
- Mensajes.
- Sesiones.

---

# 🔄 Flujo General del Sistema

El funcionamiento general de GhostChat puede resumirse de la siguiente manera.

```text
Usuario

↓

Abre la aplicación

↓

Carga del Frontend

↓

Conexión con Express

↓

Inicialización de Socket.IO

↓

Conexión establecida

↓

Usuario escribe un mensaje

↓

Servidor recibe el evento

↓

Procesamiento

↓

Distribución del mensaje

↓

Todos los clientes reciben la actualización
```

---

# 📡 Comunicación mediante Socket.IO

GhostChat utiliza una arquitectura basada en eventos.

Cada vez que un usuario realiza una acción, se genera un evento que viaja hasta el servidor.

El servidor procesa la información y posteriormente distribuye dicho evento a los demás clientes conectados.

Este mecanismo reduce considerablemente el número de solicitudes HTTP y mejora la velocidad de comunicación.

```text
Cliente A

        │

socket.emit()

        │

        ▼

Servidor Express

        │

Procesamiento

        │

socket.broadcast()

        │

        ▼

Cliente B

Cliente C

Cliente D
```

---

# 💬 Ciclo de vida de un mensaje

Cada mensaje enviado sigue el siguiente proceso:

1. El usuario escribe un mensaje.

2. El navegador detecta la acción.

3. JavaScript envía el mensaje mediante Socket.IO.

4. El servidor recibe el evento.

5. El servidor valida la información.

6. El servidor distribuye el mensaje.

7. Los demás clientes reciben la actualización.

8. La interfaz muestra el nuevo mensaje en tiempo real.

Este proceso ocurre en cuestión de milisegundos, ofreciendo una experiencia fluida al usuario.
---

# 🔒 Seguridad

La seguridad constituye uno de los aspectos más importantes en cualquier aplicación que maneje comunicación entre usuarios. Aunque GhostChat es un proyecto de carácter educativo, incorpora mecanismos básicos que ayudan a reducir riesgos comunes presentes en aplicaciones web.

El servidor implementa diferentes capas de protección que fortalecen la comunicación entre cliente y servidor.

## Helmet

GhostChat utiliza **Helmet**, un middleware especializado en configurar automáticamente diferentes cabeceras HTTP de seguridad.

Su objetivo es disminuir la superficie de ataque de la aplicación sin necesidad de configurar manualmente cada encabezado.

Entre las protecciones implementadas se encuentran:

- Protección contra Clickjacking.
- Prevención del MIME Sniffing.
- Configuración de políticas de referencia (Referrer Policy).
- Restricción del contenido inseguro.
- Protección frente a algunas vulnerabilidades del navegador.

El uso de Helmet representa una buena práctica ampliamente utilizada en aplicaciones desarrolladas con Express.

---

## Express Rate Limit

Para evitar abusos sobre el servidor se implementa **Express Rate Limit**.

Este middleware limita la cantidad de solicitudes que un cliente puede realizar dentro de un intervalo de tiempo determinado.

Sus beneficios incluyen:

- Protección frente a ataques de fuerza bruta.
- Reducción del riesgo de ataques de denegación de servicio básicos.
- Disminución del consumo innecesario de recursos.
- Mayor estabilidad del servidor.

---

## Comunicación mediante Socket.IO

Socket.IO mantiene una conexión persistente entre cliente y servidor.

A diferencia del modelo tradicional basado únicamente en HTTP, la comunicación permanece abierta durante toda la sesión del usuario.

Esto permite:

- Reducir la latencia.
- Disminuir el tráfico HTTP.
- Mejorar la velocidad de respuesta.
- Mantener sincronizados todos los clientes.

---

## Generación de Identificadores

GhostChat incorpora la biblioteca **UUID**, la cual permite generar identificadores únicos universalmente.

El uso de identificadores únicos evita conflictos cuando es necesario identificar elementos del sistema.

---

# 🛡️ Recomendaciones de Seguridad

Aunque GhostChat implementa mecanismos básicos de protección, existen múltiples mejoras que podrían incorporarse en futuras versiones.

Entre ellas:

- Autenticación mediante JWT.
- Autenticación multifactor (MFA).
- Cifrado de extremo a extremo (End-to-End Encryption).
- Implementación de HTTPS.
- Cookies seguras.
- Protección CSRF.
- Validación avanzada de entradas.
- Sanitización de datos.
- Registro de auditoría.
- Gestión de sesiones.
- Recuperación segura de cuentas.

Estas mejoras incrementarían significativamente el nivel de seguridad del sistema.

---

# ⚡ Rendimiento

GhostChat ha sido diseñado para ofrecer una comunicación rápida entre múltiples clientes.

La utilización de Socket.IO elimina la necesidad de realizar consultas HTTP repetitivas, reduciendo considerablemente el tiempo de respuesta.

Entre los beneficios obtenidos se encuentran:

- Comunicación inmediata.
- Menor utilización del ancho de banda.
- Reducción de solicitudes HTTP.
- Baja latencia.
- Mayor fluidez durante la conversación.

Al tratarse de una arquitectura basada en eventos, el servidor únicamente procesa información cuando realmente ocurre una acción dentro del sistema.

Esto contribuye a optimizar el uso de recursos del servidor.

---

# 📈 Escalabilidad

La arquitectura implementada facilita la incorporación de nuevas funcionalidades sin modificar completamente el proyecto.

Entre las posibles ampliaciones destacan:

- Registro de usuarios.
- Inicio de sesión.
- Base de datos.
- Chats privados.
- Chats grupales.
- Estados de conexión.
- Indicador "Escribiendo...".
- Compartición de archivos.
- Compartición de imágenes.
- Mensajes de voz.
- Videollamadas.
- Llamadas VoIP.
- Notificaciones Push.
- Aplicación móvil.
- Aplicación de escritorio.

Gracias a Express y Socket.IO estas funcionalidades pueden incorporarse progresivamente.

---

# 📊 Evaluación de Calidad según ISO/IEC 25010

La norma **ISO/IEC 25010** establece un conjunto de características que permiten evaluar objetivamente la calidad de un producto software.

GhostChat puede analizarse utilizando dichas características.

---

## 1. Adecuación Funcional

### Descripción

Evalúa si el sistema cumple correctamente con las funciones para las cuales fue desarrollado.

### Evaluación

GhostChat permite la comunicación en tiempo real entre clientes mediante Socket.IO, cumpliendo adecuadamente con el objetivo principal del proyecto.

### Fortalezas

- Comunicación inmediata.
- Arquitectura funcional.
- Intercambio de mensajes.

### Oportunidades de mejora

- Autenticación.
- Historial de conversaciones.
- Gestión de usuarios.

**Nivel estimado:** ⭐⭐⭐⭐☆

---

## 2. Eficiencia del Desempeño

### Descripción

Analiza el comportamiento del sistema respecto al consumo de recursos y tiempos de respuesta.

### Evaluación

El uso de Socket.IO reduce considerablemente la latencia y evita solicitudes HTTP constantes.

### Fortalezas

- Baja latencia.
- Comunicación persistente.
- Menor tráfico HTTP.

### Oportunidades

- Balanceo de carga.
- Caché.
- Optimización para miles de usuarios.

**Nivel estimado:** ⭐⭐⭐⭐☆

---

## 3. Compatibilidad

### Descripción

Evalúa la capacidad del sistema para funcionar correctamente junto con otros componentes y plataformas.

### Evaluación

GhostChat puede ejecutarse desde cualquier navegador moderno compatible con JavaScript.

### Compatibilidad

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Opera
- Brave

**Nivel estimado:** ⭐⭐⭐⭐⭐

---

## 4. Usabilidad

### Descripción

Mide la facilidad con la que los usuarios interactúan con la aplicación.

### Evaluación

La interfaz es sencilla y facilita el envío y recepción de mensajes.

### Oportunidades

- Mejorar accesibilidad.
- Incorporar modo oscuro.
- Mejorar diseño responsive.

**Nivel estimado:** ⭐⭐⭐⭐☆

---

## 5. Fiabilidad

### Descripción

Evalúa la estabilidad del sistema durante su funcionamiento.

### Evaluación

Socket.IO incorpora mecanismos de reconexión automática que favorecen la continuidad del servicio.

### Oportunidades

- Persistencia de mensajes.
- Recuperación automática.
- Registro de errores.

**Nivel estimado:** ⭐⭐⭐⭐☆

---

## 6. Seguridad

### Descripción

Evalúa la protección de la información y el acceso al sistema.

### Evaluación

Actualmente GhostChat incorpora:

- Helmet.
- Express Rate Limit.
- UUID.

### Mejoras recomendadas

- JWT.
- HTTPS.
- E2EE.
- MFA.

**Nivel estimado:** ⭐⭐⭐☆☆

---

## 7. Mantenibilidad

### Descripción

Evalúa la facilidad para modificar el sistema.

### Evaluación

La estructura del proyecto es simple y organizada.

### Fortalezas

- Código reducido.
- Fácil comprensión.
- Dependencias limitadas.

### Mejoras

- Separación por módulos.
- Controladores.
- Servicios.
- Middleware personalizado.

**Nivel estimado:** ⭐⭐⭐⭐☆

---

## 8. Portabilidad

### Descripción

Mide la facilidad para instalar y ejecutar el software en diferentes plataformas.

### Evaluación

GhostChat puede ejecutarse en cualquier sistema operativo compatible con Node.js.

### Plataformas compatibles

- Windows.
- Linux.
- macOS.

**Nivel estimado:** ⭐⭐⭐⭐⭐

---

# 📋 Resumen General

| Característica | Evaluación |
|----------------|------------|
| Adecuación Funcional | ⭐⭐⭐⭐☆ |
| Eficiencia del Desempeño | ⭐⭐⭐⭐☆ |
| Compatibilidad | ⭐⭐⭐⭐⭐ |
| Usabilidad | ⭐⭐⭐⭐☆ |
| Fiabilidad | ⭐⭐⭐⭐☆ |
| Seguridad | ⭐⭐⭐☆☆ |
| Mantenibilidad | ⭐⭐⭐⭐☆ |
| Portabilidad | ⭐⭐⭐⭐⭐ |

---

## Conclusión

GhostChat constituye una base sólida para una plataforma de mensajería en tiempo real. Su arquitectura ligera, el uso de Express.js y Socket.IO, junto con la incorporación de mecanismos básicos de seguridad como Helmet y Express Rate Limit, permiten ofrecer una aplicación funcional, rápida y fácil de mantener.

Aunque existen oportunidades de mejora, especialmente en aspectos relacionados con autenticación, cifrado y persistencia de datos, el proyecto cumple adecuadamente con su propósito educativo y proporciona una excelente base para continuar evolucionando hacia una aplicación de comunicación más robusta.
