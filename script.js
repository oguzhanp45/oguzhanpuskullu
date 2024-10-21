//Local storage ile popupu'ı tek seferlik çalıştırabilirdim fakat ödev olduğu için bu şekilde bırakıyorum hocam.
// Pop-up'ı göster
window.onload = function() {
    document.getElementById('welcome-popup').style.display = 'flex';
};

// Kapatma butonu
document.getElementById('close-btn').onclick = function() {
    document.getElementById('welcome-popup').style.display = 'none';
};

// Kapatma simgesi
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('welcome-popup').style.display = 'none';
};
