let btn = document.querySelector('.btn')
let x = document.querySelector('.cont')
let inp = document.querySelector('.inp')

let arr = []

btn.addEventListener('click',function(){
    let para = document.createElement('div')
    para.setAttribute('class','para')
    x.append(para)
    para.innerHTML  = `
    <p>${inp.value}</p>
    <button class="del">Delete</button>
    <button class="edit">Edit</button>
    `
})