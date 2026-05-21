import GeekMascot from '@/components/GeekMascot';
import GeekParticles from '@/components/GeekParticles';
import Home from '@/pages/Home';

export default function App() {
  return (
    <>
      {/* Circuit grid overlay */}
      <div className="circuit-overlay" />

      {/* Falling code particles */}
      <GeekParticles />

      {/* The interactive geek mascot */}
      <GeekMascot />

      {/* Page content */}
      <Home />
    </>
  );
}
