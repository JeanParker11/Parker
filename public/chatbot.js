async function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    if (!userMessage) return;

    // Afficher le message de l'utilisateur
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<div><strong>Vous:</strong> ${userMessage}</div>`;

    // Effacer la zone de saisie
    document.getElementById('userMessage').value = '';

    // Envoyer le message à l'API
    const response = await fetch('/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
    });

    const data = await response.json();

    if (data.reply) {
        // Afficher la réponse de l'API
        messagesDiv.innerHTML += `<div><strong>Professeur Parker:</strong> ${data.reply}</div>`;
    }
}
