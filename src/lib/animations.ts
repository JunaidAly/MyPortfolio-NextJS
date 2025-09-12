// Animation utilities for Framer Motion

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const slideInDown = {
  initial: { opacity: 0, y: -50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const hoverScale = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  whileTap: { scale: 0.95 }
};

export const hoverFloat = {
  whileHover: { 
    y: -5,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const pageTransition = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

export const backgroundGradient = {
  animate: {
    background: [
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
    ]
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "linear"
  }
};

export const textReveal = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

export const letterReveal = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};