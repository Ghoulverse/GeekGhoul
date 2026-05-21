import { useEffect, useRef } from 'react';

interface CodeParticle {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  char: string;
  color: string;
  size: number;
}

const CODE_CHARS = ['0', '1', '{', '}', '<', '>', '/', '//', '\\', '|', '=', '+', '-', '*', '&', '%', '$', '#', '@'];
const COLORS = ['#00d4ff', '#00ff41', '#00d4ffaa', '#00ff41aa', '#f59e0b', '#00d4ff66'];

export default function GeekParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CodeParticle[]>([]);
  const rafRef = useRef<number>(0);

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

    const createParticle = (): CodeParticle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      speed: 0.5 + Math.random() * 1.5,
      opacity: 0.1 + Math.random() * 0.4,
      char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 10 + Math.random() * 14,
    });

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.char, p.x, p.y);
        ctx.globalAlpha = 1;

        p.y += p.speed;
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
          p.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
