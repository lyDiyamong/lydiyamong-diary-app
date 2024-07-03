class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <span>&copy; <span id="current-year"></span> / Ly Diyamong</span>
        </footer>
        `
    }
}
customElements.define('footer-component', Footer)

// insert current year to footer
const yearElement = document.getElementById('current-year')
// get current year
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;