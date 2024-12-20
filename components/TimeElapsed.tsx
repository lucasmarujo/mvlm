'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export function TimeElapsed() {
  const [timeElapsed, setTimeElapsed] = useState('');

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2023-11-15T21:00:00-03:00');
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const firstLine = `${years} anos, ${months} meses, ${days} dias`;
      const secondLine = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
      
      setTimeElapsed(`${firstLine}\n${secondLine}`);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-pink-100 flex items-center justify-center gap-2">
        <Heart className="text-pink-300" />
        Tempo Decorrido
        <Heart className="text-pink-300" />
      </h1>
      <p className="text-2xl font-semibold text-pink-100 whitespace-pre-line">
        {timeElapsed}
      </p>
    </div>
  );
}