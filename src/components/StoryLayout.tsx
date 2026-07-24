import Film from './Film';
import ChaptersTimeline from './ChaptersTimeline';

export default function StoryLayout() {
  return (
    <section id="story" className="w-full relative bg-[#fdfbf7]">
      {/* Vidéo magnète : elle reste collée en haut de l'écran pendant que les
          chapitres défilent dessous. Mobile : ratio 16:9 plein écran.
          Desktop : ~74vh, cadrée au vrai ratio du film (pas de bandes). */}
      <div className="sticky top-0 z-40 bg-black shadow-md w-full lg:h-[74vh] flex flex-col lg:flex-row lg:justify-center">
        <div className="w-full h-full lg:w-auto lg:aspect-video lg:max-w-full">
          <Film />
        </div>
      </div>

      {/* Chapitres : timeline verticale (mobile ET desktop), avec les titres
          de grands chapitres qui se magnètent sous la vidéo. */}
      <div id="chapitres">
        <ChaptersTimeline />
      </div>
    </section>
  );
}
