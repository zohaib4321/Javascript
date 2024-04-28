// How to Create Element:

// let div = document.createElement('div')
// console.log(div)
// div.className = 'main'
// div.id = Math.round(Math.random() * 10 + 1)
// div.setAttribute('title','generatedTitle')
// div.innerText = 'Create an element'
// let addText = document.createTextNode('Create an element')
// div.appendChild(addText)
// document.body.appendChild(div)

// Create:

function addLanguage(langName) {
    const li = document.createElement('li')
    let addText = document.createTextNode(`${langName}`)
    li.appendChild(addText)
    document.querySelector('.language').appendChild(li)
}

// addLanguage('php')

// Optimized Way

function addLanguage(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${langName}`))
    document.querySelector('.language').appendChild(li)
}
// addLanguage('Python')

// Edit:

const secondLanguage = document.querySelector('li:nth-child(2)')
secondLanguage.innerHTML = 'Swift'
let li = document.createElement('li')
li.textContent = 'Swift'
// secondLanguage.replaceWith(li)

const firstLanguage = document.querySelector('li:first-child')
// firstLanguage.outerHTML = '<li>TypeScript</li>'

// Remove:

const lastLanguage = document.querySelector('li:last-child')
// lastLanguage.remove()