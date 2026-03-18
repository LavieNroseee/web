# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploy / MIME type error (`application/octet-stream`)

If the browser shows this error:

```txt
main.jsx:1 Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream".
```

the host is serving JavaScript files with the wrong `Content-Type`.

### Correct deployment flow for Vite

1. Build the app:

```bash
npm install
npm run build
```

2. Upload only the generated `dist/` folder (not `src/`, `main.jsx`, or project root files).
3. Configure your server to return proper MIME types:
   - `.js` and `.mjs` -> `text/javascript`
   - `.css` -> `text/css`
   - `.json` -> `application/json`

### Server examples

#### Nginx

Ensure your config includes the MIME map:

```nginx
http {
  include       mime.types;
  default_type  application/octet-stream;
}
```

And static hosting for the Vite output:

```nginx
server {
  root /var/www/app/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

#### Apache

Make sure `mime.types` is enabled and (if needed) force JS types:

```apache
AddType text/javascript .js .mjs
```

#### S3 / object storage

Set metadata `Content-Type` correctly on each uploaded file:
- `*.js` => `text/javascript`
- `*.css` => `text/css`
- `index.html` => `text/html`

If files were uploaded as `application/octet-stream`, re-upload with corrected metadata.

## FastComet (cPanel/Apache) quick fix

If your site is on FastComet shared hosting, the server is usually Apache and supports `.htaccess`.

### Recommended steps

1. Build and generate production files:

```bash
npm install
npm run build
```

2. Upload everything inside `dist/` to `public_html/` (or your domain document root).
3. Make sure `.htaccess` is also uploaded.
4. Confirm JS MIME type from browser devtools:
   - Open Network tab
   - Click any file in `assets/*.js`
   - Verify response header `Content-Type: text/javascript`

### Included `.htaccess` for this project

This repository now includes `public/.htaccess` so Vite copies it into `dist/.htaccess` on build.
It does three important things:

- Forces proper MIME types for `.js`, `.mjs`, `.css`, and JSON/map files.
- Enables SPA fallback (`/index.html`) so refresh on internal routes works.
- Prevents MIME sniffing issues with `X-Content-Type-Options: nosniff`.
