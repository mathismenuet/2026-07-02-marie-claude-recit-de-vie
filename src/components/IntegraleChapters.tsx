import { useCallback } from 'react';
import { INTEGRALE_GROUPS } from '../data/integraleChaptersData';
import ChapterStrip from './ChapterStrip';

// Bandeau horizontal des 70 chapitres de la vidéo intégrale (~5h14).
// Affiché sous le lecteur de la section « Version intégrale »,
// horizontal sur desktop ET mobile (défilement tactile).

export default function IntegraleChapters() {
  const seekVideo = useCallback((seconds: number) => {
    const iframe = document.getElementById('integrale-video') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds, true] }),
        '*'
      );
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
        '*'
      );
      iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="mt-8">
      <div className="max-w-5xl mx-auto mb-1">
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
      <ChapterStrip groups={INTEGRALE_GROUPS} onSeek={seekVideo} cardWidth="w-[230px] sm:w-[250px]" edgeFrom="from-bg-light" />
    </div>
  );
}
