import { useEffect, useRef, useState, useCallback } from 'react';
import { useGeekCursor } from '@/hooks/useGeekCursor';

interface BinaryBit {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: string;
  opacity: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function GeekMascot() {
  const cursor = useGeekCursor();
  const [glitching, setGlitching] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const bitsRef = useRef<BinaryBit[]>([]);
  const rafRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Glitch trigger on movement
  useEffect(() => {
    if (cursor.velocity > 3) {
      setGlitching(true);
      const t = setTimeout(() => setGlitching(false), 150);
      return () => clearTimeout(t);
    }
  }, [cursor.velocity]);

  // Binary particle system
  const spawnBits = useCallback((cx: number, cy: number) => {
    for (let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.5;
      const speed = 1 + Math.random() * 3;
      bitsRef.current.push({
        x: cx + 70,
        y: cy + 70,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        char: Math.random() > 0.5 ? '1' : '0',
        opacity: 1,
        life: 0,
        maxLife: 40 + Math.random() * 30,
        size: 10 + Math.random() * 8,
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bitsRef.current = bitsRef.current.filter((b) => b.life < b.maxLife);
      bitsRef.current.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        b.vy += 0.05;
        b.life++;
        b.opacity = 1 - b.life / b.maxLife;

        ctx.font = `${b.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `rgba(0, 212, 255, ${b.opacity})`;
        ctx.fillText(b.char, b.x, b.y);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleClick = useCallback(() => {
    setClicked(true);
    spawnBits(cursor.x, cursor.y);
    setTimeout(() => setClicked(false), 200);
  }, [cursor.x, cursor.y, spawnBits]);

  const size = typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 140;
  const glitchOffset = glitching ? (Math.random() - 0.5) * 6 : 0;

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40"
      />
      <div
        className="fixed z-30 cursor-pointer select-none"
        style={{
          left: cursor.x,
          top: cursor.y,
          width: size,
          height: size,
          transform: `translate(${glitchOffset}px, 0) scale(${clicked ? 0.92 : 1})`,
          transition: clicked ? 'transform 0.05s' : 'transform 0.3s ease-out',
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/ghoul_mascot.png"
          alt="GEEK GHOUL"
          className="w-full h-full object-contain"
          draggable={false}
          style={{
            filter: isHovered
              ? 'brightness(1.15) drop-shadow(0 0 20px rgba(0,212,255,0.5)) drop-shadow(0 0 40px rgba(0,255,65,0.3))'
              : undefined,
            transition: 'filter 0.3s ease',
          }}
        />
      </div>
    </>
  );
}
