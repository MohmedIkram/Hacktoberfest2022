var input = document.getElementById("paraThreeInput");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function opSelect() {
  var density = 7848.4223783;
  var material = document.getElementById("material").value;
  if (material == "1") {
    density = 7848.4223783;
  } else if (material == "2") {
    density = 2717.12379945;
  } else if (material == "3") {
    density = 2828.57142445;
  } else if (material == "4") {
    density = 2800.31710465;
  } else if (material == "5") {
    density = 2800.31710465;
  } else if (material == "6") {
    density = 2772.84761195;
  } else if (material == "7") {
    density = 2745.37811925;
  } else if (material == "8") {
    density = 2717.12379945;
  } else if (material == "9") {
    density = 2689.6543521;
  } else if (material == "10") {
    density = 2633.9305396;
  } else if (material == "11") {
    density = 2662.1848594;
  } else if (material == "12") {
    density = 2662.1848594;
  } else if (material == "13") {
    density = 2717.12379945;
  } else if (material == "14") {
    density = 2717.12379945;
  } else if (material == "15") {
    density = 2800.31710465;
  } else if (material == "16") {
    density = 2800.31710465;
  } else if (material == "17") {
    density = 2828.57142445;
  } else if (material == "18") {
    density = 8083.8750433;
  } else if (material == "19") {
    density = 7926.90658484;
  } else if (material == "20") {
    density = 8884.4141043;
  } else if (material == "21") {
    density = 8829.47516425;
  } else if (material == "22") {
    density = 8798.0814907;
  } else if (material == "23") {
    density = 8437.0540408;
  } else if (material == "24") {
    density = 8413.5087743;
  } else if (material == "25") {
    density = 8437.0540408;
  } else if (material == "26") {
    density = 7942.6034443;
  } else if (material == "27") {
    density = 7942.6034443;
  } else if (material == "28") {
    density = 8138.81398335;
  } else if (material == "29") {
    density = 7942.6034443;
  } else if (material == "30") {
    density = 8083.8750733;
  } else if (material == "31") {
    density = 8884.4141043;
  } else if (material == "32") {
    density = 7942.6034443;
  } else if (material == "33") {
    density = 1797.2887064;
  } else if (material == "34") {
    density = 1852.22764645;
  } else if (material == "35") {
    density = 4512.84285165;
  } else if (material == "36") {
    density = 6372.9189505;
  } else if (material == "37") {
    density = 7149.91279035;
  } else if (material == "38") {
    density = 7149.91279035;
  } else if (material == "39") {
    density = 8507.6898403;
  } else if (material == "40") {
    density = 8594.02249925;
  } else if (material == "41") {
    density = 8978.5951703;
  } else if (material == "42") {
    density = 10226.4943401;
  } else if (material == "43") {
    density = 10509.03753815;
  } else if (material == "44") {
    density = 11364.51558455;
  } else if (material == "45") {
    density = 16638.6554619;
  } else if (material == "46") {
    density = 19322.8158883;
  } else if (material == "47") {
    density = 19322.8158883;
  }

  return density;
}

function shapeSelect() {
  var shapeValue = "1";
  shapeValue = document.getElementById("shape").value;
  if (shapeValue == 1) {
    document.getElementById("rowOne").innerHTML = "Diameter";
    document.getElementById("rowTwo").innerHTML = "";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "round.jpg";
    document.getElementById("image2").src = "round.jpg";
  }
  if (shapeValue == 2) {
    document.getElementById("rowOne").innerHTML = "Width";
    document.getElementById("rowTwo").innerHTML = "";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "square.jpg";
    document.getElementById("image2").src = "square.jpg";
  }
  if (shapeValue == 3) {
    document.getElementById("rowOne").innerHTML = "Thickness";
    document.getElementById("rowTwo").innerHTML = "Width";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "rectangle.jpg";
    document.getElementById("image2").src = "rectangle.jpg";
  }
  if (shapeValue == 4) {
    document.getElementById("rowOne").innerHTML = "Diameter";
    document.getElementById("rowTwo").innerHTML = "";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "hexagonal.jpg";
    document.getElementById("image2").src = "hexagonal.jpg";
  }
  if (shapeValue == 5) {
    document.getElementById("rowOne").innerHTML = "Diameter";
    document.getElementById("rowTwo").innerHTML = "";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "octagonal.jpg";
    document.getElementById("image2").src = "octagonal.jpg";
  }
  if (shapeValue == 6) {
    document.getElementById("rowOne").innerHTML = "Thickness";
    document.getElementById("rowTwo").innerHTML = "Width";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "sheet.jpg";
    document.getElementById("image2").src = "sheet.jpg";
  }
  if (shapeValue == 7) {
    document.getElementById("rowOne").innerHTML = "Thickness";
    document.getElementById("rowTwo").innerHTML = "Width";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "plate.jpg";
    document.getElementById("image2").src = "plate.jpg";
  }
  if (shapeValue == 8) {
    document.getElementById("rowOne").innerHTML = "Outer Diameter";
    document.getElementById("rowTwo").innerHTML = "Wall";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "tubular.jpg";
    document.getElementById("image2").src = "tubular.jpg";
  }
  if (shapeValue == 9) {
    document.getElementById("rowOne").innerHTML = "Outer Diameter";
    document.getElementById("rowTwo").innerHTML = "Inner Diameter";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "ring.jpg";
    document.getElementById("image2").src = "ring.jpg";
  }
  if (shapeValue == 10) {
    document.getElementById("rowOne").innerHTML = "Outer Diameter";
    document.getElementById("rowTwo").innerHTML = "Wall";
    document.getElementById("rowThree").innerHTML = "Length";
    document.getElementById("image1").src = "pipe.jpg";
    document.getElementById("image2").src = "pipe.jpg";
  }
  return shapeValue;
}

function calculate(shapeSelect, opSelect) {
  var q = document.getElementById("quantity").value;
  var shape = shapeSelect();
  var density = opSelect();
  var paraOne = document.getElementById("paraOneInput").value;
  var paraTwo = document.getElementById("paraTwoInput").value;
  var paraThree = document.getElementById("paraThreeInput").value;
  var unitOne = document.getElementById("unitSelect1").value;
  var unitTwo = document.getElementById("unitSelect2").value;
  var unitThree = document.getElementById("unitSelect3").value;
  var answer;
  if (unitOne == "mm") {
    paraOne *= 0.001;
  } else if (unitOne == "m") {
    paraOne *= 1;
  } else if (unitOne == "cm") {
    paraOne *= 0.01;
  } else if (unitOne == "ft") {
    paraOne *= 0.3048;
  } else if (unitOne == "yd") {
    paraOne *= 0.9144;
  } else if (unitOne == "in") {
    paraOne *= 0.0254;
  }
  if (unitTwo == "mm") {
    paraTwo *= 0.001;
  } else if (unitTwo == "m") {
    paraTwo *= 1;
  } else if (unitTwo == "cm") {
    paraTwo *= 0.01;
  } else if (unitTwo == "ft") {
    paraTwo *= 0.3048;
  } else if (unitTwo == "yd") {
    paraTwo *= 0.9144;
  } else if (unitTwo == "in") {
    paraTwo *= 0.0254;
  }
  if (unitThree == "mm") {
    paraThree *= 0.001;
  } else if (unitThree == "m") {
    paraThree *= 1;
  } else if (unitThree == "cm") {
    paraThree *= 0.01;
  } else if (unitThree == "ft") {
    paraThree *= 0.3048;
  } else if (unitThree == "yd") {
    paraThree *= 0.9144;
  } else if (unitThree == "in") {
    paraThree *= 0.0254;
  }
  if (q < 1) {
    alert("quantity cannot be negative!");
  }
  if (shape == "1") {
    answer = (3.14159 * paraThree * paraOne * paraOne * density * q) / 4;
  } else if (shape == "2") {
    answer = paraOne * paraOne * paraThree * density * q;
  } else if (shape == "3") {
    answer = paraOne * paraTwo * paraThree * density * q;
  }
  //else if (shape == "4") {
  //answer = paraOne * paraOne * paraThree * density * 2.5980762 * q;
  //} else if (shape == "5") {
  // answer = paraOne * paraOne * paraThree * density * 4.8284271248 * q;
  //  }
  else if (shape == "6") {
    answer = paraOne * paraTwo * paraThree * density * q;
  } else if (shape == "7") {
    answer = paraOne * paraTwo * paraThree * density * q;
  } else if (shape == "8") {
    answer =
      (3.14159 *
        paraThree *
        (2 * paraOne * paraTwo - paraTwo * paraTwo) *
        density *
        q) /
      4;
  } else if (shape == "9") {
    answer =
      (3.14159 *
        paraThree *
        (paraOne * paraOne - paraTwo * paraTwo) *
        density *
        q) /
      4;
  } else if (shape == "10") {
    answer =
      3.14159 *
      paraThree *
      (paraOne * paraTwo - paraTwo * paraTwo) *
      density *
      q;
  }
  var element = document.getElementById("demo");
  element.classList.add("paddingafter");
  document.getElementById("demo").innerHTML =
    "CALCULATED WEIGHT : " + "<weight>" + answer + "</weight>" + " Kg";
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
