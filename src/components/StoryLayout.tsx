import Film from './Film';
import ChaptersTimeline from './ChaptersTimeline';
import ChaptersCarousel from './ChaptersCarousel';

export default function StoryLayout() {
  return (
    <section id="story" className="w-full relative bg-[#fdfbf7]">
      {/* Vidéo : sticky en haut sur mobile (les chapitres défilent dessous).
          Sur desktop : 80vh de haut, cadrée au vrai ratio 16:9 du film
          (le conteneur épouse la vidéo, pas de bandes noires latérales). */}
      <div className="w-full sticky top-0 z-40 bg-black shadow-md lg:static lg:h-[80vh] flex flex-col lg:flex-row lg:justify-center">
        <div className="w-full h-full lg:w-auto lg:aspect-video lg:max-w-full">
          <Film />
        </div>
      </div>

      <div id="chapitres">
        {/* Mobile : timeline verticale */}
        <div className="lg:hidden w-full relative">
          <ChaptersTimeline />
        </div>

        {/* Desktop : bandeau horizontal défilant */}
        <div className="hidden lg:block">
          <ChaptersCarousel />
        </div>
      </div>
    </section>
  );
}
