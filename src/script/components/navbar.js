import { NavbarData } from "../data/navbar-data.js"

// data container
const dataSources = {
    'navbar-data' : NavbarData
}
// create element
const createNavbar = (items) => (`
    <!-- start navbar -->
    <nav class="navbar">
        <div class="navbar-inner">
        ${items.map((item) => `
                <div id="menu-toggle" class="menu-icon">
                    <img src=${item.menuImg} alt="menu icon">
                </div>
                <div class="logo-container">
                    <a href="/index.html">
                        <img src=${item.logoImg} alt="logo">
                    </a>  
                </div>
                <div class="profile-container">
                    <img src=${item.pfImg} alt="profile">
                </div>
            `).join('')}
        </div>
    </nav>
    <!-- end navbar -->
`)

// render element
class Navbar extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source')
        const data = dataSources[dataSource]
        this.innerHTML = createNavbar(data)
    }
}

customElements.define('navbar-component', Navbar)