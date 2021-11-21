// Das einzige Wert, der von dem Benutzer definiert ist:
const h = 20

// der Rest ist automatisch von sich selbst ausgerechnet:
let mh;
let sh;
let th;

function getColorList (hue, type){

    if(type == 'monochromatic'){
        mh = hue

    } else if(type == 'complementary'){
        mh = hue
        sh = hue + 180
        
    } else if(type == 'triadic'){
        mh = hue
        sh = hue + 120
        th = hue + 240
    }
}


getColorList(h, 'triadic')

//const primaryColor = `hsl(${h}, ${s5}%, ${l5}%)`


function color (h, p, q){

    let s = p * 13
    let l = q * 13
    return `hsl(${h}, ${s}%, ${l}%)`

}

/* const title = document.querySelector('h1')
const primaryColor = color(mh, 4, 4)
title.style.color = primaryColor */