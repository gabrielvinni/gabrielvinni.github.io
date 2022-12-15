function txt1() {
    if (phtml.style.display == 'block') {
        phtml.style.display = 'none'
        b1.style.animation = 'girav 400ms forwards'
        esp1.style.height = '60px'
    }else {
        phtml.style.display = 'block'
        b1.style.animation = 'gira 400ms forwards'
        esp1.style.height = '120px'
        
        pcss.style.display = 'none'
        b2.style.animation = 'girav 400ms forwards'
        esp2.style.height = '60px'

        pjs.style.display = 'none'
        b3.style.animation = 'girav 400ms forwards'
        esp3.style.height = '60px'
    }
}

function txt2() {
    if (pcss.style.display == 'block') {
        pcss.style.display = 'none'
        b2.style.animation = 'girav 400ms forwards'
        esp2.style.height = '60px'
    }else {
        pcss.style.display = 'block'
        b2.style.animation = 'gira 400ms forwards'
        esp2.style.height = '100px'

        phtml.style.display = 'none'
        b1.style.animation = 'girav 400ms forwards'
        esp1.style.height = '60px'

        pjs.style.display = 'none'
        b3.style.animation = 'girav 400ms forwards'
        esp3.style.height = '60px'
    }
}

function txt3() {
    if (pjs.style.display == 'block') {
        pjs.style.display = 'none'
        b3.style.animation = 'girav 400ms forwards'
        esp3.style.height = '60px'
    }else {
        pjs.style.display = 'block'
        b3.style.animation = 'gira 400ms forwards'
        esp3.style.height = '120px'

        phtml.style.display = 'none'
        b1.style.animation = 'girav 400ms forwards'
        esp1.style.height = '60px'

        pcss.style.display = 'none'
        b2.style.animation = 'girav 400ms forwards'
        esp2.style.height = '60px'
    }
}

function menu() {
    if(mn.style.display == 'block') {
        mn.style.display = 'none'
        barra1.style.animation = 'br1v .7s forwards'
        barra2.style.animation = 'br2v .7s forwards'
        barra3.style.animation = 'br3v .7s forwards'
        topo.style.height = '53px'
    }else {
        mn.style.display = 'block'
        barra1.style.animation = 'br1 .7s forwards'
        barra2.style.animation = 'br2 .7s forwards'
        barra3.style.animation = 'br3 .7s forwards'
        topo.style.height = '205px'
    }
}