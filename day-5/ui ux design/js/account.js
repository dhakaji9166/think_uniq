const logoutBtn = document.getElementById('logoutBtn');
const logoutPopup = document.getElementById('logoutPopup');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

logoutBtn.addEventListener('click', () => {
    logoutPopup.style.display = 'block';
});

confirmBtn.addEventListener('click', () => {
    console.log('Logged out!');
    logoutPopup.style.display = 'none';
});

cancelBtn.addEventListener('click', () => {
    logoutPopup.style.display = 'none';
});