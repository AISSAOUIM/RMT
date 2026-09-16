# Utilisation d'une image Nginx légère basée sur Alpine Linux
FROM nginx:alpine

# Copie des fichiers statiques du projet vers le répertoire de Nginx
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Exposition du port 80 (par défaut pour Nginx)
EXPOSE 80

# La commande de démarrage est déjà configurée dans l'image de base Nginx
