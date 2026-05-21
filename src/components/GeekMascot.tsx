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
  const [blinking, setBlinking] = useState(false);
  const [glitching, setGlitching] = useState(false);
  const [clicked, setClicked] = useState(false);
  const bitsRef = useRef<BinaryBit[]>([]);
  const rafRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Terminal cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinking((b) => !b);
    }, 530);
    return () => clearInterval(interval);
  }, []);

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
      >
        <svg viewBox="0 0 140 140" className="w-full h-full">
          <defs>
            <linearGradient id="geekBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00ff41" stopOpacity="0.15" />
            </linearGradient>
            <filter id="geekGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h8v-4h4v4h8" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.3" />
              <circle cx="10" cy="10" r="1.5" fill="#00ff41" opacity="0.4" />
            </pattern>
          </defs>

          {/* Circuit board body */}
          <path
            d="M70 10 C40 10, 15 35, 15 70 C15 95, 30 115, 50 125 L50 135 L60 125 L70 135 L80 125 L90 135 L90 125 C110 115, 125 95, 125 70 C125 35, 100 10, 70 10Z"
            fill="url(#geekBody)"
            stroke="#00d4ff"
            strokeWidth="1.5"
            filter="url(#geekGlow)"
          />
          <path
            d="M70 10 C40 10, 15 35, 15 70 C15 95, 30 115, 50 125 L50 135 L60 125 L70 135 L80 125 L90 135 L90 125 C110 115, 125 95, 125 70 C125 35, 100 10, 70 10Z"
            fill="url(#circuit)"
            opacity="0.6"
          />

          {/* Circuit traces */}
          <path d="M25 50 h20 v10 h15 v-10 h20" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
          <path d="M30 80 h15 v-8 h10 v8 h25" fill="none" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
          <path d="M40 100 h10 v5 h20 v-5 h15" fill="none" stroke="#00d4ff" strokeWidth="0.8" opacity="0.35" />

          {/* Glowing nodes */}
          <circle cx="45" cy="50" r="2.5" fill="#00d4ff" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80" cy="80" r="2" fill="#00ff41" opacity="0.7">
            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="95" cy="60" r="2" fill="#00d4ff" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Eyes */}
          <rect x="42" y="55" width="14" height="18" rx="3" fill="#0a0a0f" stroke="#00d4ff" strokeWidth="1.5" />
          <rect x="84" y="55" width="14" height="18" rx="3" fill="#0a0a0f" stroke="#00d4ff" strokeWidth="1.5" />

          {/* Terminal cursor pupils */}
          <rect
            x="47" y="60" width="4" height="10" rx="1"
            fill="#00ff41"
            opacity={blinking ? 0.2 : 1}
            style={{ transition: 'opacity 0.05s' }}
          />
          <rect
            x="89" y="60" width="4" height="10" rx="1"
            fill="#00ff41"
            opacity={blinking ? 0.2 : 1}
            style={{ transition: 'opacity 0.05s' }}
          />

          {/* Mouth */}
          <rect x="58" y="95" width="24" height="3" rx="1.5" fill="#00d4ff" opacity="0.7" />

          {/* Glitch overlays */}
          {glitching && (
            <>
              <rect x="35" y="45" width="30" height="4" fill="#00ff41" opacity="0.5" />
              <rect x="75" y="75" width="20" height="3" fill="#00d4ff" opacity="0.4" />
            </>
          )}

          {/* Outer glow ring */}
          <circle cx="70" cy="70" r="65" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="r" values="65;68;65" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </>
  );
}
