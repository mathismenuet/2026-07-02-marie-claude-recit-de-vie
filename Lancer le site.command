#!/bin/bash
# Double-cliquer ce fichier dans le Finder pour lancer le site en local.
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "Installation des dépendances (première fois)..."
  npm install
fi

echo "Démarrage du serveur local..."
( sleep 2 && open "http://localhost:5173" ) &
npm run dev
