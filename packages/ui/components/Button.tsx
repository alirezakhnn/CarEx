import Button from '@mui/material/Button';
import { useState } from 'react';
export const BtnRotator = ({ children, href }: any) => {
  // this state is for handling the rotation of the button
  const [rotate, setRotate] = useState(false);

  return (
    <Button
      sx={{
        // to make the button hexagon
        clipPath: 'polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%)',
      }}
      // when the mouse is on the button and of it negatives the current state
      onMouseEnter={() => setRotate(prev => !prev)}
      onMouseLeave={() => setRotate(prev => !prev)}

      className={`
      w-[100px] h-[53px] ${rotate ? 'scale-110 rotate-[-234deg]' : 'rotate-[54deg]'}
      rounded-full transition-all duration-500 ease-in-out shadow-xl 
      hover:bg-gradient-to-r from-oceanBlue to-aboveOcean z-10 font-monsterrat
      `}

      color='primary'
      variant="contained"
      href={href}
    >
      <span className={`
      ${rotate ? 'rotate-[235deg]' : 'rotate-[-55deg]'} 
      transition-transform duration-500 ease-in-out
      py-10 px-20
      `}
      >
        {children}
      </span>
    </Button >
  );
}
