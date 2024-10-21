//Local storage ile popupu'ı tek seferlik çalıştırabilirdim fakat ödev olduğu için bu şekilde bırakıyorum hocam.
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
}
document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
}