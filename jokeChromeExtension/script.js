const hey = document.getElementById('change')

hey.addEventListener("click",function fun()
{
    fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData =>{
        const jokeText = jokeData.attachments[0].text;
        const joke = document.getElementById('jokeElement')
        joke.innerHTML = jokeText
    })
})