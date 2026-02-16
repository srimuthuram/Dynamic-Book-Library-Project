//selecting popupbox and overlay
var over=document.querySelector(".overlay")
var box=document.querySelector(".popupbox")
var addbtn=document.querySelector(".addbutton")

addbtn.addEventListener("click",function(){
    over.style.display="block"
    box.style.display="block"
})
var cancel=document.getElementById("cancelpopup")

//selecting cancel button
cancel.addEventListener("click",function(){
    over.style.display="none"
    box.style.display="none"
})


//selecting container , addbook ,booktitle,bookauthor,description

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var description=document.getElementById("description")

addbook.addEventListener("click",function(){
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
container.append(div)
 over.style.display="none"
box.style.display="none"
})
function deletebook(event){

    event.target.parentElement.remove()
}
