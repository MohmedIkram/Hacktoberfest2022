var inputField = document.getElementById('inputField')
var addToDo = document.getElementById('addToDo')
var toDoContainer = document.getElementById('toDoContainer')

addToDo.addEventListener('click',function(){
    var data = inputField.value
    var paragraph = document.createElement('p')    
    paragraph.innerText = data
    paragraph.classList.add('paragraph-styling')
    toDoContainer.append(paragraph)
    inputField.value = ''

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
})