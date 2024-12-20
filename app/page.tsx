'use client';

import { BackgroundHearts } from '@/components/BackgroundHearts';
import { TimeElapsed } from '@/components/TimeElapsed';
import { ImageCarousel } from '@/components/ImageCarousel';
import { TextSections } from '@/components/TextSections';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#3e0707' }}>
      <BackgroundHearts />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <TimeElapsed />
          <ImageCarousel />
          <TextSections />
        </div>
      </div>
    </main>
  );
}