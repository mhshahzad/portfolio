# Muhammad Hamza Shahzad - Portfolio

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

## 🛠 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mhshahzad/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🎨 Customization

### Update Personal Information

Edit the following files to update your personal information:
- `src/app/layout.tsx` - Update site metadata, title, and description
- `src/components/Header.tsx` - Update navigation links
- `src/components/Hero.tsx` - Update your introduction
- `src/components/Footer.tsx` - Update footer information

### Change Colors

Edit the `tailwind.config.js` file to customize the color scheme:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Update these colors to match your brand
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1D4ED8',
          light: '#60A5FA',
        },
        // ... other color customizations
      },
    },
  },
};
```

### Add/Modify Sections

Each section of the portfolio is a separate component in the `src/components` directory. You can add, remove, or modify these components as needed.

## 📦 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmhshahzad%2Fportfolio)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mhshahzad/portfolio)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

## 📬 Contact

Have questions or suggestions? Open an issue or reach out to [mh.shahzad@outlook.com](mailto:mh.shahzad@outlook.com).

---

Built with ❤️ by [Muhammad Hamza Shahzad](https://mhshahzad.tech)

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
