import { Heart } from 'lucide-react';

// Arbre familial de Marie-Claude — 3 enfants, 8 petits-enfants.
const BRANCHES = [
  {
    initials: 'Lo',
    name: 'Loïc',
    role: 'Fils aîné',
    children: [
      { initials: 'Ro', name: 'Robin' },
      { initials: 'Es', name: 'Esteban' },
      { initials: 'El', name: 'Elora' },
      { initials: 'Ti', name: 'Titouan' },
    ],
  },
  {
    initials: 'Em',
    name: 'Emmanuelle',
    role: 'Fille',
    children: [
      { initials: 'Ju', name: 'Jules' },
      { initials: 'Je', name: 'Jeanne' },
    ],
  },
  {
    initials: 'Jo',
    name: 'Jocelyn',
    role: 'Fils',
    children: [
      { initials: 'Ar', name: 'Arthur' },
      { initials: 'Th', name: 'Thaïs' },
    ],
  },
];

export default function FamilyTree() {
  return (
    <section id="genealogie" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white relative border-t border-dark-green/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-neue text-dark-green tracking-tight mb-6">
            La famille
          </h2>
          <p className="text-lg text-medium-dark-green/70 max-w-2xl mx-auto font-inter">
            Trois enfants, huit petits-enfants — « je fais partie d'une chaîne ininterrompue ».
          </p>
        </div>

        {/* Couple */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-4 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-dark-green rounded-full flex items-center justify-center text-white shadow-xl shadow-dark-green/20 mb-3 border-4 border-white">
              <span className="text-xl sm:text-2xl font-normal" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>MC</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-green">Marie-Claude</h3>
            <p className="text-body-green text-xs sm:text-sm">« Dushka » — 81 ans</p>
          </div>

          <Heart className="w-6 h-6 text-heading-accent fill-heading-accent/30 -mt-10" />

          <div className="flex flex-col items-center opacity-80">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-heading-accent/80 rounded-full flex items-center justify-center text-white shadow-xl mb-3 border-4 border-white">
              <span className="text-xl sm:text-2xl font-normal" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>Da</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-green">Daniel</h3>
            <p className="text-body-green text-xs sm:text-sm italic">« Il est partout, il est dans l'air »</p>
          </div>
        </div>

        {/* Connector */}
        <div className="w-[2px] h-10 bg-medium-dark-green/20 mx-auto"></div>
        <div className="hidden md:block max-w-3xl mx-auto h-[2px] bg-medium-dark-green/20"></div>

        {/* Branches */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto mt-8">
          {BRANCHES.map((branch) => (
            <div key={branch.name} className="bg-bg-light/50 rounded-3xl p-6 border border-dark-green/5 shadow-sm relative">
              <div className="hidden md:block absolute -top-8 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-medium-dark-green/20"></div>
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center text-heading-accent mb-3 border-2 border-white shadow-sm">
                  <span className="text-lg font-semibold">{branch.initials}</span>
                </div>
                <h3 className="text-base font-semibold text-dark-green">{branch.name}</h3>
                <p className="text-body-green text-xs text-center">{branch.role}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {branch.children.map((child) => (
                  <div key={child.name} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-dark-green text-sm font-semibold mb-2 shadow-sm border border-black/5">
                      {child.initials}
                    </div>
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
