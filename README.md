# 🚀 Digital Portfolio - Samuel Velasco

**Interactive professional portfolio developed in React with advanced functionalities**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.7-38B2AC.svg)](https://tailwindcss.com/)

**🌐 Live Demo**: [https://svelasco.vercel.app](https://svelasco.vercel.app)

---

## 📖 Description

Modern and responsive digital portfolio showcasing Samuel Velasco's professional experience as a QA Automation Engineer & DevOps.

## ✨ Key Features

- 🌙 **Dark/Light Mode**: Theme switching with local persistence
- 🌍 **Multilingual**: Full support in Spanish and English with automatic geolocation detection
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- 📄 **PDF Generation**: Automatic CV export in optimized PDF format
- ⚡ **Performance Optimized**: Memoized components and lazy loading
- 🎨 **Smooth Animations**: Optimized CSS transitions for better UX
- ♿ **Accessibility**: Implementation of ARIA labels and keyboard navigation

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - Main UI library
- **Vite 4.5.0** - Build tool and development server
- **Tailwind CSS 3.3.7** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - CSS processing

### Special Features
- **jsPDF** - PDF document generation
- **html2canvas** - HTML element capture for PDF
- **Custom Hooks** - Reusable logic for themes and languages

### Development Tools
- **ESLint** - JavaScript/React code linting
- **React DevTools** - Debugging and optimization

## 📁 Project Structure

```text
portfolio-samuel-velasco/
├── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Icons.jsx
│   │   │   └── Spinner.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── CVComponentForPDF.jsx
│   │   └── ExperienceItem.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   └── useLanguageDetection.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── languageDetection.js
│   │   └── pdfGenerator.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
├── package.json
└── README.md
```
### 📂 Folder Organization

| Folder | Purpose |
|--------|---------|
| `components/common/` | Reusable components (Icons, Spinner, ErrorBoundary) |
| `components/layout/` | Layout structure (Header, Footer) |
| `components/sections/` | Main portfolio sections (Hero, Resume, Projects, Contact) |
| `hooks/` | Custom React hooks for state management |
| `utils/` | Utility functions and constants |
| `data/` | Portfolio data and content |
| `styles/` | Global styles and Tailwind configuration |

## 🚀 Installation and Setup

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation
```bash
# 1. Clone the repository
git clone <repository-url>
cd portfolio-samuel-velasco

# 2. Install dependencies
npm install

# 3. Run in development
npm run dev

# 4. Open in browser
# http://localhost:5173
Available Scripts
npm run dev      # Development server
npm run build    # Production build
```


# 🚀 Portafolio Digital - Samuel Velasco

**Portafolio profesional interactivo desarrollado en React**

**🌐 Live Demo**:  https://svelasco.vercel.app📖 

---

## 📖 Descripción

Portfolio digital moderno y responsive que presenta la experiencia profesional de Samuel Velasco como QA Automation & DevOps Engineer.

## ✨ Características Principales

- 🌙 **Modo Oscuro/Claro**: Alternancia entre temas con persistencia local
- 🌍 **Multiidioma**: Soporte completo en Español e Inglés con detección automática por geolocalización
- 📱 **Responsive Design**: Adaptado para dispositivos móviles, tablets y desktop
- 📄 **Generación PDF**: Exportación automática del CV en formato PDF optimizado
- ⚡ **Rendimiento Optimizado**: Componentes memorizados y lazy loading
- 🎨 **Animaciones Suaves**: Transiciones CSS optimizadas para mejor UX
- ♿ **Accesibilidad**: Implementación de ARIA labels y navegación por teclado

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 18.2.0**  - Biblioteca principal de UI
- **Vite 4.5.0** - Build tool y servidor de desarrollo
- **Tailwind CSS 3.3.7** - Framework de CSS utilitario
- **PostCSS & Autoprefixer** - Procesamiento de CSS

### Funcionalidades Especiales
- **jsPDF** - Generación de documentos PDF
- **html2canvas** - Captura de elementos HTML para PDF
- **Custom Hooks** - Lógica reutilizable para temas e idiomas

### Herramientas de Desarrollo
- **ESLint** - Linting de código JavaScript/React
- **React DevTools** - Debugging y optimización

## 📁 Estructura del Proyecto


```text
portfolio-samuel-velasco/
├── index.html
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Icons.jsx
│   │   │   └── Spinner.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Resume.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── CVComponentForPDF.jsx
│   │   └── ExperienceItem.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   └── useLanguageDetection.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── languageDetection.js
│   │   └── pdfGenerator.js
│   ├── data/
│   │   └── portfolioData.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
├── package.json
└── README.md
```
### 📂 Organización de Carpetas

| Carpeta | Proposito |
|--------|---------|
| `components/common/` | Componentes reutilizables (Icons, Spinner, ErrorBoundary) |
| `components/layout/` | Estructura de layout (Header, Footer) |
| `components/sections/` | Secciones principales del portfolio (Hero, Resume, Projects, Contact) |
| `hooks/` | Custom hooks de React para manejo de estado |
| `utils/` | Funciones utilitarias y constantes |
| `data/` | Datos y contenido del portfolio |
| `styles/` | Estilos globales y configuración de Tailwind |

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

###Instalación
```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd portfolio-samuel-velasco

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
Scripts Disponibles
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción

```