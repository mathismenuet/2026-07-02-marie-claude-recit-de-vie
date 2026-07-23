import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Closing Message */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-heading-primary mb-8" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
            Un mot pour conclure
          </h2>

          <div className="space-y-6 text-body-green text-lg font-inter font-light leading-relaxed">
            <p>
              J'ai eu beaucoup de plaisir à réaliser ce projet avec Marie-Claude et Esteban.
              Ce que je cherche à faire, ce n'est pas seulement capturer un film : c'est réunir
              des générations autour d'un moment de transmission et d'échange.
            </p>
            <p>
              J'espère que cette page trouvera une place dans vos échanges familiaux — qu'elle
              vous offre un moment de partage, de souvenir ou de découverte, et peut-être même
              l'envie d'aller poser à Marie-Claude toutes les questions que le film fait naître.
              Comme le dit Esteban : la mémoire ne se transmet pas qu'à travers une vidéo, mais
              aussi par des discussions.
            </p>
            <p>
              Si cette démarche vous a touché·e, et que vous pensez à des proches pour qui elle
              pourrait avoir une valeur particulière, n'hésitez pas à leur en parler, à leur
              partager cette page ou à nous mettre en contact.
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <aside className="w-full lg:w-[400px] flex-shrink-0">
          <div className="bg-bg-light rounded-[2rem] p-8 sm:p-10 border border-medium-dark-green/5 shadow-xl shadow-medium-dark-green/5">
            <h3 className="text-2xl font-normal text-dark-green mb-4" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif' }}>
              Mathis Menuet
            </h3>
            <p className="text-body-green font-inter mb-8 leading-relaxed">
              Vidéaste biographe — Sillage. Je reste bien sûr joignable pour toute question
              ou envie d'échanger.
            </p>

            <div className="space-y-4 font-inter">
              <a
                href="https://wa.me/33621963242"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-dark-green hover:text-heading-accent transition-colors p-3 -mx-3 rounded-xl hover:bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Phone className="w-5 h-5 text-medium-dark-green" />
                </div>
                <span className="font-medium">06 21 96 32 42 (WhatsApp)</span>
              </a>

              <a
                href="mailto:mathismenuetpro@gmail.com"
                className="flex items-center gap-4 text-dark-green hover:text-heading-accent transition-colors p-3 -mx-3 rounded-xl hover:bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Mail className="w-5 h-5 text-medium-dark-green" />
                </div>
                <span className="font-medium">mathismenuetpro@gmail.com</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
