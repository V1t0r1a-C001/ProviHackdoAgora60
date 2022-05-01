const menu1 = document.querySelector('#menu1')
const dadosDoPerfil = document.querySelector('#dadosDoPerfil')

const menu2 = document.querySelector('#menu2')
const perfilEmpresa = document.querySelector('#perfilEmpresa')

const menu3 = document.querySelector('#menu3')
const histRelatorio = document.querySelector('#histRelatorio')

const menu4 = document.querySelector('#menu4')
const newrelatorio = document.querySelector('#newrelatorio')

const menu5 = document.querySelector('#menu5')
const agendar = document.querySelector('#agendar')

const btn_back = document.querySelector('#btn_back')
const btn_next = document.querySelector('#btn_next')

let selecionada = dadosDoPerfil

menu1.addEventListener('click', () => mudarPaginaDinamica(dadosDoPerfil))

menu2.addEventListener('click', () => mudarPaginaDinamica(perfilEmpresa))

menu3.addEventListener('click', () => mudarPaginaDinamica(histRelatorio))

menu4.addEventListener('click', () => mudarPaginaDinamica(newrelatorio))

menu5.addEventListener('click', () => mudarPaginaDinamica(agendar))



const mudarPaginaDinamica = (id) => {
    selecionada.style.display = "none"
    id.style.display = "flex"
    selecionada = id
}