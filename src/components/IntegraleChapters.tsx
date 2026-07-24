import { useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { INTEGRALE_GROUPS } from '../data/integraleChaptersData';
import { seekYouTube } from '../utils/youtubeSeek';

// Chapitres de la vidéo intégrale (~5h14, 70 souvenirs en 9 actes).
// Accordéons verticaux (mobile ET desktop) — la vidéo reste magnète en haut
// pendant qu'on les déroule (pas de scrollIntoView : elle est déjà à l'écran).

export default function IntegraleChapters() {
  const seekVideo = useCallback((seconds: number) => {
    seekYouTube('integrale-video', seconds, false);
  }, []);

  return (
    <div className="mt-10 max-w-3xl mx-auto">
      <div className="mb-4">
        <h3
          className="text-xl sm:text-2xl font-normal text-heading-primary"
          style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}
        >
          Les chapitres de l'intégrale
        </h3>
        <p className="text-body-green text-sm font-inter opacity-80 mt-1">
          Plus de cinq heures de récit, découpées en 70 souvenirs — cliquez pour sauter au bon moment.
        </p>
      </div>

      <div className="space-y-3">
        {INTEGRALE_GROUPS.map((group, gi) => (
          <details key={gi} className="group/acc bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 hover:bg-bg-light/60 transition-colors">
              <span
                className="text-base sm:text-lg text-dark-green leading-snug"
                style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}
              >
                {group.title}
              </span>
              <span className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[11px] uppercase tracking-wider text-body-green/60 font-inter">
                  {group.chapters.length} souvenirs
                </span>
                <ChevronDown className="w-4 h-4 text-body-green/60 transition-transform group-open/acc:rotate-180" />
              </span>
            </summary>
            <div className="px-2 pb-2 space-y-1">
              {group.chapters.map((chapter, ci) => (
                <button
                  key={ci}
                  onClick={() => seekVideo(chapter.seconds)}
                  className="w-full text-left flex items-start gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-bg-light active:bg-bg-light transition-colors"
                >
                  <span className="flex-shrink-0 px-2 py-0.5 text-[11px] sm:text-xs font-semibold rounded-full bg-heading-accent/10 text-heading-primary font-inter mt-0.5">
                    {chapter.time}
                  </span>
                  <span className="text-sm sm:text-[15px] text-dark-green leading-snug font-inter">
                    {chapter.title}
                  </span>
                </button>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
