function CatAction(){
    var sourceOfPicture = "media/NationalGeographic_2572187_square.webp";
    var img = document.getElementById('image');
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
};

function DogAction(){
    var sourceOfPicture = "media/domestic-dog_thumb_4x3.webp";
    var img = document.getElementById("image");
    img.src = sourceOfPicture.replace('90x90', '225x225');
    img.style.display = "block";
};