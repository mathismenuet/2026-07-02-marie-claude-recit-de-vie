import Film from './Film';
import ChaptersTimeline from './ChaptersTimeline';
import ChaptersCarousel from './ChaptersCarousel';

export default function StoryLayout() {
  return (
    <section id="story" className="w-full relative bg-[#fdfbf7]">
      {/* Vidéo : sticky en haut sur mobile (les chapitres défilent dessous),
          pleine largeur ~2/3 d'écran sur desktop (bandeau horizontal dessous) */}
      <div className="w-full sticky top-0 z-40 bg-black shadow-md lg:static lg:h-[66vh] flex flex-col">
        <Film />
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
