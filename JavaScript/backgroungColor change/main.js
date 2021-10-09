const characters = "ABCDEF0123456789";
function generateColor(length) {
  let result = "#";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function showColorHex() {
  document.querySelector("span").innerHTML = generateColor(6);
}
function putColorBody() {
  document.body.style.backgroundColor = generateColor(6);
}

setInterval(putColorBody, 2000);
setInterval(showColorHex, 2000);
