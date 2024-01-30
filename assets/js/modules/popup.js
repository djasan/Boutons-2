document.getElementById('openPopupButton').addEventListener('click', openPopup);

function openPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'block';

  // Fermer la popup automatiquement après 4 secondes
  setTimeout(closePopup, 4000);
}

document.getElementById('closePopup').addEventListener('click', closePopup);

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
