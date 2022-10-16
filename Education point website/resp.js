burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navlist')
rightNav=document.querySelector('.rightnav')


burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})