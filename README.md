# Sigue el Ritmo · Demo web

Demo conceptual (Impulso Digital) de la web catálogo + cotización por WhatsApp para **Sigue el Ritmo**, tienda de instrumentos musicales en Perú, según el *Brief v2.0 — adaptado al mercado peruano*.

Sitio estático (HTML + CSS + JS, sin dependencias ni build). Para verlo, abre `index.html` o sirve la carpeta:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

## Qué incluye

- Portada con titular, buscador, franja de confianza (RUC, Yape/Plin, envíos, comprobantes) y WhatsApp flotante.
- 8 categorías del brief y **38 productos ilustrativos con precios referenciales en soles** (`js/products.js`).
- Catálogo con filtros por categoría, presupuesto en S/, uso y orden por precio.
- Ficha de producto con qué incluye, nivel, cantidad, “Añadir a mi lista” y “Cotizar por WhatsApp”.
- **Lista de cotización** con cantidades, distrito (Lima/Callao) o ciudad (provincia), boleta/factura y mensaje prellenado a WhatsApp.
- Recomendador en 3 preguntas, guías de elección, envíos y pagos, nosotros/confianza, contacto, Libro de Reclamaciones y aviso de privacidad (Ley N.º 29733).
- **Botón de idioma Español / English** en la cabecera: traduce toda la interfaz, los productos y el mensaje de WhatsApp; recuerda la elección.
- Paleta y reglas de contraste del brief (borgoña `#570F16`, dorado `#B47C14`, crema `#F9F8F3`), Bebas Neue + Inter, diseño mobile-first.

## Pendiente de la tienda (brief, punto 15)

Todo dato comercial está marcado como “por confirmar”. Antes de publicar, reemplazar:

- `WHATSAPP` en `js/app.js` (hoy `51999999999`, número de demo).
- Precios, marcas y productos reales en `js/products.js`; fotos propias en lugar de las ilustraciones SVG de `js/icons.js`.
- Razón social, RUC, dirección, horario, cobertura de envíos, garantía y Libro de Reclamaciones oficial.
