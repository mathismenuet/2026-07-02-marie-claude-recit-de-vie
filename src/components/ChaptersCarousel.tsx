import { useCallback } from 'react';
import { CHAPTER_GROUPS } from '../data/chaptersData';
import ChapterStrip from './ChapterStrip';

// Bandeau horizontal des chapitres « Séquences phares » (desktop).
// Sur mobile, c'est ChaptersTimeline (vertical) qui est affiché.

export default function ChaptersCarousel() {
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
    <div className="w-full bg-[#fdfbf7] pt-5 pb-2">
      <div className="px-10 flex items-end justify-between gap-6">
        <div>
          <h2
            className="text-2xl font-normal text-heading-primary"
            style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}
          >
            Parcourez les souvenirs
          </h2>
          <p className="text-body-green text-sm font-inter opacity-80 mt-1">
            Cliquez sur un souvenir pour lancer la vidéo au bon moment — faites défiler pour explorer.
          </p>
        </div>
      </div>
      <ChapterStrip groups={CHAPTER_GROUPS} onSeek={seekVideo} cardWidth="w-[290px]" />
    </div>
  );
}
