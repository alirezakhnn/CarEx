import Button from '@mui/material/Button';
import React from 'react';
import { useState, ReactNode } from 'react';

interface BtnRotatorProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: any;
  color?: any;
  variant?: any;
}

export const BtnRotator = ({ children, href, className, onClick }: BtnRotatorProps): React.ReactElement => {
  const [rotate, setRotate] = useState<boolean>(false);

  return (
    <Button
      onClick={onClick}
      sx={{
        clipPath: 'polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
      }}
      onMouseEnter={() => setRotate(prev => !prev)}
      onMouseLeave={() => setRotate(prev => !prev)}
      className={`
        w-[100px] h-[53px] ${rotate ? 'scale-110 rotate-[-234deg]' : 'rotate-[54deg]'}
        bg-gradient-to-l from-oceanBlue via-aboveOcean to-oceanBlue rounded-full transition-all duration-500 ease-in-out shadow-xl 
        hover:bg-gradient-to-r from-oceanBlue to-aboveOcean z-1 font-monsterratBold ${className}
      `}
      color='primary'
      variant="contained"
      href={href}
    >
      <span
        className={`
          ${rotate ? 'rotate-[235deg]' : 'rotate-[-55deg]'} 
          transition-transform duration-500 ease-in-out
          py-10 px-20
        `}
      >
        {children}
      </span>
    </Button>
  );
}

export const BtnShadow = ({ onClick, children, color, variant, className, href }: BtnRotatorProps) => (
  <Button className={`my-3 px-4 py-2 rounded-lg font-monsterratBold hover:scale-110 transition-all ${className}`} variant={variant} onClick={onClick} color={color} href={href}>
    {children}
  </Button>
);
