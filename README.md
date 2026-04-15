# 🌤️ Weather App

> A lightweight weather application built with vanilla JavaScript and the Open-Meteo API.  
> Aplicación del clima construida con JavaScript puro y la API de Open-Meteo.

---

## 🎯 Objective / Objetivo

**EN:** This project was built as a hands-on exercise in **integrating AI tools into a real software development workflow**. The weather app serves as the practical vehicle — the actual focus is on how AI assistants can be used effectively at each stage of development: planning, architecture decisions, code generation, and documentation.

**ES:** Este proyecto fue construido como ejercicio práctico de **integración de herramientas de IA en un flujo real de desarrollo de software**. La app del clima es el vehículo práctico — el enfoque real está en cómo los asistentes de IA pueden usarse de forma efectiva en cada etapa del desarrollo: planeación, decisiones de arquitectura, generación de código y documentación.

---

## 🤖 AI Tools Used / Herramientas de IA Utilizadas

| Tool | Role in the project / Rol en el proyecto |
|---|---|
| [Claude](https://claude.ai) | Architecture, code structure & documentation / Arquitectura, estructura de código y documentación |
| [Gemini](https://gemini.google.com) | Research & concept clarification / Investigación y aclaración de conceptos |
| [OpenCode](https://opencode.ai) | AI-assisted code construction / Construcción de código asistida por IA |

---

## 📋 Description / Descripción

**EN:** A client-side web application that allows users to search for any city in the world and retrieve real-time weather data including temperature and wind speed. No API key required.

**ES:** Aplicación web del lado del cliente que permite buscar cualquier ciudad del mundo y obtener datos meteorológicos en tiempo real, incluyendo temperatura y velocidad del viento. No requiere API key.

---

## 🗂️ Project Structure / Estructura del Proyecto

```
weather-app/
│
├── index.html          # Main structure / Estructura principal
├── README.md           # Project documentation / Documentación
├── .gitignore
│
├── css/
│   └── styles.css      # Styles / Estilos
│
├── src/
│   ├── main.js         # Entry point & event handling / Punto de entrada y eventos
│   ├── api.js          # Open-Meteo API calls / Peticiones a la API
│   └── ui.js           # DOM manipulation / Manipulación del DOM
│
└── assets/
    ├── icons/          # Weather icons / Íconos del clima
    └── img/            # Images / Imágenes
```

---

## 🛠️ Tech Stack / Tecnologías

| Technology | Purpose |
|---|---|
| HTML5 | Structure / Estructura |
| CSS3 | Styling / Estilos |
| JavaScript (ES6+) | Logic / Lógica |
| [Open-Meteo Forecast API](https://open-meteo.com/en/docs) | Weather data / Datos del clima |
| [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api) | City coordinates / Coordenadas |

---

## ⚙️ How It Works / Cómo Funciona

**EN:**
1. User enters a city name
2. App fetches coordinates via the Geocoding API
3. Coordinates are passed to the Forecast API
4. Weather data is rendered in the UI

**ES:**
1. El usuario ingresa el nombre de una ciudad
2. La app obtiene coordenadas via la API de Geocoding
3. Las coordenadas se envían a la API de pronóstico
4. Los datos se muestran en la interfaz

---

## 🚀 Getting Started / Cómo Correrlo

**EN:** Since this project uses ES6 modules (`import/export`), it must be served through a local server. The recommended way is using the **Live Server** extension for VS Code.

1. Clone the repository
2. Open the project folder in VS Code
3. Right-click `index.html` → **Open with Live Server**

**ES:** Este proyecto usa módulos ES6 (`import/export`), por lo que debe ejecutarse a través de un servidor local. La forma recomendada es usando la extensión **Live Server** de VS Code.

1. Clona el repositorio
2. Abre la carpeta del proyecto en VS Code
3. Click derecho en `index.html` → **Open with Live Server**

---

## 👤 Author / Autor

**Alex Camarillo**  
[@Maksumi Murakami](https://github.com/maksumi)

---

> Built with 🤍 and Open-Meteo's free API — no keys, no limits.  
> Construido con 🤍 y la API gratuita de Open-Meteo — sin keys, sin límites.