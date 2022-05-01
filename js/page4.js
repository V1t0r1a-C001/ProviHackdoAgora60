var menu1 = document.querySelector('#menu1')
var dadosDoPerfil = document.querySelector('#dadosDoPerfil')

var menu2 = document.querySelector('#menu2')
var perfilEmpresa = document.querySelector('#perfilEmpresa')

var menu3 = document.querySelector('#menu3')
var histRelatorio = document.querySelector('#histRelatorio')

var menu4 = document.querySelector('#menu4')
var newrelatorio = document.querySelector('#newrelatorio')

var menu5 = document.querySelector('#menu5')
var agendar = document.querySelector('#agendar')

var selecionada = dadosDoPerfil

menu1.addEventListener('click', ()=> mudarPaginaDinamica(dadosDoPerfil))
                         
menu2.addEventListener('click', ()=> mudarPaginaDinamica(perfilEmpresa))

menu3.addEventListener('click', ()=> mudarPaginaDinamica(histRelatorio))

menu4.addEventListener('click', ()=> mudarPaginaDinamica(newrelatorio))

menu5.addEventListener('click', ()=> mudarPaginaDinamica(agendar))


const mudarPaginaDinamica = (id) => {
    selecionada.style.display = "none"
    id.style.display = "flex"
    selecionada = id
}