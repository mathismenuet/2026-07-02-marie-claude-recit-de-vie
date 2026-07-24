import HiddenMoment from './HiddenMoment';

// Carrousel des photos de la journée de tournage (30 mars 2026, Dourdan).
// Défilement automatique très doux (marquee CSS, GPU), pause au survol,
// désactivé si prefers-reduced-motion. Photos en WebP allégé (public/photos).

const PHOTOS = Array.from({ length: 8 }, (_, i) => `/photos/photo-${String(i + 1).padStart(2, '0')}.webp`);

export default function PhotoCarousel() {
  return (
    <section id="photos" className="relative w-full py-20 sm:py-28 bg-[#fdfbf7] border-t border-dark-green/5 overflow-hidden">
      {/* Souvenirs cachés : la Naïade et l'abbaye de Cluny */}
      <HiddenMoment emoji="🏖️" seconds={9248} label="Un souvenir caché…" className="absolute top-8 right-6 sm:right-14 z-10" />
      <HiddenMoment emoji="⛪" seconds={8125} label="Un souvenir caché…" className="absolute bottom-6 left-6 sm:left-14 z-10" delayed />

      <div className="text-center mb-10 sm:mb-14 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-neue text-dark-green tracking-tight mb-4">
          La journée du tournage
        </h2>
        <p className="text-lg text-medium-dark-green/70 max-w-2xl mx-auto font-inter">
          Le 30 mars 2026, chez Marie-Claude à Dourdan — quelques images de cette journée pas comme les autres.
        </p>
      </div>

      <div className="marquee-wrap relative">
        {/* Dégradés de bord */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10" />

        <div className="marquee flex items-center gap-4 sm:gap-7 w-max px-4">
          {[...PHOTOS, ...PHOTOS].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Photo de la journée de tournage chez Marie-Claude"
              decoding="async"
              className={`h-[240px] sm:h-[340px] w-auto rounded-2xl shadow-md border border-black/5 object-cover transition-transform duration-500 hover:scale-[1.04] hover:shadow-xl ${i % 2 ? '-rotate-1' : 'rotate-1'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
