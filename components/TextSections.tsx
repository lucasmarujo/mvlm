import { HeartHandshake, Sparkles } from 'lucide-react';

export function TextSections() {
  return (
    <div className="space-y-8 text-pink-100">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <HeartHandshake className="text-pink-300" />
          Nossa História
        </h3>
        <p className="text-lg">
          Cada momento juntos é uma nova página em nossa história de amor.
          Cada sorriso compartilhado, cada abraço trocado, são tesouros que guardamos em nossos corações.
        </p>
      </div>

      <div className="text-center">
        <a href="https://drive.google.com/drive/folders/1OWrC0iohtTvmCoN64UOI-epqM-WD7hzu?usp=sharing" className="text-pink-300 underline">
          Acesse todas nossas fotos clicando aqui
        </a>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold flex items-center justify-center gap-2">
          <Sparkles className="text-pink-300" />
          Nosso Futuro
        </h3>
        <p className="text-lg">
          O futuro é brilhante quando estamos juntos.
          Cada dia é uma nova oportunidade para construirmos mais memórias e fortalecermos nosso amor.
        </p>
      </div>
    </div>
  );
}