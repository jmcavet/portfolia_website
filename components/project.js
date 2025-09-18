class Project extends HTMLElement {
  constructor() {
    super();
  }

  get githubPage() {
    return this.getAttribute("github-page");
  }

  get appPage() {
    return this.getAttribute("app-page");
  }

  get appDetail() {
    return this.getAttribute("app-detail");
  }

  get figurePath() {
    return this.getAttribute("figure-path");
  }

  get imgAlt() {
    return this.getAttribute("img-alt");
  }

  get header() {
    return this.getAttribute("header");
  }

  get description() {
    return this.getAttribute("description");
  }

  get techStach() {
    let tech_stack = this.getAttribute("tech-stack");
    let available_tech_stack = [
      "html5",
      "css3",
      "sass",
      "jquery",
      "bootstrap",
      "nodejs",
      "mongodb",
      "react",
      "angular",
      "tailwind",
      "firebase",
      "supabase",
      "redux",
      "figma",
      "d3js",
    ];
    let html_techStack = "";

    available_tech_stack.forEach((stack) => {
      if (tech_stack !== null && tech_stack.includes(stack)) {
        html_techStack += `<div class="icon-web__${stack}"></div>`;
      }
    });

    return html_techStack;
  }

  get scrollDown() {
    return this.getAttribute("scroll-down");
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="project ${this.scrollDown}">
                <figure class="project__figure">
                    <img src=${this.figurePath} alt=${this.imgAlt} />
                </figure>
                <div class="project__text grid project__grid">
                    <div class="project__buttons flex flex--spacebetween">
                        <a href=${this.githubPage} target="_blank" role="button">
                            <div class="icon-social__github"></div>
                        </a>
                        <a href=${this.appDetail} role="button">Detail</a>
                    </div>
                    <div class="project__description grid">
                        <h3>${this.header}</h3>
                        <div>${this.description}</div>
                    </div>
                    <div class="project__tech-used flex flex--center">
                        ${this.techStach}
                    </div>
                </div>
            </div>
        `;

    // Attach click handler to the outer container of the project card
    const container = this.querySelector(".project");
    container.onclick = (e) => {
      if (e.target.closest("a")) return;

      // Navigate to the page itself
      window.location.href = this.appDetail;
    };
  }
}

customElements.define("project-component", Project);
