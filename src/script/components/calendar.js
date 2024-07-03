class Calendar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- start calendar -->
        <h4>Calendar</h4>
        <div class="calendar">
            <div class="calendar-top">
                <div class="btn-group">
                    <button class="tag">Today</button>
                    <button class="tag">Tomorrow</button>
                    <button class="tag">In 10 days</button>
                </div>
                <div class="month-selector">
                    <button class="arrow arrow-left"><img src="./src/images/icons/Arrow.svg" alt="arrow"></button>
                    <span class="month-name">July 2024</span>
                    <button class="arrow arrow-right"><img src="./src/images/icons/Arrow.svg" alt="arrow"></button>
                </div>
            </div>

            <div class="calendar-datepicker">
                <span class="day">Mo</span>
                <span class="day">Tu</span>
                <span class="day">We</span>
                <span class="day">Th</span>
                <span class="day">Fr</span>
                <span class="day">Sa</span>
                <span class="day">Su</span>
                <button class="date faded">30</button>
                <button class="date">1</button>
                <button class="date">2</button>
                <button class="date">3</button>
                <button class="date">4</button>
                <button class="date">5</button>
                <button class="date">6</button>
                <button class="date">7</button>
                <button class="date">8</button>
                <button class="date current-day">9</button>
                <button class="date">10</button>
                <button class="date">11</button>
                <button class="date">12</button>
                <button class="date">13</button>
                <button class="date">14</button>
                <button class="date">15</button>
                <button class="date">16</button>
                <button class="date">17</button>
                <button class="date">18</button>
                <button class="date">19</button>
                <button class="date">20</button>
                <button class="date">21</button>
                <button class="date">22</button>
                <button class="date">23</button>
                <button class="date">24</button>
                <button class="date">25</button>
                <button class="date">26</button>
                <button class="date">27</button>
                <button class="date">28</button>
                <button class="date">29</button>
                <button class="date">30</button>
                <button class="date">31</button>
                <button class="date faded">1</button>
                <button class="date faded">2</button>
                <button class="date faded">3</button>
            </div>
        </div>
        <!-- end calendar -->
        `
    }
}

customElements.define('calendar-component', Calendar)