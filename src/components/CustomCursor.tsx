import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const trailXSpring = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.8 });
  const trailYSpring = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleHoverOn = () => setIsHovering(true);
    const handleHoverOff = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('cursor-hover-on', handleHoverOn);
    window.addEventListener('cursor-hover-off', handleHoverOff);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('cursor-hover-on', handleHoverOn);
      window.removeEventListener('cursor-hover-off', handleHoverOff);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible || isMobile) return null;

  return (
    <>
      {/* Trail - размытый след за курсором */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{ x: trailXSpring, y: trailYSpring, translateX: '-50%', translateY: '-50%' }}
      >
        <div className="w-10 h-10 bg-[#7bc2b3] rounded-full blur-xl opacity-40"></div>
      </motion.div>

      {/* Main Cursor - основной курсор с иконкой зуба */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovering ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              'drop-shadow(0 0 8px rgba(123,194,179,0.5))', 
              'drop-shadow(0 0 16px rgba(123,194,179,0.9))', 
              'drop-shadow(0 0 8px rgba(123,194,179,0.5))'
            ]
          }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative flex items-center justify-center text-white drop-shadow-md"
        >
          <svg width={isHovering ? "36" : "44"} height={isHovering ? "36" : "44"} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 4C14.3 4 13.2 4.6 12.5 5.5C11.8 4.6 10.7 4 9.5 4C7 4 5 6 5 8.5C5 10.8 6.4 12.8 8.5 13.6V18.5C8.5 19.9 9.6 21 11 21C12.4 21 13.5 19.9 13.5 18.5V16.5H14.5V18.5C14.5 19.9 15.6 21 17 21C18.4 21 19.5 19.9 19.5 18.5V13.6C21.6 12.8 23 10.8 23 8.5C23 6 21 4 18.5 4H15.5Z" stroke="#1e293b" strokeWidth="0.75" strokeLinejoin="round" />
          </svg>
          {isHovering && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center pb-2"
            >
              <Heart size={16} className="fill-[#ff6b6b] text-[#ff6b6b]" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
