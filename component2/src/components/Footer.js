class FooterComponent extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const footer = document.createElement('footer')
    const divFooter = document.createElement('div')
    const spanFooter = document.createElement('span')

    spanFooter.textContent = 'Aqui é o footer'
    divFooter.appendChild(spanFooter)
    footer.appendChild(divFooter)

    shadow.appendChild(footer)
  }
}

customElements.define('footer-component', FooterComponent)

export { FooterComponent }