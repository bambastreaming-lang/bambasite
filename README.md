# Bamba Streaming - Landing Page

Landing page oficial de **Bamba Streaming**, el primer programa de streaming judío. Diseñada con un estilo neo-brutalista, esta página presenta información sobre el programa, el equipo, estadísticas de impacto y opciones de contacto.

## 🚀 Características

- **Diseño Neo-Brutalista**: Estilo visual impactante con sombras brutales y colores vibrantes
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Meta tags, Open Graph y estructura semántica
- **Accesible**: ARIA labels, navegación por teclado y buenas prácticas de accesibilidad
- **Rendimiento Optimizado**: Lazy loading de imágenes y animaciones suaves
- **Formulario de Contacto**: Validación completa y manejo de errores

## 🛠️ Tecnologías

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Font Awesome** - Iconos

## 📦 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd bamba-streaming-landing-page
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 🏗️ Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 📁 Estructura del Proyecto

```
bamba-streaming-landing-page/
├── components/          # Componentes React
│   ├── About.tsx       # Sección "Sobre Nosotros"
│   ├── ContactForm.tsx # Formulario de contacto
│   ├── CTASection.tsx  # Sección "La Tribuna"
│   ├── Footer.tsx      # Pie de página
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero principal
│   ├── Sponsors.tsx    # Patrocinadores
│   ├── Stats.tsx       # Estadísticas de impacto
│   └── Team.tsx        # Equipo
├── App.tsx             # Componente principal
├── index.tsx           # Punto de entrada
├── index.html          # HTML base
├── index.css           # Estilos globales
└── vite.config.ts      # Configuración de Vite
```

## 🎨 Paleta de Colores

- **Bamba Yellow**: `#E6AC3C` - Color principal de acento
- **Bamba Blue**: `#2D5096` - Color principal de fondo
- **Off White**: `#F9F9F9` - Color de fondo secundario

## ✨ Mejoras Implementadas

### SEO y Meta Tags
- Meta tags completos para redes sociales (Open Graph, Twitter Cards)
- Descripciones optimizadas
- Estructura semántica HTML5

### Accesibilidad
- ARIA labels en todos los elementos interactivos
- Navegación por teclado mejorada
- Focus states visibles
- Roles semánticos apropiados

### Rendimiento
- Lazy loading de imágenes
- Intersection Observer para animaciones
- Optimización de fuentes y recursos externos

### Formulario de Contacto
- Validación en tiempo real
- Mensajes de error descriptivos
- Estados de carga y éxito
- Manejo de errores robusto

## 📝 Notas de Desarrollo

### Integración del Formulario

El formulario de contacto actualmente tiene una estructura preparada para integrarse con un backend. Para implementar el envío real:

1. Configurar un endpoint de API (ej: Formspree, Tally, o backend propio)
2. Actualizar la función `handleSubmit` en `ContactForm.tsx`
3. Agregar variables de entorno si es necesario

### Imágenes

Las imágenes del equipo están configuradas para cargar desde:
- GitHub: `https://raw.githubusercontent.com/BambaStreaming/assets/main/`
- Fallback a Unsplash si falla la carga

### Personalización

Para cambiar colores, edita las variables CSS en `index.css`:
```css
:root {
  --bamba-yellow: #E6AC3C;
  --bamba-blue: #2D5096;
  --bamba-off-white: #F9F9F9;
}
```

## 🌐 Enlaces

- **YouTube**: [@BambaStreaming](https://www.youtube.com/@BambaStreaming)
- **Instagram**: [@bambastreaming](https://www.instagram.com/bambastreaming/)
- **TikTok**: [@bambastreaming](https://www.tiktok.com/@bambastreaming)
- **Spotify**: [Bamba Streaming Podcast](https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI)

## 📄 Licencia

© 2025 Bamba Streaming. Todos los derechos reservados.

---

**BAMBA STREAMING** - El primer streaming judío. Judaísmo real sin filtros.
