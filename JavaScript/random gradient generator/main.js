// generating a random color stops

let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
let background1 = "#";
let background2 = "#";
for(let i =0; i < 6 ; i++){
  let index1 = Math.floor(Math.random() * arr.length)
  let index2 = Math.floor(Math.random() * arr.length)
  background1+= arr[index1];
  background2+= arr[index2]
}

gradientRendering();

/// import the pickr library

let pickerOptions = {
    el: '.color-p-1',
    theme: 'monolith', // or 'monolith', or 'nano'

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            cmyk: true,
            input: true,
        }
    }
};
let firstColor = Pickr.create(pickerOptions);
let secondColor = Pickr.create(pickerOptions);

firstColor.on('change', (color, source, instance) => {
    background1 = color.toHEXA().toString();
    gradientRendering();
});

secondColor.on('change', (color, source, instance) => {
    background2 = color.toHEXA().toString();
    gradientRendering();
});

function gradientRendering (){
  let backgroundGradient = document.querySelector(".background-gradient");
backgroundGradient.style.backgroundImage = `linear-gradient(to right , ${background1} , ${background2})`;
document.querySelector(".value-1").innerHTML = background1;
document.querySelector(".value-2").innerHTML = background2;
document.querySelector(".color-1").style.backgroundColor = background1;
document.querySelector(".color-2").style.backgroundColor = background2;
}
