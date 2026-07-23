// Fait sauter une iframe YouTube (enablejsapi=1) à un timecode donné.
// L'iframe intégrale est en loading="lazy" : si elle n'a pas encore chargé
// au moment du clic, on renvoie la commande plusieurs fois le temps
// qu'elle s'initialise (les doublons sont sans effet).
export function seekYouTube(iframeId: string, seconds: number, scrollTo = false) {
  const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;
  if (!iframe) return;

  if (scrollTo) iframe.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const send = () => {
    if (!iframe.contentWindow) return;
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'seekTo', args: [seconds, true] }),
      '*'
    );
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
      '*'
    );
  };

  send();
  setTimeout(send, 800);
  setTimeout(send, 2000);
}
