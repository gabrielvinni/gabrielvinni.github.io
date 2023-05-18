const btnMobile = document.querySelector("#btn-mobile");
btnMobile.addEventListener('click', abrirMenu);

function abrirMenu() {
    btnMobile.classList.toggle('btn-animation')

    const nav = document.querySelector("#nav");
    nav.classList.toggle('ativo')
}
