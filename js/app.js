'use strict';
let leftElement = document.getElementById('left');
let middleElement = document.getElementById('middle');
let rightElement = document.getElementById('right');
let tryCounter = 0;
let leftImgIndex;
let middleImgIndex;
let rightImgIndex;
let arrShown = [];
let imgName = [];
let arrVote = [];
let checkImage=[];
let maxAttempts = 25;
function Product(name, path) {
    this.name = name;
    this.path = path;
    this.vote = 0;
    this.shown = 0;
    Product.items.push(this);
    imgName.push(name);

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

function renderThreeImages() 
{   
    checkImage=[leftImgIndex,middleImgIndex,rightImgIndex];
    do{
        leftImgIndex=generateRandomIndex();
        middleImgIndex=generateRandomIndex();
        rightImgIndex=generateRandomIndex();
    }while((leftImgIndex===middleImgIndex||leftImgIndex===rightImgIndex||middleImgIndex===rightImgIndex||checkImage.includes(leftImgIndex)||checkImage.includes(middleImgIndex)||checkImage.includes (rightImgIndex)));

    leftElement.src = Product.items[leftImgIndex].path;
    Product.items[leftImgIndex].shown++;
    middleElement.src = Product.items[middleImgIndex].path;
    Product.items[middleImgIndex].shown++;
    rightElement.src = Product.items[rightImgIndex].path;
    Product.items[rightImgIndex].shown++;
    
    /*
    while(Product.checkIndex.length < 6)
    {
        let img=generateRandomIndex();
        if (!Product.checkIndex.includes(img)){
            Product.checkIndex.push(img);
        }
    }
        leftElement.src=Product.items[Product.checkIndex[0]].src;
        Product.items[Product.checkIndex[0]].shown++;
        leftImgIndex=Product.items[Product.checkIndex[0]];
        console.log(leftImgIndex);

        middleElement.src=Product.items[Product.checkIndex[1]].src;
        Product.items[Product.checkIndex[1]].shown++;
        middleImgIndex=Product.items[Product.checkIndex[1]];
        console.log(middleImgIndex);

        rightElement.src=Product.items[Product.checkIndex[2]].src;
        Product.items[Product.checkIndex[2]].shown++;
        rightImgIndex=Product.items[Product.checkIndex[2]];
        console.log(rightImgIndex);
        Product.checkIndex=Product.checkIndex.slice(3, 6);

    
    */
}
renderThreeImages();

leftElement.addEventListener('click', handleUserClick);
middleElement.addEventListener('click', handleUserClick);
rightElement.addEventListener('click', handleUserClick);

function handleUserClick(event) 
{
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
        // let btn = document.getElementById('btn');
        // btn.addEventListener('click', showResult);
        leftElement.removeEventListener('click', handleUserClick);
        middleElement.removeEventListener('click', handleUserClick);
        rightElement.removeEventListener('click', handleUserClick);

        for (let i = 0; i < Product.items.length; i++) {
            arrVote.push(Product.items[i].vote)
            // console.log(Product.items[i])
            arrShown.push(Product.items[i].shown)
        }

        viewChart();
    }
}

function viewChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: imgName,
            datasets: [
                {
                    label: 'Images Vote',
                    backgroundColor: 'rgb(233, 150, 122)',
                    borderColor: 'rgb(233, 150, 122)',
                    data: arrVote
                },

                {
                    label: 'Images Shown',
                    backgroundColor: '#ffe6e6',
                    borderColor: '#ffe6e6',
                    data: arrShown
                }
            ]
        },

        // Configuration options go here
        options: {}
    });
}

/*
function showResult()
{

    let list = document.getElementById('listOfItem');
    let result;

    for (let i = 0; i < Product.items.length; i++) {
        //arrShown.push(Product.items[i].shown);
        result = document.createElement('li');
        list.appendChild(result);
        result.textContent = Product.items[i].name + ' has ' + Product.items[i].vote + ' votes ' + ' and shown' + Product.items[i].shown + ' times';
    }
}*/