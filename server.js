const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route pour afficher les articles
app.get('/articles', (req, res) => {
    // Simuler la récupération d'articles depuis une base de données
    const articles = [
        { title: "Article 1", content: "Contenu de l'article 1", image: "images/article1.jpg" },
        { title: "Article 2", content: "Contenu de l'article 2", image: "images/article2.jpg" }
    ];
    res.json(articles);
});

// Route par défaut pour servir la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
