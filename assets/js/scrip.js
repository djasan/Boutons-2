const buttons = document.getElementsByClassName('btn');
const windows = document.getElementsByClassName('window');

// Générer du Lorem Ipsum unique pour chaque fenêtre
function generateUniqueLoremIpsum() {
    return 'Lorem ipsum ' + Math.random().toString(36).substr(2, 5); // Exemple simple pour la démo
}

// Ajoutez un gestionnaire d'événements à chaque bouton
Array.from(buttons).forEach((button, index) => {
    button.addEventListener('click', () => {
        // Fermer toutes les fenêtres
        Array.from(windows).forEach((window) => {
            window.style.display = 'none';
        });

        // Afficher la fenêtre correspondante
        const currentWindow = windows[index];
        currentWindow.style.display = 'block';

        // Mettre à jour le texte de la fenêtre avec un Lorem Ipsum unique
        currentWindow.innerText = generateUniqueLoremIpsum();
    });
});

