# Cat Gallery - Examen Final React

Aplicación web de galería de gatos que consume la API de TheCatAPI, desarrollada con React + Vite, Zustand para estado global y React Router para navegación.

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Zustand** - Manejo de estado global
- **React Router** - Enrutamiento y navegación
- **Bootstrap / React Bootstrap** - Estilos y componentes UI
- **TheCatAPI** - API pública de imágenes de gatos

## 📁 Estructura del Proyecto
```
src/
├── components/
│   ├── Card.jsx           # Tarjeta individual de gato
│   ├── CardList.jsx       # Lista de tarjetas
│   └── Header.jsx         # Barra de navegación
├── layouts/
│   └── RootLayout.jsx     # Layout principal con Header
├── pages/
│   ├── Home.jsx           # Página de inicio con featured cats
│   ├── Entities.jsx       # Listado completo con paginación
│   └── Contact.jsx        # Formulario de contacto
├── store/
│   └── store.js           # Configuración de Zustand
├── App.jsx                # Configuración de rutas
└── main.jsx               # Punto de entrada
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para crear el proyecto desde cero

1. **Crear el proyecto con Vite:**
```bash
npx create-vite@latest examen-cats --template react
```

2. **Entrar al directorio:**
```bash
cd examen-cats
```

3. **Instalar dependencias base:**
```bash
npm install
```

4. **Instalar librerías adicionales:**
```bash
npm install zustand react-router-dom bootstrap react-bootstrap
```

5. **Crear la estructura de carpetas** dentro de `src/`:
   - `components`
   - `layouts`
   - `pages`
   - `store`

6. **Ejecutar el proyecto:**
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📦 Clonar y Ejecutar el Proyecto

### Clonar el repositorio
```bash
git clone https://github.com/Hazielcode/EXAMEN-FINAL.git
```

### Entrar al directorio
```bash
cd EXAMEN-FINAL
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar en modo desarrollo
```bash
npm run dev
```

### Compilar para producción
```bash
npm run build
```

## 🌐 API Utilizada

**TheCatAPI**: https://api.thecatapi.com/v1/images/search

- Endpoint: `https://api.thecatapi.com/v1/images/search?limit=12&page={page}`
- No requiere API key
- Retorna imágenes aleatorias de gatos con sus IDs

## 📄 Funcionalidades

### Página Home (`/`)
- Hero section con título y emoji de gato
- Muestra los primeros 6 gatos del store de Zustand
- Los datos se comparten desde la página Entities

### Página All Cats (`/entities`)
- Fetch a la API de gatos
- Guarda los datos en Zustand
- Muestra 12 gatos por página
- Paginación con botones Previous/Next
- Spinner de carga mientras se obtienen los datos

### Página Contact (`/contact`)
- Formulario con campos: Name, Email, Message
- Validación en todos los campos (required)
- Mensaje de éxito al enviar
- Se limpia automáticamente después de enviar

## 🔄 Uso de Zustand

El estado global se maneja con Zustand en `src/store/store.js`:
```javascript
import { create } from 'zustand';

export const useStore = create((set) => ({
  cats: [],
  setCats: (cats) => set({ cats }),
}));
```

**Uso en páginas:**
- **Entities**: Hace fetch y guarda en el store con `setCats()`
- **Home**: Lee del store con `useStore((state) => state.cats)` y muestra los primeros 6

## 🚀 Deploy

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Deploy automático

### Netlify

1. Sube tu código a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. Conecta tu repositorio
4. Build command: `npm run build`
5. Publish directory: `dist`

## 👨‍💻 Autor

**Haziel** - Estudiante de Tecsup

pasos para CLONACION:

git clone https://github.com/Hazielcode/EXAMEN-FINAL.git
cd EXAMEN-FINAL
npm install
npm run dev
