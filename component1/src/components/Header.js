class HeaderComponent extends HTMLElement {
  constructor () {
    super()

    const shadow = this.attachShadow({ mode: 'open' })

    const header = document.createElement('header')
    const list = document.createElement('ul')
    const item = document.createElement('li')
    const link = document.createElement('a')

    link.setAttribute('href', 'https://www.google.com.br')
    link.textContent = 'Acesse aqui'
    item.appendChild(link)
    list.appendChild(item)
    header.appendChild(list)

    shadow.appendChild(header)
  }
}

customElements.define('header-component', HeaderComponent)

export { HeaderComponent }