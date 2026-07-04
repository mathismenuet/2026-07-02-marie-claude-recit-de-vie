import { ExternalLink } from 'lucide-react';
import { YT_INTEGRALE, INTEGRALE_DISPONIBLE } from '../data/siteConfig';

export default function FullVersion() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-bg-light">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-normal text-heading-primary mb-4" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
              Version intégrale
            </h2>
            <p className="text-body-green text-base sm:text-lg font-inter">
              L'interview complète, chapitrée — pour celles et ceux qui souhaitent tout
              revivre, du premier poème de Charles d'Orléans au mot de la fin.
            </p>
          </div>
          {INTEGRALE_DISPONIBLE && (
            <a
              href={`https://www.youtube.com/watch?v=${YT_INTEGRALE}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-sm font-semibold text-medium-dark-green hover:text-dark-green transition-colors font-inter py-2"
            >
              <span className="border-b border-medium-dark-green/30 group-hover:border-dark-green transition-colors pb-0.5">Ouvrir la vidéo complète</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </a>
          )}
        </div>

        <div className="relative w-full aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden bg-dark-green/5 shadow-inner">
          <iframe
            src={`https://www.youtube.com/embed/${YT_INTEGRALE}?rel=0&modestbranding=1`}
            title="Interview intégrale de Marie-Claude"
            className={`absolute inset-0 w-full h-full border-0 ${INTEGRALE_DISPONIBLE ? '' : 'blur-[2px] opacity-40 pointer-events-none select-none'}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            tabIndex={INTEGRALE_DISPONIBLE ? 0 : -1}
          ></iframe>

          {!INTEGRALE_DISPONIBLE && (
            <div className="absolute inset-0 flex items-center justify-center bg-dark-green/10 backdrop-blur-[1px] pointer-events-none select-none overflow-hidden">
              <div className="transform -rotate-12 bg-white/95 backdrop-blur-md px-8 sm:px-12 py-4 sm:py-6 shadow-2xl border border-white/50 rounded-2xl">
                <p className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-wider text-dark-green uppercase" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
                  Arrive très bientôt
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
