# Zenith Clinic – Medicina Estética

Sitio web de Zenith Clinic (Ourense). Proyecto frontend en React + Vite con Tailwind y componentes shadcn-ui.

## Enlaces

- Live: https://zntclinic.com
- Repo: https://github.com/zntclinic/zenith-clinic

## Requisitos

- Node.js 18+ y npm

## Desarrollo local

```sh
git clone https://github.com/zntclinic/zenith-clinic
cd zenith-clinic
npm install
npm run dev
```

Abre http://localhost:5173 en el navegador.

## Comandos

- `npm run dev`: servidor de desarrollo
- `npm run build`: build de producción (Vite)
- `npm run preview`: previsualizar build local
- `npm run lint`: ejecutar ESLint

## Tecnologías

- React 18
- TypeScript
- Vite 5
- Tailwind CSS
- shadcn-ui (componentes UI)

## Estructura del proyecto

```
src/
  assets/           # imágenes y media
  components/       # componentes UI (Hero, Services, etc.)
  data/             # datos estáticos (servicios, info negocio)
  pages/            # páginas (Index, SobreNosotros, Tratamientos)
  hooks/, lib/      # utilidades y hooks
```

## Formato y estilo

- Prettier: `printWidth` 120
- VS Code: regla visual a 120 columnas, format on save
- ESLint: reglas para React/TS y máx. 120 caracteres

## Despliegue

El proyecto está configurado para GitHub Pages (copia `dist/index.html` a `dist/404.html`).

```sh
npm run build
# publica el contenido de dist/ con tu flujo habitual (p. ej. gh-pages)
```

El dominio `zntclinic.com` apunta a la salida estática generada en `dist/`.

## Licencia

Propietario del sitio: Zenith Clinic. Uso interno del equipo.
