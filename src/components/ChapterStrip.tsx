import { useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Bandeau horizontal générique de chapitres cliquables.
// Utilisé par ChaptersCarousel (séquences phares, desktop)
// et IntegraleChapters (intégrale, desktop + mobile).

export interface StripGroup {
  title: string;
  chapters: { time: string; seconds: number; title: string; text?: string }[];
}

interface ChapterStripProps {
  groups: StripGroup[];
  onSeek: (seconds: number) => void;
  cardWidth?: string; // classes tailwind de largeur de carte
  edgeFrom?: string; // couleur des dégradés de bord (doit matcher le fond de la section)
}

export default function ChapterStrip({ groups, onSeek, cardWidth = 'w-[280px]', edgeFrom = 'from-[#fdfbf7]' }: ChapterStripProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative group/strip">
      {/* Flèches (desktop) */}
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Chapitres précédents"
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-black/5 items-center justify-center text-dark-green hover:text-heading-accent hover:scale-110 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Chapitres suivants"
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 shadow-lg border border-black/5 items-center justify-center text-dark-green hover:text-heading-accent hover:scale-110 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dégradés de bord */}
      <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r ${edgeFrom} to-transparent z-10`} />
      <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l ${edgeFrom} to-transparent z-10`} />

      {/* Bandeau défilant */}
      <div
        ref={scrollerRef}
        className="no-scrollbar flex items-stretch gap-3 sm:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-10 py-4"
      >
        {groups.map((group, gi) => (
          <div key={gi} className="flex items-stretch gap-3 sm:gap-4">
            {/* Carte d'entête de grand chapitre */}
            <div className="snap-start flex-shrink-0 w-[150px] sm:w-[170px] rounded-2xl bg-dark-green text-white p-4 sm:p-5 flex flex-col justify-center shadow-md">
              <span
                className="text-base sm:text-lg leading-snug font-normal"
                style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}
              >
                {group.title}
              </span>
              <span className="mt-2 text-[11px] uppercase tracking-wider text-white/60 font-inter">
                {group.chapters.length} souvenir{group.chapters.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* Cartes chapitres */}
            {group.chapters.map((chapter, ci) => (
              <button
                key={ci}
                onClick={() => onSeek(chapter.seconds)}
                className={`snap-start flex-shrink-0 ${cardWidth} text-left bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-heading-accent/20 transition-all duration-300 flex flex-col`}
              >
                <span className="inline-block self-start px-2.5 py-0.5 text-xs font-semibold rounded-full bg-heading-accent/10 text-heading-primary mb-2 font-inter">
                  {chapter.time}
                </span>
                <span
                  className="text-sm sm:text-base leading-snug text-dark-green font-normal"
                  style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}
                >
                  {chapter.title}
                </span>
                {chapter.text && (
                  <span className="mt-2 text-xs text-body-green/80 font-inter leading-relaxed line-clamp-3">
                    {chapter.text}
                  </span>
                )}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
