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


//for loop suki pinigine ; if pinigas<2 ; tada pinigas = 0; pinigine(i) = 0 remove?is array elementa; how to remove value is array



//5. filter
//yoo




