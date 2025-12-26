// components/HeroSection.tsx
import { ReactNode } from 'react';
import styles from './herosection.module.css';

interface HeroSectionProps {
  children: ReactNode;
  backgroundImage?: string; // Optional custom image
  gradient?: string; // Optional custom gradient
  minHeight?: string; // Optional custom height
  contentPosition?: 'left' | 'center' | 'right';
}

export default function HeroSection({ 
  children, 
  backgroundImage = '/hero-bg.jpg', // Default image
  gradient = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.35))',
  minHeight = '70vh',
  contentPosition = 'left'
}: HeroSectionProps) {
  
  const contentClasses = `${styles.heroContent} ${styles[contentPosition]}`;
  
  return (
    <div 
      className={styles.hero}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        minHeight
      }}
    >
      {/* Gradient overlay */}
      <div 
        className={styles.gradientOverlay}
        style={{ background: gradient }}
      ></div>
      
      {/* Content container */}
      <div className={contentClasses}>
        {children}
      </div>
    </div>
  );
}