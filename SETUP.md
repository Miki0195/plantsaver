# Setup Guide - Plant Saver & Accounting Website

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- React Router for navigation
- i18next for multi-language support
- Framer Motion for animations
- React Hook Form for form management
- Tailwind CSS for styling
- Vite for fast development

### 2. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## Customization Guide

### 🎨 Colors

Update colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    dark: '#0A1628',    // Change main dark color
    blue: '#1E3A5F',    // Change primary blue
    light: '#2E5C8F',   // Change light blue
  },
  accent: {
    gold: '#D4AF37',      // Change gold accent
    lightGold: '#F0D78C', // Change light gold
  },
}
```

### 📝 Content & Translations

Edit translation files in `src/i18n/locales/`:
- `hu.json` - Hungarian (default)
- `en.json` - English
- `de.json` - German

### 📞 Contact Information

Update in translation files under `contact.info`:

```json
"contact": {
  "info": {
    "address": "Your Address",
    "phone": "+36 XX XXX XXXX",
    "email": "your@email.com"
  }
}
```

### 🖼️ Images

Replace placeholder images:

1. **Hero Background** - Edit `src/pages/Home.tsx`
2. **Portfolio Items** - Edit `src/pages/References.tsx`
3. **About Page** - Edit `src/pages/About.tsx`

Use Unsplash URLs or local images in `public` folder.

### 🔗 Social Media Links

Update in `src/components/layout/Footer.tsx` and `src/pages/References.tsx`:

```tsx
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourpage">
```

### 📧 Form Submission

The contact form in `src/pages/Contact.tsx` currently simulates submission. 

To connect to a real backend:

```tsx
const onSubmit = async (data: FormData) => {
  // Replace this with your API call
  const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // Handle response...
};
```

Popular options:
- **Formspree**: Easy form backend service
- **EmailJS**: Send emails directly from JavaScript
- **Custom API**: Your own backend service

### 🗺️ Google Maps

Update the map location in `src/pages/Contact.tsx`:

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace in the Contact page

### 🔍 SEO Optimization

Update meta tags in `index.html` and translation files under `seo.*`:

```json
"seo": {
  "home": {
    "title": "Your Page Title",
    "description": "Your description"
  }
}
```

### 📱 Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`:

```tsx
<Route path="new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/layout/Header.tsx`
4. Add translations

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Traditional Hosting

1. Run `npm run build`
2. Upload `dist` folder contents to your server
3. Configure server for SPA routing

## Troubleshooting

### Port Already in Use

If port 3000 is busy, Vite will use the next available port.

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading

- Check image URLs are correct
- Ensure images in `public` folder are referenced as `/image.jpg`
- External images need proper CORS headers

### Translation Not Updating

- Check JSON syntax is valid
- Restart dev server after translation changes
- Clear browser cache

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Load images and components on demand
3. **Code Splitting**: Already configured with React Router
4. **CDN**: Use CDN for static assets in production
5. **Caching**: Configure proper cache headers

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Need Help?

- Check `README.md` for overview
- Review component files for inline comments
- React documentation: [react.dev](https://react.dev)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Vite: [vitejs.dev](https://vitejs.dev)

---

**Built with ❤️ for Plant Saver & Accounting Kft.**

