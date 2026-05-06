import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: { enable: true },
          },
          color: { value: ['#8B5CF6', '#6366F1', '#EC4899', '#06B6D4'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.1, max: 0.4 },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },
          size: {
            value: { min: 0.5, max: 2.5 },
            animation: {
              enable: true,
              speed: 1.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: '#8B5CF6',
            opacity: 0.08,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none' as const,
            random: true,
            straight: false,
            outModes: { default: 'bounce' as const },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
          },
          modes: {
            grab: {
              distance: 140,
              links: { opacity: 0.2 },
            },
          },
        },
        detectRetina: true,
        background: { color: 'transparent' },
      }}
    />
  );
}
