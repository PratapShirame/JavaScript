//console.log("hellow")

const day = "";
switch(day) {
    case 'Monday':
        console.log("Pratap");
        break;

    case 'Tuseday':
        console.log("Shirame");
        break;

    default:
        console.log("Pratap Shirame");

} 

const bill = 275;

/* Write your code below. Good luck! 🙂 */


const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
const finalPrice = `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`;
console.log(finalPrice);


