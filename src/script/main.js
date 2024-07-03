import { closeModal, openModal } from "./components/modal.js";

const modalForm = document.getElementById('modal-form');
const titleInput = document.getElementById('note-title');
const descInput = document.getElementById('note-desc');
const dateInput = document.getElementById('note-date');
let message = document.getElementById('error-msg');
const noteContainer = document.getElementById('diary-note-container');

let notesData = JSON.parse(localStorage.getItem('notesData')) || []; // Load from local storage or initialize empty array

// submit handler
modalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formValid();
    console.log(notesData);
});

// confirmation if the input is empty or not
const formValid = () => {
    if (titleInput.value === "" || descInput.value === "" || dateInput.value === "") {
        message.innerHTML = 'You should complete the form';
    } else {
        message.innerHTML = '';
        if (editIndex === -1) {
            acceptData();
        } else {
            UpdateNote(editIndex);
        }
        closeModal();
    }
};

// read data from input & insert data into template
const acceptData = () => {
    const newNote = {
        titleInput: titleInput.value,
        descInput: descInput.value,
        dateInput: dateInput.value
    };
    notesData.unshift(newNote);
    saveToLocalStorage();
    CreateNote();
};

// create note template
const CreateNote = () => {
    noteContainer.innerHTML = ''; // Clear existing notes to prevent duplication
    notesData.forEach((item, id) => {
        noteContainer.innerHTML += `
        <div id=${id} class="diary-note">
            <div class="note-header">
                <span>${item.dateInput}</span>
                <div>
                    <img class="view-btn" data-id="${id}" src="/lydiyamong-diary-web/src/images/icons/View.svg" alt="">
                    <img class="edit-btn" data-id="${id}" src="/lydiyamong-diary-web/src/images/icons/Edit.svg" alt="">
                    <img class="delete-btn" data-id="${id}" src="/lydiyamong-diary-web/src/images/icons/Delete.svg" alt="">
                </div>
            </div>
            <div class="note-title">
                <span>${item.titleInput}</span>
            </div>
            <div class="note-text">
                <p>${item.descInput}</p>
            </div>
        </div>
        `;
    });
    // reset form after submit
    modalForm.reset();
};

// delete note function
const DeleteNote = (index) => {
    notesData.splice(index, 1);
    saveToLocalStorage();
    CreateNote();
};

// to keep track of the note being edited
let editIndex = -1; 

// function for editing note 
const EditNote = (id) => {
    editIndex = id;
    const note = notesData[id];
    titleInput.value = note.titleInput;
    descInput.value = note.descInput;
    dateInput.value = note.dateInput;
    modalForm.scrollIntoView(); // Scroll to the form for editing
    openModal();
};

// event for edit, delete & view
noteContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const id = event.target.getAttribute('data-id');
        DeleteNote(id);
    } else if  (event.target.classList.contains('edit-btn')) {
        const id = event.target.getAttribute('data-id');
        EditNote(id);
    } else if (event.target.classList.contains('view-btn')) {
        const id = event.target.getAttribute('data-id');
        viewDetail(id);
    }
});
// function for updating note after editing
const UpdateNote = (index) => {
    notesData[index] = {
        titleInput: titleInput.value,
        descInput: descInput.value,
        dateInput: dateInput.value
    };
    // reset the editIndex
    editIndex = -1; 
    saveToLocalStorage();
    CreateNote();
};

// function for saving notes data to local storage
const saveToLocalStorage = () => {
    localStorage.setItem('notesData', JSON.stringify(notesData)) || [];
};
// function for viewing diary in detail 
const viewDetail = (id) => {
    window.location.href = `view.html?index=${id}`;
};
document.addEventListener('DOMContentLoaded', CreateNote);