# 👻 GhostChat

<p align="center">
  <img src="https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Socket.IO-RealTime-black?style=for-the-badge">
  <img src="https://img.shields.io/badge/License-Educational-orange?style=for-the-badge">
</p>

<p align="center">
Plataforma de mensajería privada desarrollada con tecnologías web modernas, diseñada para ofrecer comunicación en tiempo real mediante una arquitectura cliente-servidor.
</p>

---

# 📖 Tabla de Contenido

* Introducción
* Objetivos
* Características
* Arquitectura
* Tecnologías
* Requisitos
* Instalación
* Configuración
* Ejecución
* Flujo de funcionamiento
* Estructura del proyecto
* Módulos principales
* Seguridad
* Rendimiento
* Calidad del software
* ISO/IEC 25010
* Capturas
* Roadmap
* Contribuciones
* Licencia
* Autor

---

# 📌 Introducción

GhostChat es una aplicación de mensajería en tiempo real desarrollada con una arquitectura moderna basada en tecnologías web.

El propósito principal del proyecto es proporcionar una plataforma donde múltiples usuarios puedan comunicarse mediante conversaciones privadas utilizando conexiones persistentes en tiempo real.

El sistema implementa una arquitectura modular que facilita el mantenimiento, escalabilidad y evolución futura del software.

---

# 🎯 Objetivos

## Objetivo general

Desarrollar una plataforma de mensajería instantánea que permita la comunicación segura entre usuarios mediante tecnologías web modernas.

## Objetivos específicos

* Implementar autenticación de usuarios.
* Gestionar conversaciones privadas.
* Sincronizar mensajes en tiempo real.
* Mantener una arquitectura modular.
* Facilitar el mantenimiento del software.
* Permitir futuras ampliaciones del sistema.

---

# ✨ Características

✔ Registro de usuarios

✔ Inicio de sesión

✔ Autenticación

✔ Chat en tiempo real

✔ Comunicación mediante WebSockets

✔ Arquitectura Cliente - Servidor

✔ Organización modular

✔ Interfaz moderna

✔ Fácil mantenimiento

✔ Escalable

---

# 🏗 Arquitectura del Sistema

```text
                     INTERNET
                         │
                         │
                ┌─────────────────┐
                │     Cliente      │
                │ HTML • CSS • JS  │
                └────────┬─────────┘
                         │
                 HTTP / WebSocket
                         │
                ┌────────▼────────┐
                │    Express.js   │
                │     Servidor    │
                └────────┬────────┘
                         │
                   Socket.IO
                         │
                ┌────────▼────────┐
                │ Base de Datos   │
                └─────────────────┘
```

---

# 🛠 Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript

## Backend

* Node.js
* Express.js
* Socket.IO

## Herramientas

* Git
* GitHub
* npm

---

# 📦 Requisitos

Para ejecutar el proyecto se recomienda tener instalado:

* Node.js 18+
* npm
* Git

---

# 🚀 Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/KAAL-38583/ghostchat.git
```

## 2. Ingresar al proyecto

```bash
cd ghostchat
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el servidor

```bash
npm start
```

o

```bash
npm run dev
```

dependiendo de la configuración del proyecto.

---

# ⚙ Configuración

Dependiendo del entorno puede ser necesario configurar:

* Variables de entorno
* Puerto del servidor
* Base de datos
* Claves de autenticación
* Configuración de Socket.IO

---

# ▶ Funcionamiento

1. El usuario crea una cuenta.

2. El servidor valida la información.

3. Se almacena el usuario.

4. El usuario inicia sesión.

5. Se crea una sesión autenticada.

6. El cliente establece conexión mediante Socket.IO.

7. Los mensajes son enviados al servidor.

8. El servidor sincroniza los mensajes.

9. Los destinatarios reciben el mensaje en tiempo real.

---

# 📁 Estructura del Proyecto

```text
ghostchat/

├── client/
│
│   ├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── pages/
│
├── server/
│
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── sockets/
│   └── services/
│
├── database/
│
├── uploads/
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 📂 Descripción de los módulos

## Cliente

Contiene toda la interfaz gráfica del sistema.

Responsabilidades:

* Mostrar conversaciones.
* Capturar mensajes.
* Gestionar sesiones.
* Comunicación con el servidor.

---

## Servidor

Procesa todas las solicitudes del cliente.

Responsabilidades:

* Autenticación.
* Validaciones.
* Administración de usuarios.
* Gestión de mensajes.
* Comunicación Socket.IO.

---

## Base de Datos

Responsable del almacenamiento permanente.

Información almacenada:

* Usuarios
* Conversaciones
* Mensajes
* Configuraciones

---

# 🔐 Seguridad

El proyecto contempla mecanismos como:

* Autenticación de usuarios.
* Validación de entradas.
* Control de acceso.
* Protección de sesiones.
* Manejo seguro de credenciales.

Como mejora futura se recomienda implementar:

* Cifrado de extremo a extremo (E2EE).
* Autenticación multifactor (MFA).
* Protección CSRF.
* Rate Limiting.
* Auditoría de accesos.

---

# ⚡ Rendimiento

GhostChat utiliza conexiones persistentes mediante WebSockets, evitando solicitudes HTTP repetitivas.

Ventajas:

* Baja latencia.
* Comunicación bidireccional.
* Menor consumo de ancho de banda.
* Actualización instantánea.

---

# 📊 Evaluación según ISO/IEC 25010

El proyecto puede evaluarse mediante las siguientes características de calidad:

| Característica           | Estado      |
| ------------------------ | ----------- |
| Adecuación Funcional     | ✅ Aplicable |
| Eficiencia del Desempeño | ✅ Aplicable |
| Compatibilidad           | ✅ Aplicable |
| Usabilidad               | ✅ Aplicable |
| Fiabilidad               | ✅ Aplicable |
| Seguridad                | ✅ Aplicable |
| Mantenibilidad           | ✅ Aplicable |
| Portabilidad             | ✅ Aplicable |

Estas características permiten analizar la calidad del software mediante pruebas funcionales, pruebas de rendimiento, revisión del código fuente y evaluación de la experiencia del usuario.

---

# 📈 Posibles mejoras

* Videollamadas.
* Llamadas VoIP.
* Compartir archivos.
* Estados.
* Notificaciones Push.
* Mensajes temporales.
* Reacciones.
* Emojis.
* Chats grupales.
* Cifrado End-to-End.
* Aplicación móvil.
* Aplicación de escritorio.

---

# 🤝 Contribuciones

Las contribuciones son bienvenidas.

Proceso recomendado:

1. Fork del repositorio.
2. Crear una rama.
3. Implementar mejoras.
4. Realizar pruebas.
5. Crear Pull Request.

---

# 📄 Licencia

Este proyecto tiene fines académicos y educativos.

Antes de utilizarlo en producción se recomienda realizar una auditoría completa de seguridad y adaptar el sistema a los requerimientos específicos del entorno de despliegue.

---

# 👨‍💻 Autor

Proyecto desarrollado como una plataforma de mensajería privada utilizando tecnologías web modernas.

**GhostChat** representa una implementación práctica de una arquitectura cliente-servidor con comunicación en tiempo real, diseñada para facilitar el aprendizaje, la investigación y la evaluación de calidad del software mediante el estándar **ISO/IEC 25010**.
