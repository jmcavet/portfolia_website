class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const current_year = new Date().getFullYear();
        this.innerHTML = `
        <footer class=" footer">
        <div class="footer__social">
            <a href="https://github.com/jmcavet/" target="_blank" role="button">
                <div class="icon-social__github"></div>
            </a>
            <a href="https://www.linkedin.com/in/jean-marie-cavet-24687216/" target="_blank" role="button">
                <div class="icon-social__linkedin"></div>
            </a>
            <a href="https://www.xing.com/profile/JeanMarie_Cavet" target="_blank" role="button">
                <div class="icon-social__xing"></div>
            </a>
        </div>
        <ul class="footer__navbar">
            <li class="navbar__item"><a href="/index.html" class="navbar__link">Home</a></li>
            <li class="navbar__item"><a href="/portfolio.html" class="navbar__link">Portfolio</a></li>
            <li class="navbar__item"><a href="/about.html" class="navbar__link">About</a></li>
            <li class="navbar__item"><a href="/blog.html" class="navbar__link">Blog</a></li>
            <li class="navbar__item"><a href="/contact.html" class="navbar__link">Contact</a></li>
        </ul>
        <p class="copyright">
            Copyright &copy; ${current_year} Jean-Marie Cavet. All Rights Reserved
        </p>
    </footer>
      `;
    }
}

customElements.define('footer-component', Footer);