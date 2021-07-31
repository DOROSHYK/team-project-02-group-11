import AbstractView from "./abstract-view.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FILMOTEKA/Home-page");
    }

    async getHtml() {
        return `
            <section class="film-cards">
                   <div class="container">
                   <h1>HOME-PAGE</h1>
                       <ul class="film-cards__list gallery"></ul>
                  </div>
            </section>
        `;
    }
}