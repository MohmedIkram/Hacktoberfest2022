document.body.style.background=`url(.//images/galaxy.gif)`
let mass = document.querySelector('#mass')
let select = document.querySelector('select')
let button = document.querySelector('.calc')
const space = {
    mercury:{
        gravity:0.38,
        image:"./images/mercury.png"
    },
    venus:{
        gravity:0.91,
        image:"./images/venus.png"
    },
    earth:{
        gravity:1.0,
        image:"./images/earth.png"
    },
    mars:{
        gravity:0.38,
        image:"./images/mars.png"
    },
    jupiter:{
        gravity:2.34,
        image:"./images/jupiter.png"
    },
    saturn:{
        gravity:0.93,
        image:"./images/saturn.png"
    },
    uranus:{
        gravity:0.92,
        image:"./images/uranus.png"
    },
    neptune:{
        gravity:1.12,
        image:"./images/neptune.png"
    }
}
for (const i in space) {
  let option = document.createElement('option')
  option.textContent=i.toUpperCase()
  option.value=i
  select.add(option)
}
let flex =document.querySelector('.fle')
let planetdescription = document.querySelector('#desc')
let pimage = document.querySelector('.image')
let planetimage = document.querySelector('.pimage')
button.addEventListener('click',()=>{
    let n = mass.value
    let pat = /[a-zA-z]/
    if(mass.value===''||select.value==='none'){
        if(mass.value==='' ){
planetdescription.textContent=`Mass is Required`
planetdescription.classList.add('description')
pimage.removeChild(planetimage)
        }
        else if(select.value==='none'){
            planetdescription.textContent='please select a planet'
            planetdescription.classList.add('description')
            pimage.removeChild(planetimage)
        } 
        
    }
    else if(pat.test(n)){
        planetdescription.textContent=`Mass is Required`
planetdescription.classList.add('description')
pimage.removeChild(planetimage)
    }
 else{
    planetdescription.textContent=''
pimage.append(planetimage)
planetimage.setAttribute('src',space[select.value.toLowerCase()].image)
planetdescription.classList.add('description')
let description = document.createElement('div')
description.textContent=`The weight of object on ${select.value}`
description.style.marginBottom='20px'
let weightvalue = document.createElement('div')
weightvalue.style.height='150px'
weightvalue.style.width='150px'
weightvalue.textContent=`${(space[select.value.toLowerCase()].gravity*mass.value).toFixed(2)}N`
weightvalue.style.borderRadius='150px'
weightvalue.style.color='white'
weightvalue.style.backgroundColor="black"
weightvalue.className='we'
planetdescription.append(description)
planetdescription.appendChild(weightvalue)

 }
})