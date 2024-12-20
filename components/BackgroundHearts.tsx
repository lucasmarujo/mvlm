'use client';

import { 
  Heart,
  HeartHandshake,
  Gift,
  PartyPopper,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';

const ICONS = [
  {
    icon: Heart,
    className: "text-pink-300"
  },
  {
    icon: HeartHandshake,
    className: "text-pink-200"
  },
  {
    icon: Gift,
    className: "text-pink-300"
  },
  {
    icon: PartyPopper,
    className: "text-pink-400"
  },
  {
    icon: Sparkles,
    className: "text-pink-200"
  }
];

// 1. Crie uma função para gerar números aleatórios com seed
const seededRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export function BackgroundHearts() {
  const [hearts, setHearts] = useState<Array<{
    left: number;
    top: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      left: seededRandom(i * 1) * 100,
      top: seededRandom(i * 2) * 100,
      size: seededRandom(i * 3) * 30 + 20,
      duration: seededRandom(i * 4) * 3 + 4
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${heart.left}%`,
            top: `${heart.top}%`,
            animation: `float ${heart.duration}s infinite`,
            opacity: 0.15
          }}
        >
          <HeartHandshake size={heart.size} className="text-pink-200" />
        </div>
      ))}
    </div>
  );
}