# Étape 1 : Construction de l'application
FROM node:18 as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet dans l'image
COPY . .

# Construire le projet pour la production
RUN npm run build

# Étape 2 : Configuration du serveur nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le dossier par défaut de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copier la configuration nginx personnalisée (si nécessaire)
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 pour que l'application soit accessible
EXPOSE 80

# Commande par défaut pour démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
