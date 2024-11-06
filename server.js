const express = require('express');
const path = require('path');
const { OpenAI } = require('openai'); // Importer OpenAI
const app = express();
const port = process.env.PORT || 3000;

// Configurer OpenAI
const openai = new OpenAI({
  apiKey: 'VOTRE_CLE_API_OPENAI', // Remplacez par votre clé API OpenAI
});

// Middleware pour traiter les données en JSON
app.use(express.json());

// Servir les fichiers statiques (HTML, CSS, JS) à partir du dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route pour traiter les messages
app.post('/message', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).send({ error: 'Le message est requis.' });
  }

  try {
    // Utiliser OpenAI pour générer une réponse
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // Vous pouvez utiliser un modèle plus récent si vous le souhaitez
      messages: [{ role: 'user', content: userMessage }],
    });

    // Renvoyer la réponse générée par OpenAI
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Erreur du serveur' });
  }
});

// Route par défaut pour charger index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});
