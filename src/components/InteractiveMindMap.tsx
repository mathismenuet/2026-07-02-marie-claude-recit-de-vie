import React, { useState } from 'react';
import { ChevronRight, BrainCircuit, X } from 'lucide-react';
import HiddenMoment from './HiddenMoment';

interface MindMapNodeData {
  id: string;
  label: string;
  children?: MindMapNodeData[];
}

const mindMapData: MindMapNodeData = {
  id: 'root',
  label: 'Histoire de Marie-Claude',
  children: [
    {
      id: 'racines',
      label: 'Racines angevines (1944-1965)',
      children: [
        { id: 'naissance', label: 'Née le 25 décembre 1944 à Angers', children: [{ id: 'n1', label: 'Fausse aînée : Marie-France avant elle' }, { id: 'n2', label: 'Yannick, Catherine, puis Véronique et Sophie' }] },
        { id: 'parents', label: 'Ses parents', children: [{ id: 'p1', label: 'France, directrice du Chillon' }, { id: 'p2', label: 'Yvan, coiffeur et artiste contrarié' }, { id: 'p3', label: 'Le grand-père forgeron, compagnon du devoir' }] },
        { id: 'chillon', label: 'Le château du Chillon', children: [{ id: 'c1', label: 'Maison de convalescence, 80 malades' }, { id: 'c2', label: 'La cabane avec électricité et poste de radio' }, { id: 'c3', label: 'Cinéma du dimanche pour les convalescentes' }, { id: 'c4', label: 'Messe de minuit aux lampes de poche' }] },
        { id: 'ecole', label: "L'école d'autrefois", children: [{ id: 'e1', label: 'Le bonnet d\'âne tourné en dérision' }, { id: 'e2', label: 'La langue de « bavarde »' }, { id: 'e3', label: 'Pensionnat et rébellion douce' }] },
      ]
    },
    {
      id: 'liberte',
      label: 'La soif de liberté',
      children: [
        { id: 'irlande', label: "L'Irlande à 18 ans", children: [{ id: 'i1', label: 'Assistante chez les sœurs du Sacré-Cœur' }, { id: 'i2', label: 'Les 9 kilos et le retour en transatlantique' }] },
        { id: 'madrid', label: 'Madrid', children: [{ id: 'm1', label: 'Arrivée « film de Buñuel »' }, { id: 'm2', label: 'Miguel Ángel, poète andalou' }, { id: 'm3', label: 'Flamenco et poèmes jusqu\'au bout de la nuit' }] },
        { id: 'metiers', label: 'Premiers métiers', children: [{ id: 'g1', label: 'Guide-interprète aux châteaux de la Loire' }, { id: 'g2', label: 'Hôtesse de l\'air Air France' }] },
        { id: 'voyages', label: 'Les voyages', children: [{ id: 'v1', label: 'La liste écrite avec Daniel' }, { id: 'v2', label: 'La liste presque accomplie — il n\'en reste que deux ou trois' }, { id: 'v3', label: 'Mauritanie : Du Bellay dans le désert' }, { id: 'v4', label: 'Le Mexique à venir, avec Gabriela' }] },
      ]
    },
    {
      id: 'daniel',
      label: 'Daniel',
      children: [
        { id: 'rencontre', label: 'La rencontre', children: [{ id: 'r1', label: 'Premier soir à Paris, on frappe à la porte' }, { id: 'r2', label: 'Le télégramme « petite robe noire »' }, { id: 'r3', label: 'Le caveau de la Huchette' }] },
        { id: 'couple', label: 'Leur couple', children: [{ id: 'cp1', label: '« Je t\'aime — moi non plus »' }, { id: 'cp2', label: '1 + 1 = 3' }, { id: 'cp3', label: 'Douchka, le surnom des Russes blancs' }, { id: 'cp4', label: 'Mariés dans la chapelle du Chillon' }] },
        { id: 'artway', label: 'Artway, le visionnaire', children: [{ id: 'a1', label: '« Un ordinateur dans chaque maison »' }, { id: 'a2', label: 'Abbaye de Cluny en 3D — pionniers' }, { id: 'a3', label: 'Bornes interactives du Palais des Papes' }, { id: 'a4', label: 'Le nom trouvé grâce à un caleçon de cycliste' }] },
        { id: 'presence', label: 'Depuis 2013', children: [{ id: 'd2', label: 'La tête sculptée derrière la vitre de l\'atelier' }, { id: 'd3', label: 'Poursuivre les projets communs' }] },
      ]
    },
    {
      id: 'famille',
      label: 'La famille',
      children: [
        { id: 'loic', label: 'Loïc', children: [{ id: 'l1', label: '« Pourquoi ils veulent se battre ? »' }, { id: 'l2', label: 'Vincent le Désossé, volleyeur de haut niveau' }] },
        { id: 'emmanuelle', label: 'Emmanuelle', children: [{ id: 'em1', label: 'La battante, docteure en droit' }] },
        { id: 'jocelyn', label: 'Jocelyn', children: [{ id: 'j1', label: 'La sieste aux volets fermés avec ses BD' }, { id: 'j2', label: '« Tu vois la mouche ? C\'est comme moi »' }] },
        { id: 'quotidien', label: 'Souvenirs partagés', children: [{ id: 'q1', label: 'La Naïade et la serviette sur le portail' }, { id: 'q2', label: 'Kate, la fille au pair californienne' }, { id: 'q3', label: 'La planche à voile « paquebot » de Daniel' }, { id: 'q4', label: 'Musées et théâtre avec les petits-enfants' }] },
      ]
    },
    {
      id: 'art',
      label: "L'art et la culture",
      children: [
        { id: 'art1', label: 'Histoire de l\'art à la Sorbonne, enfants à charge' },
        { id: 'art2', label: 'Les fresques de Botticelli au Louvre' },
        { id: 'art3', label: 'Ronsard, Du Bellay, Rimbaud — les poèmes par cœur' },
        { id: 'art4', label: 'Les cours de français aux étrangers, depuis 10 ans' },
      ]
    },
    {
      id: 'sagesse',
      label: 'Sagesse et transmission',
      children: [
        { id: 's1', label: 'Le Sillon : rester conforme à ses valeurs' },
        { id: 's2', label: 'La singularité de chaque individu' },
        { id: 's3', label: '« La vie ne vaut rien, mais rien ne vaut la vie »' },
        { id: 's4', label: 'L\'éphémère qui dure : « le Graal »' },
        { id: 's5', label: 'Se contenter des petites choses : « l\'explosion de joie »' },
        { id: 's6', label: '« Soyez curieux, soyez bienveillants, soyez aimants, soyez vous-même »' },
      ]
    }
  ]
};

const MindMapNode: React.FC<{ node: MindMapNodeData, isRoot?: boolean, onCloseAll?: () => void }> = ({ node, isRoot = false, onCloseAll }) => {
  const [isOpen, setIsOpen] = useState(isRoot);

  const hasChildren = node.children && node.children.length > 0;

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isRoot && isOpen && onCloseAll) {
      onCloseAll();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`flex items-start`}>
      <div className="relative z-10 flex items-center h-full">
        <button
          onClick={toggleOpen}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm
            ${isRoot
              ? 'bg-heading-primary text-white hover:bg-button-hover shadow-md text-base sm:text-lg'
              : hasChildren
                ? 'bg-bg-light border border-medium-dark-green/20 text-dark-green hover:border-heading-accent hover:bg-white'
                : 'bg-white border border-black/5 text-body-green hover:shadow-md'
            }
          `}
        >
          {isRoot && <BrainCircuit className="w-5 h-5 text-accent-yellow" />}
          <span className="whitespace-nowrap">{node.label}</span>
          {hasChildren && (
            <span className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-heading-accent' : 'text-body-green/60'}`}>
              <ChevronRight className="w-4 h-4" />
            </span>
          )}
          {isRoot && isOpen && (
            <span className="ml-2 pl-2 border-l border-white/20">
              <X className="w-4 h-4 hover:scale-110 transition-transform" />
            </span>
          )}
        </button>
      </div>

      {hasChildren && (
        <div
          className={`transition-all duration-500 origin-left overflow-hidden
            ${isOpen ? 'opacity-100 max-w-[2000px] max-h-[2000px] scale-100' : 'opacity-0 max-w-0 max-h-0 scale-95'}
          `}
        >
          <ul className="flex flex-col gap-3 py-2 mindmap-children-container">
            {node.children!.map((child) => (
              <li key={child.id} className="relative">
                <MindMapNode node={child} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function InteractiveMindMap() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 bg-white border-t border-medium-dark-green/5 overflow-hidden">
      {/* Souvenirs cachés : le flamenco de Madrid */}
      <HiddenMoment emoji="💃" seconds={6572} label="Un souvenir caché…" className="absolute top-8 left-6 sm:left-16" delayed />
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {!isActive ? (
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-normal text-heading-primary mb-6" style={{ fontFamily: '"Neue Haas Grotesk Display Pro 55 Roman", sans-serif', letterSpacing: '-0.02em' }}>
              La carte mentale des souvenirs
            </h2>
            <button
              onClick={() => setIsActive(true)}
              className="group inline-flex items-center gap-3 bg-white border border-medium-dark-green/20 hover:border-heading-accent text-dark-green px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <BrainCircuit className="w-6 h-6 text-heading-accent group-hover:scale-110 transition-transform" />
              <span className="font-medium text-lg font-inter">Explorer la Mind Map</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex justify-center overflow-x-auto pb-12 pt-4 animate-fade-in scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            <div className="min-w-max p-4">
               <MindMapNode node={mindMapData} isRoot={true} onCloseAll={() => setIsActive(false)} />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
