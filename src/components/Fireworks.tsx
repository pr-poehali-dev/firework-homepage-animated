import { useEffect, useState } from "react";

interface Firework {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  particles: Particle[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  size: number;
}

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const colors = ["#FF5252", "#FFD740", "#64FFDA", "#448AFF", "#E040FB", "#FF4081"];

  useEffect(() => {
    // Create a new firework every 1-2 seconds
    const interval = setInterval(() => {
      createFirework();
    }, Math.random() * 1000 + 1000);

    // Initial fireworks
    for (let i = 0; i < 3; i++) {
      setTimeout(() => createFirework(), i * 300);
    }

    // Animation loop
    let animationFrame: number;
    const animate = () => {
      updateFireworks();
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const createFirework = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const newFirework: Firework = {
      id: Date.now() + Math.random(),
      x: Math.random() * windowWidth * 0.8 + windowWidth * 0.1,
      y: Math.random() * windowHeight * 0.4 + windowHeight * 0.1,
      size: Math.random() * 2 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      particles: [],
    };

    // Create particles for this firework
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      
      newFirework.particles.push({
        id: i,
        x: newFirework.x,
        y: newFirework.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: newFirework.color,
        alpha: 1,
        size: Math.random() * 3 + 1,
      });
    }

    setFireworks(prev => [...prev, newFirework]);
  };

  const updateFireworks = () => {
    setFireworks(prev => 
      prev
        .map(firework => ({
          ...firework,
          particles: firework.particles.map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.05, // gravity
            alpha: particle.alpha - 0.01, // fade out
          }))
        }))
        .filter(firework => firework.particles.some(p => p.alpha > 0))
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {fireworks.map(firework => (
        <div key={firework.id} className="absolute">
          {firework.particles.map(particle => (
            <div
              key={`${firework.id}-${particle.id}`}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.alpha,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
