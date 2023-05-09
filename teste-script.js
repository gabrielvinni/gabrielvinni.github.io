function BTmenu() {
    const botao = document.querySelector("#botao");
    const menu = document.querySelector("#menu");
    const topo = document.querySelector('#topo');
    botao.classList.toggle("botao-aberto");
    menu.classList.toggle("menu-aberto");
    topo.classList.toggle('topo-preso');
    menu.style.transition = '.5s';
}

function BTmenuSome() {
    const botao = document.querySelector("#botao");
    const menu = document.querySelector("#menu");
    const topo = document.querySelector('#topo');
    if (window.innerWidth <= 820) {
        botao.classList.toggle('botao-aberto');
        menu.classList.toggle('menu-aberto');
        topo.classList.toggle('topo-preso');
        menu.style.transition = 'none';
    } 
    else if (topo.classList = 'topo-preso') {
        topo.classList.toggle('topo-preso');
    }
}
