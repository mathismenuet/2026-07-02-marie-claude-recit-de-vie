export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Toutes les réponses viennent de l'interview du 30 mars 2026.
export const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel jour Marie-Claude est-elle née ?",
    options: [
      { id: "A", text: "Le 14 juillet 1944", isCorrect: false },
      { id: "B", text: "Le 25 décembre 1944, le jour de Noël", isCorrect: true, explanation: "« Ma maman avait été privée de dessert », raconte-t-elle en souriant." },
      { id: "C", text: "Le 1er janvier 1945", isCorrect: false },
      { id: "D", text: "Le 15 août 1943", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Quel surnom Daniel avait-il donné à Marie-Claude ?",
    options: [
      { id: "A", text: "Coco", isCorrect: false, explanation: "Coco est un de ses surnoms, mais pas celui de Daniel." },
      { id: "B", text: "Maclo", isCorrect: false },
      { id: "C", text: "Dushka", isCorrect: true, explanation: "Un surnom venu des Russes blancs qui habitaient au-dessus de la garçonnière de Daniel : « douceur et force ». C'était le plus cher à son cœur." },
      { id: "D", text: "Mamy Ta", isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "Que disait le télégramme envoyé par Daniel quelques jours après leur rencontre ?",
    options: [
      { id: "A", text: "« Je vous aime, stop »", isCorrect: false },
      { id: "B", text: "« Rendez-vous à la tour Eiffel, stop »", isCorrect: false },
      { id: "C", text: "« Je vous invite, stop. Mettez votre petite robe noire »", isCorrect: true, explanation: "Direction le caveau de la Huchette. Quinze jours plus tard, elle emménageait dans sa garçonnière du 15e." },
      { id: "D", text: "« Répondez-moi vite, stop »", isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "D'où vient le nom « Artway », l'entreprise fondée avec Daniel ?",
    options: [
      { id: "A", text: "D'un livre d'histoire de l'art", isCorrect: false },
      { id: "B", text: "Du caleçon « Speedway » d'un cycliste croisé dans une rue de Dourdan", isCorrect: true, explanation: "C'est Marie-Claude qui a trouvé le nom, inspirée par ce cycliste aux caleçons trois couleurs !" },
      { id: "C", text: "D'une publicité IBM", isCorrect: false },
      { id: "D", text: "D'un voyage aux États-Unis", isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Que prédisait Daniel à la famille dès les années 70 ?",
    options: [
      { id: "A", text: "« Vous verrez, un jour vous aurez tous un ordinateur dans votre maison »", isCorrect: true, explanation: "Tout le monde le prenait pour un fou. Il fut ensuite pionnier des images de synthèse 3D avec la reconstitution de l'abbaye de Cluny." },
      { id: "B", text: "« Un jour on ira en vacances sur la Lune »", isCorrect: false },
      { id: "C", text: "« Les voitures voleront avant l'an 2000 »", isCorrect: false },
      { id: "D", text: "« La télévision va disparaître »", isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "Quels étaient les totems scouts de Marie-Claude et Daniel ?",
    options: [
      { id: "A", text: "Panthère Agile et Aigle Royal", isCorrect: false },
      { id: "B", text: "Gazelle Dynamique et Œil de Lynx", isCorrect: true, explanation: "« Je crois que le totem répond », dit-elle quand on lui demande le trait de personnalité qui l'a suivie toute sa vie." },
      { id: "C", text: "Libellule et Renard Rusé", isCorrect: false },
      { id: "D", text: "Hirondelle et Grand Cerf", isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Quand l'un des deux disait « je t'aime », que répondait l'autre ?",
    options: [
      { id: "A", text: "« Moi aussi »", isCorrect: false },
      { id: "B", text: "« Pour toujours »", isCorrect: false },
      { id: "C", text: "« Moi non plus », comme dans la chanson de Gainsbourg", isCorrect: true, explanation: "« On restait chacun singulier. Il disait toujours : 1 + 1 = 3. C'est pour ça qu'on se sentait très libres dans cette union. »" },
      { id: "D", text: "Rien, ils ne se le disaient jamais", isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Quelle bêtise Marie-Claude a-t-elle faite à 17 ans avec la 2CV de sa maman ?",
    options: [
      { id: "A", text: "Elle l'a emboutie contre le portail du château", isCorrect: false },
      { id: "B", text: "Elle est partie acheter des cigarettes sans permis… et a calé devant les gendarmes", isCorrect: true, explanation: "Le gendarme, qui connaissait sa maman, lui a fait « un permis de conduire d'une journée ». Elle a brûlé le papier en rentrant !" },
      { id: "C", text: "Elle est allée en cachette à un bal à Angers", isCorrect: false },
      { id: "D", text: "Elle a démonté les banquettes pour un pique-nique", isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Comment ont réagi Loïc et Emmanuelle quand leur maman est rentrée avec une permanente afro ?",
    options: [
      { id: "A", text: "Ils ont adoré et voulu la même", isCorrect: false },
      { id: "B", text: "Ils ne l'ont pas remarquée", isCorrect: false },
      { id: "C", text: "Emmanuelle a crié « T'es plus ma maman ! » et Loïc s'est écroulé de rire", isCorrect: true, explanation: "Elle s'est ensuite tiré les cheveux toutes les nuits pour casser la permanente…" },
      { id: "D", text: "Ils ont appelé leur père au secours", isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "Sur la liste des pays à visiter écrite avec Daniel, lequel ont-ils eu le temps de faire ensemble ?",
    options: [
      { id: "A", text: "Le Mexique", isCorrect: false, explanation: "Le Mexique, c'est le prochain voyage — avec son apprenante Gabriela." },
      { id: "B", text: "Le Japon", isCorrect: false },
      { id: "C", text: "L'Égypte", isCorrect: true, explanation: "« Tous les autres, je les ai presque tous faits. » Elle poursuit leur liste, pays après pays." },
      { id: "D", text: "Le Pérou", isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "Où Marie-Claude a-t-elle passé son enfance à partir de ses 5 ans ?",
    options: [
      { id: "A", text: "Dans une ferme en Bretagne", isCorrect: false },
      { id: "B", text: "Au château du Chillon, une maison de convalescence dirigée par sa maman", isCorrect: true, explanation: "Un parc immense, une forêt, des cabanes… et le cinéma du dimanche soir projeté pour les convalescentes." },
      { id: "C", text: "À Paris, dans le 14e arrondissement", isCorrect: false },
      { id: "D", text: "À Madrid", isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "Devant quelle œuvre du Louvre Marie-Claude emmènerait-elle un proche ?",
    options: [
      { id: "A", text: "La Joconde", isCorrect: false },
      { id: "B", text: "Les fresques de Botticelli", isCorrect: true, explanation: "« Une grâce des teintes… et ce flou que j'aime bien. » Esteban confirme : c'était déjà ses préférées lors de leur visite ensemble." },
      { id: "C", text: "Le Radeau de la Méduse", isCorrect: false },
      { id: "D", text: "La Vénus de Milo", isCorrect: false }
    ]
  }
];
