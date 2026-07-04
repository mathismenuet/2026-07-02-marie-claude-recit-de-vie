import { useEffect, useRef, useState } from 'react';
import { YT_SEQUENCES_PHARES } from '../data/siteConfig';

export default function Film() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayed) {
          if (iframeRef.current?.contentWindow) {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
              '*'
            );
            setHasPlayed(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  // Fix scroll jump when exiting fullscreen
  useEffect(() => {
    let scrollPos = 0;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
        window.scrollTo({ top: scrollPos, behavior: 'instant' as any });
        setTimeout(() => window.scrollTo({ top: scrollPos, behavior: 'instant' as any }), 10);
      } else {
        scrollPos = window.scrollY;
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div id="film" className="w-full h-full aspect-video lg:aspect-auto flex-grow flex items-center justify-center bg-black relative overflow-hidden group">
      {/* Subtle loading skeleton/background */}
      <div className="absolute inset-0 bg-dark-green animate-pulse -z-10" />

      <iframe
        ref={iframeRef}
        id="main-video"
        src={`https://www.youtube.com/embed/${YT_SEQUENCES_PHARES}?rel=0&modestbranding=1&enablejsapi=1&vq=hd1080`}
        title="Marie-Claude raconte son histoire à sa famille"
        className="absolute inset-0 w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
