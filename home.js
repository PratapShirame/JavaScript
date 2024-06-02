//console.log("hellow")

// `const day = "";
// switch(day) {
//     case 'Monday':
//         console.log("Pratap");
//         break;

//     case 'Tuseday':
//         console.log("Shirame");
//         break;

//     default:
//         console.log("Pratap Shirame");

// } `

// const bill = 275;
/* Write your code below. Good luck! 🙂 */
// const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
// const finalPrice = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`;
// console.log(finalPrice);



// Write a fuction 
function logger(){
    console.log("Pratap Shirame ");
}
logger();

function fruitProcessor ( apples, oranges){
    const juice = `juice with ${apples} apples amd ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = fruitProcessor( 30, 5);
console.log(orangeJuice);


// Function decalarition and expression

function calAge1(birthYear){
    const age = 2024 - birthYear;
    return age;
}

const age= calAge1(1999);
console.log(age);

//Function Expression
const calAge2 = function (birthYear){
    return 2024- birthYear;
}
 const age1 = calAge2(1998);
 console.log(age, age1);




 //Function coding challenges
 
 const calcAverage= (a, b, c)=>(a+b+c)/3;
 
 const  scoreDolphins = calcAverage(44, 23, 71);
 console.log(scoreDolphins);
 
 const scoreKoalas =calcAverage(65, 54, 49);
 console.log(scoreKoalas);
 
 const checkWinner = function(avgDolphins, avgKoalas){
    if (avgDolphins >= avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }else if (avgKoalas >= avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }else{
        console.log('No team wins...');
    }
 }

  checkWinner(scoreDolphins, scoreKoalas);
    


