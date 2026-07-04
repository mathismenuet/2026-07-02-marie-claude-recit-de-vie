// Chapitres de la vidéo « Séquences phares ».
// ⚠️ Les timecodes (seconds + time) sont à caler une fois le montage
// verrouillé : remplacer seconds par la position réelle dans la vidéo
// et time par l'affichage "MM:SS". En attendant, les cartes s'affichent
// avec « — » et renvoient au début de la vidéo.

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
      { time: "—", seconds: 0, title: "🎙️ Introduction", text: "« Remonter dans son passé… quelque chose de très épais, très profond et très éphémère. »" },
      { time: "—", seconds: 0, title: "🎄 Née un jour de Noël", text: "Angers, 25 décembre 1944 — « ma maman avait été privée de dessert »." },
    ]
  },
  {
    title: "🌳 Les racines (1944 – 1965)",
    chapters: [
      { time: "—", seconds: 0, title: "🏰 Le château du Chillon", text: "Le parc immense, la forêt, les cabanes, la messe de minuit aux lampes de poche." },
      { time: "—", seconds: 0, title: "📚 L'école d'autrefois", text: "Le bonnet d'âne, la langue de « bavarde », et l'art de tourner les punitions en dérision." },
      { time: "—", seconds: 0, title: "🗼 Yannick au Mont-Saint-Michel", text: "Le petit frère disparu pendant la visite… et retrouvé tranquille devant la voiture." },
      { time: "—", seconds: 0, title: "🍀 L'Irlande et les 9 kilos", text: "La bonne sœur au dentier, le retour en transatlantique, et la tante admirative." },
      { time: "—", seconds: 0, title: "💃 Madrid, poètes et flamenco", text: "L'arrivée « film de Buñuel », Miguel Ángel, les gitans et la liberté." },
    ]
  },
  {
    title: "💛 Daniel (1965 – 1985)",
    chapters: [
      { time: "—", seconds: 0, title: "✉️ La petite robe noire", text: "La 2CV pleine de bocaux, la liqueur de cassis de la grand-mère, et LE télégramme." },
      { time: "—", seconds: 0, title: "🪆 Dushka", text: "Les Russes blancs de la garçonnière et le surnom le plus cher à son cœur." },
      { time: "—", seconds: 0, title: "💻 Artway, le visionnaire", text: "« Un jour, vous aurez tous un ordinateur dans votre maison » — on le prenait pour un fou." },
      { time: "—", seconds: 0, title: "🏖️ La Naïade", text: "La maison sur la plage, la planche à voile « paquebot » et la serviette sur le portail." },
    ]
  },
  {
    title: "👨‍👩‍👧‍👦 La famille (1985 – 2005)",
    chapters: [
      { time: "—", seconds: 0, title: "🏐 Loïc", text: "« Mais pourquoi ils veulent se battre ? » — Vincent le Désossé, Alexandre le Bienheureux." },
      { time: "—", seconds: 0, title: "⚖️ Emmanuelle", text: "La battante, la vedette des spectacles… et la phrase qu'elle n'a jamais oubliée." },
      { time: "—", seconds: 0, title: "📖 Jocelyn", text: "La sieste volets fermés avec ses BD pendant que les autres sont à la plage." },
      { time: "—", seconds: 0, title: "🇺🇸 Kate la Californienne", text: "La riche héritière devenue fille au pair : « mais c'est moi qui vais vous payer ! »" },
      { time: "—", seconds: 0, title: "💇 La permanente afro", text: "« T'es plus ma maman ! » — le fou rire de Loïc et les cheveux tirés toutes les nuits." },
    ]
  },
  {
    title: "✨ Sagesse & transmission",
    chapters: [
      { time: "—", seconds: 0, title: "🕊️ « Il est partout »", text: "Le départ de Daniel, « je t'aime — moi non plus », et 1 + 1 = 3." },
      { time: "—", seconds: 0, title: "🗺️ La liste des pays", text: "« On n'a fait que l'Égypte ensemble… il ne m'en reste plus qu'un ou deux. »" },
      { time: "—", seconds: 0, title: "🦌 Gazelle Dynamique", text: "Le questionnaire de Proust : totems, mots préférés, éphémère et éternité." },
      { time: "—", seconds: 0, title: "🚗 La bêtise de la 2CV", text: "Un permis de conduire d'une journée, délivré par un gendarme compréhensif." },
      { time: "—", seconds: 0, title: "🌾 Le Sillon", text: "Le message aux petits-enfants : « chaque sillon de vie, le plus conforme à ses valeurs »." },
      { time: "—", seconds: 0, title: "💌 Le mot de la fin", text: "« Soyez curieux, soyez bienveillants, soyez aimants et surtout soyez vous-mêmes. »" },
    ]
  }
];
