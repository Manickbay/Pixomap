import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  onNavigate?: (page: 'contact') => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
  size: number;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>(0);
  
  // Initialize and run the particle animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Safety check if canvas still exists
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      const particles = particlesRef.current;
      
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.02; // Fade out speed
        p.x += p.vx;
        p.y += p.vy;

        if (p.life <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.fill();
          
          // Optional: Add a "sparkle" cross for some particles
          if (p.size > 1.5) {
             ctx.globalAlpha = Math.max(0, p.life * 0.5);
             ctx.fillRect(p.x - p.size * 2, p.y - 0.5, p.size * 4, 1);
             ctx.fillRect(p.x - 0.5, p.y - p.size * 2, 1, p.size * 4);
          }
        }
      }
      // Reset alpha
      ctx.globalAlpha = 1;

      requestRef.current = requestAnimationFrame(animate);
    };

    // Handle resizing
    const resizeCanvas = () => {
        if (cardRef.current && canvas) {
            const rect = cardRef.current.getBoundingClientRect();
            // Ensure width/height are at least 1 to prevent errors
            canvas.width = Math.max(1, rect.width);
            canvas.height = Math.max(1, rect.height);
        }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spawn particles on move
    const colors = ['#ffffff', '#e0f2fe', '#06b6d4', '#67e8f9'];
    for (let i = 0; i < 2; i++) { // Spawn rate
        particlesRef.current.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 1.5,
            life: 1.0,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 2 + 0.5
        });
    }
  };

  return (
    <section className="py-32 px-4 bg-white relative z-20">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="relative rounded-[2.5rem] bg-brand border border-white/10 px-6 py-20 md:px-16 md:py-24 text-center overflow-hidden shadow-2xl shadow-brand/20 transition-colors duration-300"
        >
           {/* Particle Canvas Overlay */}
           <canvas 
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 mix-blend-screen"
           />

           {/* Ambient Background Glow (Static Base) */}
           <div className="absolute inset-0 bg-gradient-to-b from-brand-light/20 to-transparent pointer-events-none z-0" />
           
           {/* Top Decoration Glow (Static) */}
           <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-light/10 blur-[120px] rounded-full pointer-events-none z-0" />

           <div className="relative z-20 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
               Ready to guide your visitors?
             </h2>
             <p className="text-lg md:text-xl text-brand-100 max-w-2xl mb-12 leading-relaxed">
               Join leading airports, malls, and offices using Pixomap to improve wayfinding and operational efficiency.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                 <button 
                    onClick={() => onNavigate?.('contact')}
                    className="relative overflow-hidden bg-white text-brand px-8 py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-brand-50 transition-all duration-300 shadow-xl group/btn hover:scale-105 w-full sm:w-auto"
                 >
                   <span className="relative z-10 flex items-center gap-3">
                     Book Demo
                     <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                   </span>
                 </button>

                 <button 
                    onClick={() => onNavigate?.('contact')}
                    className="relative overflow-hidden bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-white/10 hover:border-white transition-all duration-300 group/btn hover:scale-105 w-full sm:w-auto"
                 >
                   Talk to Expert
                 </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};