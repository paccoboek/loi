'use strict'
class Card {
  constructor (card1, card2 = card1, set = card1, sound = card1) {
    this.card1 = card1
    this.card2 = card2
    this.set = set
    this.sound = sound
  }
}

const myField = document.getElementById('field')

//Voer onClickCard uit zodra er op card in myField geklikt wordt
myField.addEventListener('click', onClickCard)
myField.addEventListener('click', onClickMyBtn)
var myCardArray = [
  'duck',
  'kitten',
  'piglet',
  'puppy',
  'calf',
  'veal',
  'lamb',
  'rooster',
  'horse',
  'mouse',
  'dog',
  'cat',
  'goose',
  'goat',
  'sheep',
  'pig',
  'cow',
  'chick',
  'hen'
]
//Concateneer twee instances van myCardArray en shuffle de volgorde
myCardArray = myShuffle(myCardArray.concat(myCardArray))

//maak myCardSet door voor elk element in myCardArray
//een (lege) instance van Card aan te maken
const myCardSet = myCardArray.map(card => new Card(card))

document.onload = populateField()
//Voer populateField uit als pagina geladen is

function populateField () {
  myField.innerHTML = ''
  myCardSet.forEach(card => {
    //voor elk card in myCardSet...

    //maak een nieuwe '<div></div>'
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'board8')

    //maak een nieuwe '<img></img>'
    let newImg = document.createElement('img')
    let imageURL = 'img/' + card.card1 + '.jpg'
    newImg.setAttribute('src', imageURL)
    newImg.setAttribute('name', card.card1)

    //maak een nieuwe '<img></img>'
    let newImg2 = document.createElement('img')
    let imageURL2 = 'img/cover.png'
    newImg2.setAttribute('src', imageURL2)
    newImg2.setAttribute('class', 'covered')

    //Neem het img op in de div
    newDiv.appendChild(newImg)
    newDiv.appendChild(newImg2)

    //Voeg de div toe
    myField.appendChild(newDiv)
  })
}

function onClickCard (e) {
  //console.log(e.target.getAttribute('name'))
  alert(e.target.getAttribute('name'))
}

function myShuffle (array) {
  var m = array.length,
    t,
    i

  while (m) {
    // Zolang er elementen zijn om te husselen
    // kies een willekeurig element
    i = Math.floor(Math.random() * m--)
    // getal onder de m, en verminder m daarna met 1

    // verwissel het van plaats met het huidige element
    t = array[m] // element dat achteraan staat
    array[m] = array[i] // achterste item wordt gekozen item
    array[i] = t //gekozen item wordt element dat achteraan stond
  }
  return array
}

function onClickMyBtn () {
  console.log(document.getElementsByTagName('img')) // HTMLcollection[]
}
