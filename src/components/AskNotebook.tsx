import { ExternalLink, Sparkles } from 'lucide-react';

// Carte « Interroger le récit » : renvoie vers le carnet NotebookLM nourri
// des transcriptions des deux interviews. L'embed direct est impossible
// (NotebookLM bloque l'intégration en iframe : X-Frame-Options DENY,
// et demande une connexion Google) — d'où le lien sortant.

const NOTEBOOK_URL = 'https://notebooklm.google.com/notebook/43272c6f-fb6c-4997-9582-dcb6e443a1c6';

export default function AskNotebook() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-10 bg-[#fdfbf7] border-t border-dark-green/5">
      <div className="max-w-3xl mx-auto">
        <div className="relative bg-dark-green rounded-[2rem] px-6 py-10 sm:px-12 sm:py-12 text-center shadow-xl shadow-dark-green/20 overflow-hidden">
          {/* halo décoratif */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-heading-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-heading-accent/10 blur-3xl" />

          <Sparkles className="w-8 h-8 text-heading-accent mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-normal text-white mb-3" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            Posez vos questions au récit
          </h2>
          <p className="text-white/70 font-inter text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
            « Que disait Marie-Claude sur le château du Chillon ? » « Comment a-t-elle rencontré
            Daniel ? » — un carnet d'intelligence artificielle a lu l'intégralité des deux interviews
            et répond à vos questions, citations à l'appui.
          </p>
          <a
            href={NOTEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-heading-accent hover:bg-[#b8894e] text-white font-semibold font-inter px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg"
          >
            Ouvrir le carnet interactif
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-white/40 font-inter text-xs mt-5">
            S'ouvre dans NotebookLM (Google) — connexion à un compte Google nécessaire.
          </p>
        </div>
      </div>
    </section>
  );
}
