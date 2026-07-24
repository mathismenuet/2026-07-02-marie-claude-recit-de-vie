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
// Chaque question porte un commentaire « vérif » = timestamp de l'intégrale (~5h14).
export const quizData: QuizQuestion[] = [
  // vérif : 00:01:35 (« Je suis née en 1944, et le jour de Noël. Ma maman avait été privée de dessert. »)
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
  // vérif : 00:03:30 (les surnoms) et 00:04:58 (les Russes blancs de l'étage supérieur)
  {
    id: 2,
    question: "Quel surnom Daniel avait-il donné à Marie-Claude ?",
    options: [
      { id: "A", text: "Coco", isCorrect: false, explanation: "Coco est un de ses surnoms, mais pas celui de Daniel." },
      { id: "B", text: "Maclo", isCorrect: false },
      { id: "C", text: "Douchka", isCorrect: true, explanation: "Un surnom venu des Russes blancs qui habitaient au-dessus de la garçonnière de Daniel : « douceur et force ». C'était le plus cher à son cœur." },
      { id: "D", text: "Mamy Ta", isCorrect: false }
    ]
  },
  // vérif : 01:58:28 (« je vous invite stop pour aller au caveau de la Huchette stop, samedi, mettez votre petite robe noire »)
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
  // vérif : 02:14:29 (« un cycliste devant moi qui avait les caleçons […] Speedway ou je ne sais pas quoi »)
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
  // vérif : 02:19:23 (« vous verrez un jour vous aurez tous un ordinateur dans votre maison » — « Tout le monde le prenait pour un fou » à 02:20:05)
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
  // vérif : 04:20:10 (« Daniel, c'était Œil de Lynx. Et moi, c'était Gazelle Dynamique. »)
  {
    id: 6,
    question: "Quels étaient les totems scouts de Marie-Claude et Daniel ?",
    options: [
      { id: "A", text: "Panthère Agile et Aigle Royal", isCorrect: false },
      { id: "B", text: "Gazelle Dynamique et Œil de Lynx", isCorrect: true, explanation: "« Je crois que le totem y répond », dit-elle quand on lui demande le trait de personnalité qui l'a suivie toute sa vie." },
      { id: "C", text: "Libellule et Renard Rusé", isCorrect: false },
      { id: "D", text: "Hirondelle et Grand Cerf", isCorrect: false }
    ]
  },
  // vérif : 03:44:50 (« je t'aime, moi non plus ») et 03:45:53 (« 1 plus 1 égale 3 »)
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
  // vérif : 04:42:46 (la 2CV) → 04:45:51 (« un papier comme quoi vous avez bien votre permis pour la journée », papier brûlé)
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
  // vérif : 02:36:49 (« Je mettais une serviette de toilette de couleur sur le portail et ils voyaient de loin »)
  {
    id: 9,
    question: "À la Naïade, comment Marie-Claude prévenait-elle Daniel, parti en mer sur sa planche à voile, que le déjeuner était prêt ?",
    options: [
      { id: "A", text: "Elle sonnait une cloche depuis la terrasse", isCorrect: false },
      { id: "B", text: "Elle accrochait une serviette de toilette de couleur sur le portail", isCorrect: true, explanation: "Pas de téléphone portable à l'époque ! Daniel voyait la serviette depuis la mer et rentrait déjeuner." },
      { id: "C", text: "Elle envoyait les enfants le chercher à la nage", isCorrect: false },
      { id: "D", text: "Elle hissait un drapeau blanc", isCorrect: false }
    ]
  },
  // vérif : 03:47:08 (Gabriela, le Mexique) et 04:54:05 (« 15 jours avec elle […] de Mexico jusqu'au Yucatán »)
  {
    id: 10,
    question: "Quel est le prochain grand voyage de Marie-Claude ?",
    options: [
      { id: "A", text: "Le Japon", isCorrect: false },
      { id: "B", text: "Le Mexique, avec son apprenante Gabriela", isCorrect: true, explanation: "Quinze jours de Mexico jusqu'au Yucatán, avec celle qu'elle a aidée à décrocher son diplôme sur l'autisme. « Ça aurait énormément plu à Daniel. »" },
      { id: "C", text: "L'Islande", isCorrect: false },
      { id: "D", text: "Un retour en Irlande", isCorrect: false }
    ]
  },
  // vérif : 00:09:29 (la maman sollicitée pour diriger l'établissement) et 00:10:02 (l'énorme parc, l'énorme château)
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
  // vérif : 04:35:42 (les fresques du Louvre, « ce flou que j'aime bien ») — « Botticelli » nommé dans les Séquences Phares à 00:50:25
  {
    id: 12,
    question: "Devant quelle œuvre du Louvre Marie-Claude emmènerait-elle un proche ?",
    options: [
      { id: "A", text: "La Joconde", isCorrect: false },
      { id: "B", text: "Les fresques de Botticelli", isCorrect: true, explanation: "« Une grâce des teintes… et ce flou que j'aime bien. » Esteban confirme : c'était déjà ses préférées lors de leur visite ensemble." },
      { id: "C", text: "Le Radeau de la Méduse", isCorrect: false },
      { id: "D", text: "La Vénus de Milo", isCorrect: false }
    ]
  },
  // vérif : 00:14:56 (« l'école maternelle, qui d'ailleurs à l'époque s'appelait l'asile […] on disait les enfants vont à l'asile »)
  {
    id: 13,
    question: "Comment appelait-on l'école maternelle quand Marie-Claude était petite ?",
    options: [
      { id: "A", text: "Le jardin d'enfants", isCorrect: false },
      { id: "B", text: "L'asile", isCorrect: true, explanation: "« On disait : les enfants vont à l'asile. » Elle y a même été gardée par la lingère, au milieu des fers à repasser chauffés au feu de bois." },
      { id: "C", text: "La petite classe", isCorrect: false },
      { id: "D", text: "Le préau", isCorrect: false }
    ]
  },
  // vérif : 00:13:22 (« une messe de minuit […] on n'y allait qu'avec des lampes de poche »)
  {
    id: 14,
    question: "Comment la famille rejoignait-elle la chapelle du Chillon pour la messe de minuit ?",
    options: [
      { id: "A", text: "En 2CV, tous serrés dedans", isCorrect: false },
      { id: "B", text: "À pied, avec des lampes de poche", isCorrect: true, explanation: "Aucun éclairage dans le parc à cette époque. Elle garde le souvenir de nuits enneigées entre le château et la chapelle." },
      { id: "C", text: "En calèche tirée par le cheval du régisseur", isCorrect: false },
      { id: "D", text: "Ils ne sortaient pas : le prêtre venait au château", isCorrect: false }
    ]
  },
  // vérif : 01:25:18 (« on arrive à notre voiture, et Yannick était là devant »)
  {
    id: 15,
    question: "Où a-t-on retrouvé le petit Yannick, disparu pendant la visite du Mont-Saint-Michel ?",
    options: [
      { id: "A", text: "Tout en haut de l'abbaye", isCorrect: false },
      { id: "B", text: "Devant la voiture familiale, sur le parking", isCorrect: true, explanation: "À 4 ans, il était tranquillement revenu tout seul. « Pour lui, il n'était pas perdu. » Pendant ce temps, la petite Cathy pleurait tant qu'elle en a fait pipi dans sa culotte !" },
      { id: "C", text: "À la Mère Poulard, devant les omelettes", isCorrect: false },
      { id: "D", text: "Sur la digue, en train de regarder la mer monter", isCorrect: false }
    ]
  },
  // vérif : 00:42:39 (la question à la supérieure) → 00:44:10 (« Elle m'a dispensée de messe pour les trois derniers mois »)
  {
    id: 16,
    question: "En terminale à Poitiers, quelle question Marie-Claude a-t-elle osé poser à la mère supérieure ?",
    options: [
      { id: "A", text: "« Puis-je porter un pantalon sous ma blouse ? »", isCorrect: false },
      { id: "B", text: "« Vaut-il mieux aller à la messe en lisant un roman caché dans mon missel, ou ne plus y aller ? »", isCorrect: true, explanation: "La supérieure, « une femme assez fine », l'a dispensée de messe pour les trois derniers mois… et lui a proposé de partir en Irlande l'année suivante !" },
      { id: "C", text: "« Pourquoi les filles n'ont-elles pas le droit de parler à table ? »", isCorrect: false },
      { id: "D", text: "« Puis-je rentrer chez moi tous les dimanches ? »", isCorrect: false }
    ]
  },
  // vérif : 01:43:28 (« Pourquoi j'avais pris 9 kilos ? Ça fait 1 kilo par mois, puisque je suis restée 9 mois. »)
  {
    id: 17,
    question: "Combien de kilos Marie-Claude a-t-elle ramenés de ses neuf mois en Irlande ?",
    options: [
      { id: "A", text: "Aucun : elle a maigri avec la pluie", isCorrect: false },
      { id: "B", text: "3 kilos", isCorrect: false },
      { id: "C", text: "9 kilos — un par mois !", isCorrect: true, explanation: "La faute aux plats en croûte, au custard et aux tartines beurre-marmelade des bonnes sœurs. De retour bronzée en transatlantique, sa tante s'exclame : « Tu n'as jamais été plus belle ! »" },
      { id: "D", text: "15 kilos", isCorrect: false }
    ]
  },
  // vérif : 01:49:58 (poèmes, gitans, flamenco) et 01:50:15 (« président du cercle des poètes […] de toutes les universités de Madrid »)
  {
    id: 18,
    question: "Qui était Miguel Ángel, le fiancé espagnol des années madrilènes de Marie-Claude ?",
    options: [
      { id: "A", text: "Un torero en devenir", isCorrect: false },
      { id: "B", text: "Le président du cercle des poètes des universités de Madrid", isCorrect: true, explanation: "Des soirées à réciter des poèmes pendant que les gitans grattaient la guitare et dansaient le flamenco… « On allait peu à la fac. »" },
      { id: "C", text: "Un guitariste de flamenco", isCorrect: false },
      { id: "D", text: "Un jeune peintre du Prado", isCorrect: false }
    ]
  },
  // vérif : 01:56:34 (« avec des boîtes de conserve, parce que les parents pensaient qu'on n'allait rien trouver à Paris pour se nourrir »)
  {
    id: 19,
    question: "Qu'y avait-il dans la 2CV quand Marie-Claude est montée s'installer à Paris ?",
    options: [
      { id: "A", text: "Son chevalet et ses gouaches", isCorrect: false },
      { id: "B", text: "Des boîtes de conserve", isCorrect: true, explanation: "« Les parents pensaient qu'on n'allait rien trouver à Paris pour se nourrir. » 300 km de 2CV, puis un 7e étage sans ascenseur à Montmartre !" },
      { id: "C", text: "Le buffet de famille", isCorrect: false },
      { id: "D", text: "Ses livres d'histoire de l'art", isCorrect: false }
    ]
  },
  // vérif : 01:56:53 (la bouteille de la grand-mère) et 01:58:28 (« on s'est tapé la liqueur de cassis en bavardant »)
  {
    id: 20,
    question: "Qu'ont offert Marie-Claude et sa copine à Daniel et ses amis, le fameux premier soir à Montmartre ?",
    options: [
      { id: "A", text: "Du thé, comme les Russes blancs", isCorrect: false },
      { id: "B", text: "La liqueur de cassis faite maison par sa grand-mère", isCorrect: true, explanation: "« Tu penseras à moi quand tu seras à Paris », avait dit la grand-mère de Varades. La bouteille y est passée le soir même, en faisant connaissance !" },
      { id: "C", text: "Une soupe poireaux-pommes de terre", isCorrect: false },
      { id: "D", text: "Rien : elles n'ont pas ouvert la porte", isCorrect: false }
    ]
  },
  // vérif : 02:14:48 (« ras-le-bol d'être le numéro 72-775 chez IBM ») et 02:15:02 (le rêve Apple)
  {
    id: 21,
    question: "Pourquoi Daniel a-t-il voulu quitter IBM pour créer sa propre entreprise ?",
    options: [
      { id: "A", text: "Il avait été muté trop loin de Dourdan", isCorrect: false },
      { id: "B", text: "Il en avait « ras-le-bol d'être le numéro 72-775 »", isCorrect: true, explanation: "Il rêvait de faire comme Apple : partir de son garage et créer une petite entreprise de nouvelles technologies « qui grossirait, qui grossirait »." },
      { id: "C", text: "Son patron avait refusé son invention", isCorrect: false },
      { id: "D", text: "Marie-Claude le lui avait demandé", isCorrect: false }
    ]
  },
  // vérif : 02:38:38 (« Loïc, ça a toujours été finalement un tendre […] Mais pourquoi ils veulent se battre ? » ; déjà à 01:15:37)
  {
    id: 22,
    question: "Que demandait le petit Loïc en rentrant de l'école maternelle à Paris ?",
    options: [
      { id: "A", text: "« C'est quand qu'on retourne à la plage ? »", isCorrect: false },
      { id: "B", text: "« Pourquoi ils veulent se battre ? »", isCorrect: true, explanation: "Un tendre, foncièrement. « Parfois, je retrouve le petit Loïc », sourit-elle — même si le volley et la compétition lui ont forgé une carapace." },
      { id: "C", text: "« Pourquoi je suis le plus grand ? »", isCorrect: false },
      { id: "D", text: "« Qu'est-ce qu'on mange ce soir ? »", isCorrect: false }
    ]
  },
  // vérif : 02:36:49 (« une planche à voile qu'on appelait le paquebot […] une grande voile blanche et violette »)
  {
    id: 23,
    question: "Quel surnom la famille avait-elle donné à la planche à voile de Daniel ?",
    options: [
      { id: "A", text: "La fusée", isCorrect: false },
      { id: "B", text: "Le paquebot", isCorrect: true, explanation: "Une des toutes premières planches à voile : énorme, avec une grande voile blanche et violette. Il passait sa vie dessus, devant la Naïade." },
      { id: "C", text: "La baleine", isCorrect: false },
      { id: "D", text: "L'escargot", isCorrect: false }
    ]
  },
  // vérif : 02:30:03 (« Jocelyn avait acheté sur ses deniers de lycéen un micro-ondes qui est toujours le même »)
  {
    id: 24,
    question: "Qu'a acheté Jocelyn lycéen, sur ses propres économies, pendant les années Artway ?",
    options: [
      { id: "A", text: "Une mobylette", isCorrect: false },
      { id: "B", text: "Un micro-ondes — toujours en service aujourd'hui !", isCorrect: true, explanation: "Ras-le-bol d'attendre ses parents qui rentraient toujours tard du bureau : c'est lui qui se faisait la cuisine le soir." },
      { id: "C", text: "Une télévision pour sa chambre", isCorrect: false },
      { id: "D", text: "Une console de jeux", isCorrect: false }
    ]
  },
  // vérif : 02:50:38 (« elle voulait payer pour pouvoir vivre à la française ») et 02:52:23 (« cette riche héritière californienne »)
  {
    id: 25,
    question: "Quel malentendu y a-t-il eu avec Kate, la jeune Californienne devenue fille au pair ?",
    options: [
      { id: "A", text: "Elle ne parlait pas un mot de français", isCorrect: false },
      { id: "B", text: "Elle pensait payer la famille pour vivre à la française — pas être payée !", isCorrect: true, explanation: "Riche héritière, elle n'avait aucun besoin d'argent de poche. « Moi, je me sens tellement bien là, c'est d'accord ! »" },
      { id: "C", text: "Elle croyait devoir garder des chats", isCorrect: false },
      { id: "D", text: "Elle s'était trompée d'adresse", isCorrect: false }
    ]
  },
  // vérif : 03:10:07 (les portes ouvertes à Sceaux) → 03:10:45 (« ça te plaît ? — ah oui c'est formidable ! », le droit des étrangers)
  {
    id: 26,
    question: "Comment Emmanuelle a-t-elle choisi de faire du droit ?",
    options: [
      { id: "A", text: "Sur les conseils pressants de son père", isCorrect: false },
      { id: "B", text: "À des portes ouvertes de la fac de Sceaux : « Ah oui, c'est formidable ! »", isCorrect: true, explanation: "Pendant que sa mère « s'enfonçait dans le sol » en écoutant l'amphi… Elle est partie dans le droit des étrangers et a écrit sa thèse à la maison." },
      { id: "C", text: "Après un stage chez un avocat de Dourdan", isCorrect: false },
      { id: "D", text: "En accompagnant sa mère au tribunal", isCorrect: false }
    ]
  },
  // vérif : 03:16:48 (« il faisait du vélo avec eux. Il y a même une allée qui s'appelle Robin Wood »)
  {
    id: 27,
    question: "Quel nom porte l'allée de la forêt où le petit Robin faisait du vélo avec Daniel et son ami Baudouin ?",
    options: [
      { id: "A", text: "L'allée du Petit Prince", isCorrect: false },
      { id: "B", text: "L'allée Robin Wood", isCorrect: true, explanation: "Tous les dimanches matin, Daniel et Baudouin « refaisaient le monde » dans la forêt — et le premier petit-fils pédalait avec eux." },
      { id: "C", text: "L'allée des Cèdres", isCorrect: false },
      { id: "D", text: "L'allée de la Naïade", isCorrect: false }
    ]
  },
  // vérif : 04:47:41 (« dans le creux de l'oreille […] "Mamie, je me sens espagnol" »)
  {
    id: 28,
    question: "Que confie le petit Esteban, 6 ou 7 ans, au creux de l'oreille de sa grand-mère pendant une fête de famille ?",
    options: [
      { id: "A", text: "« Mamie, je veux être pompier »", isCorrect: false },
      { id: "B", text: "« Mamie, je me sens espagnol »", isCorrect: true, explanation: "« Il est bien singulier dans sa personnalité, et ça, je trouve ça chouette. » Elle lui souhaite de démultiplier cette singularité — plutôt à l'intérieur qu'à l'extérieur." },
      { id: "C", text: "« Mamie, j'ai cassé un carreau de la serre »", isCorrect: false },
      { id: "D", text: "« Mamie, tu es ma mamie préférée »", isCorrect: false }
    ]
  },
  // vérif : 04:30:31 (le poème) et 04:31:15 (« quand je suis allée en Mauritanie faire dix jours de randonnée dans le désert »)
  {
    id: 29,
    question: "Où Marie-Claude a-t-elle déclamé Du Bellay pour la toute première fois en public ?",
    options: [
      { id: "A", text: "Dans la cour du Louvre", isCorrect: false },
      { id: "B", text: "En plein désert de Mauritanie, devant des corans anciens étalés sur le sable", isCorrect: true, explanation: "« Quand reverrai-je, hélas, de mon petit village fumer la cheminée… » Les gardiens des manuscrits étaient sidérés. Elle le lit aujourd'hui à ses apprenants étrangers." },
      { id: "C", text: "À la chapelle du Chillon", isCorrect: false },
      { id: "D", text: "Au caveau de la Huchette", isCorrect: false }
    ]
  },
  // vérif : 04:59:20 (« Soyez curieux, soyez bienveillants, soyez aimants. Et surtout, soyez vous-même. »)
  {
    id: 30,
    question: "Quels sont les trois « soyez » du message de Marie-Claude aux générations futures ?",
    options: [
      { id: "A", text: "Soyez sages, soyez forts, soyez patients", isCorrect: false },
      { id: "B", text: "Soyez curieux, soyez bienveillants, soyez aimants", isCorrect: true, explanation: "« Et surtout, soyez vous-même. […] Et vivez chaque instant. Chaque instant est merveilleux. »" },
      { id: "C", text: "Soyez prudents, soyez polis, soyez ponctuels", isCorrect: false },
      { id: "D", text: "Soyez libres, soyez drôles, soyez fous", isCorrect: false }
    ]
  }
];
