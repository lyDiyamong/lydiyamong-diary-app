import { resetForm } from "../main.js";
// create form template
class Modal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- start modal-form -->
        <form id="modal-form" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <!-- date input-->
                <div class="form-group">
                    <label for="date">Date:</label>
                    <input type="date" id="note-date" name="date">
                </div>
                <!-- title input-->
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" id="note-title" name="title">
                </div>
                <!-- description input-->
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="note-desc" name="description" rows="4"></textarea>
                </div>
                <div id="error-msg"></div>
                <div class="form-btn-container">
                    <button id="close-modal" class="btn-form cancel-btn">Cancel</button>
                    <button type="submit" class="btn-form save-btn">Save</button>
                </div>
            </div>
        </form>
        <!-- end modal-form -->
        `
    }
}

customElements.define('modal-form-component', Modal)



// modal input form 
const modal = document.getElementById("modal-form");

// button that opens the modal desktop
const addBtn = document.getElementById("add-btn");

// button open modal for mobile
const addMobile = document.getElementById('add-mobile')

// button closes the modal
const closeBtn = document.getElementById("close-modal");

// open modal function
export const openModal = () => {

    modal.style.display = "block";
    setTimeout(function () {
        modal.classList.add('show');
    }, 10);
}

// close modal function
export const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    resetForm()
}

//  open the modal
addBtn.onclick = openModal;
addMobile.onclick = openModal
// close the modal
closeBtn.addEventListener('click', (event) => {
    event.preventDefault()
    closeModal()
})
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}
