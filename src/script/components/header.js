import { HeaderData } from "../data/header-data.js"

// data container
const dataSources = {
    'header-data' : HeaderData
}
// create element
const createHeader = (items) => (`
    <header class="header-container">
        <div class="header-text">
        ${items.map((item) => `
            <h1>${item.title}</h1>
            <p>${item.subTitle}</p>
        `).join('')}
        </div>
    </header>
`)

// render element
class Header extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source')
        const data = dataSources[dataSource]
        this.innerHTML = createHeader(data)
    }
}

customElements.define('header-component', Header)