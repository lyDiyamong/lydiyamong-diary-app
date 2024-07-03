import { SidebarData } from "../data/sidebar-data.js"

// data container
const dataSources = {
    'sidebar-data' : SidebarData
}
// create element
const createSidebar = (menu) =>{
    return `
        <aside id="sidebar-toggle" class="sidebar">
            <div class="sidebar-padding">
                <span id='close-sidebar' class="sidebar-close">&times;</span>
                <!-- logo container -->
                <div class="sidebar-logo-container">
                    <div class="sidebar-logo">
                        <img src="/lydiyamong-diary-web/src/images/pics/logo_transparent.png" alt="logo">
                    </div>
                </div>
                <!-- start sidebar content -->
                <section class="sidebar-content-container">
                    <div class="sidebar-container-sub">
                        <h3>Menu</h3>
                        <ul class="sidebar-items-container">
                        ${menu
                            .map((item) => `
                                <li class="sidebar-item-link">
                                    <a href=${item.link} >
                                        <!-- icon container -->
                                        <div>
                                            <img src=${item.img} alt="todo">
                                            <span class="items-link-text">${item.text}</span>
                                        </div>
                                    </a>
                                </li>
                            `
                            ).join('')}
                            
                        </ul>
                    </div>
                </section>
                <!-- end sidebar content -->
            </div>
        </aside>
    `
}

// render element
class Sidebar extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source')
        const data = dataSources[dataSource]
        this.innerHTML = createSidebar(data)
    }
}

customElements.define('sidebar-component', Sidebar)

// toggle sidebar function
const menuToggle = document.getElementById('menu-toggle')
const sidebarToggle = document.getElementById('sidebar-toggle')
const closeToggle = document.getElementById('close-sidebar')

menuToggle.addEventListener('click', () => {
    sidebarToggle.style.width = '275px'
})

closeToggle.addEventListener('click', () => {
    if (sidebarToggle && window.innerWidth <= 1280) {
        sidebarToggle.style.width = '0px';
        sidebarToggle.style.overflowX = 'hidden';
    }
})

// resize function for sizebar
window.addEventListener('resize', () => {
    if (sidebarToggle && window.innerWidth > 1280) {
        sidebarToggle.style.width = 'var(--sidebar-width)';
        sidebarToggle.style.overflowX = 'visible';
    }
    else if (sidebarToggle && window.innerWidth <= 1280) {
        sidebarToggle.style.width = '0';
        sidebarToggle.style.overflowX = 'hidden';
    }
});