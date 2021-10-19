let stark1 = [
    "https://www.indiewire.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-07-at-3.44.30-PM.png?w=771",
    "https://media.vanityfair.com/photos/558abba4320a56cf42417570/master/pass/robert-downey-jr-the-avengers.jpg",
    "https://i.zoomtventertainment.com/story/Tropic_Thunder_Robert_Downey_Jr.jpg?tr=w-560,h-292,fo-top",
    "https://youthincmag.com/wp-content/uploads/2017/04/robert.jpg",
    "https://caknowledge.com/wp-content/uploads/2021/03/Robert-Downey-Jr.-Net-Worth.jpeg"
];
let stark = [
    "https://media-exp1.licdn.com/dms/image/C5603AQFezAj4-ILE0Q/profile-displayphoto-shrink_800_800/0/1625322513249?e=1639612800&v=beta&t=pF1qwV7HwxMkXHqFYNQ_vlNe3xcXv4pMINtDoTEkTWk"
];

let star=[
    "https://im.rediff.com/movies/2021/sep/17spotted1.jpg",
    "https://i.pinimg.com/originals/5d/69/2e/5d692e1a3dfad04a02d6ca7880bd7fd2.jpg",
    "https://i.pinimg.com/736x/c1/52/ae/c152aec9b480d327fbfd2a592a2fadd4.jpg",
    "https://im.rediff.com/money/2020/feb/03disha-patani4.jpg",
    "https://m.media-amazon.com/images/M/MV5BZmM3YTg2ZjUtNWMwMi00NWE2LWE1YmMtYWM1ZDViNmYzOWRkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR83,0,630,1200_AL_.jpg",
    "https://images.hindustantimes.com/img/2021/06/03/1600x900/Screenshot_2021-06-03_at_1.32.04_PM_1622708681866_1622708689492.png",
    "https://images.news18.com/ibnlive/uploads/2021/03/1615091703_53082639_314919832712330_7070368263179757941_n.jpg?impolicy=website&width=0&height=0",
    "https://www.pinkvilla.com/files/styles/gallery-section/public/Disha%20Patani%20Hot%20and%20Sexy%20Photos%20%282%29.jpg?itok=sxVX4ktW",  
]


window.onload=()=>{
    let b=stark.length;
    const imgs=document.getElementsByTagName("img");
    for(let i=0;i<imgs.length;i++){
        let random=Math.floor(Math.random()*b);
        imgs[i].src = stark[random];
    }
}