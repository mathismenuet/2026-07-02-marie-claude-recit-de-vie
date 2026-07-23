// Chapitres de la vidéo « Séquences phares » (~1h05).
// Timecodes calés sur le montage final (vérifiés via les sous-titres
// horodatés de la vidéo YouTube I2DFWsbmEqs, juillet 2026).
// Cliquer une carte fait sauter la vidéo au timecode (seekTo).

export interface Chapter {
  time: string;
  seconds: number;
  title: string;
  text: string;
}

export interface ChapterGroup {
  title: string;
  chapters: Chapter[];
}

export const CHAPTER_GROUPS: ChapterGroup[] = [
  {
    title: "🎬 Ouverture",
    chapters: [
      { time: "00:00", seconds: 0, title: "🎙️ Introduction", text: "Les premières secondes — Noël 1944, Daniel, le permis d'une journée : le récit en éclats." },
      { time: "01:35", seconds: 95, title: "🎄 Née un jour de Noël", text: "Angers, 25 décembre 1944 — « ma maman avait été privée de dessert ». La fratrie, la petite maison au lit-cage." },
    ]
  },
  {
    title: "🌳 Les racines",
    chapters: [
      { time: "03:44", seconds: 224, title: "🏰 Le château du Chillon", text: "Maman directrice de la maison de convalescence : le parc immense, la vie communautaire, la chapelle du dimanche." },
      { time: "05:55", seconds: 355, title: "📚 L'école d'autrefois", text: "Le bonnet d'âne, la langue de « bavarde », et l'art de tourner les punitions en dérision." },
      { time: "09:05", seconds: 545, title: "🗼 Yannick au Mont-Saint-Michel", text: "Le petit frère disparu pendant la visite… et retrouvé tranquille devant la voiture." },
      { time: "11:40", seconds: 700, title: "👩‍⚕️ Catherine, le tilleul du soir", text: "La sœur attentive aux malades, les grands draps du grenier — une vocation d'infirmière née au château." },
    ]
  },
  {
    title: "💛 Daniel",
    chapters: [
      { time: "13:03", seconds: 783, title: "✈️ Le rêve Air France", text: "« Revenez dans deux ans ! » — en attendant ses 21 ans, guide-interprète dans les châteaux de la Loire." },
      { time: "15:03", seconds: 903, title: "🚪 On frappe à la porte", text: "Montmartre, 7e étage sans ascenseur, 23 heures. « Coucou Marie-Claude ! » — et Daniel entre dans sa vie." },
      { time: "16:35", seconds: 995, title: "✉️ Le télégramme et la petite robe noire", text: "« Je vous invite Stop. Caveau de la Huchette Stop. Mettez votre petite robe noire. »" },
      { time: "17:50", seconds: 1070, title: "💌 La chambre-alibi et l'honneur sauf", text: "La seule claque de son père, la chambre sordide « boîte aux lettres »… et la garçonnière du 15e." },
      { time: "19:00", seconds: 1140, title: "🪆 Dushka", text: "Les Russes blancs du dernier étage et le surnom le plus cher à son cœur." },
      { time: "20:02", seconds: 1202, title: "🕊️ « Une très grande liberté »", text: "« Jamais je ne tomberai amoureuse d'un garçon aussi simple que ça » — la douceur, l'honnêteté, la liberté." },
      { time: "21:43", seconds: 1303, title: "💻 Artway, le visionnaire", text: "« Un jour, vous aurez tous un ordinateur dans votre maison » — on le prenait pour un fou." },
      { time: "23:43", seconds: 1423, title: "🇺🇸 Le faux Américain en training", text: "Costume trois-pièces chez IBM, survêtement chez le boulanger — le style décontracté d'un pionnier." },
    ]
  },
  {
    title: "👨‍👩‍👧‍👦 La famille",
    chapters: [
      { time: "24:44", seconds: 1484, title: "🌿 Sauvageonne et méthode Coué", text: "Freinet, « demain ça ira mieux », la nature fait bien les choses — l'école de la liberté à la maison." },
      { time: "25:47", seconds: 1547, title: "🏐 Loïc — « Pourquoi ils veulent se battre ? »", text: "Le tendre devenu battant par le sport — mais le petit Loïc n'est jamais loin." },
      { time: "27:54", seconds: 1674, title: "✋ La claque sur la pointe des pieds", text: "Alexandre le Bienheureux, les granolas partout… et la pension pour se structurer." },
      { time: "28:46", seconds: 1726, title: "⚖️ Emmanuelle la battante", text: "La vedette des petites filles de Dourdan… et la phrase qu'elle n'a jamais oubliée." },
      { time: "30:15", seconds: 1815, title: "📖 Jocelyn, volets fermés", text: "La sieste avec ses BD pendant que les autres bronzent à La Naïade — l'indépendant qui savait ce qu'il voulait." },
      { time: "32:00", seconds: 1920, title: "🪰 « Tu vois la mouche ? »", text: "Le sac à dos suspect, trois mois à Saint-Charles, et la mouche contre la vitre : « c'est comme moi »." },
      { time: "33:40", seconds: 2020, title: "🇺🇸 Kate la Californienne", text: "La riche héritière devenue fille au pair : « mais c'est moi qui vais vous payer ! »" },
      { time: "34:44", seconds: 2084, title: "👶 Premier petit-fils, premiers vélos", text: "Les dimanches matin à vélo dans la forêt avec Daniel et Baudoin — il y a même une allée « Robin Wood »." },
      { time: "36:01", seconds: 2161, title: "🚪 « La porte est toujours ouverte »", text: "Le regard d'une grand-mère : « tu viens quand tu veux, et je serai toujours ravie de t'accueillir »." },
    ]
  },
  {
    title: "🕊️ L'absence",
    chapters: [
      { time: "42:21", seconds: 2541, title: "🕊️ Le départ de Daniel — « il est partout »", text: "« Je t'aime — moi non plus », 1 + 1 = 3, et ce mot qu'elle ne connaît pas : veuve." },
      { time: "46:04", seconds: 2764, title: "🤝 Transmettre le français", text: "La voisine, l'association, dix ans de cours aux nouveaux arrivants — « tout ce que tu pourrais offrir aux gens »." },
    ]
  },
  {
    title: "✨ Sagesse & transmission",
    chapters: [
      { time: "48:07", seconds: 2887, title: "🦌 Gazelle Dynamique", text: "Le questionnaire de Proust — le totem scout qui dit tout : Daniel était Œil de Lynx." },
      { time: "48:43", seconds: 2923, title: "🦋 « Éphémère »", text: "Son mot préféré — « la vie, c'est une succession de minutes éphémères »." },
      { time: "49:09", seconds: 2949, title: "📜 Du Bellay — « Quand reverrai-je, hélas… »", text: "Le poète angevin qu'elle lit à ses apprenants — l'exil, le village, la cheminée qui fume." },
      { time: "50:22", seconds: 3022, title: "🎨 Botticelli au Louvre", text: "Les fresques, la grâce, les teintes — l'œuvre qu'elle choisirait entre toutes." },
      { time: "51:20", seconds: 3080, title: "😄 Le mystère du siège cassé", text: "La question d'Emma sur l'espace bleu marine — et une réponse qui a fait rire tout le monde." },
      { time: "51:52", seconds: 3112, title: "💬 « La vie ne vaut que ce que tu en fais »", text: "Malraux revisité : « plus on est conscient du moment que l'on vit, plus notre vie a du sens »." },
      { time: "52:43", seconds: 3163, title: "🚗 La bêtise de la 2CV", text: "Un permis de conduire d'une journée, délivré par un gendarme compréhensif — et un papier brûlé." },
      { time: "56:40", seconds: 3400, title: "🇪🇸 « Mamie, je me sens espagnol »", text: "La confidence d'Esteban à 6 ans, dans le creux de l'oreille — et la singularité à cultiver." },
      { time: "57:43", seconds: 3463, title: "🌾 « Suis ton sillon »", text: "Le message aux petits-enfants : « chaque sillon de vie, le plus conforme à ses valeurs »." },
      { time: "1:01:27", seconds: 3687, title: "💌 Le mot de la fin", text: "« Soyez curieux, soyez bienveillants, soyez aimants et surtout soyez vous-mêmes. »" },
      { time: "1:02:13", seconds: 3733, title: "🎁 Esteban : un souvenir intemporel", text: "« Créer un moment intemporel… un souvenir de famille qui va pouvoir se transmettre. »" },
      { time: "1:04:27", seconds: 3867, title: "🙏 Merci — « 1 + 1 = 3 »", text: "« Je me suis laissée aller totalement » — et une pensée pour celui qui ne verra pas le film en même temps qu'elle." },
    ]
  }
];
