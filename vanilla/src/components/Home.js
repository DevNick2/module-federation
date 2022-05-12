class HomeComponent extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const raiz = document.createElement('div')
    raiz.setAttribute('class', 'raiz')

    const textRaiz = document.createElement('span')
    textRaiz.textContent = 'hello world'

    raiz.appendChild(textRaiz)

    const style = document.createElement('style')
    style.textContent = `
      .raiz {
        background-color: red;
        width: 200px;
        height: 200px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(raiz)
  }
}

customElements.define('home-component', HomeComponent)