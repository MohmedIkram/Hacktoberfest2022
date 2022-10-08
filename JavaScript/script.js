// alert("Hello");

function newWEFeild()
{
    //alert("I am Working");
    let newNode=document.createElement("input");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add('mt-3')
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("we");
    let weAddBtnOb=document.getElementById("weAddbtn");

    weOb.insertBefore(newNode,weAddBtnOb);

}

function newACFeild()
{
  let newNode =document.createElement("input");
  newNode.classList.add("form-control");
  newNode.classList.add("acField");
  newNode.classList.add('mt-3');
  newNode.setAttribute('placeholder','Enter here');
  
  let acOb = document.getElementById("ac");
    let acAddBtnOb=document.getElementById("acAddbtn");

    acOb.insertBefore(newNode,acAddBtnOb);

}

///Generate CV 
function generateCV()
{
  //alert("I am working");

  let nameField=document.getElementById('nameField').value;
  let nameT=document.getElementById('nameT');
  nameT.innerHTML=nameField;

  let nameT2=document.getElementById('nameT2');
  nameT2.innerHTML=nameField;


  let contactField=document.getElementById('contactField').value;
  let contactT=document.getElementById('contactNoT');
  contactT.innerHTML=contactField;


  let AddressField=document.getElementById('adField').value;
  let addressT=document.getElementById('addressT');
  addressT.innerHTML=AddressField;
  
  let Lfield=document.getElementById('Lfield').value;
  let LidT=document.getElementById('LidT');
  LidT.innerHTML=Lfield;
  
  let Gfield=document.getElementById('Gfield').value;
  let GidT=document.getElementById('GidT');
  GidT.innerHTML=Gfield;

  let objectiveField=document.getElementById('objectiveField').value;
  let objectiveT=document.getElementById('objectiveT');
  objectiveT.innerHTML=objectiveField;

//Work Experince

let wes=document.getElementsByClassName('weField');
let str="";
for(let e of wes)
{
  str=str+`<li>${e.value}</li>`;
}

document.getElementById('weT').innerHTML=str;

let acs=document.getElementsByClassName('acField');
 str="";
for(let e of acs)
{
  str=str+`<li>${e.value}</li>`;
}

document.getElementById('acT').innerHTML=str;

let file=document.getElementById('imgField').files[0];
//console.log(file);
if(file==null) {
  alert("Please insert the image");
}
console.log("Hello Everyone")

let reader=new FileReader()
reader.readAsDataURL(file);



reader.onloadend=function()
{
   document.getElementById("imgT").src=reader.result;
  console.log(reader.result);
}

//SET IMAGE IN TEMPLATE

document.getElementById('cv-form').style.display='none'
document.getElementById('cv-template').style.display='block'

}
 
function printCV()
{
  window.print();
}
