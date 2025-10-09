class Header extends HTMLElement {
  constructor() {
    super();
  }

  get page() {
    let page = this.getAttribute("page");
    return page;
  }

  get portfolio_project() {
    let page = this.getAttribute("portfolio_project");
    return page;
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="header__nav">
            <a href="/index.html" class="header__logo">
                <span>&lt;</span><span class="header__logo--1">JMc</span><span>/&gt;</span>
            </a>
            
            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="/index.html" ${
                      this.page == "home"
                        ? 'class="navbar__link active"'
                        : 'class="navbar__link"'
                    }>Home</a></li>
                    <li class="navbar__item">
                        <a href="/portfolio/" ${
                          this.page == "portfolio"
                            ? 'class="navbar__link active"'
                            : 'class="navbar__link"'
                        }>Portfolio</a>
                        <ul class="dropdown">
                            <li class="dropdown__list"><a href="/portfolio/" ${
                              this.portfolio_project == "all"
                                ? 'class="dropdown__link active"'
                                : 'class="dropdown__link"'
                            }>All</a></li>
                            <li class="dropdown__list"><a href="/portfolio/famappy" ${
                              this.portfolio_project == "famappy"
                                ? 'class="dropdown__link active"'
                                : 'class="dropdown__link"'
                            }>Famappy</a></li>
                            <li class="dropdown__list"><a href="/portfolio/fluento" ${
                              this.portfolio_project == "fluento"
                                ? 'class="dropdown__link active"'
                                : 'class="dropdown__link"'
                            }>Fluento</a></li>
                            <li class="dropdown__list"><a href="/portfolio/linguappo" ${
                              this.portfolio_project == "linguappo"
                                ? 'class="dropdown__link active"'
                                : 'class="dropdown__link"'
                            }>Linguappo</a></li>
                            <li class="dropdown__list"><a href="/portfolio/personal" ${
                              this.portfolio_project == "personal"
                                ? 'class="dropdown__link active"'
                                : 'class="dropdown__link"'
                            }>Portfolio Website</a></li>
                            
                        </ul>
                    </li>
                    <li class="navbar__item"><a href="/about/" ${
                      this.page == "about"
                        ? 'class="navbar__link active"'
                        : 'class="navbar__link"'
                    }>About</a></li>
                    <li class="navbar__item"><a href="/blog/" ${
                      this.page == "blog"
                        ? 'class="navbar__link active"'
                        : 'class="navbar__link"'
                    }>Blog</a></li>
                    <li class="navbar__item"><a href="/contact/" ${
                      this.page == "contact"
                        ? 'class="navbar__link active"'
                        : 'class="navbar__link"'
                    }>Contact</a></li>
                </ul>
            </nav>
            <a class="header__hamburger flex flex--center" onclick="openHamburger()">
                <span></span>
            </a>
            <div class="header__mobile-background flex flex--center"></div>
            <div class="header__mobile flex flex--center">
                <ul>
                    <li class="navbar__item flex flex--center">
                        <a href="/index.html" ${
                          this.page == "home"
                            ? 'class="navbar__link active"'
                            : 'class="navbar__link"'
                        }>Home</a>
                    </li>
                    <li class="navbar__item">
                        <div class="flex flex--center">
                            <a href="#" ${
                              this.page == "portfolio"
                                ? 'class="navbar__link active navbar__link--portfolio" onclick="openPortfolioSubmenu()"'
                                : 'class="navbar__link navbar__link--portfolio" onclick="openPortfolioSubmenu()"'
                            }>Portfolio</a>
                            <img src="/img/portfolio-arrow.svg" class="icon-portfolio-arrow" alt="Portfolio arrow" />
                        </div>
                        <ul class="dropdown-mobile">
                            <li class="dropdown-mobile__list"><a href="/portfolio/" ${
                              this.portfolio_project == "all"
                                ? 'class="dropdown-mobile__link active"'
                                : 'class="dropdown-mobile__link"'
                            }>All</a></li>
                            <li class="dropdown-mobile__list"><a href="/portfolio/famappy" ${
                              this.portfolio_project == "famappy"
                                ? 'class="dropdown-mobile__link active"'
                                : 'class="dropdown-mobile__link"'
                            }>Famappy</a></li>
                            <li class="dropdown-mobile__list"><a href="/portfolio/fluento" ${
                              this.portfolio_project == "fluento"
                                ? 'class="dropdown-mobile__link active"'
                                : 'class="dropdown-mobile__link"'
                            }>Fluento</a></li>
                            <li class="dropdown-mobile__list"><a href="/portfolio/linguappo" ${
                              this.portfolio_project == "linguappo"
                                ? 'class="dropdown-mobile__link active"'
                                : 'class="dropdown-mobile__link"'
                            }>Linguappo</a></li>
                            <li class="dropdown-mobile__list"><a href="/portfolio/personal" ${
                              this.portfolio_project == "personal"
                                ? 'class="dropdown-mobile__link active"'
                                : 'class="dropdown-mobile__link"'
                            }>Portfolio Website</a></li>
                        </ul>
                    </li>

                    <li class="navbar__item flex flex--center">
                        <a href="/about/" ${
                          this.page == "about"
                            ? 'class="navbar__link active"'
                            : 'class="navbar__link"'
                        }>About</a>
                    </li>
                    <li class="navbar__item flex flex--center">
                        <a href="/blog/" ${
                          this.page == "blog"
                            ? 'class="navbar__link active"'
                            : 'class="navbar__link"'
                        }>Blog</a>
                    </li>
                    <li class="navbar__item flex flex--center">
                        <a href="/contact/" ${
                          this.page == "contact"
                            ? 'class="navbar__link active"'
                            : 'class="navbar__link"'
                        }>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      `;
  }
}

customElements.define("header-component", Header);
