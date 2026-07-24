import { seekYouTube } from '../utils/youtubeSeek';

// Easter egg : un emoji discret, flottant, un peu intrigant.
// Au clic, la vidéo intégrale saute au moment correspondant du récit.
// (Volontairement sans explication à l'écran — c'est le jeu.)

interface HiddenMomentProps {
  emoji: string;
  seconds: number;
  label: string; // tooltip + accessibilité
  className?: string; // positionnement (absolute …) fourni par la section hôte
  delayed?: boolean; // varie l'animation de flottement
}

export default function HiddenMoment({ emoji, seconds, label, className, delayed }: HiddenMomentProps) {
  return (
    <button
      onClick={() => seekYouTube('integrale-video', seconds, true)}
      title={label}
      aria-label={label}
      className={`${delayed ? 'animate-float-delayed' : 'animate-float'} select-none text-2xl sm:text-3xl opacity-50 hover:opacity-100 hover:scale-125 focus:opacity-100 transition-all duration-300 cursor-pointer leading-none ${className ?? ''}`}
    >
      <span aria-hidden>{emoji}</span>
    </button>
  );
}
