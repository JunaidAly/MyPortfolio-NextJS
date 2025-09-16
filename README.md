# Junaid Ali - Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my skills as a React Developer and MERN stack developer. Features interactive 3D avatar and immersive animations.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations powered by Framer Motion
- **3D Interactive Avatar**: Animated 3D model with dancing animations and floating skill labels
- **Responsive**: Fully responsive design that works on all devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Individual Pages**: Separate pages for About, Projects, and Contact for SEO
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Optimized**: Meta tags, structured data, and optimized content
- **Interactive Elements**: Hover effects, particle backgrounds, and dynamic content

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Typography**: Inter font from Google Fonts
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **3D Models**: Ready Player Me FBX animated models
- **Language**: TypeScript
- **Particle Effects**: Custom particle system

## 📂 Project Structure

```
myportfolio-nextjs/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Main hero section with 3D avatar
│   │   │   ├── About.tsx         # About section
│   │   │   ├── Experience.tsx    # Experience timeline
│   │   │   ├── Projects.tsx      # Projects showcase
│   │   │   └── Contact.tsx       # Contact form
│   │   ├── ui/
│   │   │   ├── Avatar3D.tsx      # 3D animated avatar component
│   │   │   ├── Skills2D.tsx      # 2D fallback for skills
│   │   │   ├── ErrorBoundary.tsx # Error handling for 3D components
│   │   │   ├── AnimatedText.tsx  # Text animations
│   │   │   └── ParticleBackground.tsx # Particle effects
│   │   └── layout/
│   │       ├── Navbar.tsx        # Navigation component
│   │       └── Footer.tsx        # Footer component
│   ├── lib/
│   │   └── animations.ts         # Framer Motion animations
│   ├── app/
│   │   ├── page.tsx             # Main page
│   │   ├── about/page.tsx       # About page
│   │   ├── projects/page.tsx    # Projects page
│   │   └── contact/page.tsx     # Contact page
│   └── styles/
│       └── globals.css
├── public/
│   ├── 3D/                      # Original 3D models
│   ├── 3DNew/                   # New animated dancing model
│   ├── myprofile.jpg            # Profile image
│   └── My Resume.pdf            # Resume file
├── 3D_MODEL_GUIDE.md           # 3D model integration guide
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
   cd myportfolio-nextjs
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

### 3D Model Setup

The portfolio includes animated 3D avatars. To use your own models:

1. **Create your 3D avatar** at [Ready Player Me](https://readyplayer.me/)
2. **Download as FBX** with animations
3. **Place model files** in `public/3DNew/` directory
4. **Update model path** in `src/components/ui/Avatar3D.tsx`

See `3D_MODEL_GUIDE.md` for detailed instructions.

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **src/components/sections/Hero.tsx** - Update name, roles, and bio
2. **src/components/sections/About.tsx** - Update education, personal info, and interests
3. **src/components/sections/Experience.tsx** - Update work experience
4. **src/components/sections/Projects.tsx** - Update projects and links
5. **src/components/sections/Contact.tsx** - Update contact information
6. **src/components/layout/Footer.tsx** - Update social links and contact info

### 3D Avatar Customization
- **Skills & Hobbies**: Update the skills and hobbies arrays in `Avatar3D.tsx`
- **Model Animations**: Modify animation settings and rotations
- **Lighting**: Adjust 3D scene lighting for your model
- **Positioning**: Fine-tune skill label positions around the avatar

### Colors and Styling
The project uses a blue-purple gradient theme. To change colors:

1. **tailwind.config.js** - Update the color palette
2. **styles/globals.css** - Update CSS custom properties

### Content Updates
- **Resume/CV**: Place your resume PDF in `public/My Resume.pdf`
- **Profile Image**: Update `public/myprofile.jpg` with your photo
- **Favicon**: Update favicon files in the `public/` directory
- **Project Images**: Add project images to `public/` directory and update image paths
- **3D Models**: Place your Ready Player Me models in `public/3DNew/`

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
- **3D Optimization**: Dynamic imports, error boundaries, and fallback components
- **Animation Performance**: Hardware-accelerated animations with Framer Motion

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
- Icons from Feather Icons (React Icons)
- Fonts from Google Fonts
- 3D Models from Ready Player Me
- 3D Graphics powered by Three.js ecosystem
- Animations powered by Framer Motion
- Built with Next.js and Tailwind CSS

## 🎮 3D Features

- **Interactive 3D Avatar**: Dancing animated character with smooth rotations
- **Skill Visualization**: Floating skill labels positioned around the avatar
- **Dynamic Lighting**: Multiple light sources for realistic 3D rendering
- **Orbit Controls**: Drag to rotate, scroll to zoom, auto-rotation
- **Error Handling**: Graceful fallback to 2D components if 3D fails
- **Performance Optimized**: Lazy loading and efficient rendering

---

**Note**: Remember to update all placeholder links, images, and personal information with your actual details before deploying to production.