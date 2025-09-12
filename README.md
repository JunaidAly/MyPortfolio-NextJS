# Junaid Ali - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my skills as a React Developer and MERN stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Individual Pages**: Separate pages for About, Projects, and Contact for SEO
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and optimized content

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Typography**: Inter font from Google Fonts
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion (optional)
- **Language**: TypeScript

## 📂 Project Structure

```
junaid-portfolio/
├── components/
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── about.tsx
│   ├── projects.tsx
│   └── contact.tsx
├── styles/
│   └── globals.css
├── public/
│   └── (static assets)
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository** (or copy the files to your project directory)
   ```bash
   git clone <your-repo-url>
   cd junaid-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the portfolio

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **components/Hero.tsx** - Update name, roles, and bio
2. **components/About.tsx** - Update education, personal info, and interests
3. **components/Experience.tsx** - Update work experience
4. **components/Projects.tsx** - Update projects and links
5. **components/Contact.tsx** - Update contact information
6. **components/Footer.tsx** - Update social links and contact info

### Colors and Styling
The project uses a blue-purple gradient theme. To change colors:

1. **tailwind.config.js** - Update the color palette
2. **styles/globals.css** - Update CSS custom properties

### Content Updates
- **Resume/CV**: Place your resume PDF in `public/resume.pdf`
- **Favicon**: Update favicon files in the `public/` directory
- **Images**: Add project images to `public/` directory and update image paths

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Optimization
Update the SEO information in:
- `components/Layout.tsx` - Default meta tags
- `pages/_document.tsx` - Document head
- Individual page files - Page-specific meta tags

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Other Platforms
The project can be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

Build command: `npm run build`
Output directory: `out` (for static export)

## 🎯 Performance

The portfolio is optimized for performance:
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Excellent
- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Optimized Google Fonts loading
- **Code Splitting**: Automatic with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Junaid Ali**
- Email: juanidalikhan03@gmail.com
- Phone: 03495328703
- Location: Islamabad, Pakistan
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Feather Icons
- Fonts from Google Fonts
- Built with Next.js and Tailwind CSS

---

**Note**: Remember to update all placeholder links, images, and personal information with your actual details before deploying to production.