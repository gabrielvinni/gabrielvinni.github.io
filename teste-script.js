const btnMobile = document.querySelector("#btn-mobile")
btnMobile.addEventListener('click', abrirMenu)

function abrirMenu() {
    const nav = document.querySelector("#nav")
    btnMobile.classList.toggle('btn-animation')
    nav.classList.toggle('ativo')
}
