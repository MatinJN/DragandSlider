let fotos = [
    'Foto/image1.jpg',
    'Foto/image3.jpg',
    'Foto/image4.jpg'
]

let foto = document.querySelector('.slides img');
let prev = document.querySelector('.left');

let count = 0;
foto.src = fotos[count]

let next = document.querySelector('.right');

next.addEventListener('click',function() {
    count++;
    if(count > fotos.length - 1) {
        count = 0;
    }
    foto.src = fotos[count]
})

prev.addEventListener('click',function() {
    count--;
    if(count == -1) {
        count = fotos.length - 1;
    }
    foto.src = fotos[count]
})
function AutoPlay() {
    count++;
    if(count > fotos.length - 1) {
        count = 0;
    }
    foto.src = fotos[count]
}

setInterval(() => {
    AutoPlay();
}, 2000);


let  countdots=0;
for (let i = 0; i < fotos.length; i++) {
    let i=document.createElement("i")
    i.classList.add("fa-solid")
    i.classList.add("fa-circle")
    i.setAttribute("data-id",countdots)
    
    document.querySelector(".dots").appendChild(i)
    countdots+=1;
}


let dots=document.querySelectorAll(".dots i")

dots.forEach(dot=>{
    dot.addEventListener("click",()=>{
        count=dot.getAttribute("data-id")
        foto.src = fotos[count]
    })
})

