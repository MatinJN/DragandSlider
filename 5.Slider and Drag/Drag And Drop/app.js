let dropArea = document.querySelector('#DropArea');
let dragItem = document.querySelectorAll('#DragArea .box');
let drag = document.querySelector('#DragArea')


dropArea.addEventListener('dragover',function(e) {
    e.preventDefault();
    this.style.border = '3px dashed blue'
})



dropArea.addEventListener('dragleave',function() {
    this.style.border = '3px solid blue'
})


for(let i=0;i<dragItem.length;i++) {
    dragItem[i].addEventListener('dragstart',function(e) {
    e.dataTransfer.setData('param',this.id)
    })
}

dropArea.addEventListener('drop',function(e) {
    let index = e.dataTransfer.getData('param');
    let div = document.getElementById(index)
    dropArea.appendChild(div)
    if (drag.childElementCount == 0){
        let alert = ''
        alert =  `<div class="alert alert-danger" role="alert ">
        This is a danger alert—check it out!
        </div>`
        drag.innerHTML = alert;
    }
})


