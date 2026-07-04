import { useCallback } from 'react';
import { Cloud, Play } from 'lucide-react';
import { CHAPTER_GROUPS } from '../data/chaptersData';

export default function ChaptersTimeline() {
  const seekVideo = useCallback((seconds: number) => {
    const iframe = document.getElementById('main-video') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds, true] }),
        '*'
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
    }
  }, []);

  return (
    <div id="chapitres" className="w-full py-8 sm:py-16 px-4 sm:px-10 lg:px-12 bg-[#fdfbf7] relative overflow-hidden h-full">

      {/* Decorative Clouds */}
      <div className="absolute top-20 right-[-5%] opacity-20 animate-float pointer-events-none">
        <Cloud size={140} className="text-medium-dark-green fill-medium-dark-green" strokeWidth={1} />
      </div>
      <div className="absolute top-[30%] left-[-5%] opacity-10 animate-float-delayed pointer-events-none">
        <Cloud size={180} className="text-dark-green fill-dark-green" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[20%] right-[5%] opacity-15 animate-float pointer-events-none">
        <Cloud size={110} className="text-accent-yellow fill-accent-yellow" strokeWidth={1} />
      </div>
      <div className="absolute bottom-[5%] left-[2%] opacity-20 animate-float-delayed pointer-events-none">
        <Cloud size={130} className="text-medium-dark-green fill-medium-dark-green" strokeWidth={1} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-normal text-heading-primary mb-2" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            Marie-Claude nous raconte
          </h2>
          <p className="text-body-green text-base sm:text-lg font-inter leading-relaxed mb-4 max-w-3xl">
            (sa vie, ses histoires, sa liberté) — une journée d'échange entre Marie-Claude,
            son petit-fils Esteban et Mathis, le biographe. Des racines angevines au château
            du Chillon jusqu'au « Sillon » qu'elle souhaite à chacun de ses petits-enfants,
            en passant par Daniel, Artway et un demi-siècle de liberté.
          </p>
          <p className="text-body-green text-sm font-inter leading-relaxed opacity-80">
            Parcourez les souvenirs racontés dans le film. Cliquez sur un souvenir pour lancer
            la vidéo au bon moment.
          </p>
        </div>

        <div className="relative border-l-2 border-medium-dark-green/20 ml-4 sm:ml-6 pb-12">
          {CHAPTER_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-10">

              {/* Group Header (Grand Chapitre) */}
              <div className="relative pl-8 sm:pl-12 pt-4 pb-4 sm:pt-6 sm:pb-6">
                {/* Large Timeline dot for group */}
                <div className="absolute -left-[14px] top-[22px] sm:top-[30px] w-7 h-7 rounded-full bg-heading-primary border-4 border-[#fdfbf7] flex items-center justify-center z-10 shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className="text-xl sm:text-3xl font-normal text-heading-primary" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
                  {group.title}
                </h3>
              </div>

              {/* Chapters list */}
              <div className="space-y-6">
                {group.chapters.map((chapter, index) => (
                  <div key={index} className="relative pl-8 sm:pl-12 group">
                    {/* Small Timeline dot */}
                    <div className="absolute -left-[7px] top-6 w-3 h-3 rounded-full border-2 border-white bg-medium-dark-green/40 group-hover:bg-heading-accent group-hover:scale-125 transition-all duration-300 z-10" />

                    {/* Chapter Card */}
                    <button
                      onClick={() => seekVideo(chapter.seconds)}
                      className="block w-full text-left bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-black/5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group-hover:border-heading-accent/20"
                    >
                      {/* Play icon overlay on hover */}
                      <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-500 text-heading-accent pointer-events-none">
                        <Play className="w-8 h-8 fill-current opacity-15" />
                      </div>

                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-heading-accent/10 text-heading-primary mb-2 sm:mb-3 font-inter transition-colors duration-300 group-hover:bg-heading-accent group-hover:text-white">
                        {chapter.time}
                      </span>

                      <h4 className="text-base sm:text-xl font-normal mb-1 sm:mb-2 text-dark-green group-hover:text-heading-accent transition-colors duration-300 pr-8" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
                        {chapter.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-body-green/80 font-inter leading-relaxed max-w-[90%]">
                        {chapter.text}
                      </p>
                    </button>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
