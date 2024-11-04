# Utiliser une image de base avec Node.js et npm
FROM node:18

# Installer les dépendances requises pour Electron
RUN apt-get update && apt-get install -y \
    libgtk-3-0 \
    libnotify-dev \
    libgconf-2-4 \
    libasound2 \
    libxss1 \
    libxtst6 \
    wget \
    wine \
    && apt-get clean

# Créer un répertoire pour l'application
WORKDIR /app

# Copier les fichiers de votre projet dans le conteneur
COPY . .

# Installer les dépendances de votre application
RUN npm install

# Exposer le port (par exemple, si vous utilisez un serveur de développement)
EXPOSE 3000

# Commande pour construire l'application
CMD ["npm", "run", "build"]
