'use strict';
let leftElement = document.getElementById('left');
let middleElement = document.getElementById('middle');
let rightElement = document.getElementById('right');

let tryCounter = 0;
let leftImgIndex;
let middleImgIndex;
let rightImgIndex;
let arrShown=[];
let maxAttempts = 25;
function Product(name, path) {
    this.name = name;
    this.path = path;
    this.vote = 0;
    this.shown = 0;
    Product.items.push(this);

}
Product.items = [];
new Product('bag', '../images/bag.jpg');
new Product('banana', '../images/banana.jpg');
new Product('bathroom', '../images/bathroom.jpg');
new Product('boots', '../images/boots.jpg');
new Product('breakfast', '../images/breakfast.jpg');
new Product('bubblegum', '../images/bubblegum.jpg');
new Product('chair', '../images/chair.jpg');
new Product('cthulhu', '../images/cthulhu.jpg');
new Product('dog-duck', '../images/dog-duck.jpg');
new Product('dragon', '../images/dragon.jpg');
new Product('pen', '../images/pen.jpg');
new Product('pet-sweep', '../images/pet-sweep.jpg');
new Product('scissors', '../images/scissors.jpg');
new Product('shark', '../images/shark.jpg');
new Product('sweep', '../images/sweep.png');
new Product('tauntaun', '../images/tauntaun.jpg');
new Product('unicorn', '../images/unicorn.jpg');
new Product('usb', '../images/usb.gif');
new Product('water-can', '../images/water-can.jpg');
new Product('wine-glass', '../images/wine-glass.jpg');

//console.log(Product.items);
//console.log(Product.items[2]);


function generateRandomIndex() {
    return Math.floor(Math.random() * Product.items.length);
}
//console.log(Math.floor(Math.random() * Product.items.length));

function renderThreeImages() {

    leftImgIndex = generateRandomIndex();
    middleImgIndex = generateRandomIndex();

    do {
        rightImgIndex = generateRandomIndex();
    } while (leftImgIndex === rightImgIndex || middleImgIndex === rightImgIndex || middleImgIndex === leftImgIndex)
    //console.log(leftImgIndex);

    Product.items
    console.log(Product.items[leftImgIndex]);


    leftElement.src = Product.items[leftImgIndex].path;
    Product.items[leftImgIndex].shown++;
    middleElement.src = Product.items[middleImgIndex].path;
    Product.items[middleImgIndex].shown++;
    rightElement.src = Product.items[rightImgIndex].path;
    Product.items[rightImgIndex].shown++;


}

renderThreeImages();




leftElement.addEventListener('click', handleUserClick);
middleElement.addEventListener('click', handleUserClick);
rightElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    tryCounter++;

    if (tryCounter <= maxAttempts) {

        if (event.target.id === 'left') {
            Product.items[leftImgIndex].vote++;
            

        } else if (event.target.id === 'middle') {
            Product.items[middleImgIndex].vote++;
           
        } else {
            Product.items[rightImgIndex].vote++;
           

        }
        renderThreeImages();

    } else {
        let btn = document.getElementById('btn');
        btn.addEventListener('click', showResult);
        leftElement.removeEventListener('click', handleUserClick);
        middleElement.removeEventListener('click', handleUserClick);
        rightElement.removeEventListener('click', handleUserClick);
    }
}
function showResult() {

    let list = document.getElementById('listOfItem');
    let result;

    for (let i = 0; i < Product.items.length; i++) {
        //arrShown.push(Product.items[i].shown);
        result = document.createElement('li');
        list.appendChild(result);
        result.textContent = Product.items[i].name + ' has ' + Product.items[i].vote + ' votes ' + ' and shown' + Product.items[i].shown + ' times';
    }
}