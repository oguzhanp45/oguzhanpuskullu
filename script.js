//Local storage ile popupu'ı tek seferlik çalıştırabilirdim fakat ödev olduğu için bu şekilde bırakıyorum hocam.
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});
window.onload = function() {
setTimeout(function() {
document.getElementById('popup').style.display = 'block';
}, 1000); // 1 saniye sonra açılır
};
