# 🧴 Brillante Quindío

Tienda online de productos de aseo en el Quindío, Colombia.

## 🏗️ Arquitectura

Este proyecto utiliza Angular 17+ con una arquitectura modular:

```
src/app/
├── core/               # Servicios singleton, modelos, guards
│   ├── models/         # Interfaces y tipos
│   └── services/       # Servicios de la aplicación
├── shared/             # Componentes, directivas y pipes reutilizables
│   └── components/     # UI components
├── features/           # Módulos de funcionalidades
│   ├── home/           # Página principal
│   ├── products/       # Catálogo de productos
│   ├── about/          # Página "Nosotros"
│   └── contact/        # Página de contacto
└── layout/             # Componentes de estructura
    ├── header/         # Navegación principal
    └── footer/         # Pie de página
```

## 🎨 Sistema de Diseño

El diseño está inspirado en los paisajes del Quindío:

- **Paleta de colores**: Verdes profundos del bosque, tonos arena/bambú, acentos naranja
- **Tipografía**: Clash Display (títulos) + Satoshi (cuerpo)
- **Estética**: Cálida, natural, profesional

### Variables CSS principales

```scss
--color-primary: #1a4d2e;      // Verde bosque
--color-secondary: #d4a373;    // Arena/Bambú
--color-accent: #f77f00;       // Naranja atardecer
--color-surface: #fefae0;      // Crema papel
```

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200`

### Comandos disponibles

```bash
npm start       # Servidor de desarrollo
npm run build   # Build de producción
npm test        # Ejecutar tests
```

## 📦 Categorías de Productos

- 🧴 **Limpiadores** - Multiusos, vidrios, especializados
- 🦠 **Desinfectantes** - Antibacteriales, naturales
- 🪣 **Pisos** - Madera, cerámica, porcelanato
- 🍳 **Cocina** - Desengrasantes, acero inoxidable
- 🚿 **Baños** - Antical, gel sanitario
- 🌸 **Aromatizantes** - Ambientales, eliminadores de olores
- 🧹 **Herramientas** - Mopas, guantes, paños, cepillos

## ✨ Funcionalidades

- ✅ Página principal con productos destacados
- ✅ Catálogo de productos con filtros por categoría
- ✅ Filtro de productos ecológicos 🌱
- ✅ Página "Nosotros" con historia y valores
- ✅ Formulario de contacto
- ✅ Integración directa con WhatsApp para pedidos
- ✅ Diseño responsive
- ✅ Animaciones suaves
- ✅ Precios en COP

## 📍 Cobertura de envíos

Envíos a todo el Quindío:
- Armenia
- Calarcá
- Montenegro
- Quimbaya
- La Tebaida
- Circasia
- Filandia
- Salento
- Y más...

## 🛠️ Tecnologías

- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- RxJS
- Angular Router (Lazy Loading)
- Signals (Angular 17+)

## 📞 Contacto

- **WhatsApp**: +57 316 456 7890
- **Email**: contacto@brillantequindio.com
- **Ubicación**: Armenia, Quindío

---

Hecho con 💚 en el corazón del Eje Cafetero
