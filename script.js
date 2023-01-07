//1.creating a wallet

const pinigine = [];

const pinigineCount = (index) => {
  let pinigai = 0;

  for (let i = 0; i <= index - 1; i++){
    pinigai = Math.trunc(Math.random()*10) + 1;
    pinigine[i] = pinigai;
  }

  console.table(pinigine);
}
  
pinigineCount(10);

  

//2.counting sum of my wallet

const pinigineSum = () => {
  let pinigaiSum = 0;

  pinigine.forEach(pinigai => {
    pinigaiSum += pinigai;
  });

  console.log('2. counting sum: '+pinigaiSum);
}

pinigineSum();



//3.counting paper $$

const paperSumCount = () => {
  let paperSum = 0;

  for (let i = 0; i <= pinigine.length; i++) { 
    if (pinigine[i] > 2) { 
      paperSum += pinigine[i];
    }
  }

  console.log('3. counting paper: '+paperSum);
}

paperSumCount();



//4. spend small cash from a wallet

const metalSumCount = () => {

  for (let i = 0; i <= pinigine.length; i++) {
    if (pinigine[i] <= 2) { 
      pinigine[i] = 0;
    }
  }

  console.log('4. spend small cash from a wallet: '+pinigine);
}

metalSumCount();


//5. max money and how much

const maxNumbCount = () => {
  const maxNumb = Math.max(...pinigine)
  console.log('5. max money in the wallet: '+maxNumb);
  const count = pinigine.filter(pinigas => pinigas == maxNumb).length;
  console.log('5. how much max money: ' +count);
}
maxNumbCount();


//6. 

const nullsToIndex = () => {

  pinigine.forEach((pinigas,index) => {
    if (pinigas == 0) {
      pinigine[index] = index +1
    } 
  });
  console.log(' nulls to index number ' +pinigine)
}
nullsToIndex();


//7. make 30 money instead of 10 in a wallet



const naujaPinigine = [];

const naujaPinigineCount = () => {

  const pinigineLength = pinigine.length 
  console.log(pinigineLength)
  for (i = pinigineLength; i < 30; i++) {
    pinigine[i] = Math.trunc(Math.random()*10) + 1;
  }
  console.table(pinigine);
}

naujaPinigineCount();


//8. seperate metal and paper

const metalPinigine = [];
const paperPinigine = [];

const pinigaiTransfer = () => {
  pinigine.forEach(pinigas => {
    if (pinigas <= 2) {
      metalPinigine.push(pinigas)
      } else {
        paperPinigine.push(pinigas)
      }
    });

    console.log(metalPinigine)
    console.log(paperPinigine)

  }
pinigaiTransfer();


//9. 

const naujausiaPinigine = [];

const naujausiaPinigineCreate = () => {

  naujausiaPinigine[0] = metalPinigine
  naujausiaPinigine[1] = paperPinigine
  console.log(naujausiaPinigine)
}

naujausiaPinigineCreate();

//10/.11/add cards, sort cards

const cardPinigine = [];
const cards = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

const cardPinigineCreate = () => {
  cardPinigine.push(cards);
  cards.sort();
  console.log(cardPinigine);
}
cardPinigineCreate ();


//12.adding credit cards

const creditCards = ['Visa', 'Master Card'];

const creditCardAdd = () => {
  const cardPinigineLength = cards.length 
  console.log(cardPinigineLength)
  for (i = cardPinigineLength; i < 20; i++) {
    cardPinigine[i] = creditCards[Math.floor(Math.random() * creditCards.length)];

  }
  console.log(cardPinigine);
}

creditCardAdd();





