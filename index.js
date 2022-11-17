let heartBtn1 = document.querySelector(".heart-btn")
let heartBtn2 = document.querySelector(".heart-btn2")
let heartBtn3 = document.querySelector(".heart-btn3")
let likes1 = document.querySelector(".likes1")
let likes2 = document.querySelector(".likes2")
let likes3 = document.querySelector(".likes3")

likes1.innerHTML = "21,245 likes"
likes2.innerHTML = "9,001 likes"
likes3.innerHTML = "8,999 likes"


function changeImg1(){
    if(heartBtn1.src = "images/icon-heart.png"){
        heartBtn1.setAttribute("src","images/filled-heart.png")
        likes1.innerHTML = "21,246 likes"
    }
}

function changeImg2(){
    if(heartBtn2.src = "images/icon-heart.png"){
        heartBtn2.setAttribute("src","images/filled-heart.png")
        likes2.innerHTML = "9,002 likes"
    }
}

function changeImg3(){
    if(heartBtn3.src = "images/icon-heart.png"){
        heartBtn3.setAttribute("src","images/filled-heart.png")
        likes3.innerHTML = "9,000 likes"
    }
}

function changeImgBack1(){
    if(heartBtn1.src = "images/filled-heart.png"){
        heartBtn1.setAttribute("src", "images/icon-heart.png")
        likes1.innerHTML = "21,245 likes"
    }
}

function changeImgBack2(){
    if(heartBtn2.src = "images/filled-heart.png"){
        heartBtn2.setAttribute("src", "images/icon-heart.png")
        likes2.innerHTML = "9,001 likes"
    }
}

function changeImgBack3(){
    if(heartBtn3.src = "images/filled-heart.png"){
        heartBtn3.setAttribute("src", "images/icon-heart.png")
        likes3.innerHTML = "8,999 likes"
    }
}
