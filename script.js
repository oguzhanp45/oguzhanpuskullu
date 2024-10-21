//Local storage ile popupu'ı tek seferlik çalıştırabilirdim fakat ödev olduğu için bu şekilde bırakıyorum hocam.
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
}

// Kapatma butonuna tıklandığında pop-up'ı kapat
document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}

// Pop-up dışına tıklandığında kapat
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}
