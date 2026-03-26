import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-[9999] flex items-center justify-center transition-opacity duration-500" style={{ backgroundColor: '#0c1831' }}>
      <div className="relative flex flex-col items-center gap-4">
        {/* Logo with heartbeat animation */}
        <div className="animate-heartbeat flex items-center gap-2">
          <img src="/Logo.svg" alt="Зубик" width="56" height="56" className="inline-block" />
          <div className="font-heading font-extrabold text-2xl leading-tight text-white">
            ЗУБиК
            <span className="block text-xs font-semibold tracking-widest opacity-80">
              СТОМАТОЛОГИЯ
            </span>
          </div>
        </div>
        
        {/* Loading bar */}
        <div className="w-48">
          <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full animate-[loading_3s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
