document.getElementsByClassName("product-preview")[0].addEventListener('click',()=>{
    document.getElementById('slick-slide-control10').click()
    document.getElementsByClassName("product-preview")[0].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"

    

})
document.getElementsByClassName("product-preview")[1].addEventListener('click',()=>{
    document.getElementById('slick-slide-control11').click()
    document.getElementsByClassName("product-preview")[1].style.borderColor="green"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
})
document.getElementsByClassName("product-preview")[2].addEventListener('click',()=>{
    document.getElementById('slick-slide-control12').click()
    document.getElementsByClassName("product-preview")[2].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
})
document.getElementsByClassName("product-preview")[3].addEventListener('click',()=>{
    document.getElementById('slick-slide-control13').click()
    document.getElementsByClassName("product-preview")[3].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
})


if($("#slick-slide-control10").parent()[0].classList.contains('slick-active')){
        
    document.getElementsByClassName("product-preview")[0].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"


}else if($("#slick-slide-control11").parent()[0].classList.contains('slick-active')){
    
    document.getElementsByClassName("product-preview")[1].style.borderColor="green"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
}else if($("#slick-slide-control12").parent()[0].classList.contains('slick-active')){
    
    document.getElementsByClassName("product-preview")[2].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
}else if($("#slick-slide-control13").parent()[0].classList.contains('slick-active')){
    
    document.getElementsByClassName("product-preview")[3].style.borderColor="green"
    document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
    document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
}

document.getElementById('product-corousel-container').onmouseup =()=>{

    if($("#slick-slide-control10").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[0].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"


    }else if($("#slick-slide-control11").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[1].style.borderColor="green"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
    }else if($("#slick-slide-control12").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[2].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
    }else if($("#slick-slide-control13").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[3].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    }
    
}

document.getElementById('product-corousel-container').ontouchend =()=>{

    if($("#slick-slide-control10").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[0].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"


    }else if($("#slick-slide-control11").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[1].style.borderColor="green"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
    }else if($("#slick-slide-control12").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[2].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[3].style.borderColor="rgb(236,236,236)"
    }else if($("#slick-slide-control13").parent()[0].classList.contains('slick-active')){
        
        document.getElementsByClassName("product-preview")[3].style.borderColor="green"
        document.getElementsByClassName("product-preview")[1].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[2].style.borderColor="rgb(236,236,236)"
        document.getElementsByClassName("product-preview")[0].style.borderColor="rgb(236,236,236)"
    }
    
}