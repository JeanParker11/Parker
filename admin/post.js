// Assurez-vous que vous avez bien installé le package `express` et `body-parser` pour gérer les données
const express = require('express');
const multer = require('multer');  // Pour gérer les fichiers téléchargés (comme les images)
const path = require('path');
const app = express();

// Utiliser BodyParser pour traiter les données JSON et URL-encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuration de multer pour l'upload des images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');  // Dossier où les images seront stockées
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Générer un nom unique pour l'image
    }
});

const upload = multer({ storage: storage });

// Simuler une base de données pour stocker les articles
let articles = [];

// Route pour récupérer tous les articles
app.get('/admin/articles', (req, res) => {
    res.json(articles);
});

// Route pour ajouter un nouvel article
app.post('/admin/post', upload.single('image'), (req, res) => {
    const { title, content } = req.body;

    // Vérifier si les données sont complètes
    if (!title || !content) {
        return res.status(400).json({ message: 'Le titre et le contenu sont requis.' });
    }

    // Créer un nouvel article avec l'image
    const newArticle = {
        title,
        content,
        image: req.file ? req.file.filename : null,  // Vérifier si une image a été téléchargée
        datePosted: new Date(),
    };

    // Ajouter l'article à la "base de données"
    articles.push(newArticle);

    res.status(201).json({
        message: 'Article publié avec succès!',
        article: newArticle
    });
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
