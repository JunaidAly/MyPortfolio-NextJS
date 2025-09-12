"use client"
import { motion } from "framer-motion";
import { textReveal, letterReveal } from "@/lib/animations";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0 
}) => {
  const words = text.split(" ");

  return (
    <motion.div
      variants={textReveal}
      initial="initial"
      animate="animate"
      className={className}
      style={{ 
        transition: `all 0.3s ease`,
        transitionDelay: `${delay}s`
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterReveal}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;