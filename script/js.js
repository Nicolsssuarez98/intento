const goTo = id => {
  let top = document.getElementById(id).offsetTop - 20
  window.scroll({
      top,
      left: 0,
      behavior: 'smooth'
  })
}
const addListener = (handler, el) => document.getElementById(handler).addEventListener('click', () => goTo(el))

addListener('goInformationArticle', 'informationArticle')
addListener('goAcerca', 'acercaDe')
addListener('goProductos', 'productosUni')
addListener('goPrivacidad', 'privacidadUni')
addListener('goTerminos', 'terminosUni')
addListener('goAyuda', 'ayudaUni')




