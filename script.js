var mn = 0
var ht = 0
var cs = 0
var j = 0

function txt1() {
    if (ht == 1) {
        ht = 0
        b1.style.animation = 'girav .4s forwards'
        esp1.style.height = '60px'
    }else {
        ht = 1
        b1.style.animation = 'gira .4s forwards'
        esp1.style.height = '120px'
        
        cs = 0
        b2.style.animation = 'girav .4s forwards'
        esp2.style.height = '60px'

        j = 0
        b3.style.animation = 'girav .4s forwards'
        esp3.style.height = '60px'
    }
}

function txt2() {
    if (cs == 1) {
        cs = 0
        b2.style.animation = 'girav .4s forwards'
        esp2.style.height = '60px'
    }else {
        cs = 1
        b2.style.animation = 'gira .4s forwards'
        esp2.style.height = '100px'

        ht = 0
        b1.style.animation = 'girav .4s forwards'
        esp1.style.height = '60px'

        j = 0
        b3.style.animation = 'girav .4s forwards'
        esp3.style.height = '60px'
    }
}

function txt3() {
    if (j == 1) {
        j = 0
        b3.style.animation = 'girav .4s forwards'
        esp3.style.height = '60px'
    }else {
        j = 1
        b3.style.animation = 'gira .4s forwards'
        esp3.style.height = '120px'

        ht = 0
        b1.style.animation = 'girav .4s forwards'
        esp1.style.height = '60px'

        cs = 0
        b2.style.animation = 'girav .4s forwards'
        esp2.style.height = '60px'
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