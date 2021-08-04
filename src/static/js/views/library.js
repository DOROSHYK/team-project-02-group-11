import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FILMOTEKA/library");
    }

    async getHtml() {
        return `
            <section class="film-cards">
             <div class="container">
             <h1>MY-LIBRARY</h1>
             <ul class="filters-list film-cards__list" id="library-list"></ul>
              </div>
              </section>
        `;
    }
}