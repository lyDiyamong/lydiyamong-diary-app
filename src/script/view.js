// function for reading the data from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const index = params.get('index');

    const notesData = JSON.parse(localStorage.getItem('notesData')) || [];
    const note = notesData[index];

    document.getElementById('note-title').textContent = note.titleInput;
    document.getElementById('note-date').textContent = note.dateInput;
    document.getElementById('note-desc').textContent = note.descInput;
});
