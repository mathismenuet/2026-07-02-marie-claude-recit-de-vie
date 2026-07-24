import HiddenMoment from './HiddenMoment';

export default function Process() {
  return (
    <section id="demarche" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
      {/* Souvenirs cachés : la prophétie des ordinateurs et le rêve Air France */}
      <HiddenMoment emoji="💻" seconds={8363} label="Un souvenir caché…" className="absolute top-10 right-6 sm:right-16" />
      <HiddenMoment emoji="✈️" seconds={6707} label="Un souvenir caché…" className="absolute bottom-10 left-6 sm:left-16" delayed />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-heading-primary mb-12 sm:mb-16 text-center" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
          La démarche derrière ce projet
        </h2>

        <div className="relative">
          {/* Decorative element */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-heading-accent/50 to-transparent" />

          <div className="space-y-8 sm:space-y-12 sm:pl-10">
            <p className="text-lg sm:text-xl md:text-2xl text-dark-green leading-relaxed font-inter font-light">
              Ce projet est né de la volonté d'Esteban : créer un souvenir de famille qui se
              transmette. Pendant toute une journée, Marie-Claude a raconté sa vie — guidée par
              une trame préparée avec les questions de ses enfants et petits-enfants, et
              ponctuée par les relances complices de son petit-fils.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-dark-green leading-relaxed font-inter font-light">
              Mon rôle a été de faciliter cet échange et de l'accompagner, pour qu'il se déroule
              de manière fluide, spontanée et authentique — exactement tel qu'il est.
            </p>

            <div className="p-8 sm:p-10 bg-bg-light rounded-3xl mt-12 border border-medium-dark-green/5">
              <p className="text-lg sm:text-xl text-heading-primary leading-relaxed font-inter font-medium italic">
                « Tu as dit des choses aujourd'hui que tu n'aurais pas dites l'année dernière et
                que tu ne diras pas l'année prochaine. C'est quelque chose de très intemporel,
                et en même temps tellement figé dans le temps — un souvenir qu'on pourra garder,
                je l'espère, très longtemps. »
              </p>
              <p className="mt-4 text-body-green font-inter text-sm">— Esteban, à la fin du tournage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
