// create array to get data from local storage
const notesData = JSON.parse(localStorage.getItem('notesData')) || [];
// check if note local is empty or not
if (notesData.length > 0) {
    const recentNote = notesData.slice(0, 1);
    // Display the first note
    recentNote.forEach((value, id) => {
        document.getElementById('first-note').innerHTML += `
        <div class="diary-note">
            <div class="note-header">
                <span>${value.dateInput}</span>
            </div>
            <div class="note-title">
                <span>${value.titleInput}</span>
            </div>
            <div class="note-text">
                <p>${value.descInput}</p>
            </div>
        </div>
        
        `;
        });
} else {
    document.getElementById('first-note').innerHTML = '<p>No note available!!!!</p>';
}
