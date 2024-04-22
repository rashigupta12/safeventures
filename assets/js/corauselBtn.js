

document.getElementById('nav-icon3').addEventListener('click',()=>{
    document.getElementsByClassName('header')[0].classList.toggle('nav-open')
})

// corousel1 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[0].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[0].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[0].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[0].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[0].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[0].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[0].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[0].click()
    if(document.getElementsByClassName('slick-prev')[0].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[0].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[0].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[0].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[0].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[0].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[0].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[0].click()
    if(!document.getElementsByClassName('slick-prev')[0].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[0].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[0].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[0].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[0].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[0].style.color='gray';
    }
})


// corausel 1 logic ends







// corousel2 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[1].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[1].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[1].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[1].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[1].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[1].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[1].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[1].click()
    if(document.getElementsByClassName('slick-prev')[1].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[1].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[1].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[1].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[1].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[1].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[1].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[1].click()
    if(!document.getElementsByClassName('slick-prev')[1].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[1].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[1].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[1].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[1].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[1].style.color='gray';
    }
})


// corausel 2 logic ends



// corousel3 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[2].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[2].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[2].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[2].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[2].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[2].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[2].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[2].click()
    if(document.getElementsByClassName('slick-prev')[2].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[2].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[2].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[2].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[2].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[2].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[2].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[2].click()
    if(!document.getElementsByClassName('slick-prev')[2].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[2].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[2].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[2].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[2].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[2].style.color='gray';
    }
})


// corausel 3 logic ends




// corousel4 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[3].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[3].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[3].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[3].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[3].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[3].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[3].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[3].click()
    if(document.getElementsByClassName('slick-prev')[3].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[3].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[3].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[3].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[3].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[3].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[3].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[3].click()
    if(!document.getElementsByClassName('slick-prev')[3].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[3].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[3].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[3].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[3].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[3].style.color='gray';
    }
})


// corausel 4 logic ends


// corousel5 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[4].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[4].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[4].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[4].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[4].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[4].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[4].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[4].click()
    if(document.getElementsByClassName('slick-prev')[4].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[4].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[4].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[4].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[4].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[4].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[4].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[4].click()
    if(!document.getElementsByClassName('slick-prev')[4].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[4].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[4].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[4].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[4].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[4].style.color='gray';
    }
})


// corausel 5 logic ends






// corousel6 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[5].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[5].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[5].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[5].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[5].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[5].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[5].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[5].click()
    if(document.getElementsByClassName('slick-prev')[5].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[5].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[5].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[5].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[5].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[5].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[5].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[5].click()
    if(!document.getElementsByClassName('slick-prev')[5].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[5].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[5].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[5].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[5].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[5].style.color='gray';
    }
})


// corausel 6 logic ends

// corousel7 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[6].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[6].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[6].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[6].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[6].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[6].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[6].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[6].click()
    if(document.getElementsByClassName('slick-prev')[6].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[6].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[6].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[6].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[6].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[6].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[6].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[6].click()
    if(!document.getElementsByClassName('slick-prev')[6].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[6].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[6].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[6].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[6].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[6].style.color='gray';
    }
})


// corausel 7 logic ends


// corousel8 logic start







var corausel1 = document.getElementsByClassName('slick-prev')[7].classList.contains('slick-prev')

console.log(corausel1)

if(document.getElementsByClassName('slick-prev')[7].classList.contains('slick-disabled')){

    document.getElementsByClassName('corausel-bt-left')[7].style.background='lightgray'; 
    document.getElementsByClassName('corausel-bt-left')[7].style.color='gray';
}else{
    document.getElementsByClassName('corausel-bt-left')[7].style.background='green'; 
    document.getElementsByClassName('corausel-bt-left')[7].style.color='white';
}

document.getElementsByClassName('corausel-bt-left')[7].addEventListener('click',()=>{
    document.getElementsByClassName('slick-prev')[7].click()
    if(document.getElementsByClassName('slick-prev')[7].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[7].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-left')[7].style.color='gray';
    }
    if(!document.getElementsByClassName('slick-next')[7].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[7].style.background='green'; 
        document.getElementsByClassName('corausel-bt-right')[7].style.color='white';
    }
})
document.getElementsByClassName('corausel-bt-right')[7].addEventListener('click',()=>{
    document.getElementsByClassName('slick-next')[7].click()
    if(!document.getElementsByClassName('slick-prev')[7].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-left')[7].style.background='green'; 
        document.getElementsByClassName('corausel-bt-left')[7].style.color='white';
    }
    if(document.getElementsByClassName('slick-next')[7].classList.contains('slick-disabled')){

        document.getElementsByClassName('corausel-bt-right')[7].style.background='lightgray'; 
        document.getElementsByClassName('corausel-bt-right')[7].style.color='gray';
    }
})


// corausel 8 logic ends



// tools animation logic start


document.getElementsByClassName('compare-text')[0].addEventListener('click',()=>{
    document.getElementsByClassName('compare-box-container')[0].classList.toggle('compare1-open')
})
document.getElementsByClassName('compare-text')[1].addEventListener('click',()=>{
    document.getElementsByClassName('compare-box-container')[1].classList.toggle('compare1-open')
})

// tools animation logic end





