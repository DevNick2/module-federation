import './components/Home'

(async function () {
  const module = await import('app1/Header')

  const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

  const app = document.getElementById('app')

  const header = document.createElement(kebabize(module.HeaderComponent.name))

  app.appendChild(header)
})()