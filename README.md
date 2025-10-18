# Modern Portfolio Template

A modern, responsive, and customizable portfolio template built with Next.js, Tailwind CSS, and TypeScript. This template is designed to help developers showcase their work and skills with a clean, professional design.

![Portfolio Screenshot](/public/images/screenshot.png)

## 🚀 Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS 4
- 📱 Fully responsive design
- 🌓 Dark/Light mode support
- 📝 Blog-ready with MDX support
- 🔍 SEO optimized
- 📊 Analytics ready
- 🛠 Easy customization

## 🎨 Theme Preview

<div style="text-align: center; margin: 2rem 0;">
  <img 
    src="/public/images/dark-theme.png" 
    alt="Portfolio Dark Theme Preview" 
    style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.2);"
  />
  <p style="margin-top: 1rem; color: #9CA3AF; font-size: 0.9rem;">Dark theme shown (auto-switches based on system preferences)</p>
</div>

## 🛠 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm (v7+) or yarn (v1.22+)
- Git

### Quick Start

1. **Fork this repository**
   - Click the "Fork" button at the top-right of this page

2. **Clone your forked repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/portfolio.git
   cd portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

6. **Start customizing!**
   - Update your personal information in the components
   - Add your projects to `src/data/projects.ts`
   - Customize colors in `tailwind.config.js`

## 🎨 Customization

### 1. Personal Information

Update your personal details in these files:
- `src/app/layout.tsx` - Site metadata and SEO settings
- `src/components/Hero.tsx` - Your name, title, and introduction
- `src/components/Footer.tsx` - Copyright and social links
- `package.json` - Project metadata and author information

### 2. Projects

Edit `src/data/projects.ts` to add your projects:
```typescript
export const projects = [
  {
    title: 'Project Name',
    description: 'Brief description of your project',
    tags: ['React', 'Next.js', 'TypeScript'],
    imageUrl: '/images/projects/example.jpg',
    githubUrl: 'https://github.com/yourusername/project',
    liveUrl: 'https://project-demo.com',
  },
  // Add more projects...
];
```

### 3. Styling

Customize the design in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Change this to your brand color
          dark: '#1D4ED8',
          light: '#60A5FA',
        },
        // Add more custom colors...
      },
    },
  },
};
```

### 4. Dark Mode

This template includes built-in dark mode. Toggle it using the button in the header.

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhshahzad%2Fportfolio&project-name=my-portfolio&repository-name=portfolio)

1. Click the "Deploy" button above
2. Sign in with your GitHub account
3. Follow the on-screen instructions
4. Your portfolio will be live at `https://your-username.vercel.app`

### GitHub Pages

1. Update `next.config.js` with your repository name:
   ```javascript
   const nextConfig = {
     basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
     assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name/' : '',
   };
   ```

2. Run the build command:
   ```bash
   npm run build
   ```

3. Push the code to GitHub
4. Go to Repository Settings > Pages
5. Select `gh-pages` branch and `root` folder
6. Click "Save"

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📬 Contact

Have questions or suggestions? Open an issue or reach out to [muhammad@mhshahzad.tech](mailto:muhammad@mhshahzad.tech).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Muhammad Hamza Shahzad](https://mhshahzad.tech)  
Using [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
