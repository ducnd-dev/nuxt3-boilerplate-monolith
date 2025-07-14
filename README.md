# Nuxt 3 Boilerplate

A modern, production-ready Nuxt 3 boilerplate with TypeScript, Tailwind CSS v4, Pinia state management, and comprehensive developer tooling.

## ✨ Features

- 🚀 **Nuxt 3** - The latest version with SSR enabled
- 📝 **TypeScript** - Strict type checking and excellent DX
- 🎨 **Tailwind CSS v3**
- 🏪 **Pinia** - Modern state management for Vue
- 🎯 **ESLint + Prettier** - Code quality and formatting
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive Design** - Mobile-first approach
- 🚀 **Vercel Ready** - Optimized for deployment
- 🔧 **Developer Tools** - Nuxt DevTools, TypeScript, auto-imports

## 🛠️ Tech Stack

- **Framework:** Nuxt 3.17.5
- **Language:** TypeScript 5.4+
- **Styling:** Tailwind CSS v4 (alpha)
- **State Management:** Pinia 2.1
- **Icons:** Nuxt Icon + Heroicons
- **Build Tool:** Vite 6.3
- **Runtime:** Nitro 2.11
- **Deployment:** Vercel Edge Runtime

## 📁 Project Structure

```
├── assets/css/          # Global styles and Tailwind config
├── components/          # Reusable Vue components
├── composables/         # Vue composables for logic reuse
├── layouts/             # Application layouts
├── middleware/          # Route middleware
├── pages/               # File-based routing
├── plugins/             # Nuxt plugins
├── public/              # Static assets
├── server/api/          # API routes
├── stores/              # Pinia stores
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download this boilerplate**
   ```bash
   git clone <your-repo-url>
   cd nuxt3-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run generate     # Generate static site
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint with auto-fix
npm run lint:check   # Check linting without fixing
npm run format       # Format code with Prettier
npm run format:check # Check formatting without fixing

# Setup
npm run postinstall  # Generate Nuxt types (runs automatically)
```

## 🎨 Customization

### Tailwind CSS Configuration

The project uses Tailwind CSS v4 with a custom design system defined in `tailwind.config.ts`:

- **Colors:** Custom primary/secondary color palette
- **Typography:** Inter font family with JetBrains Mono for code
- **Animations:** Smooth transitions and hover effects
- **Components:** Pre-built button, card, input, and navigation styles

### Adding New Pages

Create Vue files in the `pages/` directory:

```vue
<!-- pages/new-page.vue -->
<template>
  <div>
    <h1>New Page</h1>
  </div>
</template>
```

### State Management

Use Pinia stores in the `stores/` directory:

```typescript
// stores/user.ts
export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  
  const login = async (credentials) => {
    // Login logic
  }
  
  return { user, login }
})
```

### API Routes

Create API endpoints in `server/api/`:

```typescript
// server/api/users.get.ts
export default defineEventHandler(async (event) => {
  return { users: [] }
})
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Import your project**
3. **Deploy** - Vercel will automatically detect Nuxt 3

The project is already configured with:
- Vercel Edge Runtime for optimal performance
- Proper build configuration in `.vercel.json`
- SSR optimizations

### Other Platforms

For other deployment platforms, run:

```bash
npm run build
```

The built files will be in `.output/` directory.

## 🧪 Sample Pages

The boilerplate includes sample pages to demonstrate features:

- **Homepage** (`/`) - Hero section with features and statistics
- **About** (`/about`) - Sample about page with team info
- **Users** (`/users`) - List of users with navigation
- **User Details** (`/users/[id]`) - Dynamic route with user details

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# Public variables (exposed to client)
NUXT_PUBLIC_API_BASE=https://api.example.com

# Private variables (server-side only)
NUXT_API_SECRET=your-secret-key
```

### TypeScript

TypeScript is configured with strict mode. Types are automatically generated in `.nuxt/nuxt.d.ts`.

### ESLint & Prettier

- ESLint uses Nuxt's flat config with Vue and TypeScript rules
- Prettier handles code formatting with Tailwind CSS plugin
- VS Code settings included for seamless development

## 📱 Responsive Design

The boilerplate includes:

- Mobile-first responsive design
- Dark/light theme support
- Accessible navigation components
- Optimized typography scale
- Touch-friendly interactive elements

## 🔍 SEO & Performance

- Server-side rendering (SSR) enabled
- Automatic meta tag management
- Optimized bundle splitting
- Image optimization ready
- Web font optimization

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with Tailwind CSS v4**
   - Make sure `@tailwindcss/postcss` is installed
   - Check that CSS imports are in correct order

2. **TypeScript errors**
   - Run `npm run postinstall` to regenerate types
   - Check `tsconfig.json` extends `.nuxt/tsconfig.json`

3. **Icons not loading**
   - Install specific icon collections: `npm i -D @iconify-json/heroicons`

## 📄 License

MIT License - feel free to use this boilerplate for any project!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

**Built with ❤️ using Nuxt 3**
