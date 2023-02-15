var mn = 0


function mudou_tamanho() {
    if (window.innerWidth >= 481){
        topo.style.height = '53px'
        mn = 0
        barra1.style.animation = 'br1v .4s forwards'
        barra2.style.animation = 'br2v .4s forwards'
        barra3.style.animation = 'br3v .4s forwards'
    }
}

function menu() {
    if(mn == 1) {
        mn = 0
        barra1.style.animation = 'br1v .4s forwards'
        barra2.style.animation = 'br2v .4s forwards'
        barra3.style.animation = 'br3v .4s forwards'
        topo.style.height = '53px'
    }else {
        mn = 1
        barra1.style.animation = 'br1 .4s forwards'
        barra2.style.animation = 'br2 .4s forwards'
        barra3.style.animation = 'br3 .4s forwards'
        topo.style.height = '215px'
    }
}