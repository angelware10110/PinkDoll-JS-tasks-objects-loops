//1.creating a wallet

const pinigine = 0;
const pinigai = 0;

const pinigineCount = (index) => {
    const pinigine = [];
    let pinigai;
    for (let i = 0; i <= index; i++){
        pinigai = Math.trunc(Math.random()*10) + 1;
      
      pinigine[i] = pinigai;
    }
    console.table(pinigine);
  }
  pinigineCount(10);
  
//2.counting sum of my wallet

 let pinigaiSum = [1,2,3,4,5,6,7,8,9,10].reduceRight(function(a,b){return a+b;});
  console.log(pinigaiSum);


//3.counting paper $$

const paperSumCount = () => {
    for (let i = 0; i <= pinigine.length; i++) { 
      if (pinigai > 2) { 
      pinigine.reduce((a, b) => a + b);} 
    }
    console.log(pinigine);
    console.log('pinigine');
  }
  paperSumCount();

//4. spend small cash from a wallet

const metalSumCount = () => {
  for (let i = 0; i = <= pinigine.length; i++) {
    if (pinigai < 2) {
      pinigine(i) = 0 
    }
  }
}

//for loop suki pinigine ; if pinigas<2 ; tada pinigas = 0; pinigine(i) = 0 remove?is array elementa; how to remove value is array



//5. filter




