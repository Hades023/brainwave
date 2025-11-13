# CB Hayes - Reusable Portfolio Website

A modern, accessible portfolio website built with React, Vite, and Tailwind CSS. Features a sleek dark theme, minimal, but smooth animations, and comprehensive accessibility support.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Fully Accessible**: WCAG 2.1 AA compliant with comprehensive accessibility features
- **Mobile Optimized**: Responsive design with touch-friendly interfaces
- **SEO Optimized**: Dynamic meta tags and semantic HTML structure
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Type-Safe Icons**: React Icons with tree-shaking for optimal bundle size

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS with custom utility classes
- **Icons**: React Icons (Heroicons, Font Awesome, Simple Icons)
- **Routing**: React Router DOM
- **Forms**: Native form handling with Formspree integration
- **Build**: Vite with optimized production builds

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio_website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navigation, footer, mobile menu
│   ├── sections/        # Page sections (hero, projects, etc.)
│   └── ui/             # Reusable UI components
├── data/               # Static data for projects, tech stack, etc.
├── pages/              # Route components
├── assets/             # Static assets
└── index.css           # Global styles and Tailwind utilities
```

## 🎨 Customization

### Colors and Theme

The site uses a custom dark theme defined in `src/index.css`. Key color variables:

- Primary background: `#0a0a0b` to `#1a1a1d` gradient
- Glass effects: `white/5` with `white/10` borders
- Text hierarchy: `white`, `white/80`, `white/70`

### Content Updates

1. **Projects**: Edit `src/data/projects.js`
2. **Tech Stack**: Edit `src/data/techstack.js`
3. **Testimonials**: Edit `src/data/testimonials.js`
4. **Personal Info**: Update contact details in `src/pages/Contact.jsx`

### Styling

The project uses custom Tailwind utility classes defined in `src/index.css`:

- `heading-*` classes for consistent typography
- `body-*` classes for body text
- `card-*` classes for consistent card styling
- `subheading-*` classes for section headings

## ♿ Accessibility Features

- **Skip Navigation**: Allows keyboard users to skip to main content
- **Focus Management**: Visible focus indicators and logical tab order
- **Screen Reader Support**: ARIA labels, live regions, and semantic HTML
- **Color Contrast**: WCAG AA compliant color ratios
- **Reduced Motion**: Respects user's motion preferences
- **Touch Targets**: Minimum 44px touch targets on mobile
- **Form Validation**: Real-time validation with accessible error messages

## 📱 Mobile Optimizations

- **Touch Targets**: All interactive elements meet 44px minimum size
- **Landscape Support**: Optimized layouts for landscape orientation
- **Performance**: Optimized images and lazy loading
- **Gestures**: Touch-friendly navigation and interactions

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Enable automatic deployments

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `dist` folder to your hosting provider

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions. To set up:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Update the form action in `src/pages/Contact.jsx`:
   ```javascript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

## 🔒 Environment Variables

For local development, create a `.env.local` file:

```
VITE_FORMSPREE_ID=your_formspree_id
VITE_SITE_URL=http://localhost:5173
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📞 Support

For questions or support, please contact:

- Email: christopher.brandon.hayes@gmail.com
- LinkedIn: [CB Hayes](https://www.linkedin.com/in/cbhayes/)

---

Built with ❤️ by CB Hayes
