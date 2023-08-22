class CardNew extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft")

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight")

        const newsImage = document.createElement("img");
        newsImage.src = "darth-vader.jpg"
        newsImage.alt = "Darth Vader Caneca"

        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 40%;
                border: 1px solid gray;
                display: flex;
                justify-content: space-between;
            }
            
            .cardLeft{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .cardLeft span {
                font-weight: 400;
            }
            
            .cardLeft h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .cardLeft p {
                color: gray;
            }
        `
        return style;
    }
}

customElements.define("card-new", CardNew);