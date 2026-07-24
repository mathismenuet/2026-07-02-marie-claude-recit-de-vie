import { Heart } from 'lucide-react';
import { seekYouTube } from '../utils/youtubeSeek';
import HiddenMoment from './HiddenMoment';

// Arbre familial de Marie-Claude — 3 enfants, 8 petits-enfants.
// Chaque pastille est cliquable : la vidéo intégrale saute au moment
// où Marie-Claude évoque la personne (timecodes vérifiés sur la
// transcription du montage final).

interface Person {
  emoji: string;
  name: string;
  sub?: string;
  seconds: number | null; // null = pas de passage dédié trouvé
}

// Timecodes vérifiés sur la transcription de l'intégrale (juillet 2026) :
// pour chaque personne, le passage le plus chaleureux où Marie-Claude parle d'elle.
// Titouan et Thaïs ne sont jamais nommés : ils pointent sur le message
// général aux petits-enfants (04:49:31, « que chacun trouve sa propre voix »).
const MARIE_CLAUDE: Person = { emoji: '👵', name: 'Marie-Claude', sub: '« Dushka » — 81 ans', seconds: 95 };
const DANIEL: Person = { emoji: '👴', name: 'Daniel', sub: '« Œil de Lynx »', seconds: 7940 };

const BRANCHES: { parent: Person; children: Person[] }[] = [
  {
    parent: { emoji: '👨', name: 'Loïc', seconds: 9518 },
    children: [
      { emoji: '👦', name: 'Robin', seconds: 11808 },
      { emoji: '👦', name: 'Esteban', seconds: 17261 },
      { emoji: '👧', name: 'Elora', seconds: 12003 },
      { emoji: '👦', name: 'Titouan', seconds: 17371 },
    ],
  },
  {
    parent: { emoji: '👩', name: 'Emmanuelle', seconds: 9802 },
    children: [
      { emoji: '👦', name: 'Jules', seconds: 11824 },
      { emoji: '👧', name: 'Jeanne', seconds: 12360 },
    ],
  },
  {
    parent: { emoji: '👨', name: 'Jocelyn', seconds: 9945 },
    children: [
      { emoji: '👦', name: 'Arthur', seconds: 11909 },
      { emoji: '👧', name: 'Thaïs', seconds: 17371 },
    ],
  },
];

function seekIntegrale(seconds: number) {
  seekYouTube('integrale-video', seconds, true);
}

function PersonBubble({ person, size, tone }: { person: Person; size: 'lg' | 'md' | 'sm'; tone: 'dark' | 'accent' | 'soft' | 'white' }) {
  const sizes = {
    lg: 'w-20 h-20 sm:w-24 sm:h-24 text-3xl sm:text-4xl',
    md: 'w-16 h-16 text-2xl',
    sm: 'w-14 h-14 text-xl',
  }[size];
  const tones = {
    dark: 'bg-dark-green border-4 border-white shadow-xl shadow-dark-green/20',
    accent: 'bg-heading-accent/80 border-4 border-white shadow-xl',
    soft: 'bg-accent-yellow/10 border-2 border-white shadow-sm',
    white: 'bg-white border border-black/5 shadow-sm',
  }[tone];
  const clickable = person.seconds !== null;

  return (
    <button
      onClick={() => clickable && seekIntegrale(person.seconds as number)}
      disabled={!clickable}
      title={clickable ? `Voir le passage sur ${person.name} dans l'intégrale` : undefined}
      className={`${sizes} ${tones} rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
        clickable ? 'cursor-pointer hover:scale-110 hover:shadow-lg hover:border-heading-accent/40' : 'cursor-default'
      }`}
    >
      <span aria-hidden>{person.emoji}</span>
    </button>
  );
}

export default function FamilyTree() {
  return (
    <section id="genealogie" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white relative border-t border-dark-green/5">
      {/* Souvenir caché : le volley, l'autre grande histoire de la famille */}
      <HiddenMoment emoji="🏐" seconds={10500} label="Un souvenir caché…" className="absolute top-12 right-6 sm:right-16" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-neue text-dark-green tracking-tight mb-6">
            La famille
          </h2>
          <p className="text-lg text-medium-dark-green/70 max-w-2xl mx-auto font-inter">
            Trois enfants, huit petits-enfants — « je fais partie d'une chaîne ininterrompue ».
          </p>
          <p className="text-sm text-medium-dark-green/50 max-w-2xl mx-auto font-inter mt-2">
            Cliquez sur un visage pour entendre Marie-Claude parler de cette personne dans l'interview intégrale.
          </p>
        </div>

        {/* Couple */}
        <div className="flex items-start justify-center gap-6 sm:gap-10 mb-4 relative z-10">
          <div className="flex flex-col items-center">
            <PersonBubble person={MARIE_CLAUDE} size="lg" tone="dark" />
            <h3 className="text-lg sm:text-xl font-semibold text-dark-green">{MARIE_CLAUDE.name}</h3>
            <p className="text-body-green text-xs sm:text-sm">{MARIE_CLAUDE.sub}</p>
          </div>

          <Heart className="w-6 h-6 text-heading-accent fill-heading-accent/30 mt-8" />

          <div className="flex flex-col items-center opacity-90">
            <PersonBubble person={DANIEL} size="lg" tone="accent" />
            <h3 className="text-lg sm:text-xl font-semibold text-dark-green">{DANIEL.name}</h3>
            <p className="text-body-green text-xs sm:text-sm italic">{DANIEL.sub}</p>
          </div>
        </div>

        {/* Connector */}
        <div className="w-[2px] h-10 bg-medium-dark-green/20 mx-auto"></div>
        <div className="hidden md:block max-w-3xl mx-auto h-[2px] bg-medium-dark-green/20"></div>

        {/* Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto mt-8">
          {BRANCHES.map((branch) => (
            <div key={branch.parent.name} className="bg-bg-light/50 rounded-3xl p-6 border border-dark-green/5 shadow-sm relative">
              <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-medium-dark-green/20"></div>
              <div className="flex flex-col items-center mb-6">
                <PersonBubble person={branch.parent} size="md" tone="soft" />
                <h3 className="text-base font-semibold text-dark-green">{branch.parent.name}</h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {branch.children.map((child) => (
                  <div key={child.name} className="flex flex-col items-center">
                    <PersonBubble person={child} size="sm" tone="white" />
                    <p className="text-xs font-medium text-dark-green">{child.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
