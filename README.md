# Marie-Claude nous raconte — site familial

Site privé (code d'accès) qui accueille les vidéos du récit de vie de Marie-Claude,
réalisé à l'initiative d'Esteban. Basé sur le site « Papi Jean nous raconte »
(React 19 + Vite + Tailwind), contenu entièrement adapté à partir de l'interview
du 30 mars 2026.

## 🔧 À remplir avant mise en ligne — tout est dans `src/data/siteConfig.ts`

| Clé | Quoi | Statut |
|---|---|---|
| `YT_SEQUENCES_PHARES` | ID YouTube de la vidéo séquences phares | ⬜ à remplir |
| `YT_INTEGRALE` | ID YouTube de la vidéo intégrale | ⬜ à remplir |
| `INTEGRALE_DISPONIBLE` | passer à `true` quand l'intégrale est en ligne | ⬜ |
| `ACCESS_CODE` | code d'accès (actuellement `DUSHKA`) | ✅ modifiable |
| `DRIVE_FOLDER` | lien du dossier Drive des livrables | ⬜ à remplir |
| `BG_VIDEO` | vidéo d'arrière-plan du hero (actuellement celle du site Jean — à remplacer par un plan du tournage chez Marie-Claude, ex. rushes pré-interview A7S3 C0024-C0028) | ⬜ à remplacer |

## ⏱️ Timecodes des chapitres

`src/data/chaptersData.ts` : les chapitres sont pré-écrits selon la structure du
montage (préselection), mais les timecodes sont à caler une fois le montage
verrouillé (`seconds` + `time` de chaque chapitre).

## 🚀 Lancer / déployer

```bash
npm install
npm run dev       # développement
npm run build     # build production (dist/)
vercel --prod     # déploiement (framework: Other, output: dist)
```

`vercel.json` force le `noindex` (page privée non référencée).

## Notes de contenu

- Le quiz (12 questions), la mind map, l'arbre familial et les chapitres sont
  tirés de la transcription réelle de l'interview (dossier
  `8. Synchro & Mapping/Transcription` sur le disque projet).
- Conformément aux consignes du projet, aucun contenu ne mentionne la mère
  d'Esteban ; la situation avec Robin n'est pas évoquée (il figure simplement
  dans l'arbre familial avec les autres petits-enfants).
