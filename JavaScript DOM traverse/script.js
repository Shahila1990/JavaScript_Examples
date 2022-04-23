


// const grandparent = document.getElementById('gp')
// changeColor(grandparent)

// const parents = Array.from(document.getElementsByClassName("parent"))
// parents.forEach(changeColor)

// const grandparent = document.querySelector("#gp")
// changeColor(grandparent)

// const parents = document.querySelectorAll('.parent')
// parents.forEach(changeColor)

// const grandparent = document.querySelector('.grandparent')
// const parents = Array.from(grandparent.children)
// const parentOne = parents[0]
// const children = parentOne.children

// changeColor(children[0])


// const grandparent = document.querySelector('.grandparent')
// const child = grandparent.querySelector('.child')
// changeColor(child)

// const grandparent = document.querySelector('.grandparent')
// const children = grandparent.querySelectorAll('.child')

// children.forEach(changeColor)

// const childOne = document.querySelector('.child')
// const parent = childOne.parentElement
// const grandparent = parent.parentElement
// changeColor(grandparent)

const childOne =document.querySelector('#child-one')
changeColor(grandparent)
const grandparent = childOne.closest('.grandparent')

function changeColor(element){
    element.style.backgroundColor="#333"
}