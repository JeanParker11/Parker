<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Professeur Parker</title>
    <link rel="stylesheet" href="style.css"> <!-- Lien vers le fichier CSS -->
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Icône du site -->
</head>
<body>
    <!-- Section Header -->
    <header>
        <div class="header-content">
            <h1>Bienvenue sur Professeur Parker</h1>
            <p>Le Chatbot éducatif pour toutes vos questions !</p>
        </div>
    </header>

    <!-- Section Chat -->
    <section class="chat-section">
        <div class="chat-box">
            <div class="chat-messages" id="chatMessages">
                <!-- Les messages du chatbot et de l'utilisateur seront ici -->
            </div>
            <div class="chat-input">
                <input type="text" id="userMessage" placeholder="Tapez votre message..." />
                <button id="sendMessage">Envoyer</button>
            </div>
        </div>
    </section>

    <!-- Section Footer -->
    <footer>
        <p>Développé par Professeur Parker - Tous droits réservés</p>
        <div class="contact-links">
            <a href="https://wa.me/1234567890" target="_blank">Contactez-moi sur WhatsApp</a>
            <a href="https://t.me/username" target="_blank">Contactez-moi sur Telegram</a>
        </div>
    </footer>

    <script src="chatbot.js"></script> <!-- Lien vers le fichier JavaScript -->
</body>
</html>
