// Application constants

export const SITE_CONFIG = {
  name: 'Junaid Ali',
  title: 'Full Stack Developer',
  description: 'BS Computer Science graduate passionate about MERN stack development.',
  url: 'https://junaidali.dev',
  email: 'contact@junaidali.dev',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
} as const;