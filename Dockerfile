# Utiliser une image de base avec Maven et OpenJDK
FROM maven:3.8.4-openjdk-11-slim AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers pom.xml et le code source dans le conteneur
COPY pom.xml /app
COPY src /app/src

# Construire le projet avec Maven
RUN mvn clean package -DskipTests

# Utiliser une image OpenJDK pour l'exécution
FROM openjdk:11-jre-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier jar généré depuis l'image builder
COPY --from=builder /app/target/projet.jar /app/projet.jar

# Exposer le port sur lequel l'application écoute (par exemple, 8080)
EXPOSE 8080

# Commande pour exécuter l'application
CMD ["java", "-jar", "projet.jar"]
