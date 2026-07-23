// Chapitres de la vidéo « Intégrale » (~5h14) — 9 grands chapitres, 70 sous-chapitres.
// Timecodes vérifiés sur la transcription MacWhisper du montage final (juillet 2026).

export interface IntegraleChapter {
  time: string;
  seconds: number;
  title: string;
}

export interface IntegraleGroup {
  title: string;
  chapters: IntegraleChapter[];
}

export const INTEGRALE_GROUPS: IntegraleGroup[] = [
  {
    title: "🎄 Racines : L'Enfant de Noël du château du Chillon",
    chapters: [
      { time: "0:00", seconds: 0, title: "🎬 Ouverture — « Je suis née en 1944, le jour de Noël »" },
      { time: "1:31", seconds: 91, title: "🎂 « Maman avait été privée de dessert » : Marie-Claude se présente" },
      { time: "3:11", seconds: 191, title: "💝 Douchka : le surnom offert par les Russes blancs" },
      { time: "6:49", seconds: 409, title: "🌙 Angers : le vasistas, la lune et l'urticaire au chocolat" },
      { time: "10:02", seconds: 602, title: "🏰 À 5 ans, propulsée au château du Chillon" },
      { time: "14:56", seconds: 896, title: "🧺 L'école d'autrefois : la lingère, la 2CV de papa coiffeur et la pension sans mixité" },
      { time: "22:07", seconds: 1327, title: "🌏 Yvonne Dinh et les copines venues du bout du monde" },
      { time: "30:31", seconds: 1831, title: "🫏 Bonnet d'âne, langue « bavarde » et cabanes dans le parc" },
    ]
  },
  {
    title: "✊ La Rebelle : des bonnes sœurs à mai 68",
    chapters: [
      { time: "34:31", seconds: 2071, title: "👩‍🏫 « Le professeur, c'était l'autorité »" },
      { time: "38:13", seconds: 2293, title: "🔨 Henri le forgeron : un grand-père en avance sur son temps" },
      { time: "42:39", seconds: 2559, title: "😇 Terminale à Poitiers : dispensée de messe par la supérieure" },
      { time: "45:07", seconds: 2707, title: "✊ Mai 68 : les pavés du Boul'Mich et Cohn-Bendit à la Sorbonne" },
      { time: "51:48", seconds: 3108, title: "👗 Pas de mode ado : les robes piquées dans l'armoire de maman" },
      { time: "58:40", seconds: 3520, title: "⛽ Pénurie d'essence : la 2CV prêtée aux grands patrons d'IBM" },
      { time: "1:00:07", seconds: 3607, title: "🤖 Des premiers ordinateurs à l'IA : « Il faut craindre le fascisme »" },
    ]
  },
  {
    title: "👨‍👩‍👧‍👦 La Tribu Gréla : parents, frères et sœurs",
    chapters: [
      { time: "1:02:30", seconds: 3750, title: "💈 Yvan, le coiffeur qui rêvait des Beaux-Arts" },
      { time: "1:12:21", seconds: 4341, title: "👩‍⚕️ France, la « force tranquille » à la tête de 80 convalescentes" },
      { time: "1:14:15", seconds: 4455, title: "💃 Un père danseur, artiste dans l'âme — et sa part d'ombre" },
      { time: "1:21:10", seconds: 4870, title: "🙏 Yannick, le petit frère « perdu » au Mont-Saint-Michel" },
      { time: "1:28:07", seconds: 5287, title: "💉 Catherine : du tilleul du soir à Médecins Sans Frontières" },
      { time: "1:32:36", seconds: 5556, title: "👯 Véronique la petite fée et Sophie la joviale" },
      { time: "1:37:30", seconds: 5850, title: "⚖️ L'héritage de maman et la fratrie déchirée" },
    ]
  },
  {
    title: "🌍 L'Envol : l'Irlande, Madrid… et Daniel frappe à la porte",
    chapters: [
      { time: "1:41:34", seconds: 6094, title: "☘️ Neuf mois en Irlande, neuf kilos — et le retour en transatlantique « United States »" },
      { time: "1:45:45", seconds: 6345, title: "🇪🇸 Madrid : une arrivée digne d'un film de Buñuel" },
      { time: "1:49:32", seconds: 6572, title: "💃 Miguel Angel, le président des poètes, et les nuits flamenco" },
      { time: "1:51:47", seconds: 6707, title: "✈️ Recalée d'Air France à 20 ans, guide aux châteaux de la Loire" },
      { time: "1:56:34", seconds: 6994, title: "🚗 Vers Paris en 2CV, avec la liqueur de cassis de grand-mère" },
      { time: "1:57:53", seconds: 7073, title: "🚪 23 h, on frappe à la porte : voilà Daniel" },
      { time: "1:58:28", seconds: 7108, title: "💌 Le télégramme : « Mettez votre petite robe noire. Stop »" },
      { time: "2:01:33", seconds: 7293, title: "🤫 La chambre-alibi de la rue Cadix : « L'honneur était sauf »" },
    ]
  },
  {
    title: "💻 Artway : la vie avec un visionnaire",
    chapters: [
      { time: "2:07:39", seconds: 7659, title: "💘 « Jamais je ne tomberai amoureuse d'un garçon aussi simple »" },
      { time: "2:10:35", seconds: 7835, title: "🕊️ Un couple d'avance : compte commun et liberté totale" },
      { time: "2:14:10", seconds: 8050, title: "🎨 Adieu « numéro 72-775 » d'IBM : Artway est né" },
      { time: "2:15:25", seconds: 8125, title: "⛪ L'abbaye de Cluny ressuscitée en images de synthèse" },
      { time: "2:19:23", seconds: 8363, title: "🔮 1970, la prophétie : « Vous aurez tous un ordinateur à la maison »" },
      { time: "2:20:55", seconds: 8455, title: "🖥️ Palais des Papes, premières bornes interactives — et le barrage des historiens" },
      { time: "2:28:57", seconds: 8937, title: "🍲 Jocelyn s'achète un micro-ondes : des parents toujours au bureau" },
    ]
  },
  {
    title: "👶 Mère de famille : Loïc, Emmanuelle, Jocelyn",
    chapters: [
      { time: "2:30:25", seconds: 9025, title: "👶 Élever trois enfants après 68 : liberté et méthode Coué" },
      { time: "2:34:08", seconds: 9248, title: "🏖️ La Naïade : vacances pieds nus et planche à voile « paquebot »" },
      { time: "2:38:38", seconds: 9518, title: "🕊️ Loïc le tendre : « Mais pourquoi ils veulent se battre ? »" },
      { time: "2:43:22", seconds: 9802, title: "🌟 Emmanuelle la battante, Jocelyn l'indépendant" },
      { time: "2:50:07", seconds: 10207, title: "🇺🇸 Kate la Californienne : « Mais c'est moi qui vais vous payer ! »" },
      { time: "2:55:25", seconds: 10525, title: "🏫 Saint-Charles : le choix déchirant de l'internat" },
      { time: "2:59:52", seconds: 10792, title: "🚬 Les bêtises de Jocelyn : la chicha en forêt et « la mouche sur la vitre »" },
      { time: "3:09:34", seconds: 11374, title: "⚖️ Emmanuelle choisit le droit, Sabrina « extirpe » le Tanguy" },
    ]
  },
  {
    title: "🕊️ Grand-mère : le bonheur, l'épreuve, la renaissance",
    chapters: [
      { time: "3:12:50", seconds: 11570, title: "👶 1999 : grand-mère pour la première fois" },
      { time: "3:21:28", seconds: 12088, title: "🚗 L'accident d'Amiens : sauvé par une cravate IBM" },
      { time: "3:26:00", seconds: 12360, title: "🎭 Transmettre l'art : des petits-enfants… à Daniel lui-même" },
      { time: "3:35:52", seconds: 12952, title: "🌑 Pentecôte 2013 : le dernier week-end de Daniel" },
      { time: "3:41:39", seconds: 13299, title: "⛪ L'adieu : l'hommage du père abbé de Saint-Wandrille" },
      { time: "3:44:50", seconds: 13490, title: "❤️ « Je t'aime — moi non plus » : 1 + 1 = 3" },
      { time: "3:46:45", seconds: 13605, title: "🗺️ La liste des pays à finir : prochain arrêt, le Mexique" },
      { time: "3:51:58", seconds: 13918, title: "🍀 « J'ai eu énormément de chance » : Daniel est partout" },
      { time: "3:54:56", seconds: 14096, title: "🇫🇷 Renaître en enseignant le français aux étrangers" },
    ]
  },
  {
    title: "🦋 La Sagesse de la « Gazelle Dynamique »",
    chapters: [
      { time: "3:59:40", seconds: 14380, title: "🌍 « Chaque époque a ses plus et ses moins »" },
      { time: "4:01:43", seconds: 14503, title: "✨ La singularité : l'objet d'une vie" },
      { time: "4:12:28", seconds: 15148, title: "⛓️ « On n'a qu'une vie » : la chaîne ininterrompue" },
      { time: "4:16:00", seconds: 15360, title: "🥘 Les joies de la solitude : « On ne refait pas sa vie »" },
      { time: "4:19:30", seconds: 15570, title: "📜 Questionnaire de Proust : le totem « Gazelle Dynamique »" },
      { time: "4:24:17", seconds: 15857, title: "🪶 « Authenticité » et « éphémère », ses deux mots préférés" },
      { time: "4:29:21", seconds: 16161, title: "📖 Poésie : Du Bellay au désert de Mauritanie, Rimbaud, et les fresques du Louvre" },
      { time: "4:39:44", seconds: 16784, title: "💬 « La vie ne vaut que ce que tu en fais »" },
      { time: "4:42:39", seconds: 16959, title: "🚔 La bêtise de la 2CV : un permis de conduire d'une journée" },
    ]
  },
  {
    title: "🌾 Le Sillon : messages aux générations futures",
    chapters: [
      { time: "4:46:40", seconds: 17200, title: "🤫 « Mamie, je me sens espagnol » : un mot pour Esteban" },
      { time: "4:49:24", seconds: 17364, title: "🌾 Le Sillon : « Chaque sillon doit être le plus juste possible »" },
      { time: "4:52:39", seconds: 17559, title: "🏡 Les rêves d'après : le Mexique, « si Dios quiere »" },
      { time: "4:57:20", seconds: 17840, title: "👧 Ce qu'elle dirait à la petite Marie-Claude" },
      { time: "4:58:58", seconds: 17938, title: "💫 « Soyez curieux, soyez bienveillants, soyez aimants »" },
      { time: "5:00:32", seconds: 18032, title: "🎤 Le mot d'Esteban : le devoir de mémoire" },
      { time: "5:11:15", seconds: 18675, title: "🙏 « J'ai passé un très bon moment » : merci et bon sillage" },
    ]
  },
];
