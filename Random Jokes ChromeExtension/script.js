fetch("https://icanhazdadjoke.com/slack")
    .then(data=>data.json())
    .then(Jokedata=>{
        let joketext=Jokedata.attachments[0].text;
        let joke=document.getElementById("jokestext");
        joke.innerHTML=joketext;

    })