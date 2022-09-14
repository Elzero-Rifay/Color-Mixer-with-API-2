changeColor();

function changeColor() {
  const red =   document.getElementById("red").value;
  const blue =  document.getElementById("green").value;
  const green = document.getElementById("blue").value;

  const color = convert(parseInt(red), parseInt(green), parseInt(blue));

  document.body.style.backgroundColor = color;
  document.getElementById("resultInHexa").innerHTML = " " + color;
}

function convert(red, green, blue) {
  let hexRed = red.toString(16);
  let hexBlue = blue.toString(16);
  let hexGreen = green.toString(16);

  prefixHex(hexRed);
  prefixHex(hexGreen);
  prefixHex(hexBlue);

  return "#" + prefixHex(hexRed) + prefixHex(hexBlue) + prefixHex(hexGreen);
}

function prefixHex(hex) {
  if (hex.length < 2) {
    return "0" + hex;
  } else {
    return hex;
  }
}

document.getElementById("myBtn").addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => {
      console.log(response.status);
      console.log(response.ok);

      return response.json();
    })
    .then((data) => {
      console.log(data.color);
      console.log(data);

      setColor(data.rgb);
      document.body.style.backgroundColor = data.color;
      document.getElementById("resultInHexa").innerHTML = " " + data.color;
    });
});

function setColor({ r, g, b }) {
  document.getElementById('red').value = r;
  document.getElementById('green').value = g;
  document.getElementById('blue').value = b;
  
}

document.getElementById('red').addEventListener("input", changeColor);
document.getElementById('green').addEventListener("input", changeColor);
document.getElementById('blue').addEventListener("input", changeColor);
