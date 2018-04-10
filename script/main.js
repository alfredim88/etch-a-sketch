
const container = document.querySelector('#container');
const content = document.createElement('div');
const pallet = document.createElement('div');
const colorsContainer = document.createElement('div');
const clearDiv = document.createElement('div');
const clearP = document.createElement('p');
var color = 'black';
var colors = {0:'black', 1:'grey', 2:'red', 3:'green', 4:'yellow', 5:'orange', 6:'MediumOrchid', 7:'blue', 8:'LightSkyBlue', 9:'white'};

container.style.cssText = 'width: 604px; height: auto; border: 5px solid black; display:  flex; flex-wrap: wrap;';
content.style.cssText = 'width: 400px; height: 400px; cursor: crosshair; border: 1px solid black; display: flex; flex-wrap: wrap;';
container.appendChild(content);
pallet.style.cssText = 'width: 200px; height: 400px; border: 1px solid black; display: inline-block;'
container.appendChild(pallet);
colorsContainer.style.cssText = 'width:74px; height: auto; cursor: pointer; display: flex; flex-wrap: wrap; margin-left: auto; margin-right: auto; margin-top: 50px; border: 2px solid black;'
pallet.appendChild(colorsContainer);
clearDiv.classList = 'clear';
clearDiv.style.cssText = 'width: 74px; height: 35px; cursor: pointer; background-color: LightGray; margin-left: auto; margin-right: auto; margin-top: 50px; border: 2px solid black; border-radius: 3px;';
clearP.textContent = 'Clear';
clearP.setAttribute('id', 'paragraph');
pallet.appendChild(clearDiv);
clearDiv.appendChild(clearP);
clearDiv.addEventListener("click", toClear);
paragraph.style.cssText = 'color: white; font-size: 20px; font-weight: bold; text-align: center; transform:translateY(-15px); cursor: pointer;'

//Adding the pixels
for (var i = 0; i< 50*50; i++){
  const pixel = document.createElement('div');
  pixel.classList = 'pixel';
  pixel.style.cssText = 'width: 8px; height: 8px;';
  content.appendChild(pixel);
}

//Adding the colors
for (i = 0; i<10; i++){
  const colorPallet = document.createElement('div');
  colorPallet.classList = 'color' + i;
  colorPallet.style.cssText = 'display: inline-block; width: 35px; height: 35px; border: 1px solid black; background-color:' + colors[i] +';';
  colorsContainer.appendChild(colorPallet);
};

for (i = 0; i < 10; i++){
  const colorReference = document.querySelector('.color'+i);
  colorReference.addEventListener("click", selectedColor);
  }

function addEventListenersToPixels() {
  let pixels = document.querySelectorAll('.pixel');
  for (i = 0; i < 50*50; i++) {
    pixels[i].addEventListener("mouseover", colorIt);
  };
}

function selectedColor(colorRef) {
  color = colorRef.target.style.getPropertyValue('background-color');
}

function colorIt(reference) {
  reference.target.style.backgroundColor = color;
}

function toClear () {
  let cells = document.querySelectorAll('.pixel');
    for(i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'white';
    }
}
addEventListenersToPixels();
