console.log("Website is active");

showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  //console.log(addTxt.value);
  //console.log(addTitle.value);
  if(addTxt.value == "" || addTitle.value =="")
  {
    alert("Type something");
  }
  else{
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title : addTitle.value,
    text : addTxt.value
  }
  notesObj.push(myObj);
  console.log(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
  }
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  
  notesObj.forEach(function (element, index) {
    const d = new Date();
    //console.log(d);
    html += `
  
<div id=""notecard" class="notecard mx-2 my-2" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">${element.title}</h5>

<p class="card-text">${element.text}</p>
<button id="${index}" onclick="editNotes(this.id)" class="edit${index} btn btn-primary" style="display:hidden;">Edit note</button>

<button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary mx-3">Delete note</button>
</div>
</div>
    `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "Nothing to show, you have no notes :)";
  }
}

//Delete nodes
function deleteNotes(index) {
  console.log("I am deleting it", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function (e) {
  let inputVal = search.value.toLowerCase();

  noteCards = document.getElementsByClassName("notecard");
  Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
    console.log(cardTxt);
    if(cardTxt.includes(inputVal))
    {
      element.style.display = "block";
    }
    else{
      element.style.display = "none";
    }
    
  })

  console.log("Input event fired", inputVal);
});

function editNotes(index){
  console.log("I am editing",index);
  
  notesArr = document.getElementsByClassName("notecard");
  let target = notesArr[index];
  let x = target.getElementsByTagName("p")[0];
  //let y = `<textarea class="form-control" id="addTxt" rows="3" style="width: 18rem;"></textarea>`;
  let y=document.createElement("textarea");
  y.id = 'addTxt';
  y.className = 'form-control my-3';
  y.style = 'width: 18rem;';
  let g = x.innerText;
  let txt = document.createTextNode(g);
  y.appendChild(txt); 
  x.replaceWith(y);

  y.addEventListener("blur",function(){
    console.log("triggered");
    let dc=document.createElement("p");
    dc.id = 'cardTxt';
    dc.className = 'card-text';
    let g = y.value;
    let txt = document.createTextNode(g);
    dc.appendChild(txt); 
    console.log(dc,g);
    y.replaceWith(dc);

    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj[index].text=g;
  console.log(notesObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));




  })
  

}
